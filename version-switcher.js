if (!docConfig) {
  var docConfig = {};
}

if (!docConfig.switcher) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
	  "11.0" : "server/latest/",
	  "10.9.1" : "server/10.9.1/",
	  "10.9" : "server/10.9/",
	  "10.8": "server/10.8/",
	  "10.7": "server/10.7/"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
      "10.9.1~linux": "Linux",
	  "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
      "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"

    },

    "caseTbl": {
      "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
      },
      "test": ['-', 'test-differentFilename'],
      "test2": ['x', '-'],
    },

    "switcherdisplay": true,
  };
}
var currentURL = document.location.href;
if(document.location.href.match(/(\/notebook\/)/)){

	docConfig.switcher = {
	"basepaths": {
      "linux": "linux",
      "windows": "windows",
      "11.0": "notebook/latest/",
	  "10.9.1": "notebook/10.9.1/",
	  "10.9": "notebook/10.9/",
	  "10.8": "notebook/10.8/",
	  "10.7": "notebook/10.7/"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
      "10.9.1~linux": "Linux",
	  "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
      "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"

    },

    "caseTbl": {
      "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
      },
    },

    "switcherdisplay": true,
  };
}
if(document.location.href.match(/(\/geoanalytics\/)/)){
	docConfig.switcher = {
	"basepaths": {
      "linux": "linux",
      "windows": "windows",
      "11.0": "geoanalytics/latest/install",
	  "10.9.1": "geoanalytics/10.9.1/install",
	  "10.9": "geoanalytics/10.9/install",
	  "10.8": "geoanalytics/10.8/install",
	  "10.7": "geoanalytics/10.7/install"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
      "10.9.1~linux": "Linux",
      "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
      "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"
    },

    "caseTbl": {
      "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
      },
    },

    "switcherdisplay": true,
  };
  
  if(document.location.href.match(/(\/perform-analysis\/)/)){
	docConfig.switcher.switchercases = {
	  "11.0": "11.0",
	  "10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
    };
    docConfig.switcher.basepaths["11.0"] = "geoanalytics/latest/perform-analysis";
	docConfig.switcher.basepaths["10.9.1"] = "geoanalytics/10.9.1/perform-analysis";
	docConfig.switcher.basepaths["10.9"] = "geoanalytics/10.9/perform-analysis";
	docConfig.switcher.basepaths["10.8"] = "geoanalytics/10.8/perform-analysis";
	docConfig.switcher.basepaths["10.7"] = "server/10.7/get-started/linux";

    docConfig.switcher.caseTbl = {
      "__order": {
		"10.9.1": 1,
		"10.9": 2,
		"10.8": 3,
		"10.7": 4
      },
    };
  }
}

