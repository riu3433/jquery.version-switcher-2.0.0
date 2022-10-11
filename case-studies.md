# Case Studies

1. https://app.zenhub.com/workspaces/-daily-board---docdev-5e28d75220f5dd6322326b4e/issues/arcgis/arcgis-for-server-website/2747
2. https://app.zenhub.com/workspaces/-daily-board---docdev-5e28d75220f5dd6322326b4e/issues/arcgis/arcgis-for-server-website/2776


## Sites
The following list of urls have tested with positive results:

### "{{language}}/{{site}}/{{version}}/{{section}}/{{platform}}/{{filename}}"
* Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+\\.htm)" `
* Platforms: `linux` and `windows`

- [x] /en/data-store/latest/install/windows
- [x] /en/enterprise/latest/install/linux/arcgis-enterprise-builder.htm
- [x] /en/geonalytics/latest/intall/windows
- [x] /en/image/latest/get-started/windows
- [x] /en/portal/10.7/install/windows/welcome-to-the-portal-for-arcgis-installation-guide.htm
- [x] /en/web-adaptor/latest/install/java-windows/welcome-arcgis-web-adaptor-install-guide.htm
   * Exception to platforms `iis`, `java-window`, and `java-linus`
- [x] /en/server/latest/deploy/windows/adding-a-gis-server-to-a-site-in-manager.htm
   * Need to confirm - being worked on.
- [x] /en/workflow/latest/install/windows/welcome-to-workflow-manager-server-installation-guide.htm


### "{{language}}/{{site}}/{{section}}/{{section}}/{{version}}/{{filename}}"
Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+\\.htm)" `
- [x] /en/documentation/install/database-server/10.7/intro-workgroup-database-server-installation.htm
    * Note: Needs review for generalization.


### "{{language}}/{{site}}/{{version}}/{{section}}/{{filename}}"
Using RegEx pattern ` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/([a-zA-Z\\-]+)\\/([a-zA-Z\\-]+\\.htm)" `
- [x] /en/cloud/latest/intro
- [x] /en/defense-mapping/latest/get-started
   - [x] Display version 11.0 and 10.9.1 only
- [x] /en/geoevent/latest/administer/ports-used-by-geoevent.htm
- [x] /en/knowledge/latest/introduction/what-is-arcgis-knowledge.htm
- [x] /en/monitor/10.8/get-started/what-is-arcgis-monitor.htm
- [x] /en/production-mapping/latest/get-started/arcgis-production-mapping-server.htm
   - [x] Versions 10.9, 10.9.1, and 11.0 has server side redirect (htacces) on "site" `monitor`
- [x] /en/roads-highways/10.8/roadway-reporter/roadway-reporter.htm
   - [x] Versions 10.9, 10.9.1, and 11.0 has server side redirect (htacces) on "section" `roadway-reporter`
- [x] /en/sites/latest/get-started/about-this-application.htm
   - [x] Version 10.7.x use https://enterprise.arcgis.com/en/portal/10.7/use/about-this-application.htm


### "{{language}}/{{site}}/{{version}}/{{platform}}/{{filename}}"
Using RegEx pattern` "([a-zA-Z-]{2,5})\\/([a-zA-Z\\-]+)\\/(latest|[0-9\\.]+)\\/(linux|windows)\\/([a-zA-Z\\-]+\\.htm)" `
- [x] /en/get-started/latest/windows
- [x] /en/system-requirements/latest/windows/arcgis-enterprise-overall-system-requirements.htm