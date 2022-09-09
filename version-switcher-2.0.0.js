(function ($) {
    'use strict'
    var vs = $.versionswitcher = {
        version: '2.0.0',
        defaults: {
            currentUrl: document.location.href,
            isEnglish: true,
            pathName: window.location.pathname,
            settingLocation: "./js/version-switcher.json",
            switcher: {},
            switcherLinkClass: "current",
            version: ""
        },
        settings: {},
        setup: function (s) {
            var self = this;
            this.settings = s;

            if (!this.isUrlExcluded(s)) {
                $.getJSON(s.settingLocation, function (data) {
                    self.main(data);

                    console.log(self.settings);

                }).fail(function () {
                    console.log("Error reading config file");
                });

            } else {
                console.log("Current Url has been excluded.");
                }
        },
        updateSettings: function (data) {
            var d = data.switchers.filter(s => 'default'.match(s.name));
            if (d.length > 0) this.settings.switcher = d[0];

            var m = data.switchers.filter(s => this.settings.currentUrl.match(s.name));
            if (m.length > 0) this.settings.switcher = m[0];

            // check if English version was requested
            this.settings.isEnglish = this.settings.currentUrl.match(/(\/en\/)/) != null;

            this.settings.versionMapping = data.versionmapping;
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
            this.bindClickEvents();
        },
        addSwitcherLinks: function () {
            console.log(this.settings.switcherLocations);

            return this; // make this function chainable
        },
        checkLatestUrl: function () {
            console.log('chained from addSwitcherLins');
        },
        bindClickEvents: function () {
            $('.content-section a[data-plat]').on("click", function (evt) {
                var $ele = $(this),
                    plat = ($ele.attr("data-plat").match(/^[A-Za-z-_]+$/)) ? $ele.attr("data-plat") : null;
                version = $ele.attr("data-version");
                var prefVersionPlat = {
                    "version": version,
                    "platform": plat
                }
                sessionStorage.setItem("prefVersionPlat", JSON.stringify(prefVersionPlat))
            });

            $('#platforms .dropdown-menu a').on("click", function (evt) {
                window.location.href = $(this).attr("href");
            });
        }
    };

    $.fn.versionswitcher = function (options) {
        return this.each(function () {
            var s = $.extend({
                switcherLocations: [".column-13 h1, .column-17 h1, .column-18 h1"],
                urlExclusions: [/(\/streetmap-premium\/)/],
            }, vs.defaults, options);

            vs.setup(s);
        });
    }
}(jQuery));