if (currentURL.match(/(\/enterprise\/.*\/install\/)/)) {
  docConfig.switcher.basepaths["10.7"] = "enterprise/10.7/install/";
  docConfig.switcher.basepaths["10.8"] = "enterprise/10.8/install/";
  docConfig.switcher.basepaths["10.9"] = "enterprise/10.9/install/";
  docConfig.switcher.basepaths["10.9.1"] = "enterprise/10.9.1/install/";
  docConfig.switcher.basepaths["11.0"] = "enterprise/latest/install/";
  docConfig.switcher.caseTbl = {
    "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
    },
    /*"arcgis-enterprise-builder": ['-','-','-','-','x','x','x','x'],
    "arcgis-enterprise-builder-system-req": ['-','-','-','-','x','x','x','x'],
    "check-for-software-patches-and-updates": ['-','-','-','-','x','x','x','x'],
    "common-problems-and-solutions": ['-','-','-','-','x','x','x','x'],
    "copyright-information": ['-','-','-','-','x','x','x','x'],*/
    "install-arcgis-enterprise-builder-on-one-machine": ['-','install-arcgis-enterprise-web-gis-on-one-machine','-','install-arcgis-enterprise-web-gis-on-one-machine','-','install-arcgis-enterprise-web-gis-on-one-machine', '-', 'install-arcgis-enterprise-web-gis-on-one-machine', '-', 'install-arcgis-enterprise-web-gis-on-one-machine', 'x', 'x', 'x', 'x'],
    "install-arcgis-enterprise-web-gis-on-one-machine": ['install-arcgis-enterprise-builder-on-one-machine', '-', 'install-arcgis-enterprise-builder-on-one-machine', '-', 'install-arcgis-enterprise-builder-on-one-machine', '-', 'install-arcgis-enterprise-builder-on-one-machine', '-', 'install-arcgis-enterprise-builder-on-one-machine', '-', 'x', 'x', 'x', 'x'],
    "installing-arcgis-enterprise-builder-silently": ['-', 'installing-arcgis-enterprise-web-gis-silently', '-', 'installing-arcgis-enterprise-web-gis-silently', '-', 'installing-arcgis-enterprise-web-gis-silently', '-', 'installing-arcgis-enterprise-web-gis-silently', '-', 'installing-arcgis-enterprise-web-gis-silently', 'x', 'x', 'x', 'x'],
    "installing-arcgis-enterprise-web-gis-silently": ['installing-arcgis-enterprise-builder-silently', '-', 'installing-arcgis-enterprise-builder-silently', '-', 'installing-arcgis-enterprise-builder-silently', '-', 'installing-arcgis-enterprise-builder-silently', '-', 'installing-arcgis-enterprise-builder-silently', '-', 'x', 'x', 'x', 'x'],
    /*"obtaining-an-authorization-file": ['-','-','-','-','x','x','x','x'],
    "plan-a-base-deployment": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-arcgis-data-store": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-arcgis-server": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-portal-for-arcgis": ['-','-','-','-','x','x','x','x'],
    "reusable-questions-and-feedback": ['-','-','-','-','x','x','x','x'],
    "steps-to-get-up-and-running": ['-','-','-','-','x','x','x','x'],*/
    "uninstalling-arcgis-enterprise-builder": ['-', 'uninstalling-arcgis-enterprise-web-gis', '-', 'uninstalling-arcgis-enterprise-web-gis', '-', 'uninstalling-arcgis-enterprise-web-gis', '-', 'uninstalling-arcgis-enterprise-web-gis', '-', 'uninstalling-arcgis-enterprise-web-gis', 'x', 'x', 'x', 'x'],
    "uninstalling-arcgis-enterprise-web-gis": ['uninstalling-arcgis-enterprise-builder', '-', 'uninstalling-arcgis-enterprise-builder', '-', 'uninstalling-arcgis-enterprise-builder', '-', 'uninstalling-arcgis-enterprise-builder', '-', 'uninstalling-arcgis-enterprise-builder', '-', 'x', 'x', 'x', 'x'],
    //"use-the-configuration-wizard": ['-','-','-','-','x','x','x','x'],
    "welcome-to-the-arcgis-enterprise-builder-installation-guide": ['-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', '-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', '-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', '-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', '-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', 'x', 'x', 'x', 'x'],
    "welcome-to-the-arcgis-enterprise-web-gis-install-guide": ['welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'x', 'x', 'x', 'x'],
  };
} else if (currentURL.match(/(\/documentation\/install\/more\/.*\/)/)) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "all": "",
      "11.0": "documentation/install/more/latest",
	  "10.9.1": "documentation/install/more/10.9.1/",
	  "10.9": "documentation/install/more/10.9/",
	  "10.8": "documentation/install/more/10.8/",
	  "10.7": "documentation/install/more/10.7/"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
      "10.9.1~linux": "Linux",
      "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
      "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"
    },

    "caseTbl": {
      "__order": {
		"10.9.1~linux": 1,
		"10.9~linux": 2,
		"10.8~linux": 3,
		"10.7~linux": 4
      },
    },

    "switcherdisplay": true,
  };
}else if(window.location.pathname.split("/").length > 1 && window.location.pathname.split("/")[2] == 'get-started'){
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "11.0": "get-started/latest/",
	  "10.9.1": "get-started/10.9.1/",
	  "10.9": "get-started/10.9/",
	  "10.8": "get-started/10.8/",
	  "10.7": "get-started/10.7/"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
	  "10.9.1~linux": "Linux",
      "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
	  "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"
    },

    "caseTbl": {
      "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
      },
    },

    "switcherdisplay": true,
  };
}
//if (currentURL.match(/(\/portal\/latest\/use\/|\/portal\/10.5\/use\/|\/portal\/10.3\/use\/|\/cloud\/main\/|\/cloud\/amazon\/|\/install\/database-server\/|\/install\/data-reviewer\/|\/install\/mapping-charting-solution\/|\/install\/roads-highways\/|\/install\/workflow-manager\/|\/install\/more\/|\/inspire\/)/)) {
if (currentURL.match(/(\/install\/more\/11\.\d\/|\/install\/more\/10\.\d\/|\/cloud\/latest\/intro\/|\/cloud\/main\/|\/cloud\/amazon\/|\/install\/database-server\/|\/install\/data-reviewer\/|\/install\/mapping-charting-solution\/|\/install\/roads-highways\/|\/install\/workflow-manager\/|\/inspire\/|\/install\/location-referencing\/|\/install\/maritime\/)/)) {
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	"10.9": "10.9",
	"10.8": "10.8.x",
	"10.7": "10.7.x"
  };
  if (currentURL.match(/(\/cloud\/latest\/intro\/)/)) {
	docConfig.switcher.basepaths["11.0"] = "cloud/latest/intro";
	docConfig.switcher.basepaths["10.9.1"] = "cloud/10.9.1/intro";
	docConfig.switcher.basepaths["10.9"] = "cloud/10.9/intro";
  } 
  
  if (currentURL.match(/(\/install\/database-server\/)/)) {
	docConfig.switcher.basepaths["10.8"] = "documentation/install/database-server/10.8/";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/database-server/10.7/";
  } else if (currentURL.match(/(\/install\/data-reviewer\/)/)) {
    docConfig.switcher.basepaths["11.0"] = null;
	docConfig.switcher.basepaths["10.9.1"] = "documentation/install/data-reviewer/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "documentation/install/data-reviewer/10.9/";
	docConfig.switcher.basepaths["10.8"] = "documentation/install/data-reviewer/10.8/";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/data-reviewer/10.7/";
    docConfig.switcher.caseTbl = {
      "__order": {
		"11.0": "1",
		"10.9.1": "2",
		"10.9": 3,
		"10.8": 4,
		"10.7": 5
      },
      "silentinstall": ['silent-install', 'silent-install', 'silent-install', 'silent-install', 'silent-install', 'silent-install', 'silent-install', '-'],
      "silent-install": ['-', '-', '-', '-', '-', '-', '-', 'silentinstall'],
      "reusable-questions-and-feedback": ['questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', '-'],
      "questions-and-feedback": ['-', '-', '-', '-', '-', '-', '-', 'reusable-questions-and-feedback'],
    }
  } else if (currentURL.match(/(\/install\/maritime\/)/)) {
  	  docConfig.switcher.switchercases = {
		  "11.0": "11.0"
		};
	  docConfig.switcher.basepaths["11.0"] = "documentation/install/maritime/11.0/";
}else if (currentURL.match(/(\/install\/mapping-charting-solution\/)/)) {
	docConfig.switcher.basepaths["11.0"] = null;
	docConfig.switcher.basepaths["10.9.1"] = "documentation/install/mapping-charting-solution/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "documentation/install/mapping-charting-solution/10.9/";
	docConfig.switcher.basepaths["10.8"] = "documentation/install/mapping-charting-solution/10.8/";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/mapping-charting-solution/10.7/";
    
    docConfig.switcher.caseTbl = {
      "__order": {
		"10.9.1": 1,
		"10.9": 2,
		"10.8": 3,
		"10.7": 4,
        "10.6": 5
      },
      "upgrading-10-3-1-mapping-and-charting-solutions-with-maritime-installed": ['x', 'x', 'x', 'x', 'x', 'x', '-'],
    }
  } else if (currentURL.match(/(\/install\/roads-highways\/|\/install\/location-referencing\/)/)) {
    docConfig.switcher.basepaths["11.0"] = null;
	docConfig.switcher.basepaths["10.9.1"] = null;
	docConfig.switcher.basepaths["10.9"] = null;
	docConfig.switcher.basepaths["10.8"] = "documentation/install/location-referencing/10.8";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/location-referencing/10.7";
    docConfig.switcher.caseTbl = {
      "__order": {
		"10.9": 1,
		"10.9": 2,
		"10.8": 3,
		"10.7": 4
      },
      "authorizing-the-software": ['-', '-', '-', '-', '-', 'obtaining-authorization-file'],
      "obtaining-authorization-file": ['authorizing-the-software', 'authorizing-the-software', 'authorizing-the-software', 'authorizing-the-software', 'authorizing-the-software', 'authorizing-the-software', '-'],
      "adding-or-removing-features": ['-', '-', '-', '-', '-', 'adding-additional-features', 'adding-additional-features'],
      "adding-additional-features": ['adding-or-removing-features', 'adding-or-removing-features', 'adding-or-removing-features', 'adding-or-removing-features', 'adding-or-removing-features', '-', '-'],
      //"existing-esri-roads-and-highways-for-server-users": ['-', '-', '-', '-'],
      "installing-location-referencing": ['-', '-', '-', '-', '-', 'installing-roads-and-highways-for-server', 'installing-roads-and-highways-for-server'],
      "installing-roads-and-highways-for-server": ['installing-location-referencing', 'installing-location-referencing', 'installing-location-referencing', 'installing-location-referencing', 'installing-location-referencing', '-', '-'],
      "installing-location-referencing-silently": ['-', '-', '-', '-', '-', 'installing-esri-roads-and-highways-for-server-silently', 'installing-esri-roads-and-highways-for-server-silently'],
      "installing-esri-roads-and-highways-for-server-silently": ['installing-location-referencing-silently', 'installing-location-referencing-silently', 'installing-location-referencing-silently', 'installing-location-referencing-silently', 'installing-location-referencing-silently', '-', '-'],
      "uninstalling-location-referencing-for-server": ['-', '-', '-', '-', '-', 'uninstalling-esri-roads-and-highways-for-server', 'uninstalling-esri-roads-and-highways-for-server'],
      "uninstalling-esri-roads-and-highways-for-server": ['uninstalling-location-referencing-for-server', 'uninstalling-location-referencing-for-server', 'uninstalling-location-referencing-for-server', 'uninstalling-location-referencing-for-server','uninstalling-location-referencing-for-server', '-', '-'],
      "reusable-questions-and-feedback": ['-', '-', '-', '-', '-', 'questions-feedback-and-information', 'questions-feedback-and-information'],
      "questions-feedback-and-information": ['reusable-questions-and-feedback', 'reusable-questions-and-feedback', 'reusable-questions-and-feedback', 'reusable-questions-and-feedback', 'reusable-questions-and-feedback', '-', '-'],
      "arcgis-location-referencing-system-requirements": ['-', '-', '-', '-', '-', 'esri-roads-and-highways-for-server-system-requirements', 'esri-roads-and-highways-for-server-system-requirements'],
      "esri-roads-and-highways-for-server-system-requirements": ['arcgis-location-referencing-system-requirements', 'arcgis-location-referencing-system-requirements', 'arcgis-location-referencing-system-requirements', 'arcgis-location-referencing-system-requirements', 'arcgis-location-referencing-system-requirements', '-', '-'],
      "welcome-to-the-location-referencing-for-server-installation-guide": ['-', '-', '-', '-', '-', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide'],
      "welcome-to-the-esri-roads-and-highways-for-server-install-guide": ['welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide',  'welcome-to-the-location-referencing-for-server-installation-guide', '-', '-'],
      //"introduction-to-esri-roads-and-highways-server-install-guide": ['welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide'],
      //"uninstalling-esri-roads-and-highways-for-server-silently": ['x', 'x', '-', '-'],
    }
  } else if (currentURL.match(/(\/install\/workflow-manager\/)/)) {
	docConfig.switcher.basepaths["11.0"] = "documentation/install/workflow-manager/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "documentation/install/workflow-manager/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "documentation/install/workflow-manager/10.9/";
	docConfig.switcher.basepaths["10.8"] = "documentation/install/workflow-manager/10.8/";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/workflow-manager/10.7/";
  } else if (currentURL.match(/(\/install\/more\/)/)) {
	docConfig.switcher.basepaths["11.0"] = "documentation/install/workflow-manager/latest";
	docConfig.switcher.basepaths["10.9.1"] = "documentation/install/workflow-manager/10.9.1";
	docConfig.switcher.basepaths["10.9"] = "documentation/install/more/10.9/windows";
	docConfig.switcher.basepaths["10.8"] = "documentation/install/more/10.8/windows";
	docConfig.switcher.basepaths["10.7"] = "documentation/install/more/10.7/windows";  
  } else if (currentURL.match(/(\/inspire\/)/)) {
	docConfig.switcher.basepaths["11.0"] = null;
	docConfig.switcher.basepaths["10.9.1"] = null;
	docConfig.switcher.basepaths["10.9"] = null;
	docConfig.switcher.basepaths["10.8"] = "inspire/10.8";
	docConfig.switcher.basepaths["10.7"] = "inspire/10.7";
    docConfig.switcher.caseTbl = {
      "__order": {
		"10.8": 1,
		"10.7": 2
      },
      /*"release-notes-10-2-1-for-inspire": ['x', 'x', 'x', '-'],
      "release-notes-10-1-sp1-for-inspire": ['x', 'x', 'x', '-'],
      "release-notes-10-1-for-inspire": ['x', 'x', 'x', '-']*/
    }
  }
}else if (currentURL.match(/(\/workflow-manager\/)/)) {
  if (currentURL.match(/(\/help\/)/)) {
    docConfig.switcher.switchercases = {
	  "11.0": "11.0",
	  "10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
    };
    docConfig.switcher.basepaths["11.0"] = "workflow-manager/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "workflow-manager/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "workflow-manager/10.9/";
	docConfig.switcher.basepaths["10.8"] = "workflow-manager/10.8/";
	docConfig.switcher.basepaths["10.7"] = "workflow-manager/10.7/";

    docConfig.switcher.caseTbl = {
      "__order": {
		"10.9.1": 1,
		"10.9": 1,
		"10.8": 2,
		"10.7": 3
      },
    };
  }
}else if (currentURL.match(/(\/workflow\/)/)) {
  
	if (currentURL.match(/(\/install\/)/)){
		 docConfig.switcher.basepaths["11.0"] = "workflow/latest/install/";		
		 docConfig.switcher.basepaths["10.9.1"] = "workflow/10.9.1/install/";		
		 docConfig.switcher.basepaths["10.9"] = "workflow/10.9/install/";		
		 docConfig.switcher.basepaths["10.8"] = "workflow/10.8/install/";		
	}else{
	  docConfig.switcher.switchercases = {
		  "11.0": "11.0",
		  "10.9.1": "10.9.1",
		  "10.9": "10.9",
		  "10.8": "10.8.x",
		  "10.7": "10.7.x"
		};

	  docConfig.switcher.basepaths["11.0"] = "workflow/latest/";
	  docConfig.switcher.basepaths["10.9.1"] = "workflow/10.9.1/";
	  docConfig.switcher.basepaths["10.9"] = "workflow/10.9/";
	  docConfig.switcher.basepaths["10.8"] = "workflow/10.8/";
	}
    
}else if (currentURL.match(/(\/system-requirements\/)/)) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
	  "11.0": "system-requirements/latest/",
	  "10.9.1": "system-requirements/10.9.1/",
	  "10.9": "system-requirements/10.9/",
	  "10.8": "system-requirements/10.8/",
	  "10.7": "system-requirements/10.7/"
    },

    "switchercases": {
	  "11.0~": "11.0",
      "11.0~linux": "Linux",
	  "11.0~windows": "Windows",
	  "10.9.1~": "10.9.1",
      "10.9.1~linux": "Linux",
      "10.9.1~windows": "Windows",
	  "10.9~": "10.9",
      "10.9~linux": "Linux",
      "10.9~windows": "Windows",
	  "10.8~": "10.8.x",
      "10.8~linux": "Linux",
      "10.8~windows": "Windows",
	  "10.7~": "10.7.x",
      "10.7~linux": "Linux",
      "10.7~windows": "Windows"
    },

    "caseTbl": {
      "__order": {
		"11.0~linux": 1,
        "11.0~windows": 2,
		"10.9.1~linux": 3,
        "10.9.1~windows": 4,
		"10.9~linux": 5,
        "10.9~windows": 6,
		"10.8~linux": 7,
        "10.8~windows": 8,
		"10.7~linux": 9,
        "10.7~windows": 10
      },
    },

    "switcherdisplay": true,
  };
}else if (currentURL.match(/(\/pipeline-referencing\/)/)) {
  if (currentURL.match(/(\/get-started\/|\/event-editor\/)/)) {
    docConfig.switcher.switchercases = {
	  "11.0": "11.0",
	  "10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
    };
	docConfig.switcher.basepaths["11.0"] = "pipeline-referencing/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "pipeline-referencing/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "pipeline-referencing/10.9/";
	docConfig.switcher.basepaths["10.8"] = "pipeline-referencing/10.8/";
	docConfig.switcher.basepaths["10.7"] = "pipeline-referencing/10.7/";
    
    docConfig.switcher.caseTbl = {
      "__order": {
		"11.0": 1,
		"10.9.1": 2,
		"10.9": 3,
		"10.8": 4,
		"10.7": 5
      },
    };
  }
}else if (currentURL.match(/(\/roads-highways\/)/)) {
  if (currentURL.match(/(\/get-started\/|\/event-editor\/|\/roadway-reporter\/)/)) {
    docConfig.switcher.switchercases = {
	 "11.0": "11.0",
	 "10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
    };
	docConfig.switcher.basepaths["11.0"] = "roads-highways/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "roads-highways/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "roads-highways/10.9/";
	docConfig.switcher.basepaths["10.8"] = "roads-highways/10.8/";
	docConfig.switcher.basepaths["10.7"] = "roads-highways/10.7/";
    
    docConfig.switcher.caseTbl = {
      "__order": {
		 "10.9.1": 1,
	  "10.9": 2,
	  "10.8": 3,
	  "10.7": 4
      },
    };
  }
}else if (currentURL.match(/(\/geoevent\/)/)) {
  if (!currentURL.match(/(\/install\/)/)) {
    docConfig.switcher.switchercases = {
	  "11.0": "11.0",
	  "10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
    };
	docConfig.switcher.basepaths["11.0"] = "geoevent/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "geoevent/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "geoevent/10.9/";
	docConfig.switcher.basepaths["10.8"] = "geoevent/10.8/";
	docConfig.switcher.basepaths["10.7"] = "geoevent/10.7/";

    docConfig.switcher.caseTbl = {
      "__order": {
		 "10.9.1": 1,
	  "10.9": 2,
	  "10.8": 3,
	  "10.7": 4
      },
      /*"managing-big-data-stores": ['-', '-', '-', 'x'],
      "ports-used-by-geoevent": ['-', '-', 'x', 'x'],
      "geoevent-logger": ['-', '-','x','x'],
      "geoevent-simulator": ['-', '-', 'x', 'x'],
      "managing-global-settings": ['-', '-', 'x', 'x'],
      "simulating-and-logging-data-in-geoevent-server": ['-', '-', 'x', 'x'],*/
    };
  }
} else if (currentURL.match(/(\/data-reviewer\/)/)) {
  docConfig.switcher.basepaths["11.0"] = "data-reviewer/latest/";
  docConfig.switcher.basepaths["10.9.1"] = "data-reviewer/10.9.1/";
  docConfig.switcher.basepaths["10.9"] = "data-reviewer/10.9/";
  docConfig.switcher.basepaths["10.8"] = "data-reviewer/10.8/";
  docConfig.switcher.basepaths["10.7"] = "data-reviewer/10.7/";
  
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };

  docConfig.switcher.caseTbl = {
    "__order": {
	   "10.9.1": 1,
	  "10.9": 2,
	  "10.8": 3,
	  "10.7": 4
    },
    //"upgrade-your-existing-scheduler-database": ['-', '-', 'x'],
    //"using-arcgis-data-reviewer-in-a-federated-arcgis-server-site": ['-', '-', 'x']
  };
} else if (currentURL.match(/(\/monitor\/)/)) {
  docConfig.switcher.basepaths["11.0"] = null;
  docConfig.switcher.basepaths["10.9.1"] = null;
  docConfig.switcher.basepaths["10.9"] = null;
  docConfig.switcher.basepaths["10.8"] = "monitor/10.8";
  docConfig.switcher.basepaths["10.7"] = "monitor/10.7";
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };

  docConfig.switcher.caseTbl = {
    "__order": {
	  "10.8": 1,
	  "10.7": 2
    },
	 "install-arcgis-monitor-silently": ['-', '-', '-', 'x', 'x', 'x'],
  };
  if (currentURL.match(/(\/install\/)/)){
	   docConfig.switcher.basepaths["11.0"] = null;
	   docConfig.switcher.basepaths["10.9.1"] = null;
	   docConfig.switcher.basepaths["10.9"] = null;
	   docConfig.switcher.basepaths["10.8"] = "monitor/10.8/install";
	   docConfig.switcher.basepaths["10.7"] = "monitor/10.7/install";
  }
} else if (currentURL.match(/(\/mission\/)/)) {
  docConfig.switcher.basepaths["11.0"] = "mission/latest/";
  docConfig.switcher.basepaths["10.9.1"] = "mission/10.9.1/";
  docConfig.switcher.basepaths["10.9"] = "mission/10.9/";
  docConfig.switcher.basepaths["10.8"] = "mission/10.8/";
  if (!currentURL.match(/(\/server\/)/)) {
	  docConfig.switcher.switchercases = {
		"11.0": "11.0",
		"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
	  };
  }
}

