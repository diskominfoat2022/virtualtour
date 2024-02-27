(function(){
    var script = {
 "start": "this.init()",
 "layout": "absolute",
 "children": [
  "this.MainViewer"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 6144
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 6144
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 6144
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 6144
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_F2379454_E535_44DB_41DB_DFA29DF3E5D6"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama7",
 "id": "panorama_C050F848_CB6C_A534_41B7_36CE2D96408B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -129.36,
   "class": "AdjacentPanorama",
   "yaw": -75.37,
   "panorama": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
   "distance": 1
  }
 ],
 "vfov": 67.17,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_camera",
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
  "yaw": -96.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD26BAFA_E983_1973_41D0_36845BF7CED7",
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
  "yaw": -17.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FAC00A95_E983_19B1_41EA_97B3B6845E1F",
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
  "yaw": -112.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDF39DAF_E983_1B91_41E5_3558A20A41D6",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -118.08,
   "class": "AdjacentPanorama",
   "yaw": 113.56,
   "panorama": "this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_t.jpg"
  }
 ],
 "vfov": 64.75,
 "overlays": [
  "this.overlay_F47A65C8_E514_C7CB_41E0_B5862554A148",
  "this.overlay_E672EB50_E886_F88F_41E7_379DBEA038FC",
  "this.overlay_E75DA3FC_E881_0F70_41E5_885FA7F17D8C"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama11",
 "id": "panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_camera",
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
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_camera",
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
 "id": "panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_camera",
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
 "id": "panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_camera",
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
 "id": "panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_camera",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.94,
   "class": "AdjacentPanorama",
   "yaw": -101.32,
   "panorama": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
   "distance": 1
  },
  {
   "backwardYaw": 73.52,
   "class": "AdjacentPanorama",
   "yaw": 87.48,
   "panorama": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_t.jpg"
  }
 ],
 "vfov": 64.54,
 "overlays": [
  "this.overlay_F07CFEB2_E513_445F_41E6_A496BE3EB516",
  "this.overlay_F12272D3_E50C_DDDD_41AC_8732A25DF1C5"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama20",
 "id": "panorama_C065AA1E_CB6D_654C_41DE_0F870932A635",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_t.jpg"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.48,
   "class": "AdjacentPanorama",
   "yaw": 73.52,
   "panorama": "this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635",
   "distance": 1
  },
  {
   "backwardYaw": -75.37,
   "class": "AdjacentPanorama",
   "yaw": -129.36,
   "panorama": "this.panorama_C050F848_CB6C_A534_41B7_36CE2D96408B",
   "distance": 1
  },
  {
   "backwardYaw": -69.73,
   "class": "AdjacentPanorama",
   "yaw": -73.17,
   "panorama": "this.panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79",
   "distance": 1
  },
  {
   "backwardYaw": -108.4,
   "class": "AdjacentPanorama",
   "yaw": -102.4,
   "panorama": "this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_t.jpg"
  }
 ],
 "vfov": 58.99,
 "overlays": [
  "this.overlay_F0F4BC9F_E533_4445_41EA_0F58C102CDAC",
  "this.overlay_F37124E7_E533_C5C5_41E0_AD74FF41E1B0",
  "this.overlay_F39F170E_E535_4447_41D3_EF6EA0C6255A",
  "this.overlay_F3BE3D9A_E534_C44F_41E5_01DF6AE21BAD"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama6",
 "id": "panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD153B8C_E983_1F97_41E0_03F285856EE1",
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
  "yaw": 56.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDBF0CEC_E983_1990_41EA_965B1E280867",
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
 "id": "panorama_E6A56C52_E883_18B0_41D7_44586B81D131_camera",
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
 "id": "panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_camera",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -99.97,
   "class": "AdjacentPanorama",
   "yaw": 99.7,
   "panorama": "this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110",
   "distance": 1
  },
  {
   "backwardYaw": -101.32,
   "class": "AdjacentPanorama",
   "yaw": -77.94,
   "panorama": "this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635",
   "distance": 1
  },
  {
   "backwardYaw": 140.21,
   "class": "AdjacentPanorama",
   "yaw": -150.1,
   "panorama": "this.panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597",
   "distance": 1
  },
  {
   "backwardYaw": -76.46,
   "class": "AdjacentPanorama",
   "yaw": 13.78,
   "panorama": "this.panorama_C0613291_CB65_A555_41A3_8D09F170431F",
   "distance": 1
  }
 ],
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/d/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/u/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_t.jpg"
  }
 ],
 "vfov": 73,
 "overlays": [
  "this.overlay_F78C2A9A_E513_4C4F_41E9_13A820929C3C",
  "this.overlay_F7F9034A_E513_5CCF_41DB_3D556971BF10",
  "this.overlay_C5F6485A_E5F7_4CCF_41E8_D968D41B54D3",
  "this.overlay_F93921B3_E981_0BF1_41AD_0625EFCB86EE"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama15",
 "id": "panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD6B6BF3_E983_1F71_41EA_53D86C9EE4D3",
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
 "id": "panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_camera",
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
  "yaw": 29.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD7B1C24_E983_1890_41E3_895B509BC4CC",
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
  "yaw": 83.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FAF04A62_E983_1893_41E3_6E79E4E95184",
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
 "id": "panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_camera",
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
  "yaw": -99.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FAECDA2E_E983_1890_41AA_C95AEFC7A2CB",
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
  "yaw": -92.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD373B2D_E983_1891_41E3_13DE3BF533C6",
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
  "yaw": 61.92,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDEDBD79_E983_1B71_41D4_611ED7925222",
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
  "yaw": 103.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC785F6B_E983_1890_41A6_773E0787D7F6",
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
  "yaw": 106.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD9DED4D_E983_1890_41EC_E1E71928820A",
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
  "yaw": 77.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC266E40_E983_1890_41D9_454AA59FDB4C",
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
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_E96649C9_E4F3_4FCD_41D7_E30DADB174CA",
  "this.overlay_E6D75021_E8BF_0890_41A3_60B4CFA12CA3",
  "this.overlay_F8C555A6_E881_0B93_41BB_5A0D03999C2C"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama4",
 "id": "panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.55,
   "class": "AdjacentPanorama",
   "yaw": -96.68,
   "panorama": "this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272",
   "distance": 1
  }
 ],
 "vfov": 59.26,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC6A7F38_E983_18FF_41EB_A4AA65C82589",
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
  "yaw": 109.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDAF7CB7_E983_19F0_41E1_1B43670BD625",
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
 "id": "panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_camera",
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
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_camera",
   "media": "this.panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_camera",
   "media": "this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_camera",
   "media": "this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_camera",
   "media": "this.panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_camera",
   "media": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0613291_CB65_A555_41A3_8D09F170431F_camera",
   "media": "this.panorama_C0613291_CB65_A555_41A3_8D09F170431F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_camera",
   "media": "this.panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_camera",
   "media": "this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_camera",
   "media": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_camera",
   "media": "this.panorama_C050F848_CB6C_A534_41B7_36CE2D96408B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_camera",
   "media": "this.panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_camera",
   "media": "this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_camera",
   "media": "this.panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_camera",
   "media": "this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_camera",
   "media": "this.panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E6A56C52_E883_18B0_41D7_44586B81D131_camera",
   "media": "this.panorama_E6A56C52_E883_18B0_41D7_44586B81D131",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_camera",
   "media": "this.panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC07BEA8_E983_199F_41E7_31785F49234E",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -123.53,
   "class": "AdjacentPanorama",
   "yaw": 83.93,
   "panorama": "this.panorama_C0613291_CB65_A555_41A3_8D09F170431F",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_t.jpg"
  }
 ],
 "vfov": 67.04,
 "overlays": [
  "this.overlay_F11BDF4F_E513_44C5_41B5_6190FFA88647",
  "this.overlay_E7F25E4E_E887_1890_41E1_44841A7A354F"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama17",
 "id": "panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/f/1/{row}_{column}.jpg",
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
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/l/1/{row}_{column}.jpg",
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
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/r/1/{row}_{column}.jpg",
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
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0/b/1/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_FCAE4AB7_E533_4C45_41E4_F8E0A4CD38D1",
  "this.overlay_FF0EB8ED_E533_4DCA_41E1_BB0ADE19E636",
  "this.overlay_FCD4B662_E533_C4FF_41D2_D8BBEA5E2DDF"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "Untitled_Panorama13",
 "id": "panorama_C17A8154_CBF3_65C1_41CF_A009865863CB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -102.77,
   "class": "AdjacentPanorama",
   "yaw": 133.91,
   "panorama": "this.panorama_E6A56C52_E883_18B0_41D7_44586B81D131",
   "distance": 1
  },
  {
   "backwardYaw": -102.4,
   "class": "AdjacentPanorama",
   "yaw": -108.4,
   "panorama": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
   "distance": 1
  },
  {
   "backwardYaw": -112.53,
   "class": "AdjacentPanorama",
   "yaw": 87.73,
   "panorama": "this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01",
   "distance": 1
  }
 ],
 "vfov": 60.34,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_t.jpg"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.78,
   "class": "AdjacentPanorama",
   "yaw": -76.46,
   "panorama": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
   "distance": 1
  },
  {
   "backwardYaw": 83.93,
   "class": "AdjacentPanorama",
   "yaw": -123.53,
   "panorama": "this.panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76",
   "distance": 1
  }
 ],
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/d/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/u/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_t.jpg"
  }
 ],
 "vfov": 83.22,
 "overlays": [
  "this.overlay_F6AE091A_E51C_CC4F_41E9_946DF5621CF8",
  "this.overlay_F69B77DF_E51D_C3C5_41CB_1F376640FC15",
  "this.overlay_E60395CB_E881_0B91_41D7_A368335ADE2A",
  "this.overlay_F9AAAAF3_E881_1970_41E8_FFAAE8D8C48F"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama16",
 "id": "panorama_C0613291_CB65_A555_41A3_8D09F170431F",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FA9969FB_E983_1B71_41E7_A4C071112491",
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
  "yaw": 171.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD59FC83_E983_1990_41A3_CD8D676FE2B9",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/d/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/u/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_F2F53880_E535_4C3B_418A_2FBB2DE35F18",
  "this.overlay_E7867726_E987_0893_41EC_CC1698335DF9",
  "this.overlay_E68011F7_E981_0B71_41CE_4F83E86B0618"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama8",
 "id": "panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.17,
   "class": "AdjacentPanorama",
   "yaw": -69.73,
   "panorama": "this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941",
   "distance": 1
  }
 ],
 "vfov": 84.38,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD8D1D18_E983_18BF_41E4_85D1B7B05FBA",
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
 "id": "panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_camera",
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
  "yaw": 102.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDC05DDA_E983_1BB3_41EC_C78CD981BCD3",
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
 "id": "panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_camera",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/d/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/u/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_EB757257_E4F3_DCC5_41E6_7FF912C50634",
  "this.overlay_F5E919FE_E50C_CFC7_41C6_280EF21763E1"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama1",
 "id": "panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 80.52,
   "class": "AdjacentPanorama",
   "yaw": 110.6,
   "panorama": "this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110",
   "distance": 1
  },
  {
   "backwardYaw": -96.68,
   "class": "AdjacentPanorama",
   "yaw": -95.55,
   "panorama": "this.panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A",
   "distance": 1
  }
 ],
 "vfov": 80.58,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD1B7BBF_E983_1FF0_41DB_97D6F8D6579A",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/d/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/u/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_F8C365E2_E50F_47FF_41D6_666213470296"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama7",
 "id": "panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 67.19,
   "class": "AdjacentPanorama",
   "yaw": -70.85,
   "panorama": "this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01",
   "distance": 1
  }
 ],
 "vfov": 72.54,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FDD67E0D_E983_1890_41D9_EE35B2127410",
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
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_E6989E46_E881_F893_41E1_8E978CA245B0",
  "this.overlay_E60BBF3B_E983_18F1_41E1_F21142CB6021",
  "this.overlay_F9374FED_E981_1791_41EB_C7AD9382F6C2"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama1",
 "id": "panorama_E6A56C52_E883_18B0_41D7_44586B81D131",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 133.91,
   "class": "AdjacentPanorama",
   "yaw": -102.77,
   "panorama": "this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB",
   "distance": 1
  }
 ],
 "vfov": 69.34,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC1A4F04_E983_1890_41E1_29EE2417DAA8",
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
  "yaw": 80.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC140ED9_E983_19B1_41E9_310E76A97C68",
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
  "yaw": 104.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD056B58_E983_18B0_41CD_950AD32AF30A",
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
  "yaw": -66.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FA9419CF_E983_1B90_41DB_17D67550EDBF",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": 162.39,
   "class": "AdjacentPanorama",
   "yaw": -8.6,
   "panorama": "this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/f/5/{row}_{column}.jpg",
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
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/l/5/{row}_{column}.jpg",
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
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/r/5/{row}_{column}.jpg",
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
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0/b/5/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_t.jpg"
  }
 ],
 "vfov": 62.92,
 "overlays": [
  "this.overlay_FEDC1EEF_E535_45C5_41E4_C90BE790B89E",
  "this.overlay_E619D785_E983_F791_41DE_28F42A0B7B0B",
  "this.overlay_F9873DAB_E981_7B90_41E6_3770ECA747E2"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama15",
 "id": "panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_camera",
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
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_F9F5FBA5_E50D_4C45_41C2_730F778F13F3",
  "this.overlay_F8298CCC_E50D_45CB_41DD_4D026BB50A6C",
  "this.overlay_C76599BC_E577_CC4B_41D9_4F9321B28E04"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama16",
 "id": "panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.73,
   "class": "AdjacentPanorama",
   "yaw": -112.53,
   "panorama": "this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB",
   "distance": 1
  },
  {
   "backwardYaw": -8.6,
   "class": "AdjacentPanorama",
   "yaw": 162.39,
   "panorama": "this.panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB",
   "distance": 1
  },
  {
   "backwardYaw": -70.85,
   "class": "AdjacentPanorama",
   "yaw": 67.19,
   "panorama": "this.panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A",
   "distance": 1
  }
 ],
 "vfov": 66.43,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_camera",
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
  "yaw": -92.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FD492C50_E983_188F_41E2_37338D211684",
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
  "yaw": 77.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC36FE74_E983_1977_41D2_C398F39C9D4C",
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
 "adjacentPanoramas": [
  {
   "backwardYaw": 110.6,
   "class": "AdjacentPanorama",
   "yaw": 80.52,
   "panorama": "this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272",
   "distance": 1
  },
  {
   "backwardYaw": 113.56,
   "class": "AdjacentPanorama",
   "yaw": -118.08,
   "panorama": "this.panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D",
   "distance": 1
  },
  {
   "backwardYaw": 99.7,
   "class": "AdjacentPanorama",
   "yaw": -99.97,
   "panorama": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
   "distance": 1
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_t.jpg"
  }
 ],
 "vfov": 58.61,
 "overlays": [
  "this.overlay_F5180DB0_E50F_445B_41CE_64D4709B947B",
  "this.overlay_F5A49F71_E50C_C4DD_41DE_4C9C618DA8D8",
  "this.overlay_FA1948E9_E533_4DCD_41E2_30658346324D"
 ],
 "hfovMax": 130,
 "label": "Untitled_Panorama10",
 "id": "panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FC480F9F_E983_17B1_41DB_82C2F37826F4",
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
 "id": "panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_camera",
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
 "id": "panorama_C0613291_CB65_A555_41A3_8D09F170431F_camera",
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
  "yaw": -69.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FA83799C_E983_1BB7_41A2_EB2500B9106D",
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
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_FAD09AC8_E983_1990_41EB_C5231CED7CA6",
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
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/f/4/{row}_{column}.jpg",
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
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/l/4/{row}_{column}.jpg",
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
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/r/4/{row}_{column}.jpg",
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
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0/b/4/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_E7E96958_E983_38BF_41D5_BEB51CFEF1E8",
  "this.overlay_F993952C_E983_0897_41E1_FEA8F4BE6C22"
 ],
 "hfovMax": 130,
 "label": "Untitled_PanoramaAA",
 "id": "panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.1,
   "class": "AdjacentPanorama",
   "yaw": 140.21,
   "panorama": "this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE",
   "distance": 1
  }
 ],
 "vfov": 63.99,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_t.jpg"
},
{
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 10,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
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
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "transitionDuration": 500,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#0033CC",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#666666",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#FFFFFF",
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
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941, this.camera_FD6B6BF3_E983_1F71_41EA_53D86C9EE4D3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEB36FD_E574_C5C5_41E2_0D89EE6CC531",
   "yaw": -75.37,
   "pitch": -23.82,
   "distance": 100,
   "hfov": 10.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.37,
   "hfov": 10.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.82
  }
 ],
 "id": "overlay_F2379454_E535_44DB_41DB_DFA29DF3E5D6",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110, this.camera_FDEDBD79_E983_1B71_41D4_611ED7925222); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF0E6EE_E574_C5C7_41EA_E885CB5E0DC4",
   "yaw": 113.56,
   "pitch": -24.93,
   "distance": 100,
   "hfov": 7.64
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.56,
   "hfov": 7.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ],
 "id": "overlay_F47A65C8_E514_C7CB_41E0_B5862554A148",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ]
   },
   "yaw": -70.44,
   "pitch": 13.74,
   "distance": 50,
   "hfov": 96.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.44,
   "hfov": 96.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_1_0_map.gif",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.74
  }
 ],
 "id": "overlay_E672EB50_E886_F88F_41E7_379DBEA038FC",
 "data": {
  "label": "Bidang Umum dan Kepegawaian"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 539
     }
    ]
   },
   "yaw": -75.15,
   "pitch": -3.26,
   "distance": 50,
   "hfov": 89.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.15,
   "hfov": 89.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_2_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.26
  }
 ],
 "id": "overlay_E75DA3FC_E881_0F70_41E5_885FA7F17D8C",
 "data": {
  "label": "- Penata Layanan Operasional\u000d- Pengadministrasi Perkantoran\u000d- Pengolah Data dan Informasi"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE, this.camera_FDC05DDA_E983_1BB3_41EC_C78CD981BCD3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFED26FD_E574_C5C5_41A3_BF641B4FEBF3",
   "yaw": -101.32,
   "pitch": -16.87,
   "distance": 100,
   "hfov": 8.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.32,
   "hfov": 8.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.87
  }
 ],
 "id": "overlay_F07CFEB2_E513_445F_41E6_A496BE3EB516",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941, this.camera_FDD67E0D_E983_1890_41D9_EE35B2127410); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFED66FD_E574_C5C5_41E6_56C69CABEB49",
   "yaw": 87.48,
   "pitch": -17.38,
   "distance": 100,
   "hfov": 7.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.48,
   "hfov": 7.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.38
  }
 ],
 "id": "overlay_F12272D3_E50C_DDDD_41AC_8732A25DF1C5",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB, this.camera_FD1B7BBF_E983_1FF0_41DB_97D6F8D6579A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFED96FD_E574_C5C5_41DD_B2B41B03AE4F",
   "yaw": -102.4,
   "pitch": -23.77,
   "distance": 100,
   "hfov": 6.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.4,
   "hfov": 6.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.77
  }
 ],
 "id": "overlay_F0F4BC9F_E533_4445_41EA_0F58C102CDAC",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635, this.camera_FD373B2D_E983_1891_41E3_13DE3BF533C6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C6311EC0_E50C_C43B_41E8_9AB2B827E3BB",
   "yaw": 73.52,
   "pitch": -17.4,
   "distance": 100,
   "hfov": 13.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.52,
   "hfov": 13.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.4
  }
 ],
 "id": "overlay_F37124E7_E533_C5C5_41E0_AD74FF41E1B0",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C050F848_CB6C_A534_41B7_36CE2D96408B, this.camera_FD056B58_E983_18B0_41CD_950AD32AF30A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEC76FD_E574_C5C5_41BB_AACFD42C36A4",
   "yaw": -129.36,
   "pitch": -14.73,
   "distance": 50,
   "hfov": 7.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.36,
   "hfov": 7.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_F39F170E_E535_4447_41D3_EF6EA0C6255A",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79, this.camera_FD153B8C_E983_1F97_41E0_03F285856EE1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEC86FD_E574_C5C5_41DB_C8CE5D366D94",
   "yaw": -73.17,
   "pitch": -14.26,
   "distance": 50,
   "hfov": 7.26
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.17,
   "hfov": 7.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ],
 "id": "overlay_F3BE3D9A_E534_C44F_41E5_01DF6AE21BAD",
 "data": {
  "label": "Arrow 01 Right"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110, this.camera_FC140ED9_E983_19B1_41E9_310E76A97C68); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEF36EE_E574_C5C7_4198_FC9030AEB632",
   "yaw": 99.7,
   "pitch": -21.54,
   "distance": 100,
   "hfov": 7.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.7,
   "hfov": 7.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ],
 "id": "overlay_F78C2A9A_E513_4C4F_41E9_13A820929C3C",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C065AA1E_CB6D_654C_41DE_0F870932A635, this.camera_FC1A4F04_E983_1890_41E1_29EE2417DAA8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEF56FD_E574_C5C5_41E8_B3DF193F8CEB",
   "yaw": -77.94,
   "pitch": -23.04,
   "distance": 100,
   "hfov": 10.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.94,
   "hfov": 10.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.04
  }
 ],
 "id": "overlay_F7F9034A_E513_5CCF_41DB_3D556971BF10",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0613291_CB65_A555_41A3_8D09F170431F, this.camera_FC785F6B_E983_1890_41A6_773E0787D7F6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEF96FD_E574_C5C5_41D6_FB06FC6C7E86",
   "yaw": 13.78,
   "pitch": -29.15,
   "distance": 100,
   "hfov": 10.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.78,
   "hfov": 10.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.15
  }
 ],
 "id": "overlay_C5F6485A_E5F7_4CCF_41E8_D968D41B54D3",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597, this.camera_FC6A7F38_E983_18FF_41EB_A4AA65C82589); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBF55C51_E982_F8B0_41E7_8F8A72CE7ED5",
   "yaw": -150.1,
   "pitch": -4.87,
   "distance": 50,
   "hfov": 12.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.1,
   "hfov": 12.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.87
  }
 ],
 "id": "overlay_F93921B3_E981_0BF1_41AD_0625EFCB86EE",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272, this.camera_FD8D1D18_E983_18BF_41E4_85D1B7B05FBA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF216EE_E574_C5C7_41DF_BF3DD7E3FD79",
   "yaw": -96.68,
   "pitch": -13.89,
   "distance": 100,
   "hfov": 5.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.68,
   "hfov": 5.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.89
  }
 ],
 "id": "overlay_E96649C9_E4F3_4FCD_41D7_E30DADB174CA",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ]
   },
   "yaw": -125.44,
   "pitch": 15.6,
   "distance": 50,
   "hfov": 50.95
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.44,
   "hfov": 50.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_1_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.6
  }
 ],
 "id": "overlay_E6D75021_E8BF_0890_41A3_60B4CFA12CA3",
 "data": {
  "label": "Dinas Komunikasi dan Informatika\u000dKabupaten Aceh Tengah"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_2_0.png",
      "width": 2047,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "yaw": -122.33,
   "pitch": 9.47,
   "distance": 50,
   "hfov": 49.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.33,
   "hfov": 49.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_2_0_map.gif",
      "width": 147,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.47
  }
 ],
 "id": "overlay_F8C555A6_E881_0B93_41BB_5A0D03999C2C",
 "data": {
  "label": "HRQ7+387, Kung, Pegasing, Central Aceh Regency, Aceh 24552\u000dhttps://diskominfo.acehtengahkab.go.id/"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0613291_CB65_A555_41A3_8D09F170431F, this.camera_FDBF0CEC_E983_1990_41EA_965B1E280867); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEE96FD_E574_C5C5_41E8_0CBDC09C88C7",
   "yaw": 83.93,
   "pitch": -21.21,
   "distance": 100,
   "hfov": 11.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.93,
   "hfov": 11.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.21
  }
 ],
 "id": "overlay_F11BDF4F_E513_44C5_41B5_6190FFA88647",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0_HS_1_0.png",
      "width": 1724,
      "class": "ImageResourceLevel",
      "height": 551
     }
    ]
   },
   "yaw": 117.13,
   "pitch": -1.71,
   "distance": 50,
   "hfov": 30.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.13,
   "hfov": 30.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0_HS_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "id": "overlay_E7F25E4E_E887_1890_41E1_44841A7A354F",
 "data": {
  "label": "Sekretaris"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941, this.camera_FC36FE74_E983_1977_41D2_C398F39C9D4C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEBE6FD_E574_C5C5_41D4_90E83677E410",
   "yaw": -108.4,
   "pitch": -17.1,
   "distance": 100,
   "hfov": 10.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.4,
   "hfov": 10.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.1
  }
 ],
 "id": "overlay_FCAE4AB7_E533_4C45_41E4_F8E0A4CD38D1",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01, this.camera_FC07BEA8_E983_199F_41E7_31785F49234E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEA66FD_E574_C5C5_41D4_2A8892C7B402",
   "yaw": 87.73,
   "pitch": -23.38,
   "distance": 100,
   "hfov": 8.04
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.73,
   "hfov": 8.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.38
  }
 ],
 "id": "overlay_FF0EB8ED_E533_4DCA_41E1_BB0ADE19E636",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6A56C52_E883_18B0_41D7_44586B81D131, this.camera_FC266E40_E983_1890_41D9_454AA59FDB4C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEAA70D_E574_C445_41E1_3651F091422C",
   "yaw": 133.91,
   "pitch": -14.95,
   "distance": 50,
   "hfov": 7.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.91,
   "hfov": 7.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.95
  }
 ],
 "id": "overlay_FCD4B662_E533_C4FF_41D2_D8BBEA5E2DDF",
 "data": {
  "label": "Arrow 01 Right"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE, this.camera_FAD09AC8_E983_1990_41EB_C5231CED7CA6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEE26FD_E574_C5C5_41EA_289CE74675BC",
   "yaw": -76.46,
   "pitch": -29.49,
   "distance": 100,
   "hfov": 10.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.46,
   "hfov": 10.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.49
  }
 ],
 "id": "overlay_F6AE091A_E51C_CC4F_41E9_946DF5621CF8",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76, this.camera_FD26BAFA_E983_1973_41D0_36845BF7CED7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEE76FD_E574_C5C5_41E5_D8F983A6EF69",
   "yaw": -123.53,
   "pitch": -12.92,
   "distance": 50,
   "hfov": 8.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.53,
   "hfov": 8.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.92
  }
 ],
 "id": "overlay_F69B77DF_E51D_C3C5_41CB_1F376640FC15",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 239
     }
    ]
   },
   "yaw": 119.39,
   "pitch": 9.06,
   "distance": 50,
   "hfov": 114.06
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.39,
   "hfov": 114.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_2_0_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 9.06
  }
 ],
 "id": "overlay_E60395CB_E881_0B91_41D7_A368335ADE2A",
 "data": {
  "label": "Bidang Persandian dan Statistik"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_3_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 791
     }
    ]
   },
   "yaw": 120.2,
   "pitch": -17.15,
   "distance": 50,
   "hfov": 110.36
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.2,
   "hfov": 110.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_3_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.15
  }
 ],
 "id": "overlay_F9AAAAF3_E881_1970_41E8_FFAAE8D8C48F",
 "data": {
  "label": "- JF. Statistisi Ahli Muda\u000d- JF. Sandiman Ahli Muda\u000d- Pengolah Data dan Informasi\u000d- Pengendali Konten Internet\u000d- Pengadministrasi Perkantoran"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941, this.camera_FD9DED4D_E983_1890_41EC_E1E71928820A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEB56FD_E574_C5C5_41D5_5EF786B91BB0",
   "yaw": -69.73,
   "pitch": -30.39,
   "distance": 100,
   "hfov": 10.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.73,
   "hfov": 10.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.39
  }
 ],
 "id": "overlay_F2F53880_E535_4C3B_418A_2FBB2DE35F18",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 370
     }
    ]
   },
   "yaw": 66.96,
   "pitch": 17.4,
   "distance": 50,
   "hfov": 101.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.96,
   "hfov": 101.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.4
  }
 ],
 "id": "overlay_E7867726_E987_0893_41EC_CC1698335DF9",
 "data": {
  "label": "Bidang Pengelolaan Layanan Informasi\u000ddan Komunikasi Publik"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 882
     }
    ]
   },
   "yaw": 68.6,
   "pitch": -13.94,
   "distance": 50,
   "hfov": 103.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.6,
   "hfov": 103.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_2_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.94
  }
 ],
 "id": "overlay_E68011F7_E981_0B71_41CE_4F83E86B0618",
 "data": {
  "label": "- JF. Pranata Humas Ahli Muda\u000d- JF. Pranata Siaran\u000d- JF. Penguji Perangkat Telekomunikasi\u000d- Pengendali Konten Internet\u000d- Pengolah Data dan Informasi\u000d- Penata Layanan Operasional\u000d- Pengadministrasi Perkantoran"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110, this.camera_FAECDA2E_E983_1890_41AA_C95AEFC7A2CB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF116EE_E574_C5C7_41C7_966C1091DFFA",
   "yaw": 110.6,
   "pitch": -13.18,
   "distance": 100,
   "hfov": 9.06
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.6,
   "hfov": 9.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.18
  }
 ],
 "id": "overlay_EB757257_E4F3_DCC5_41E6_7FF912C50634",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A, this.camera_FAF04A62_E983_1893_41E3_6E79E4E95184); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF156EE_E574_C5C7_41EA_91358633370D",
   "yaw": -95.55,
   "pitch": -25.4,
   "distance": 100,
   "hfov": 10.03
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.55,
   "hfov": 10.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.4
  }
 ],
 "id": "overlay_F5E919FE_E50C_CFC7_41C6_280EF21763E1",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01, this.camera_FDF39DAF_E983_1B91_41E5_3558A20A41D6); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C63A4F05_E50C_C445_41AA_377168117601",
   "yaw": -70.85,
   "pitch": -17.18,
   "distance": 100,
   "hfov": 11.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.85,
   "hfov": 11.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.18
  }
 ],
 "id": "overlay_F8C365E2_E50F_47FF_41D6_666213470296",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB, this.camera_FC480F9F_E983_17B1_41DB_82C2F37826F4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBECDC71_E982_F971_41C6_FB27F76937A1",
   "yaw": -102.77,
   "pitch": -20.86,
   "distance": 100,
   "hfov": 8.16
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.77,
   "hfov": 8.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ],
 "id": "overlay_E6989E46_E881_F893_41E1_8E978CA245B0",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 208
     }
    ]
   },
   "yaw": 104.64,
   "pitch": 23.61,
   "distance": 50,
   "hfov": 88.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.64,
   "hfov": 88.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_1_0_map.gif",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 23.61
  }
 ],
 "id": "overlay_E60BBF3B_E983_18F1_41E1_F21142CB6021",
 "data": {
  "label": "Bidang Layanan E-Government"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 477
     }
    ]
   },
   "yaw": 116.31,
   "pitch": 8.08,
   "distance": 50,
   "hfov": 118
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.31,
   "hfov": 118,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_2_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.08
  }
 ],
 "id": "overlay_F9374FED_E981_1791_41EB_C7AD9382F6C2",
 "data": {
  "label": "- JF. Pranata Komputer Ahli Muda\u000d- Pengolah Data dan Informasi\u000d- Penata Layanan Operasional\u000d- Penata Kelola Sistem dan Teknologi Informasi\u000d- Pengendali Konten Internet\u000d- Pengadministrasi Perkantoran"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01, this.camera_FAC00A95_E983_19B1_41EA_97B3B6845E1F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFEAF70D_E574_C445_41DA_E0C9E7793634",
   "yaw": -8.6,
   "pitch": -19.53,
   "distance": 100,
   "hfov": 13.51
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.6,
   "hfov": 13.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.53
  }
 ],
 "id": "overlay_FEDC1EEF_E535_45C5_41E4_C90BE790B89E",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_1_0.png",
      "width": 2047,
      "class": "ImageResourceLevel",
      "height": 441
     }
    ]
   },
   "yaw": -94.42,
   "pitch": 12.62,
   "distance": 50,
   "hfov": 81.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.42,
   "hfov": 81.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.62
  }
 ],
 "id": "overlay_E619D785_E983_F791_41DE_28F42A0B7B0B",
 "data": {
  "label": "Bagian Teknologi Informasi dan Komunikasi"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 520
     }
    ]
   },
   "yaw": -75.58,
   "pitch": -11.99,
   "distance": 50,
   "hfov": 120.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.58,
   "hfov": 120.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_2_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.99
  }
 ],
 "id": "overlay_F9873DAB_E981_7B90_41E6_3770ECA747E2",
 "data": {
  "label": "- JF. Manggala Informatika Ahli Muda\u000d- JF. Pembina Jasa Konstruksi Ahli Muda\u000d- JF. Penguji Perangkat Telekomunikasi Ahli Muda\u000d- Pengolah Data dan Informasi\u000d- Penelaah Teknis dan Kebijakan\u000d- Penata Kelola Sistem dan Teknologi Informasi"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C17A8154_CBF3_65C1_41CF_A009865863CB, this.camera_FD492C50_E983_188F_41E2_37338D211684); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFE9070D_E574_C445_41B9_646E757D3251",
   "yaw": -112.53,
   "pitch": -13.3,
   "distance": 100,
   "hfov": 9.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.53,
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.3
  }
 ],
 "id": "overlay_F9F5FBA5_E50D_4C45_41C2_730F778F13F3",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A, this.camera_FDAF7CB7_E983_19F0_41E1_1B43670BD625); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFE9B70D_E574_C445_41C7_619DA0E7955D",
   "yaw": 67.19,
   "pitch": -11.94,
   "distance": 100,
   "hfov": 10.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.19,
   "hfov": 10.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.94
  }
 ],
 "id": "overlay_F8298CCC_E50D_45CB_41DD_4D026BB50A6C",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB, this.camera_FD59FC83_E983_1990_41A3_CD8D676FE2B9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFE9C70D_E574_C445_41C3_F00BD6A8D3E9",
   "yaw": 162.39,
   "pitch": -18.53,
   "distance": 100,
   "hfov": 13.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.39,
   "hfov": 13.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.53
  }
 ],
 "id": "overlay_C76599BC_E577_CC4B_41D9_4F9321B28E04",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE, this.camera_FA9969FB_E983_1B71_41E7_A4C071112491); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF196EE_E574_C5C7_41E5_CCCD279A3E7C",
   "yaw": -99.97,
   "pitch": -21,
   "distance": 100,
   "hfov": 5.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.97,
   "hfov": 5.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21
  }
 ],
 "id": "overlay_F5180DB0_E50F_445B_41CE_64D4709B947B",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272, this.camera_FA83799C_E983_1BB7_41A2_EB2500B9106D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF036EE_E574_C5C7_41E3_0445803E9988",
   "yaw": 80.52,
   "pitch": -18.81,
   "distance": 100,
   "hfov": 8.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.52,
   "hfov": 8.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.81
  }
 ],
 "id": "overlay_F5A49F71_E50C_C4DD_41DE_4C9C618DA8D8",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D, this.camera_FA9419CF_E983_1B90_41DB_17D67550EDBF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CFF056EE_E574_C5C7_41D6_868C83D27D1D",
   "yaw": -118.08,
   "pitch": -13.38,
   "distance": 50,
   "hfov": 4.79
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.08,
   "hfov": 4.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ],
 "id": "overlay_FA1948E9_E533_4DCD_41E2_30658346324D",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0_HS_0_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 593
     }
    ]
   },
   "yaw": 119.8,
   "pitch": 1.48,
   "distance": 50,
   "hfov": 40.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.8,
   "hfov": 40.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_0_HS_0_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.48
  }
 ],
 "id": "overlay_E7E96958_E983_38BF_41D5_BEB51CFEF1E8",
 "data": {
  "label": "Kepala Dinas"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE, this.camera_FD7B1C24_E983_1890_41E3_895B509BC4CC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBEC0C71_E982_F971_41EA_7C07010BDE57",
   "yaw": 140.21,
   "pitch": -12.42,
   "distance": 100,
   "hfov": 10.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.21,
   "hfov": 10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.42
  }
 ],
 "id": "overlay_F993952C_E983_0897_41E1_FEA8F4BE6C22",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEB36FD_E574_C5C5_41E2_0D89EE6CC531",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C050F848_CB6C_A534_41B7_36CE2D96408B_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF0E6EE_E574_C5C7_41EA_E885CB5E0DC4",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C05E5B8B_CB64_9B34_41E0_B19C0039649D_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFED26FD_E574_C5C5_41A3_BF641B4FEBF3",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFED66FD_E574_C5C5_41E6_56C69CABEB49",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C065AA1E_CB6D_654C_41DE_0F870932A635_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFED96FD_E574_C5C5_41DD_B2B41B03AE4F",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_C6311EC0_E50C_C43B_41E8_9AB2B827E3BB",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEC76FD_E574_C5C5_41BB_AACFD42C36A4",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEC86FD_E574_C5C5_41DB_C8CE5D366D94",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C032EFDA_CB6F_9AD4_41E3_A96EF94E6941_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEF36EE_E574_C5C7_4198_FC9030AEB632",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEF56FD_E574_C5C5_41E8_B3DF193F8CEB",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEF96FD_E574_C5C5_41D6_FB06FC6C7E86",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_FBF55C51_E982_F8B0_41E7_8F8A72CE7ED5",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0636F0D_CB64_BB4D_41DF_946C6F67CEDE_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF216EE_E574_C5C7_41DF_BF3DD7E3FD79",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0E380F2_CB64_E6D7_41E6_AA743C896A9A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEE96FD_E574_C5C5_41E8_0CBDC09C88C7",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C06F29B1_CB64_A755_41E1_B52DEDB96E76_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEBE6FD_E574_C5C5_41D4_90E83677E410",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEA66FD_E574_C5C5_41D4_2A8892C7B402",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEAA70D_E574_C445_41E1_3651F091422C",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C17A8154_CBF3_65C1_41CF_A009865863CB_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEE26FD_E574_C5C5_41EA_289CE74675BC",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEE76FD_E574_C5C5_41E5_D8F983A6EF69",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0613291_CB65_A555_41A3_8D09F170431F_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEB56FD_E574_C5C5_41D5_5EF786B91BB0",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0581AB6_CB6D_A55C_41D2_711A8CC7DF79_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF116EE_E574_C5C7_41C7_966C1091DFFA",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF156EE_E574_C5C7_41EA_91358633370D",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C05C34CF_CB7D_AECD_41E6_D94DD874D272_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_C63A4F05_E50C_C445_41AA_377168117601",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0C32B4A_CBF1_A5C6_41C4_710116732A6A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_FBECDC71_E982_F971_41C6_FB27F76937A1",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E6A56C52_E883_18B0_41D7_44586B81D131_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFEAF70D_E574_C445_41DA_E0C9E7793634",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0683697_CBF7_AF4F_41DD_110E0323F8BB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFE9070D_E574_C445_41B9_646E757D3251",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFE9B70D_E574_C445_41C7_619DA0E7955D",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFE9C70D_E574_C445_41C3_F00BD6A8D3E9",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0E3C0CF_CBF6_E4DE_41E3_0F654E630C01_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF196EE_E574_C5C7_41E5_CCCD279A3E7C",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF036EE_E574_C5C7_41E3_0445803E9988",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CFF056EE_E574_C5C7_41D6_868C83D27D1D",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C06BAB74_CB7C_9BDC_4196_A8D82F098110_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_FBEC0C71_E982_F971_41EA_7C07010BDE57",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F9C08C9A_E981_19B0_41D8_CF98CF775597_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
}],
 "class": "Player",
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player451"
 },
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
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
