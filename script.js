(function(){
    var script = {
 "start": "this.playAudioList([this.audio_6E8B25E7_0B51_4737_4198_8F1FF63985B0]); this.init()",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.29,
  "pitch": -7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_ADAFE77E_0DB0_C319_41A8_6858435DBC38",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2038 copiar",
 "id": "panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2",
 "hfov": 360,
 "overlays": [
  "this.overlay_5BD837E7_0BD0_C337_414A_C9563164220E",
  "this.overlay_79E9688F_0B51_CDF6_41A6_EEEA70B86296",
  "this.overlay_791F9B95_0B51_C3EB_419A_B8BAAA8C8A85",
  "this.overlay_79451EA3_0B51_C52F_41A0_1DFA5C058E8B"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2075 copiar",
 "id": "panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B",
 "hfov": 360,
 "overlays": [
  "this.overlay_5BC2C5DB_0BD3_C71F_4182_894D2EF72AA1",
  "this.overlay_5A19CB85_0BD3_C3EB_41A1_A86011A98F97",
  "this.overlay_65475859_0B50_CD1B_41A6_468106593302"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1383_0BB1_C3EF_41A2_43545699B763"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2048 copiar",
 "id": "panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B179699_0BD7_C51A_4186_4D067867A1AC",
  "this.overlay_5BB847A5_0BD7_432B_4187_2ACA2B76DD98",
  "this.overlay_659CA7F1_0B51_432A_419C_EA8C611C189E",
  "this.overlay_651DA528_0B51_4739_419F_9BF74CDCA778",
  "this.overlay_657320B7_0B51_7D17_41A3_B70BBDCAC577",
  "this.overlay_76FFCEE1_0B73_452B_41A6_978E4503A38D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.37,
  "pitch": 0.59
 },
 "class": "PanoramaCamera",
 "id": "panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_6E8B25E7_0B51_4737_4198_8F1FF63985B0.mp3",
  "oggUrl": "media/audio_6E8B25E7_0B51_4737_4198_8F1FF63985B0.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_6E8B25E7_0B51_4737_4198_8F1FF63985B0",
 "autoplay": true,
 "data": {
  "label": "Background Music Corporate & Business Applications"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.24,
  "pitch": -0.92
 },
 "class": "PanoramaCamera",
 "id": "camera_ADCA8751_0DB0_C36B_4194_E2E0CAACFF3F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AE57E7CD_0DB0_C37B_4182_B16847261D6D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.73,
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_AE7857AB_0DB0_C33F_419A_43A429A192CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.06,
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "id": "camera_ADD4172F_0DB0_C337_41A2_3CCC8F77C2DD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.04,
  "pitch": 3.16
 },
 "class": "PanoramaCamera",
 "id": "panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.96,
  "pitch": -13.78
 },
 "class": "PanoramaCamera",
 "id": "camera_AE2FE807_0DB0_CCF7_4197_0DCA77EBF848",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "class": "SlideOutEffect",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "easing": "quad_in",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 57.86,
  "pitch": -9.18
 },
 "class": "PanoramaCamera",
 "id": "camera_AE4E07E6_0DB0_C329_41A0_EF26D17A7068",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 1100,
 "class": "FadeOutEffect",
 "id": "effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2065 copiar",
 "id": "panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF",
 "hfov": 360,
 "overlays": [
  "this.overlay_5BDF49B4_0BD3_CF29_41A4_DB5CCCFEA9B6",
  "this.overlay_65B1C9FC_0B57_4F19_4193_6A7CBD164FA9"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1383_0BB1_C3EF_41A2_43545699B763"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_AE4397DA_0DB0_C319_419E_35232AAD230A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2036 copiar",
 "id": "panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B3E4272_0BD1_BD29_41A1_C9DE025796FC",
  "this.overlay_5BBC7013_0BD1_5CEF_41A5_3D44695F6325",
  "this.overlay_5AA4EF7E_0BD1_4319_41A5_F7245C5B36F7",
  "this.overlay_7AF4E6E1_0B51_452B_41A1_CF1EAACF72F8",
  "this.overlay_7A0F9903_0B51_4CEF_4177_025932A3F77C",
  "this.overlay_7A3A4E76_0B51_4529_417B_C152093DA681",
  "this.overlay_7A506133_0B51_BF2F_41A5_4ABC85B2E77D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2046 copiar",
 "id": "panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B39ADB6_0BD7_C729_418B_DC9545AE1BAD",
  "this.overlay_659A22AB_0B51_DD3E_419F_B74013F571EF",
  "this.overlay_65B454E3_0B51_C52F_4168_E82AE5BEE76E",
  "this.overlay_65D6A6DC_0B51_C519_4193_101AFDB13EF8",
  "this.overlay_65DA987C_0B51_CD19_4166_781F0D83FBB0"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.4,
  "pitch": -0.99
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "class": "SlideInEffect",
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_493D1383_0BB1_C3EF_41A2_43545699B763_camera",
   "media": "this.panorama_493D1383_0BB1_C3EF_41A2_43545699B763",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_camera",
   "media": "this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_camera",
   "media": "this.panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_camera",
   "media": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_camera",
   "media": "this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_camera",
   "media": "this.panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_camera",
   "media": "this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_camera",
   "media": "this.panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_camera",
   "media": "this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_camera",
   "media": "this.panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_camera",
   "media": "this.panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_camera",
   "media": "this.panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_camera",
   "media": "this.panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_camera",
   "media": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_camera",
   "media": "this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.49,
  "pitch": -1.38
 },
 "class": "PanoramaCamera",
 "id": "panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "duration": 0,
 "class": "SlideInEffect",
 "id": "effect_255B4C65_0AEF_452B_417C_88DA499385F1",
 "easing": "linear",
 "from": "right"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.29,
  "pitch": -13.78
 },
 "class": "PanoramaCamera",
 "id": "camera_AE6D97C1_0DB0_C36B_4196_0DED1557E2EA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.49,
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "id": "camera_AD834795_0DB0_C3EB_41A2_DD0D4371857D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2032 copiar",
 "id": "panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B0B356E_0BD1_C739_4182_BECE99CD321A",
  "this.overlay_5A40AB83_0BD1_C3EF_4190_C64AC8A6B8BB",
  "this.overlay_5ADFAB70_0BD1_C329_41A5_573EA173CFB6",
  "this.overlay_7BDE4B9D_0B51_431B_41A4_00E79E0B4118",
  "this.overlay_7BF9D04A_0B51_7D79_4184_4B8D9DB51509",
  "this.overlay_7B25E475_0B51_452B_4183_4FC20F11677D",
  "this.overlay_7B44B803_0B51_4CEF_41A3_66AB5570EF6E"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2086 copiar",
 "id": "panorama_493D1383_0BB1_C3EF_41A2_43545699B763",
 "hfov": 360,
 "overlays": [
  "this.overlay_5AC0327A_0BD3_BD19_41A0_7B99844B0506",
  "this.overlay_656A77AE_0B50_C339_419E_34268E5A0202"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.78,
  "pitch": -6.43
 },
 "class": "PanoramaCamera",
 "id": "camera_AE61C7B6_0DB0_C329_4179_905FB3491806",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2063 copiar",
 "id": "panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F",
 "hfov": 360,
 "overlays": [
  "this.overlay_8E562D29_0DB1_C73B_4180_6E1D2D795845",
  "this.overlay_8E951351_0DB1_C36B_41A5_73C21236AFF3",
  "this.overlay_8EE758F3_0DB1_CD2F_41A3_95F5D8233265"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.82,
  "pitch": -9.18
 },
 "class": "PanoramaCamera",
 "id": "camera_AE39B7F1_0DB0_C32B_418A_7E3AFE2F2EDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.61,
  "pitch": -8.27
 },
 "class": "PanoramaCamera",
 "id": "camera_ADA70773_0DB0_C32F_4197_C9DED124C9CB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2052 copiar",
 "id": "panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12",
 "hfov": 360,
 "overlays": [
  "this.overlay_57DE73D3_0BD3_436F_4146_A3D25F2824BB"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.53,
  "pitch": -6.43
 },
 "class": "PanoramaCamera",
 "id": "camera_ADBD0767_0DB0_C337_4194_0C1B247C5B70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.19,
  "pitch": -0.4
 },
 "class": "PanoramaCamera",
 "id": "panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.22,
  "pitch": -12.86
 },
 "class": "PanoramaCamera",
 "id": "camera_ADC15746_0DB0_C369_4197_56E3E6B2A0F7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "class": "SlideOutEffect",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90,
  "pitch": -12.86
 },
 "class": "PanoramaCamera",
 "id": "camera_ADB4975C_0DB0_C319_4163_367B3A3FFA1E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.71,
  "pitch": 0.92
 },
 "class": "PanoramaCamera",
 "id": "camera_AD9A4789_0DB0_C3FB_41A7_FEA2A293256D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2044 copiar",
 "id": "panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B2B91C2_0BD7_5F69_41A6_322FE546AE76",
  "this.overlay_5A1A1E82_0BD7_45EE_41A6_0BB504AD7DEC",
  "this.overlay_65EB7BBE_0B51_C319_4192_B47064F02F51",
  "this.overlay_65044D20_0B51_C729_4190_3A16E648CF8C",
  "this.overlay_651B4135_0B51_FF2B_4194_F22E836A4FDC",
  "this.overlay_6538D540_0B51_C769_4198_833B74EB3E24",
  "this.overlay_6550F884_0B51_CDE9_4191_C56345322C3C"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2061 copiar",
 "id": "panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B816AE4_0BD3_4D29_4197_B8C3D052FDA6",
  "this.overlay_65C18DE4_0B51_4729_4173_BCCF2E291BE3",
  "this.overlay_65E280B7_0B51_5D17_41A1_F1950B9AA8C2",
  "this.overlay_65FEC3B7_0B51_4317_418E_B0EABA0EAB13",
  "this.overlay_650896AF_0B51_4537_4191_6CC563F36D69"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ADEA3717_0DB0_C316_41A7_DA6D6E5E4FA8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2077 copiar",
 "id": "panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D",
 "hfov": 360,
 "overlays": [
  "this.overlay_5BDB0B3B_0BD3_431E_4184_12E3B4BB796A",
  "this.overlay_593F1542_0BF1_4769_4190_EF40CA3D4A55",
  "this.overlay_659961FF_0B50_FF17_415C_35704040AC0A",
  "this.overlay_65B11412_0B50_C4E9_417A_F99180FBD151",
  "this.overlay_65D0B69B_0B50_C51F_4199_8E3B9BDEB82F",
  "this.overlay_65E1D8FB_0B50_CD1F_4183_D8CAF4D52998"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.12,
  "pitch": 1.98
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D1383_0BB1_C3EF_41A2_43545699B763_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "class": "SlideInEffect",
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.75,
  "pitch": -0.2
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -11.94
 },
 "class": "PanoramaCamera",
 "id": "camera_ADDAA73A_0DB0_C319_4190_9B5993C4FD0B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2081 copiar",
 "id": "panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B",
 "hfov": 360,
 "overlays": [
  "this.overlay_5A711FCC_0BD0_C379_41A4_5F45C95BC215",
  "this.overlay_59451294_0BD0_DDE9_41A3_82BE32A3B8DF",
  "this.overlay_65A7E455_0B50_C56B_4187_CFA04B705700",
  "this.overlay_65BDD66E_0B50_C539_41A2_36D683D9BBC7",
  "this.overlay_65C357E0_0B50_C329_4194_9B0FFB185780",
  "this.overlay_65D38A64_0B50_CD29_4192_5E59634BC84A",
  "this.overlay_740D76B2_0B70_C529_419B_6CC1F8ECACDB"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.33,
  "pitch": -2.57
 },
 "class": "PanoramaCamera",
 "id": "panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.02,
  "pitch": -2.97
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "SAM_100_2023 copiar",
 "id": "panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D",
 "hfov": 360,
 "overlays": [
  "this.overlay_5B3A81A7_0BD1_5F37_41A5_0EABD77EF5FE",
  "this.overlay_64B090AF_0B50_BD37_4185_0877BE7CE99C",
  "this.overlay_64DC33F7_0B51_4317_41A3_E7047215E25C"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.24,
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "id": "camera_AD8DC7A0_0DB0_C329_41A5_328CD652F21F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.33,
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "id": "camera_AE2587FC_0DB0_C319_4185_F6E42EC68491",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.88,
  "pitch": -12.86
 },
 "class": "PanoramaCamera",
 "id": "camera_AE1BC812_0DB0_CCE9_4168_C73032F4142D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.74,
  "pitch": -0.59
 },
 "class": "PanoramaCamera",
 "id": "panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -6.43
 },
 "class": "PanoramaCamera",
 "id": "camera_ADEF8724_0DB0_C329_41A5_436D486F3961",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 3.76
 },
 "class": "PanoramaCamera",
 "id": "panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 327.9,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "shadow": false
},
{
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "data": {
  "name": "FUNDO PRETO"
 },
 "shadow": false,
 "scaleMode": "fill"
},
{
 "maxHeight": 801,
 "maxWidth": 1000,
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "22%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "right": "8.7%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "class": "Image",
 "verticalAlign": "middle",
 "minWidth": 600,
 "click": "this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_7BD6D7FA_0576_1361_417E_6BC3DC2079D0, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_255B4C65_0AEF_452B_417C_88DA499385F1, 'showEffect', false)",
 "bottom": "10.22%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "data": {
  "name": "TEXTO INICIAL"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "backgroundOpacity": 0,
 "width": 80,
 "paddingBottom": 0,
 "right": "9.23%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "3.28%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "height": 74,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9, this.camera_AE6D97C1_0DB0_C36B_4196_0DED1557E2EA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6146BEBF_0BB1_4517_41A2_5B54F2BFA0D5",
   "yaw": 153.8,
   "pitch": -33.01,
   "distance": 100,
   "hfov": 31.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.8,
   "hfov": 31.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.01
  }
 ],
 "id": "overlay_5BD837E7_0BD0_C337_414A_C9563164220E",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -113.54,
 "pitch": 77.93,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_79E9688F_0B51_CDF6_41A6_EEEA70B86296"
},
{
 "bleachingDistance": 0.4,
 "yaw": 135.69,
 "pitch": 78.13,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_791F9B95_0B51_C3EB_419A_B8BAAA8C8A85"
},
{
 "bleachingDistance": 0.4,
 "yaw": 7.52,
 "pitch": 23.34,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_79451EA3_0B51_C52F_41A0_1DFA5C058E8B"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61438EBD_0BB1_451B_419D_7311E99A2063",
   "yaw": 2.68,
   "pitch": -27.08,
   "distance": 100,
   "hfov": 33.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.68,
   "hfov": 33.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.08
  }
 ],
 "id": "overlay_5BC2C5DB_0BD3_C71F_4182_894D2EF72AA1",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D, this.camera_AD834795_0DB0_C3EB_41A2_DD0D4371857D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61405EBD_0BB1_451B_41A0_942FA656ACCC",
   "yaw": -179.3,
   "pitch": -19.36,
   "distance": 100,
   "hfov": 35.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.3,
   "hfov": 35.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.36
  }
 ],
 "id": "overlay_5A19CB85_0BD3_C3EB_41A1_A86011A98F97",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 66.26,
 "pitch": 23.74,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65475859_0B50_CD1B_41A6_468106593302"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3, this.camera_AE2587FC_0DB0_C319_4185_F6E42EC68491); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61445EBF_0BB1_4517_4183_25AF85DD09AA",
   "yaw": 24.24,
   "pitch": -29.65,
   "distance": 100,
   "hfov": 32.51
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.24,
   "hfov": 32.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.65
  }
 ],
 "id": "overlay_5B179699_0BD7_C51A_4186_4D067867A1AC",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12, this.camera_AE39B7F1_0DB0_C32B_418A_7E3AFE2F2EDB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6144EEBF_0BB1_4517_4191_8841FB7E18E5",
   "yaw": -143.5,
   "pitch": -45.67,
   "distance": 100,
   "hfov": 26.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.5,
   "hfov": 26.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.67
  }
 ],
 "id": "overlay_5BB847A5_0BD7_432B_4187_2ACA2B76DD98",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -27.3,
 "pitch": 23.14,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_659CA7F1_0B51_432A_419C_EA8C611C189E"
},
{
 "bleachingDistance": 0.4,
 "yaw": 27.1,
 "pitch": -37.78,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_651DA528_0B51_4739_419F_9BF74CDCA778"
},
{
 "bleachingDistance": 0.4,
 "yaw": 23.34,
 "pitch": 10.09,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_657320B7_0B51_7D17_41A3_B70BBDCAC577"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B, this.camera_AE2FE807_0DB0_CCF7_4197_0DCA77EBF848); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83EB4EFB_0B51_451F_4184_376BF8497FC6",
   "yaw": 123.93,
   "pitch": -26.48,
   "distance": 100,
   "hfov": 33.48
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.93,
   "hfov": 33.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.48
  }
 ],
 "id": "overlay_76FFCEE1_0B73_452B_41A6_978E4503A38D",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F, this.camera_AE61C7B6_0DB0_C329_4179_905FB3491806); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6145FEC0_0BB1_4569_41A0_1D9C120A29FF",
   "yaw": -0.88,
   "pitch": -20.55,
   "distance": 100,
   "hfov": 35.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.88,
   "hfov": 35.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.55
  }
 ],
 "id": "overlay_5BDF49B4_0BD3_CF29_41A4_DB5CCCFEA9B6",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7D8B32D4_0B5F_5D69_41A2_8A4878DF42E8",
   "yaw": 87.93,
   "pitch": -6.9,
   "distance": 100,
   "hfov": 37.13
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.93,
   "hfov": 37.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.9
  }
 ],
 "id": "overlay_65B1C9FC_0B57_4F19_4193_6A7CBD164FA9",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B, this.camera_AE7857AB_0DB0_C33F_419A_43A429A192CC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61418EBE_0BB1_4519_4181_F4FB956C3D76",
   "yaw": 7.03,
   "pitch": -26.68,
   "distance": 100,
   "hfov": 33.42
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.03,
   "hfov": 33.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.68
  }
 ],
 "id": "overlay_5B3E4272_0BD1_BD29_41A1_C9DE025796FC",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61462EBE_0BB1_4519_4194_D5FBA9C31DF2",
   "yaw": 71.52,
   "pitch": -27.47,
   "distance": 100,
   "hfov": 33.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.52,
   "hfov": 33.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.47
  }
 ],
 "id": "overlay_5BBC7013_0BD1_5CEF_41A5_3D44695F6325",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A, this.camera_AD8DC7A0_0DB0_C329_41A5_328CD652F21F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6146CEBE_0BB1_4519_4194_27F62E08FA62",
   "yaw": -172.37,
   "pitch": -32.81,
   "distance": 100,
   "hfov": 31.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.37,
   "hfov": 31.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.81
  }
 ],
 "id": "overlay_5AA4EF7E_0BD1_4319_41A5_F7245C5B36F7",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 5.54,
 "pitch": 40.55,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7AF4E6E1_0B51_452B_41A1_CF1EAACF72F8"
},
{
 "bleachingDistance": 0.4,
 "yaw": 61.71,
 "pitch": 29.08,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7A0F9903_0B51_4CEF_4177_025932A3F77C"
},
{
 "bleachingDistance": 0.4,
 "yaw": -172.88,
 "pitch": -2.37,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7A3A4E76_0B51_4529_417B_C152093DA681"
},
{
 "bleachingDistance": 0.4,
 "yaw": -175.05,
 "pitch": 26.31,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7A506133_0B51_BF2F_41A5_4ABC85B2E77D"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3, this.camera_ADDAA73A_0DB0_C319_4190_9B5993C4FD0B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6147BEBF_0BB1_4517_41A4_92D6E2645526",
   "yaw": 164.68,
   "pitch": -42.5,
   "distance": 100,
   "hfov": 27.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.68,
   "hfov": 27.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.5
  }
 ],
 "id": "overlay_5B39ADB6_0BD7_C729_418B_DC9545AE1BAD",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -39.56,
 "pitch": 18.59,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_659A22AB_0B51_DD3E_419F_B74013F571EF"
},
{
 "bleachingDistance": 0.4,
 "yaw": -83.87,
 "pitch": 34.02,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65B454E3_0B51_C52F_4168_E82AE5BEE76E"
},
{
 "bleachingDistance": 0.4,
 "yaw": 12.66,
 "pitch": 20.97,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65D6A6DC_0B51_C519_4193_101AFDB13EF8"
},
{
 "bleachingDistance": 0.4,
 "yaw": 45.1,
 "pitch": 56.18,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65DA987C_0B51_CD19_4166_781F0D83FBB0"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F, this.camera_ADA70773_0DB0_C32F_4197_C9DED124C9CB); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6140AEBD_0BB1_451B_417B_8F90B2D3C510",
   "yaw": -89.69,
   "pitch": -26.09,
   "distance": 100,
   "hfov": 33.59
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.69,
   "hfov": 33.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.09
  }
 ],
 "id": "overlay_5B0B356E_0BD1_C739_4182_BECE99CD321A",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D, this.camera_AD9A4789_0DB0_C3FB_41A7_FEA2A293256D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61415EBE_0BB1_4519_41A3_040D14764FA7",
   "yaw": 0.9,
   "pitch": -29.05,
   "distance": 100,
   "hfov": 32.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.9,
   "hfov": 32.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.05
  }
 ],
 "id": "overlay_5A40AB83_0BD1_C3EF_4190_C64AC8A6B8BB",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B, this.camera_ADAFE77E_0DB0_C319_41A8_6858435DBC38); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61411EBE_0BB1_4519_4190_ABCB55912232",
   "yaw": 92.09,
   "pitch": -25.69,
   "distance": 100,
   "hfov": 33.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.09,
   "hfov": 33.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.69
  }
 ],
 "id": "overlay_5ADFAB70_0BD1_C329_41A5_573EA173CFB6",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 2.18,
 "pitch": 28.68,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7BDE4B9D_0B51_431B_41A4_00E79E0B4118"
},
{
 "bleachingDistance": 0.4,
 "yaw": -110.18,
 "pitch": 77.54,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7BF9D04A_0B51_7D79_4184_4B8D9DB51509"
},
{
 "bleachingDistance": 0.4,
 "yaw": 88.62,
 "pitch": 17.8,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7B25E475_0B51_452B_4183_4FC20F11677D"
},
{
 "bleachingDistance": 0.4,
 "yaw": -91.19,
 "pitch": -1.78,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_7B44B803_0B51_4CEF_41A3_66AB5570EF6E"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B, this.camera_AE4397DA_0DB0_C319_419E_35232AAD230A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6142AEBC_0BB1_4519_418E_E19AE231B280",
   "yaw": -6.62,
   "pitch": -24.9,
   "distance": 100,
   "hfov": 33.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.62,
   "hfov": 33.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.9
  }
 ],
 "id": "overlay_5AC0327A_0BD3_BD19_41A0_7B99844B0506",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -101.67,
 "pitch": 25.71,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_656A77AE_0B50_C339_419E_34268E5A0202"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF, this.camera_ADCA8751_0DB0_C36B_4194_E2E0CAACFF3F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5D880D0_0DD1_5D69_41A4_93F3B21D66C8",
   "yaw": -166.44,
   "pitch": -26.88,
   "distance": 100,
   "hfov": 33.36
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.44,
   "hfov": 33.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.88
  }
 ],
 "id": "overlay_8E562D29_0DB1_C73B_4180_6E1D2D795845",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280, this.camera_ADBD0767_0DB0_C337_4194_0C1B247C5B70); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5D870D1_0DD1_5D6B_41A2_F480526F24B4",
   "yaw": 126.5,
   "pitch": -28.26,
   "distance": 100,
   "hfov": 32.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.5,
   "hfov": 32.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.26
  }
 ],
 "id": "overlay_8E951351_0DB1_C36B_41A5_73C21236AFF3",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A, this.camera_ADB4975C_0DB0_C319_4163_367B3A3FFA1E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5D9D0D1_0DD1_5D6B_41A7_74C120C806A2",
   "yaw": 14.35,
   "pitch": -16.59,
   "distance": 100,
   "hfov": 35.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.35,
   "hfov": 35.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.59
  }
 ],
 "id": "overlay_8EE758F3_0DB1_CD2F_41A3_95F5D8233265",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85, this.camera_AE4E07E6_0DB0_C329_41A0_EF26D17A7068); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6144BEC0_0BB1_4569_4197_063CDCFCB0D0",
   "yaw": -168.62,
   "pitch": -39.34,
   "distance": 100,
   "hfov": 28.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.62,
   "hfov": 28.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.34
  }
 ],
 "id": "overlay_57DE73D3_0BD3_436F_4146_A3D25F2824BB",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85, this.camera_ADC15746_0DB0_C369_4197_56E3E6B2A0F7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61472EBF_0BB1_4517_418C_F83F552182E6",
   "yaw": 93.67,
   "pitch": -28.26,
   "distance": 100,
   "hfov": 32.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.67,
   "hfov": 32.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.26
  }
 ],
 "id": "overlay_5B2B91C2_0BD7_5F69_41A6_322FE546AE76",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6147EEBF_0BB1_4517_419F_89B6D42D1C67",
   "yaw": -179.3,
   "pitch": -36.37,
   "distance": 100,
   "hfov": 30.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.3,
   "hfov": 30.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.37
  }
 ],
 "id": "overlay_5A1A1E82_0BD7_45EE_41A6_0BB504AD7DEC",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -154.09,
 "pitch": 24.33,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65EB7BBE_0B51_C319_4192_B47064F02F51"
},
{
 "bleachingDistance": 0.4,
 "yaw": -164.37,
 "pitch": 10.68,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65044D20_0B51_C729_4190_3A16E648CF8C"
},
{
 "bleachingDistance": 0.4,
 "yaw": -88.02,
 "pitch": 14.84,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_651B4135_0B51_FF2B_4194_F22E836A4FDC"
},
{
 "bleachingDistance": 0.4,
 "yaw": 107.41,
 "pitch": 14.04,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_6538D540_0B51_C769_4198_833B74EB3E24"
},
{
 "bleachingDistance": 0.4,
 "yaw": 163.98,
 "pitch": 14.04,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_6550F884_0B51_CDE9_4191_C56345322C3C"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A, this.camera_AE57E7CD_0DB0_C37B_4182_B16847261D6D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61452EC0_0BB1_4569_41A6_AE6371BAD404",
   "yaw": -173.76,
   "pitch": -20.35,
   "distance": 100,
   "hfov": 35.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.76,
   "hfov": 35.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.35
  }
 ],
 "id": "overlay_5B816AE4_0BD3_4D29_4197_B8C3D052FDA6",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -6.33,
 "pitch": 50.04,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65C18DE4_0B51_4729_4173_BCCF2E291BE3"
},
{
 "bleachingDistance": 0.4,
 "yaw": 54,
 "pitch": 25.12,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65E280B7_0B51_5D17_41A1_F1950B9AA8C2"
},
{
 "bleachingDistance": 0.4,
 "yaw": 169.32,
 "pitch": 45.89,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65FEC3B7_0B51_4317_418E_B0EABA0EAB13"
},
{
 "bleachingDistance": 0.4,
 "yaw": 106.62,
 "pitch": 24.13,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_650896AF_0B51_4537_4191_6CC563F36D69"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61459EC0_0BB1_4569_415B_1B529299E4C0",
   "yaw": 163.1,
   "pitch": -29.65,
   "distance": 100,
   "hfov": 32.51
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.1,
   "hfov": 32.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.65
  }
 ],
 "id": "overlay_5BDB0B3B_0BD3_431E_4184_12E3B4BB796A",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B, this.camera_ADD4172F_0DB0_C337_41A2_3CCC8F77C2DD); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_613A4EC0_0BB1_4569_4185_D699B4D346D8",
   "yaw": -37.67,
   "pitch": -19.76,
   "distance": 100,
   "hfov": 35.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.67,
   "hfov": 35.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.76
  }
 ],
 "id": "overlay_593F1542_0BF1_4769_4190_EF40CA3D4A55",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -16.02,
 "pitch": 19.78,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_659961FF_0B50_FF17_415C_35704040AC0A"
},
{
 "bleachingDistance": 0.4,
 "yaw": -58.75,
 "pitch": 19.58,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65B11412_0B50_C4E9_417A_F99180FBD151"
},
{
 "bleachingDistance": 0.4,
 "yaw": -137.87,
 "pitch": 34.22,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65D0B69B_0B50_C51F_4199_8E3B9BDEB82F"
},
{
 "bleachingDistance": 0.4,
 "yaw": 93.96,
 "pitch": 48.07,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65E1D8FB_0B50_CD1F_4183_D8CAF4D52998"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_613AFEC0_0BB1_4569_41A1_039B89E63415",
   "yaw": 99.21,
   "pitch": -22.13,
   "distance": 100,
   "hfov": 34.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.21,
   "hfov": 34.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.13
  }
 ],
 "id": "overlay_5A711FCC_0BD0_C379_41A4_5F45C95BC215",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9, this.camera_ADEF8724_0DB0_C329_41A5_436D486F3961); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_613ABEC0_0BB1_4569_4175_EF0E0B838A10",
   "yaw": -162.09,
   "pitch": -26.28,
   "distance": 100,
   "hfov": 33.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.09,
   "hfov": 33.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.28
  }
 ],
 "id": "overlay_59451294_0BD0_DDE9_41A3_82BE32A3B8DF",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -18.79,
 "pitch": 34.81,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65A7E455_0B50_C56B_4187_CFA04B705700"
},
{
 "bleachingDistance": 0.4,
 "yaw": -114.33,
 "pitch": 42.73,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65BDD66E_0B50_C539_41A2_36D683D9BBC7"
},
{
 "bleachingDistance": 0.4,
 "yaw": -148.75,
 "pitch": 34.62,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65C357E0_0B50_C329_4194_9B0FFB185780"
},
{
 "bleachingDistance": 0.4,
 "yaw": 93.16,
 "pitch": 39.16,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_65D38A64_0B50_CD29_4192_5E59634BC84A"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85, this.camera_ADEA3717_0DB0_C316_41A7_DA6D6E5E4FA8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83E7CEFE_0B51_4519_4190_72C050BF35DA",
   "yaw": -103.54,
   "pitch": -15.01,
   "distance": 100,
   "hfov": 36.13
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.54,
   "hfov": 36.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.01
  }
 ],
 "id": "overlay_740D76B2_0B70_C529_419B_6CC1F8ECACDB",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A, this.camera_AE1BC812_0DB0_CCE9_4168_C73032F4142D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6140EEBD_0BB1_451B_4196_FEC643A180DC",
   "yaw": -155.56,
   "pitch": -16.39,
   "distance": 100,
   "hfov": 35.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.56,
   "hfov": 35.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.39
  }
 ],
 "id": "overlay_5B3A81A7_0BD1_5F37_41A5_0EABD77EF5FE",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 15.43,
 "pitch": 36.4,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_64B090AF_0B50_BD37_4185_0877BE7CE99C"
},
{
 "bleachingDistance": 0.4,
 "yaw": -93.96,
 "pitch": 37.78,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_64DC33F7_0B51_4317_41A3_E7047215E25C"
},
{
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "COLUNINHA"
 },
 "shadow": false
},
{
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6146BEBF_0BB1_4517_41A2_5B54F2BFA0D5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DD7B4_0BB1_4329_418F_CBD3926F7FB2_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61438EBD_0BB1_451B_419D_7311E99A2063",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61405EBD_0BB1_451B_41A0_942FA656ACCC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DD813_0BB1_CCEF_41A6_22F6FDCE012B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61445EBF_0BB1_4517_4183_25AF85DD09AA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6144EEBF_0BB1_4517_4191_8841FB7E18E5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_83EB4EFB_0B51_451F_4184_376BF8497FC6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D1481_0BB1_45EB_41A2_06B535DA9A85_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6145FEC0_0BB1_4569_41A0_1D9C120A29FF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_7D8B32D4_0B5F_5D69_41A2_8A4878DF42E8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DAE92_0BB1_C5E9_417D_B793140C67FF_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61418EBE_0BB1_4519_4181_F4FB956C3D76",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61462EBE_0BB1_4519_4194_D5FBA9C31DF2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6146CEBE_0BB1_4519_4194_27F62E08FA62",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DCCE2_0BB1_452E_41A2_9D666195E6A9_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6147BEBF_0BB1_4517_41A4_92D6E2645526",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D2B6B_0BB1_433F_41A4_1A04C1254322_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6140AEBD_0BB1_451B_417B_8F90B2D3C510",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61415EBE_0BB1_4519_41A3_040D14764FA7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61411EBE_0BB1_4519_4190_ABCB55912232",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_492062C1_0BB0_BD6B_41A1_0A1539AC822A_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6142AEBC_0BB1_4519_418E_E19AE231B280",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D1383_0BB1_C3EF_41A2_43545699B763_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_A5D880D0_0DD1_5D69_41A4_93F3B21D66C8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_A5D870D1_0DD1_5D6B_41A2_F480526F24B4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_A5D9D0D1_0DD1_5D6B_41A7_74C120C806A2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_88B538ED_0DB1_4D3B_419E_D51343FBC45F_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6144BEC0_0BB1_4569_4197_063CDCFCB0D0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D1D16_0BB1_44E9_417A_2F7C8B091B12_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61472EBF_0BB1_4517_418C_F83F552182E6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6147EEBF_0BB1_4517_419F_89B6D42D1C67",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493C91D5_0BB1_7F6B_4182_9532B45251A3_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61452EC0_0BB1_4569_41A6_AE6371BAD404",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493DF5BA_0BB1_C719_4186_E7B4AD8FA280_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_61459EC0_0BB1_4569_415B_1B529299E4C0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_613A4EC0_0BB1_4569_4185_D699B4D346D8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D211F_0BB1_FF17_419E_B70B075B4A7D_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_613AFEC0_0BB1_4569_41A1_039B89E63415",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_613ABEC0_0BB1_4569_4175_EF0E0B838A10",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_83E7CEFE_0B51_4519_4190_72C050BF35DA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_493D9A42_0BB1_CD69_41A1_B3F7108AE24B_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_6140EEBD_0BB1_451B_4196_FEC643A180DC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4F2DF4FF_0BB0_C517_41A0_A395049F6A3D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "rowCount": 6
},
{
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 80,
 "maxWidth": 50,
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "bottom": "40%",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "BOT\u00c3O ABRIR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "90%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": 9,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "bottom": "40%",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "BOTAO FECHAR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_83DD8401_0DB0_C4EB_419C_E1941B6B6C9E",
  "this.ViewerAreaLabeled_87EE0F81_0DB3_C3EB_419C_475E7C527034",
  "this.ViewerAreaLabeled_9D2E557C_0DB0_C719_41A6_3985EF137085",
  "this.ViewerAreaLabeled_8285923A_0DB3_5D19_4185_071C230AF4B1"
 ],
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "paddingLeft": 40,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 2268,
 "maxWidth": 400,
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "16.96%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "right": "21.29%",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "12.22%",
 "class": "Image",
 "verticalAlign": "middle",
 "minWidth": 1,
 "bottom": "0%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "data": {
  "name": "REDES VERTICAL"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_83DD8401_0DB0_C4EB_419C_E1941B6B6C9E",
 "left": "23%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "right": "25.15%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "13.17%",
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": "67.32%",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=558581115716&text=Ol%C3%A1%2C%20gostaria%20de%20tratar%20do%20assunto%3A', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ZAP"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_87EE0F81_0DB3_C3EB_419C_475E7C527034",
 "left": "20.66%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "55.76%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "17.246%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "37.4%",
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "click": "this.openLink('https://azevedoeadvogados.adv.br/', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "SITE"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_9D2E557C_0DB0_C719_41A6_3985EF137085",
 "left": "20.74%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "55.76%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "15.451%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": "26.35%",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "click": "this.openLink('https://www.facebook.com/AzevedoeAdvogados', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "FACE"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_8285923A_0DB3_5D19_4185_071C230AF4B1",
 "left": "18.48%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "57.604%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "18.325%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": "3.01%",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "click": "this.openLink('https://www.instagram.com/azevedo.advs/', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "INSTA"
 }
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player1098"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