if (currentURL.match(/(\/geoplanner\/|\/web-appbuilder\/|\/dashboards\/)/)) {
  
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };

  docConfig.switcher.caseTbl = {
    "__order": {
	  "11.0": 1,
	  "10.9.1": 2,
	  "10.9": 3,
	  "10.8": 4,
	  "10.7": 5
    },
	"what-is-web-appbuilder": ['-','-','-','welcome','welcome','welcome','welcome','welcome','welcome' ],
  };
  if (currentURL.match(/(\/dashboards\/)/)){
	   docConfig.switcher.basepaths["11.0"] = (currentURL.match(/(\/get-started\/)/))?"dashboards/latest/get-started":(currentURL.match(/(\/create-and-share\/)/))?"dashboards/latest/create-and-share":(currentURL.match(/(\/reference\/)/))?"dashboards/latest/reference":"dashboards/latest/";
	   docConfig.switcher.basepaths["10.9.1"] = (currentURL.match(/(\/get-started\/)/))?"dashboards/10.9.1/get-started":(currentURL.match(/(\/create-and-share\/)/))?"dashboards/10.9.1/create-and-share":(currentURL.match(/(\/reference\/)/))?"dashboards/10.9.1/reference":"dashboards/10.9.1/";
	   docConfig.switcher.basepaths["10.9"] = (currentURL.match(/(\/get-started\/)/))?"dashboards/10.9/get-started":(currentURL.match(/(\/create-and-share\/)/))?"dashboards/10.9/create-and-share":(currentURL.match(/(\/reference\/)/))?"dashboards/10.9/reference":"dashboards/10.9/";
	   docConfig.switcher.basepaths["10.8"] = "portal/10.8/use/";
	   docConfig.switcher.basepaths["10.7"] = "portal/10.7/use/";
  }
  
  if (currentURL.match(/(\/geoplanner\/)/)){
	   docConfig.switcher.basepaths["11.0"] = (currentURL.match(/(\/documentation\/)/))?"geoplanner/latest/documentation":"geoplanner/latest/";
	   docConfig.switcher.basepaths["10.9.1"] = (currentURL.match(/(\/documentation\/)/))?"geoplanner/10.9.1/documentation":"geoplanner/10.9.1/";
	   docConfig.switcher.basepaths["10.9"] = (currentURL.match(/(\/documentation\/)/))?"geoplanner/10.9/documentation":"geoplanner/10.9/";
	   docConfig.switcher.basepaths["10.8"] = "portal/10.8/use/";
	   docConfig.switcher.basepaths["10.7"] = "portal/10.7/use/";
  }
  
  if (currentURL.match(/(\/web-appbuilder\/)/)){
	   docConfig.switcher.basepaths["11.0"] = (currentURL.match(/(\/create-apps\/)/))?"web-appbuilder/latest/create-apps":(currentURL.match(/(\/manage-apps\/)/))?"web-appbuilder/latest/manage-apps":"web-appbuilder/latest/";
	   docConfig.switcher.basepaths["10.9.1"] = (currentURL.match(/(\/create-apps\/)/))?"web-appbuilder/10.9.1/create-apps":(currentURL.match(/(\/manage-apps\/)/))?"web-appbuilder/10.9.1/manage-apps":"web-appbuilder/10.9.1/";
	   docConfig.switcher.basepaths["10.9"] = (currentURL.match(/(\/create-apps\/)/))?"web-appbuilder/10.9/create-apps":(currentURL.match(/(\/manage-apps\/)/))?"web-appbuilder/10.9/manage-apps":"web-appbuilder/10.9/";
	   docConfig.switcher.basepaths["10.8"] = "portal/10.8/use/";
	   docConfig.switcher.basepaths["10.7"] = "portal/10.7/use/";
  }
}

