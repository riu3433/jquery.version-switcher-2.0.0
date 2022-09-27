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
A `json` file where settings for each *switcher case* as well as global properties are stored.
```
{
  "switchers": [],
  "templates": {},
  "versionMapping": {},
  "versionOptions": {}
}
```
