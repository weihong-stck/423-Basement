var APP_DATA = {
  "scenes": [
    {
      "id": "0-bar-with-living",
      "name": "Bar with living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1317935465513855,
          "pitch": 0.1659595323487011,
          "rotation": 0,
          "target": "1-stair"
        },
        {
          "yaw": 2.986085215016887,
          "pitch": 0.24846583789685006,
          "rotation": 0,
          "target": "2-sport-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5571721149286457,
          "pitch": 0.17847269937576726,
          "rotation": 0,
          "target": "0-bar-with-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sport-area",
      "name": "Sport Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7947274959379502,
          "pitch": 0.27756984458344647,
          "rotation": 0,
          "target": "0-bar-with-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "423new market",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