if (currentURL.match(/\/insights\/.*\/administer|\/insights\/.*\/use/)) {
  docConfig.switcher.basepaths = {
    "linux": "linux",
    "windows": "windows",
    "2.1": "insights/latest/",
    "1.2.1": "insights/1.2/",
  };
  if (currentURL.match(/(\/1\.2\/)/)) {
    var customVersionLabel = "1.2.1"
  } else {
    var customVersionLabel = "2.1"
  }
  var customVersionName = 'Insights'
  if (currentURL.match(/\/insights\/.*\/administer/)) {
    docConfig.switcher.switchercases = {
      "2.1~": "2.1",
      "2.1~linux": "Linux",
      "2.1~windows": "Windows",
      "1.2.1~": "1.2.1",
      "1.2.1~linux": "Linux",
      "1.2.1~windows": "Windows",

    };

    docConfig.switcher.caseTbl = {
      "__order": {
        "2.1~linux": 1,
        "2.1~windows": 2,
        "1.2.1~linux": 3,
        "1.2.1~windows": 4,
      },
      //"configure-insights": ['-', '-', 'x', 'x'],
      "install-insights-windows": ['install-insights-linux', '-', 'install-insights-linux', '-'],
      "install-insights-linux": ['-', 'install-insights-windows', '-', 'install-insights-windows'],

    };
  } else if (currentURL.match(/\/insights\/.*\/use/)) {
    docConfig.switcher.switchercases = {
      "2.1": "2.1",
      "1.2.1": "1.2.1",
    };

    docConfig.switcher.caseTbl = {
      "__order": {
        "2.1": 1,
        "1.2.1": 2,
      },
    };
  }
}
if (currentURL.match(/(\/cloud\/azure\/|\/cloud\/amazon\/)/)) {
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };
  docConfig.switcher.caseTbl = {
    "__order": {
	   "10.9.1": 1,
	  "10.9": 2,
	  "10.8": 3,
	  "10.7": 4
    },
    
  };
  if (currentURL.match(/(\/10\.3\/)/)) {
    var customVersionLabel = "10.3.1"
  }

}

