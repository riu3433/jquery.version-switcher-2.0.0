# jquery.version-switcher-2.0.0

`jquery.version-switcher-2.0.0` is a jQuery/javascript plugin.


# Usage
```
    <script type="text/javascript">
        $(function () {
            $(document).versionswitcher({
                settingLocation: "/assets/js/switchers/version-switcher-config.json"
            });
        });
    </script>
```

# Dependencies
1. `jQuery` library
2. `$.whenAll` -   `<script src="/assets/js/switchers/jquery.whenAll.js" type="text/javascript"></script>`

# Config file
A `json` file where settings for each *switcher case* as well as global properties are stored. In general, the config file consists of the following:
```
{
  "switchers": [],
  "templates": {},
  "versionMapping": {},
  "versionOptions": {}
}
```

## switchers
`switchers` property is an array of json objects with the following properties:
```
{
  "name": "([a-zA-Z-]{2,5})(\/server\/).*(\/deploy|get-started|manage-data|publish-services|administer|develop\/|)",
  "path": {
        "__description": "path has a property: format - is used as template to determine the final URL Path.",
        "format": "{{language}}/{{site}}/{{version}}/{{section}}/{{filename}}"
      },
  "platforms: {},
  "switcherdisplay": true,
  "versions": {
        "11.0": {
          "basepath": "geoevent/latest/"
        },
        "10.9.1": {
          "basepath": "geoevent/10.9.1/"
        },
        "10.9": {
          "basepath": "geoevent/10.9/"
        },
        "10.8": {
          "basepath": "geoevent/10.8/",
          "title": "10.8.x"
        },
        "10.7": {
          "basepath": "geoevent/10.7/",
          "title": "10.7.x"
        }
      },
  "exceptions": {}
}
```
