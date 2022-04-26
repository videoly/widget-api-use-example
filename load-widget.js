const conf = {
  "properties": {
    "maxItems": 6,
    "currency": "USD"
  },
  "propertiesMap": {
    "productTitle": [
      ".title"
    ],
    "productId": [
      "#videoly-product-id"
    ],
    "productPrice": [
      "#price-preview"
    ],
    "currency": [
      "#videoly-product-currency"
    ],
    "productCheck": [],
    "shopDepartment": [],
    "prodGroup": []
  },
  "displayName": "Videoly/DevShop",
  "__v": 6,
  "lastPublishingCountDate": "2019-03-08T00:00:00.000Z",
  "requiredProperties": [
    "productTitle"
  ],
  "options": {
    "widgetBehavior": {
      "injectWidget": false
    },
    "httpServiceType": "jsonp",
    "whiteLabelTitle": true,
    "ytAfm": true,
    "disableOn": [],
    "anchor": [
      {
        "selector": ".description",
        "insertPosition": "firstChild"
      }
    ],
    "platformDependantAnchor": {
      "mobile": [
        {
          "selector": ".mobile-placement",
          "insertPosition": "lastChild"
        }
      ],
      "desktop": [
        {
          "selector": ".description",
          "insertPosition": "lastChild"
        }
      ],
      "tablet": [
        {
          "selector": ".tablet-placement",
          "insertPosition": "lastChild"
        }
      ]
    },
    "gaReporting": true,
    "gaReportingVerbosity": "full",
    "listFrameStyle": "",
    "videoListTitleStyle": "",
    "playerHeight": 456,
    "playerWidth": 580,
    "gaID": "UA-45715207-7",
    "playerFrame": {
      "src": {
        "useOn": [
          {
            "browser": "safari"
          }
        ],
        "value": "/blank-page-for-videoly-player.html",
        "enabled": false
      }
    },
    "parentHeadElements": [
      {
        "text": "@media(desktop) {}",
        "tag": "style"
      }
    ],
    "customStyles": {
      "outerCss": "",
      "videoListDocumentOverlay": "",
      "videoListDocument": "",
      "playerOverlay": "",
      "player": ""
    },
    "initYTPlayer": {
      "other": "init",
      "tablet": "play",
      "mobile": "init",
      "desktop": "init"
    },
    "useExpandingPopup": true,
    "useHistoryAPI": true,
    "theme": "white",
    "disableMoreButton": false,
    "renderImmediate": true,
    "customWidgetSelector": [],
    "widgetMode": 0,
    "stock": [],
    "ATCSelectors": [
      {
        "xpath": "//*[@id='add-to-cart']",
        "reports": {},
        "label": "buy"
      }
    ],
    "disableGenreLabels": false,
    "videoListWrapper": [{
      "tag": "div",
      "attrs": {
        "class": "CONTAINER_OF_THE_VIDEO_LIST"
      },
      "_content": [{
        "videoListFrame": true
      }]
    }],
    "playerHeadElements": [],
    "listHeadElements": [],
    "videoboxLayout": "horizontal",
    "staticTitle": true,
    "whiteLabelPlayer": false,
    "whiteLabel": true,
    "dynamic": {
      "interval": 0,
      "trackedNodes": [],
      "propertiesBased": true
    },
    "toggleElements": [],
    "container": [],
    "anchorLastChild": [
      false
    ],
    "useOverlay": true,
    "reportWatchingProgressOn": [
      25,
      50,
      95
    ],
    "dataLayerName": "dataLayer",
    "dataLayerReporting": false,
    "gaTrackerName": "",
    "gaObject": "ga",
    "gaVersion": "classic",
    "widgetExtensions": {
      "widgetPreventer": {
        "enabled": true
      },
      "videoCatcher": {
        "enabled": true
      },
      "showVideoLang": {
        "enabled": true
      }
    },
    "customDisclaimer": {
      "sv": "Eftersom videon levereras av YouTube kan produktens specifikationer variera från den verkliga produkten. Vänligen läs mer på produktspecifikationer och -beskrivning.",
      "no": "Da videoen er levert av YouTube kan produktets spesifikasjoner variere fra det faktiske produktet. Vennligst les mer på produktets spesifikasjoner og beskrivelse.",
      "ru": "Da videoen er leveret af YouTube, kan produktets specifikationer variere fra det faktiske produkt. Læs venligst mere under produktspecifikationer og -beskrivelse.",
      "en": "YouTuben kautta julkaistavien videoiden tekniset tiedot voivat erota Gigantilla myytävästä tuotteesta. Tarkat tiedot löydät Gigantin verkkokaupasta."
    }
  },
  "API_BASE": "https://dapi.videoly.co/",
  "API_VERSION": "1",
  "API_PKG_VERSION": "1.43.34",
  "VIDEOS_URL": "/videos/0/99/",
  "OWN_VIDEOS_URL": "/own-videos/0/99/",
  "EVENT_URL": "/event/0/99/",
  "ATC_URL": "/atc/0/99/",
  "widgetVersion": 1,
  "WIDGET_PKG_VERSION": "1.51.1"
};


window.VideolyWidget.load(conf);