if (currentURL.match(/(\/image\/)/)) {
   	
	docConfig.switcher.basepaths["11.0"] = "image/latest/";
	docConfig.switcher.basepaths["10.9.1"] = "image/10.9.1/";
	docConfig.switcher.basepaths["10.9"] = "image/10.9/";
	docConfig.switcher.basepaths["10.8"] = "image/10.8/";
	docConfig.switcher.basepaths["10.7"] = null;
	 
	if (currentURL.match(/(\/raster-analytics\/)/)) { 
	 docConfig.switcher.switchercases = {
		"11.0": "11.0",
		"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
	  };
	}
}else if (currentURL.match(/(\/experience-builder\/)/)) {
  docConfig.switcher.basepaths["11.0"] = "experience-builder/latest/";
  docConfig.switcher.basepaths["10.9.1"] = "experience-builder/10.9.1/";
  docConfig.switcher.basepaths["10.9"] = "experience-builder/10.9/";
  docConfig.switcher.basepaths["10.8"] = "experience-builder/10.8/";
  docConfig.switcher.basepaths["10.7"] = "experience-builder/10.7/";
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };
}else if (currentURL.match(/(\/sites\/)/)) {
  var subSegment = (currentURL.match(/(\/get-started\/)/))?"/get-started":(currentURL.match(/(\/team\/)/))?"/team":(currentURL.match(/(\/content\/)/))?"/content":(currentURL.match(/(\/sites\/)/g).length > 1)?"/sites":"";
  var oldFolderPath = (currentURL.match(/(\/about-this-application.htm\/|\/add-people-to-a-core-team.htm\/|site-sharing.htm)/))?"/administer/windows":"/use";
  
  docConfig.switcher.basepaths["11.0"] = "sites/latest" + subSegment;
  docConfig.switcher.basepaths["10.9.1"] = "sites/10.9.1" + subSegment;
  docConfig.switcher.basepaths["10.9"] = "sites/10.9" + subSegment;
  docConfig.switcher.basepaths["10.8"] = "sites/10.8" + subSegment;
  docConfig.switcher.basepaths["10.7"] = "portal/10.7" + oldFolderPath;
    
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };
  
  docConfig.switcher.caseTbl = {
    "__order": {
	  "11.0": 1,
	  "10.9.1": 2,
	  "10.9": 3,
	  "10.8": 4,
	  "10.7": 5
    },
    "add-and-manage-groups": ['-','-', '-', 'add-groups-of-content-to-a-site', 'add-groups-of-content-to-a-site', 'x'],
	"create-a-site": ['-', '-', '-', 'design-the-layout-of-your-site', 'design-the-layout-of-your-site', 'x']
	}
}else if (currentURL.match(/(\/excalibur\/)/)) {
  docConfig.switcher.basepaths["11.0"] = "excalibur/latest/";
  docConfig.switcher.basepaths["10.9.1"] = "excalibur/10.9.1/";
  docConfig.switcher.basepaths["10.9"] = "excalibur/10.9/";
  docConfig.switcher.basepaths["10.8"] = "excalibur/10.8/";
  docConfig.switcher.basepaths["10.7"] = "excalibur/10.7/";
  docConfig.switcher.switchercases = {
	"11.0": "11.0",
	"10.9.1": "10.9.1",
	  "10.9": "10.9",
	  "10.8": "10.8.x",
	  "10.7": "10.7.x"
  };
}else if (currentURL.match(/(\/knowledge\/)/)) {
  
	  docConfig.switcher.switchercases = {
		  "11.0": "11.0",
		  "10.9.1": "10.9.1",
		  "10.9": "10.9",
		  "10.8": "10.8.x",
		  "10.7": "10.7.x"
		};
	  docConfig.switcher.basepaths["11.0"] = "knowledge/latest";
	  docConfig.switcher.basepaths["10.9.1"] = "knowledge/10.9.1";
}else if (currentURL.match(/(\/production-mapping\/)/)) {
  
	  docConfig.switcher.switchercases = {
		  "11.0": "11.0",
		  "10.9.1": "10.9.1"
		};
	  docConfig.switcher.basepaths["11.0"] = "production-mapping/latest";
	  docConfig.switcher.basepaths["10.9.1"] = "production-mapping/10.9.1";
}
else if (currentURL.match(/(\/defense-mapping\/)/)) {
  
	  docConfig.switcher.switchercases = {
		  "11.0": "11.0",
		  "10.9.1": "10.9.1"
		};
	  docConfig.switcher.basepaths["11.0"] = "defense-mapping/latest";
	  docConfig.switcher.basepaths["10.9.1"] = "defense-mapping/10.9.1";
}

