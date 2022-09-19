(function ($) {
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
                    console.log("Error reading config file: " + error.statusText);
                });

            } else {
                console.log("Current Url has been excluded.");
            }
        },
        updateSettings: function (data) {
            this.settings.switcher = this.getSwitcher(data.switchers, this.settings.currentUrl);
            this.settings.isEnglish = this.settings.currentUrl.match(/(\/en\/)/) != null;
            this.settings.version = this.getVersion(data.versionOptions, this.settings.isEnglish, this.settings.pathName);

            var pathparts = this.settings.pathName.split("/");
            this.settings.filename = pathparts[pathparts.length - 1];
            this.settings.isHome = pathparts.length <= 4;
            this.settings.platform = pathparts[pathparts.length - 2];

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
        isUrlExcluded: function (s) {
            var r = false;
            $.each(s.urlExclusions, function (i) {
                if (s.currentUrl.match(s.urlExclusions[i])) {
                    r = true;
                }
            });
            return r;
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
                var platK = s.version + "~" + s.platform;
                var versionLabel = (s.customVersionLabel) ? s.customVersionLabel : (s.version in s.versionMapping) ? s.versionMapping[s.version] : s.version;
                var versionName = (typeof s.customVersionName !== 'undefined') ? s.customVersionName : 'ArcGIS';
                var currentPlatTxt = (s.switcher.switchercases[platK]) ? s.versionName + ' ' + versionLabel + ' (' + s.switcher.switchercases[platK] + ')' : versionName + ' ' + versionLabel;
                var linkData = self.generateSwitcherLinks();

                var links = '<div class="trailer-1" id="platforms">' + '<span class="product text-light-gray">' + currentPlatTxt + '</span>';
                links += '<span class="divider"> | </span><span class="dropdown js-dropdown dropdown-btn js-dropdown-toggle"><button class="btn btn-transparent" href="#" tabindex="0" aria-haspopup="true" aria-expanded="false"> ' + this.t('other-versions');
                links += '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -10 32 40" class="svg-icon padding-left-half"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg></button>';
                links += linkData[0];
                links += '</span>';
                links += '<span class="divider">|</span><span>&nbsp;<a href="' + s.archiveUrl + '" tabindex="2" target="_blank"> ' + this.t('help-archive');
                links += '</a></span></div>';

                var ajaxRequests = $.map(linkData[1], function (item) { return (item[1] == "javascript:void(0);") ? null : $.get(item[1]); });
                ajaxRequests.push($(s.switcherLocation).after(links));

                $.whenAll(ajaxRequests).always(function () {
                    $.each(ajaxRequests, function (i, req) {
                        if (i < linkData[1].length) {
                            if ((req.status || req[2].status) != 200) {
                                $('#' + linkData[1][i][0]).attr("href", "javascript:void(0)").removeClass("available").addClass("disabled");

                            } else {
                                $('#' + linkData[1][i][0]).attr("href", linkData[1][i][1]).removeClass("disabled").addClass("available");
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
            var switcherLinks = '<nav class="dropdown-menu">',
                self = this,
                s = this.settings,
                versions = [];

            $.each(s.switcher.switchercases, function (k, v) {
                var url = self.getTargetUrl(k),
                    linkId = k.replace(/[^a-z0-9\s]/gi, '');

                if (k.indexOf("~") >= 0) {
                    var keys = k.split("~");
                    if (!keys[1]) {
                        switcherLinks += '<span class="dropdown-title">' + v + '</span>';
                    } else {
                        versions.push([linkId, url]);
                        switcherLinks += '<a id="' + linkId + '" data-plat="' + keys[1] + '" class="dropdown-link ' + s.switcherLinkClass + '" data-version="' + keys[0] + '" href="' + url + '">' + v + '</a>';
                    }

                } else {
                    versions.push([linkId, url]);
                    switcherLinks += '<a id="' + linkId + '" data-plat="' + k + '" class="dropdown-link ' + s.switcherLinkClass + '" data-version="' + k + '" href="' + url + '">' + v + '</a>';
                }
            });
            switcherLinks += '</nav>'

            return [switcherLinks, versions];
        },
        getCurrentLang: function () {
            return this.settings.localeDir || "en";
        },
        getTargetUrl: function (key) {
            var kArr = key.split("~"),
                newVersion = kArr[0],
                k = (kArr.length > 1) ? kArr[1] : key,
                s = this.settings;

            var versionPath = s.switcher.basepaths[newVersion],
                prefixBase = (versionPath) ? '/' + this.getCurrentLang() + '/' + versionPath : "",
                prefixPlat = "/" + s.switcher.basepaths[k],
                pathpfx = s.pathName.split("/").slice(0, -1).join("/") + "/",
                url, fileName;

            if (pathpfx.indexOf(prefixPlat) >= 0 && pathpfx.indexOf(prefixBase) >= 0) {
                s.switcherLinkClass = "is-active";
                url = pathpfx + s.filename;
                //url = window.location.pathname;

            } else {
                var fnameVal = this.specialCasesLookup(key, s.filename);

                if (fnameVal == "x") {
                    // disable click
                    url = "javascript:void(0);";
                    s.switcherLinkClass = "disabled";

                } else {

                    //tmp hack to create relative url
                    //works: /en/web-adaptor/beta/install/java-linux/welcome-arcgis-web-adaptor-install-guide.htm
                    //NOT: /en/collector/windows/collect-data/collect-tutorial.htm
                    //url = "../" + key + "/" + fnameVal;
                    url = pathpfx.replace(s.switcher.basepaths[s.version], s.switcher.basepaths[newVersion]).replace(s.switcher.basepaths[s.platform], s.switcher.basepaths[k])
                    url += fnameVal;

                    s.switcherLinkClass = "available";
                }
            }
            url = url.replace('//', '/');
            return url
        },
        setJsCookie: function (k, v) {
            $.cookie(k, v, {
                expires: 30,
                path: "/"
            });
        },
        specialCasesLookup: function (key, fileName) {
            var s = this.settings;
            var keyPosition = (s.switcher.caseTbl && key in s.switcher.caseTbl['__order']) ? s.switcher.caseTbl['__order'][key] - 1 : -1,
                fnameParts = fileName.split("."),
                fnameKey = (fnameParts.length == 2) ? fnameParts[0] : "",
                fnameVal = "x";
            //dbg ("specialCasesLookup: " +keyPosition + " " + fnameKey);


            if (keyPosition >= 0) {
                if (fnameKey in s.switcher.caseTbl) {
                    fnameVal = s.switcher.caseTbl[fnameKey][keyPosition];
                    fnameVal = (fnameVal == "x") ? "x" : ((fnameVal == "-") ? fnameKey + ".htm" : fnameVal + ".htm");
                } else {
                    fnameVal = fnameKey + ".htm";
                }
            } else {
                //not a valid platform choice
                //fnameVal = "x";
                fnameVal = fileName;
            }

            return fnameVal;
        },
        t: function (dataLang) {
            var dict = (window.localeJsonObj || {});
            return dict[this.getCurrentLang()][dataLang] || dict['en'][dataLang] || dataLang;
        },
        updateTabLinks: function () {
            var self = this;
            var s = self.settings;

            $(self.settings.linkUpdateSection + ' a').each(function (i, el) {
                var href = $(el).attr("href"),
                    hrefparts = href.split("/"),
                    linkFileName = (hrefparts[hrefparts.length - 1].indexOf(".htm") > 0) ? hrefparts[hrefparts.length - 1] : "",
                    linkPlat = hrefparts[hrefparts.length - 2],
                    ver = self.settings.version + "~" + linkPlat;

                if ((linkPlat != s.platform) && (linkPlat in s.switcher.basepaths && ver in s.switcher.switchercases)) {
                    var newFname = (linkFileName != "") ? self.specialCasesLookup(s.platform, linkFileName) : "x";
                    if (newFname != "x") {
                        var pathpfx = hrefparts.slice(0, -1).join("/"),
                            newURL = pathpfx.replace(s.switcher.basepaths[linkPlat], s.switcher.basepaths[s.platform]) + "/" + newFname;
                        $(el).attr("href", newURL);

                    } else if (s.switcher.basepaths[s.platform]) {
                        $(el).attr("href", href.replace(s.switcher.basepaths[linkPlat], s.switcher.basepaths[s.platform]));
                    }
                }
            });
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