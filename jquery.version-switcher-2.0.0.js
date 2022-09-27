; (function ($) {
    'use strict'

    var vs = $.versionswitcher = {
        version: '2.0.0',
        defaults: {
            archiveUrl: "https://resources.arcgis.com/en/help/",
            currentUrl: document.location.href,
            customVersionLabel: "",
            customVersionName: "ArcGIS",
            fallbackTopic: "<fallback Topic>",
            fallbackLatestVersions: ["11.0", "10.9.1", "10.9", "10.8"],
            filename: "",
            isEnglish: true,
            isHome: true,
            isRetired: false,
            langSelector: "",
            linkUpdateSection: ".sub-nav-list",
            locale: "en",
            localeDir: "en",
            pathName: window.location.pathname,
            pathPattern: {},
            platform: "",
            relativeUrl: false,
            searchFormUrl: "/search/",
            settingLocation: "./js/version-switcher-config.json",
            switcher: {},
            switcherLinkClass: "current",
            switcherLocation: ".column-13 h1, .column-17 h1, .column-18 h1",
            tertiaryNavIndex: "",
            urlExclusions: [/(\/streetmap-premium\/)/],
            version: "",
            versionRetired: {
                pattern: "(\/10.3\/|\/10.4\/|\/10.5\/|\/10.6\/)",
                messageContainer: "<div class='alert alert-yellow is-active trailer-1 archive-note'>{0}</div>",
                messageLocation: ".column-13 h1, .column-17 h1, .column-18 h1"
            }
        },
        settings: {},
        setup: function (s) {
            var self = this;
            this.settings = s;

            if (!this.isUrlExcluded(s)) {
                $.getJSON(s.settingLocation, function (data) {
                    self.main(data);

                }).fail(function (error) {
                    if (error.status == 200) {
                        try {
                            JSON.parse(error.responseText);
                        } catch (e) {
                            console.log("Error reading config file: Invalid config file");
                        }
                    } else if (error.status == 404) {
                        console.log("Error reading config file: " + error.statusText);
                    } else {
                        console.log("Error occurred reading config file: " + error.status);
                    }
                });

            } else {
                console.log("Current Url has been excluded.");
            }
        },
        updateSettings: function (data) {
            var self = this;
            this.settings.switcher = this.getSwitcher(data.switchers, this.settings.currentUrl);
            this.settings.isEnglish = this.settings.currentUrl.match(/(\/en\/)/) != null;
            this.settings.version = this.getVersion(data.versionOptions, this.settings.isEnglish, this.settings.pathName);

            var pathparts = this.settings.pathName.split("/");
            this.settings.filename = pathparts[pathparts.length - 1];
            this.settings.isHome = pathparts.length <= 4;
            this.settings.platform = pathparts[pathparts.length - 2];
            this.settings.switcher.path.components = this.setPathComponents();

            this.settings.templates = $.extend(this.settings.templates, data.templates);
            this.settings.versionMapping = data.versionmapping;

            // Retired Version?
            this.settings.isRetired = this.settings.pathName.match(this.settings.versionRetired.pattern) != null;
            this.settings.switcher.switcherdisplay = !this.settings.isRetired;
            this.settings.fallbackTopic = "/{0}/documentation/".format(this.settings.localeDir.toLowerCase());
        },
        getSwitcher: function (o, u) {
            var s = o.filter(z => u.match(z.name));
            if (s.length > 0) return s[0];

            var d = o.filter(z => 'default'.match(z.name));
            if (d.length > 0) return d[0];
            else return {};
        },
        getVersion: function (o, e, p) {
            var v = o.filter(z => (z.isEnglish == e || z.isEnglish == null) && p.match(z.pattern));
            if (v.length > 0) return v[0].version;

            var d = o.filter(z => (z.isEnglish == e || z.isEnglish == null) && 'default'.match(z.pattern));
            if (d.length > 0) return d[0].version;
            else return "";
        },
        isEmpty: function (o) {
            if ($.isEmptyObject(o)) {
                return true;
            } else {
                var p = Object.keys(o);

                if (p.length < 1) {
                    return true;
                } else if ($.map(p, function (q) { return o[q] == null || o[q] == "" }).every(z => z == true)) {
                    return true;
                }
            }
            return false;
        },
        isUrlExcluded: function (s) {
            return $.map(s.urlExclusions, function (item) { return s.currentUrl.match(item); }).some(z => z == true);

        },
        setPathComponents: function () {
            var c = this.settings.switcher.path.format.split("/");
            var p = this.settings.pathName.split("/").slice(1);

            return $.map(p, function (v, i) { return { index: i, name: c[i].replace(/\{\{(.*?)\}\}/g, "$1"), value: v }; });
        },
        main: function (data) {
            this.updateSettings(data);

            this.addSwitcherLinks().checkLatestUrl();
            this.updateTabLinks();

            this.bindClickEvents();
        },
        addSwitcherLinks: function () {
            var self = this;
            var s = this.settings;

            if (!(s.isHome) && (s.switcher.switcherdisplay)) {
                var c = s.switcher.versions[s.version].platforms != undefined ? s.switcher.version[s.version].platforms.filter(z => z.id == s.platform)[0] :
                    s.switcher.platforms != undefined && s.switcher.platforms.length > 0 ? s.switcher.platforms.filter(z => z.id == s.platform)[0] : undefined;

                var versionLabel = (s.customVersionLabel) ? s.customVersionLabel : (s.version in s.versionMapping) ? s.versionMapping[s.version] : s.version;
                var versionName = (typeof s.customVersionName !== 'undefined') ? s.customVersionName : 'ArcGIS';
                var currentPlatTxt = c != undefined ? versionName + ' ' + versionLabel + ' (' + c.title + ')' : versionName + ' ' + versionLabel;
                var linkData = self.generateSwitcherLinks();

                var links = ('<div class="trailer-1" id="platforms">').concat(
                    '<span class="product text-light-gray">' + currentPlatTxt + '</span>',
                    '<span class="divider"> | </span>',
                    '<span class="dropdown js-dropdown dropdown-btn js-dropdown-toggle">',
                    '<button class="btn btn-transparent" href="#" tabindex="0" aria-haspopup="true" aria-expanded="false"> ' + this.t('other-versions'),
                    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -10 32 40" class="svg-icon padding-left-half"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>',
                    '</button > ',
                    linkData.menuItems,
                    '</span>',
                    '<span class="divider">|</span><span>&nbsp;<a href="' + s.archiveUrl + '" tabindex="2" target="_blank"> ' + this.t('help-archive') + '</a></span>',
                    '</div>');

                var ajaxRequests = $.map(linkData.versions, function (item) { return (item.url === "javascript:void(0);" ? null : $.get(item.url)); });
                ajaxRequests.push($(s.switcherLocation).after(links));

                $.whenAll(ajaxRequests).always(function () {
                    $.each(ajaxRequests, function (i, req) {
                        if (i < linkData.versions.length) {
                            if ((req.status || req[2].status) != 200) {
                                $('#' + linkData.versions[i].id).attr("href", "javascript:void(0)").removeClass("available").addClass("disabled");

                            } else {
                                $('#' + linkData.versions[i].id).attr("href", linkData.versions[i].url).removeClass("disabled").addClass("available");
                            }
                        }
                    });
                    $('#platforms').addClass('processed');
                });

            } else if (s.isRetired) {
                $(s.versionRetired.messageLocation).after(s.versionRetired.messageContainer.format(self.t("version-retire-msg").format(s.version, s.pathName.replace(s.version, "latest"), s.archiveUrl)));
            }

            return this; // make the function chainable
        },
        checkLatestUrl: function () {
            var s = this.settings;
            var latestUrls = $.map(s.fallbackLatestVersions, function (item) { return $.get(s.pathName.replace(s.version, item)); });

            $.whenAll(latestUrls).always(function () {
                if (latestUrls.filter(z => (z.status || z[2].status) == 200).length > 0) {
                    $.each(latestUrls, function (i, req) {
                        if (i < s.fallbackLatestVersions.length) {
                            if ((req.status || req[2].status) == 200) {
                                $(".archive-note").find('a:eq(1)').attr('href', s.pathName.replace(s.version, s.fallbackLatestVersions[i]));
                                return false;
                            }
                        } else {
                            return false;
                        }
                    });
                } else {
                    var u = s.pathName.substring(0, s.pathName.lastIndexOf('/')).replace(s.version, 'latest');

                    $.get(u).always(function (data, statusText, xhr) {
                        $(".archive-note").find('a:eq(1)').attr('href', (xhr.status == 200 ? u : s.fallbackTopic));
                    });
                }
            });
        },
        generateSwitcherLinks: function () {
            var menuItems = '<nav class="dropdown-menu">',
                self = this,
                s = this.settings,
                absolutePath = s.switcher.path.components != undefined ? "/" + $.map(s.switcher.path.components, function (obj) { return obj.value; }).join("/") : "",
                versions = [];

            $.each(s.switcher.versions, function (version, obj) {
                var id = version.replace(/[^a-z0-9\s]/gi, '');
                var path = obj.basepath != undefined && obj.basepath != null && obj.basepath !== "" ? "/" + self.getCurrentLang() + "/" + obj.basepath : "";
                var platforms = obj.platforms != undefined && $.isEmptyObject(obj.platforms) && obj.platforms != null ? obj.platforms : s.switcher.platforms;
                var targetUrl = {};

                if (platforms != undefined && platforms.length > 0 && $.isEmptyObject(obj.platforms) && obj.platforms != null) {
                    menuItems += '<span class="dropdown-title">' + (obj.title != undefined ? obj.title : version) + '</span>';

                    $.each(platforms, function (index, platform) {
                        id = version.replace(/[^a-z0-9\s]/gi, '') + platform.id;
                        targetUrl = self.getTargetUrl({ matches: { absolutePath, path, platformId: platform.id }, version, platform });
                        menuItems += '<a id="' + id + '" class="dropdown-link ' + targetUrl.cssClass + '" data-plat="' + platform.id + '" data-version="' + version
                            + '" href="' + targetUrl.url + '">' + platform.title + '</a>';

                        versions.push({ id, url: targetUrl.url });
                    });

                } else if (path !== "") {
                    targetUrl = self.getTargetUrl({ matches: { absolutePath, path }, version });
                    menuItems += '<a id="' + id + '" class="dropdown-link ' + targetUrl.cssClass + '" data-plat="' + version + '" data-version="' + version
                        + '" href="' + targetUrl.url + '">' + (obj.title != undefined ? obj.title : version) + '</a>';

                    versions.push({ id, url: targetUrl.url });

                } else if (self.isEmpty(obj)) {
                    menuItems += '<a id="' + id + '" class="dropdown-link disabled" data-plat="' + version + '" data-version="' + version
                        + '" href="javascript:void(0);">' + version + '</a>';
                }
            });
            menuItems += '</nav>'

            return { menuItems, versions };
        },
        getCurrentLang: function () {
            return this.settings.localeDir || "en";
        },
        getTargetUrl: function (values) {
            var s = this.settings;

            if ($.map(values.matches, function (item) { return s.pathName.indexOf(item) >= 0; }).every(z => z == true)) {
                return { cssClass: "is-active", url: values.matches.absolutePath };

            }
            else {
                var url = "javascript:void(0);";
                var filename = this.checkExceptionLists(values.version, values.matches.platformId);
                if (filename != null) {
                    url = values.matches.absolutePath.replace("/" + this.getCurrentLang() + "/" + s.switcher.versions[s.version].basepath, values.matches.path)
                        .replace(s.filename, filename);
                    return { cssClass: "available", url };

                } else {
                    return { cssClass: "disabled", url };
                }
            }
        },
        setJsCookie: function (k, v) {
            $.cookie(k, v, { expires: 30, path: "/" });
        },
        checkExceptionLists: function (version, platform) {
            var s = this.settings;
            var filename = s.filename.split(".")[0];

            if (filename in s.switcher.exceptions) {
                var c = s.switcher.exceptions[filename].filter(z => z.version == version && z.platform == platform);
                return c.length > 0 ? (c[0].filename == undefined ? s.filename : (c[0].filename.trim() === "" || c[0].filename == null ? null : c[0].filename.trim() + ".htm")) : s.filename;

            } else {
                return s.filename;
            }
        },
        t: function (dataLang) {
            var dict = (window.localeJsonObj || {});
            return dict[this.getCurrentLang()][dataLang] || dict['en'][dataLang] || dataLang;
        },
        updateTabLinks: function () {
            console.log("updateTabLinks: not implemented.")
        },
        bindClickEvents: function () {
            $('.content-section a[data-plat]').on("click", function () {
                var $e = $(this);
                sessionStorage.setItem("prefVersionPlat", JSON.stringify({ "version": $e.attr("data-version"), "platform": ($e.attr("data-plat").match(/^[A-Za-z-_]+$/)) ? $e.attr("data-plat") : null }));
            });

            $('#platforms .dropdown-menu a').on("click", function () {
                window.location.href = $(this).attr("href");
            });
        }
    };

    $.fn.versionswitcher = function (options) {
        return this.each(function () {
            var s = $.extend(true, {}, vs.defaults, options);

            vs.setup(s);
        });
    }
}(jQuery));