if (currentURL.match(/(\/nl\/|\/zh-hk\/|\/zh-tw\/|\/ar\/|\/it\/|\/ko\/|\/pl\/|\/pt-br\/|\/ro\/)/)) {
  var hidePortalVersions = true;
} else var hidePortalVersions = false;
//Remove 10.3, 10.4 switcher options for Portal in certain languages
if (hidePortalVersions) {
  var delSwitchers = ["10.3", "10.3~", "10.3~linux", "10.3~windows", "10.3~iis", "10.3~java-windows", "10.3~java-linux", "10.4", "10.4~", "10.4~linux", "10.4~windows", "10.4~iis", "10.4~java-windows", "10.4~java-linux"];
  for (i in delSwitchers) {
    if (delSwitchers[i] in docConfig.switcher.switchercases) {
      delete docConfig.switcher.switchercases[delSwitchers[i]];
    }
  }
}

if(currentURL.match(/(\/en\/)/)) {
    var english = true;
}else var english = false;

//Remove 10.7 switcher option for non-English server pages
if(!english){
    var delSwitchers = ["11.0", "11.0~", "11.0~linux", "11.0~windows", "11.0~iis", "11.0~java-windows", "11.0~java-linux"];
    for(i in delSwitchers){
        if(delSwitchers[i] in docConfig.switcher.switchercases){
            delete docConfig.switcher.switchercases[delSwitchers[i]];
        }
    }
    for(i in docConfig.switcher.basepaths){
        docConfig.switcher.basepaths[i] = docConfig.switcher.basepaths[i].replace("10.9", "latest");
    }
}

$.whenAll = function(firstParam) {
  var args = arguments,
    sliceDeferred = [].slice,
    i = 0,
    length = args.length,
    count = length,
    rejected,
    deferred = length <= 1 && firstParam && jQuery.isFunction(firstParam.promise) ?
    firstParam :
    jQuery.Deferred();

  function resolveFunc(i, reject) {
    return function(value) {
      rejected |= reject;
      args[i] = arguments.length > 1 ? sliceDeferred.call(arguments, 0) : value;
      if (!(--count)) {
        // Strange bug in FF4:
        // Values changed onto the arguments object sometimes end up as undefined values
        // outside the $.when method. Cloning the object into a fresh array solves the issue
        var fn = rejected ? deferred.rejectWith : deferred.resolveWith;
        fn.call(deferred, deferred, sliceDeferred.call(args, 0));
      }
    };
  }

  if (length > 1) {
    for (; i < length; i++) {
      if (args[i] && jQuery.isFunction(args[i].promise)) {
        args[i].promise().then(resolveFunc(i), resolveFunc(i, true));
      } else {
        --count;
      }
    }
    if (!count) {
      deferred.resolveWith(deferred, args);
    }
  } else if (deferred !== firstParam) {
    deferred.resolveWith(deferred, length ? [firstParam] : []);
  }
  return deferred.promise();
};

