# Case Studies

1. https://app.zenhub.com/workspaces/-daily-board---docdev-5e28d75220f5dd6322326b4e/issues/arcgis/arcgis-for-server-website/2747
2. https://app.zenhub.com/workspaces/-daily-board---docdev-5e28d75220f5dd6322326b4e/issues/arcgis/arcgis-for-server-website/2776


## Sites
The following list of urls have tested with positive results:

### "{{language}}/{{site}}/{{version}}/{{section}}/{{platform}}/{{filename}}"
Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+\\.htm)" `
Platforms: `linux` and `windows`
1. /en/web-adaptor/latest/install/java-windows/welcome-arcgis-web-adaptor-install-guide.htm
   a. Exception to platforms `iis`, `java-window`, and `java-linus`
2. /en/server/latest/deploy/windows/adding-a-gis-server-to-a-site-in-manager.htm


### "{{language}}/{{site}}/{{section}}/{{section}}/{{version}}/{{filename}}"
Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+\\.htm)" `
1. /en/documentation/install/database-server/10.7/intro-workgroup-database-server-installation.htm


### "{{language}}/{{site}}/{{version}}/{{section}}/{{filename}}"
Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+\\.htm)" `
1. /en/geoevent/latest/administer/ports-used-by-geoevent.htm
2. /en/roads-highways/10.8/roadway-reporter/roadway-reporter.htm
   a. Versions 10.9, 10.9.1, and 11.0 has server side redirect (htacces) on "section" `roadway-reporter`