/* Sticky functionality related redirect */

  if(sessionStorage.prefVersionPlat && !window.location.pathname.match(/\/10.3\/|\/10.4\/|\/10.5\/|\/10.6\/|\/publish-services\//)){
	prefObj = JSON.parse(sessionStorage.prefVersionPlat)
	var pathName = window.location.pathname,
	doRedirect = false,
	latestV = (pathName.indexOf("/latest/") >=0 )?"/latest/":null;
	var wAdaptorMapping = {"linux":"java-linux","windows":"java-windows", "iis":"iis"}
	var waToOthersMapping = {"java-linux":"linux","java-windows":"windows", "iis":"windows"}
		
	if(prefObj.version && (pathName.indexOf(prefObj.version) < 0 && pathName.indexOf(latestV) < 0)){
		if(docConfig.switcher.basepaths[prefObj.version]){
			pathName = pathName.replace(/\/(10\.[0-9.]*|latest|11\.[0-9.]*)\//,'/'+prefObj.version+'/');
			doRedirect = true;
		}
	}
	if(prefObj.platform && prefObj.platform.match(/^[A-Za-z-_]+$/) && pathName.indexOf(prefObj.platform) < 0){
		if(pathName.match(/\/web-adaptor\//)){
			prefObj.platform = (wAdaptorMapping[prefObj.platform])?wAdaptorMapping[prefObj.platform]:prefObj.platform;
		}else{
			prefObj.platform = (waToOthersMapping[prefObj.platform])?waToOthersMapping[prefObj.platform]:prefObj.platform;
		}
		
		if(pathName.match(/\/linux\/|\/windows\/|\/java-linux\/|\/java-windows\/|\/iis\//) && pathName.indexOf(prefObj.platform) < 0){
			pathName = pathName.replace(/\/(linux|windows|iis|java-windows|java-linux)\//,'/'+prefObj.platform+'/')
			doRedirect = true;
		}
	}
	
	if(doRedirect){
		window.location.replace(pathName);
	}
  }
  /* End of Sticky functionality related redirect */

jQuery(document).ready(function($) {
  	
  /*if(!docConfig || !docConfig.switcher){
		return false;
	}*/

  // Temporary condition. Once l10n content is ready for 10.4 we can remove this condition
  /*if(docConfig['localedir'] && docConfig['localedir'] != "en"){
		return;
	}*/

  //exclude version switcher for following pattern.
  if (currentURL.match(/(\/streetmap-premium\/)/)) {
    return;
  }

  if (!doc) {
    var doc = {};
  }

  function dbg(o) {
    if (true) console.info(o);
  }
  window.docConfig.switcher.switcherdisplay = true;
  
  doc.switcher = (function() {
    var switcherCfg = window.docConfig.switcher,
      pathname = window.location.pathname,
      pathparts = pathname.split("/"),
      fname = pathparts[pathparts.length - 1],
      //plat = $.cookie (switcherCfg.appproduct) || switcherCfg.defaultplatformvalue,
      plat = pathparts[pathparts.length - 2],
      isHome = pathparts.length <= 4, //???
	 
	 //version = (pathname.match(/(\/latest\/)/)) ? "10.8" : (pathname.match(/(\/10\.7\/)/)) ? "10.7" : (pathname.match(/(\/10\.6\/)/)) ? "10.6" : (pathname.match(/(\/10\.5\/)/)) ? "10.5" : (pathname.match(/(\/10\.4\/)/)) ? "10.4" : "10.3",
      version = (english && pathname.match(/(\/latest\/)/)) ? "11.0" : (!english && pathname.match(/(\/latest\/)/)) ? "10.9.1" : (english && pathname.match(/(\/10.9.1\/)/)) ? "10.9.1" : (pathname.match(/(\/10.9\/)/)) ? "10.9" : (pathname.match(/(\/10.8\/)/)) ? "10.8" : (pathname.match(/(\/10.7\/)/)) ? "10.7" : (pathname.match(/(\/10\.6\/)/)) ? "10.6" : (pathname.match(/(\/10\.5\/)/)) ? "10.5" : (pathname.match(/(\/10\.4\/)/)) ? "10.4" : "10.3",
      switcherLinkClass = "current";
	  
	  var versionMapping = {"10.8":"10.8.x", "10.7":"10.7.x"}
	  
	  var archiveUrl = "https://resources.arcgis.com/en/help/";
	  if(pathname.match(/(\/10.3\/|\/10.4\/|\/10.5\/|\/10.6\/)/)){
		var versionRetireMsg = "<div class='alert alert-yellow is-active trailer-1 archive-note'>{0}</div>"
		window.docConfig.switcher.switcherdisplay = false;
	  }
	 
	 
      switcherLinkClass = "current";
    if (pathname.match(/(\/insights\/)/) && customVersionLabel) {
      version = customVersionLabel;
    }
    return {

      addSwitcherLinks: function(switcherLocation) {
        if (!(isHome) && (switcherCfg.switcherdisplay)) {

          var platK = version + "~" + plat;
          var versionLabel = (customVersionLabel) ? customVersionLabel : (version in versionMapping)?versionMapping[version]:version;
          var versionName = (typeof customVersionName !== 'undefined') ? customVersionName : 'ArcGIS';
          var currentPlatTxt = (switcherCfg.switchercases[platK]) ? versionName + ' ' + versionLabel + ' (' + switcherCfg.switchercases[platK] + ')' : versionName + ' ' + versionLabel;
          var links = '<div class="trailer-1" id="platforms">' + '<span class="product text-light-gray">' + currentPlatTxt + '</span>';
          links += '<span class="divider"> | </span><span class="dropdown js-dropdown dropdown-btn js-dropdown-toggle"><button class="btn btn-transparent" href="#" tabindex="0" aria-haspopup="true" aria-expanded="false"> ' + this.t('other-versions');
          links += '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -10 32 40" class="svg-icon padding-left-half"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg></button>';
          linkData = this.generateSwitcherLinks();
          links += linkData[0];
          links += '</span>';
		  links += '<span class="divider">|</span><span>&nbsp;<a href="' + archiveUrl + '" tabindex="2" target="_blank"> ' + this.t('help-archive');
		  links += '</a></span></div>';

          ajaxRequests = [];
          linksNum = linkData[1].length;
          for (i = 0; i <= 17; i++) {
            if (i >= linksNum || linkData[1][i][1] == 'javascript:void(0);') {
              ajaxRequests.push(null);

            } else {
			  ajaxRequests.push($.ajax(linkData[1][i][1]));
            }
          }
          $.whenAll(ajaxRequests[0], ajaxRequests[1], ajaxRequests[2], ajaxRequests[3], ajaxRequests[4], ajaxRequests[5], ajaxRequests[6], ajaxRequests[7], ajaxRequests[8], ajaxRequests[9], ajaxRequests[10], ajaxRequests[11], ajaxRequests[12], ajaxRequests[13], ajaxRequests[14], ajaxRequests[15], ajaxRequests[16], ajaxRequests[17], ajaxRequests[18], ajaxRequests[19], $(switcherLocation).after(links)).always(function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
            responses = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19];
            for (i = 0; i < linksNum; i++) {
              if (responses[i] != null) {
                if (responses[i][1] == 'error') {
                  removeClass = 'available';
                  addClass = 'disabled';
                  href = 'javascript:void(0)';

                } else {
                  removeClass = 'disabled';
                  addClass = 'available';
                  href = linkData[1][i][1];
                }
                linkElement = $('#' + linkData[1][i][0]);
                linkElement.attr('href', href);
                if (linkElement.hasClass(removeClass)) {
                  linkElement.removeClass(removeClass);
                }
                linkElement.addClass(addClass);
              }
            }
            $('#platforms').addClass('processed');
          });
        } else {
          if(versionRetireMsg){
			var latestURL = pathname.replace(version,"latest");
			$(switcherLocation).after(versionRetireMsg.format(this.t("version-retire-msg").format(version,latestURL,archiveUrl)));
			baseLatestURL = latestURL.substring(0, latestURL.lastIndexOf("/")+1)
			fallbackTopic = "/{0}/documentation/".format(docConfig['localedir'].toLowerCase());
			fallbackLatestVersions = ["11.0", "10.9.1", "10.9", "10.8"];
			this.checkLatestUrl(0);			
		  }
		  return true;
        }
      },
	  
	checkLatestUrl: function(i) {
    
		latestURL = pathname.replace(version,fallbackLatestVersions[i]);
		var latestFound = false

		$.get(latestURL)
		.always(function(data, statusText, xhr) {
			if(xhr.status == 200){
				i = fallbackLatestVersions.length
				latestFound = true
				$(".archive-note").find('a:eq(1)').attr('href', latestURL);
			}
			if (i < fallbackLatestVersions.length-1) {
				doc.switcher.checkLatestUrl(i + 1);
			}
			if(i == fallbackLatestVersions.length-1 && !found){
				$.get( baseLatestURL).always(function(data, statusText, xhr) {
					latestURL = (xhr.status == 200)?baseLatestURL:fallbackTopic
					$(".archive-note").find('a:eq(1)').attr('href', latestURL);
				})
			}
		})
		
	},

      generateSwitcherLinks: function() {

        var switcherLinks = "",
          dropDownFlag = false;
        keyL = []

        $.each(switcherCfg.switchercases, function(k, v) {
          keyL.push(k);
        });

        switcherLinks = '<nav class="dropdown-menu">';
        var versionArray = [];
        $.each(keyL, function(idx, val) {

          var k = val,
            v = switcherCfg.switchercases[k]

          // dbg ("generateSwitcherLinks: " + k + " : " + v)
          var url = doc.switcher.getTargetURL(k),
            kArr = k.split(":"),
            switcherLinkStatus = (kArr.length >= 2) ? kArr[1] : ""



          k = kArr[0]
          linkId = k.replace(/[^a-z0-9\s]/gi, '');
          if (k.indexOf("~") >= 0) {

            var keyArr = k.split("~");

            if (!keyArr[1]) {
              /*if (dropDownFlag) {
                  switcherLinks += '</ul><hr>';
                  dropDownFlag = false;
              }*/
              // for example key is "desktop."
              switcherLinks += '<span class="dropdown-title">' + v + '</span>';
              //dropDownFlag = true;
            } else {
              versionArray.push([linkId, url]);
              switcherLinks += '<a id="' + linkId + '" data-plat="' + keyArr[1] + '" class="dropdown-link ' + switcherLinkClass + '" data-version="' + keyArr[0] + '" href="' + url + '">' + v + '</a>';
            }
          } else {
            versionArray.push([linkId, url]);
            switcherLinks += '<a id="' + linkId + '" data-plat="' + k + '" class="dropdown-link ' + switcherLinkClass + '" data-version="' + k + '" href="' + url + '">' + v + '</a>';
          }
        });
        switcherLinks += '</nav>'

        //$.each(switcherCfg.keyorder || keyL, function (idx, val) {

        return [switcherLinks, versionArray];
      },

      getTargetURL: function(key) {
        var kArr = key.split("~"),
          newVersion = kArr[0],
          k = (kArr.length > 1) ? kArr[1] : key;

        var versionPath = switcherCfg.basepaths[newVersion],
          prefixBase = (versionPath) ? '/' + doc.switcher.getCurrentLang() + '/' + versionPath : "",
          prefixPlat = "/" + switcherCfg.basepaths[k],
          pathpfx = window.location.pathname.split("/").slice(0, -1).join("/")+"/",
          url, fileName;

		if (pathpfx.indexOf(prefixPlat) >= 0 && pathpfx.indexOf(prefixBase) >= 0) {
          switcherLinkClass = "is-active";
          url = pathpfx + fname;
          //url = window.location.pathname;




        } else {
          var fnameVal = this.specialCasesLookup(key, fname);

          if (fnameVal == "x") {
            // disable click
            url = "javascript:void(0);";
            switcherLinkClass = "disabled";


          } else {

            //tmp hack to create relative url
            //works: /en/web-adaptor/beta/install/java-linux/welcome-arcgis-web-adaptor-install-guide.htm
            //NOT: /en/collector/windows/collect-data/collect-tutorial.htm
            //url = "../" + key + "/" + fnameVal;
            url = pathpfx.replace(switcherCfg.basepaths[version], switcherCfg.basepaths[newVersion]).replace(switcherCfg.basepaths[plat], switcherCfg.basepaths[k])
            url += fnameVal;

            switcherLinkClass = "available";
          }
        }
        url = url.replace('//', '/');
        return url
      },

      //getTargetURL
      specialCasesLookup: function(key, fileName) {
        var keyPosition = (switcherCfg.caseTbl && key in switcherCfg.caseTbl['__order']) ? switcherCfg.caseTbl['__order'][key] - 1 : -1,
          fnameParts = fileName.split("."),
          fnameKey = (fnameParts.length == 2) ? fnameParts[0] : "",
          fnameVal = "x";
        //dbg ("specialCasesLookup: " +keyPosition + " " + fnameKey);


        if (keyPosition >= 0) {
          if (fnameKey in switcherCfg.caseTbl) {
            fnameVal = switcherCfg.caseTbl[fnameKey][keyPosition];
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

      getCurrentLang: function() {
        var localedir = "en";
        if (window.docConfig !== undefined) {
          localedir = docConfig['localedir'].toLowerCase();
        }
        return localedir;
      },

      t: function(dataLang) {
        lg = this.getCurrentLang();

        var dict = (window.localeJsonObj || {});
        return dict[lg][dataLang] || dict['en'][dataLang] || dataLang;
      },

      setJsCookie: function(ckName, ckVal) {
        $.cookie(ckName, ckVal, {
          expires: 30,
          path: "/"
        });
      },

      updateTabLinks: function(linkUpdateSection) {

        //$('"'+linkUpdateSection + ' a"').each (function (i) {
        $(linkUpdateSection + ' a').each(function(i) {
          var $ele = $(this),
            href = $ele.attr("href"),
            hrefparts = href.split("/"),
            linkFileName = (hrefparts[hrefparts.length - 1].indexOf(".htm") > 0) ? hrefparts[hrefparts.length - 1] : "",
            linkPlat = hrefparts[hrefparts.length - 2],
            varsionPlatLabel = version + "~" + linkPlat;

          if ((linkPlat != plat) && (linkPlat in switcherCfg.basepaths && varsionPlatLabel in switcherCfg.switchercases)) {
            var newFname = (linkFileName != "") ? doc.switcher.specialCasesLookup(plat, linkFileName) : "x";

            if (newFname != "x") {
              //$ele.attr ("href", hrefpfx + "/" + plat + "/" + newFname);
              var pathpfx = hrefparts.slice(0, -1).join("/"),
                newURL = pathpfx.replace(switcherCfg.basepaths[linkPlat], switcherCfg.basepaths[plat]) + "/" + newFname;
              $ele.attr("href", newURL);
            } else {
              // dbg ("origHref: " + href);
              if(switcherCfg.basepaths[plat]){
				$ele.attr("href", href.replace(switcherCfg.basepaths[linkPlat], switcherCfg.basepaths[plat]));
			  }
            }
          }
        });

        // Update Search form parameter here.
      },



    }; //End of main return
  })();

  if (currentURL.match(/(\/en\/server\/.*\/cloud\/)/)) {
    $(".navigation-bar header h1 a").attr("href", '/' + doc.switcher.getCurrentLang() + '/cloud');
  }

  //Starting point
  var switcherLocation = ".column-13 h1, .column-17 h1, .column-18 h1",
    linkUpateSection = ".sub-nav-list";
  doc.switcher.addSwitcherLinks(switcherLocation);
  doc.switcher.updateTabLinks(linkUpateSection);
  $('.content-section a[data-plat]').on ("click", function (evt) {
		var $ele = $(this),
			plat = ($ele.attr("data-plat").match(/^[A-Za-z-_]+$/))?$ele.attr("data-plat"):null;
			version = $ele.attr("data-version");
			var prefVersionPlat = {
				"version": version,
				"platform": plat
			}
			sessionStorage.setItem("prefVersionPlat", JSON.stringify(prefVersionPlat))
	})



  $('#platforms .dropdown-menu a').on("click", function(evt) {
    window.location.href = $(this).attr("href");
  })

})
;
