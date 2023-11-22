//@@viewOn:imports
import { Utils, createVisualComponent, DynamicLibraryComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import PositionBar from "../core/position-bar.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ShoppingListDetailDesign = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListDetailDesign",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <PositionBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <DynamicLibraryComponent
            uu5Tag={"UuBml.Draw.Diagram"}
            value={{
              id: "c2268753689354bfea41fc7a9804f99e",
              author: "642-1-1",
              name: "Detail nákupního seznamu",
              size: {
                width: 1304,
                height: 1304,
              },
              editMode: {
                frameVisible: true,
                gridVisible: true,
                socketsVisible: false,
                plugsVisible: false,
                anchorsVisible: false,
                consoleVisible: false,
              },
              presentationMode: {
                frameVisible: false,
                gridVisible: false,
                socketsVisible: false,
                plugsVisible: false,
                anchorsVisible: false,
              },
              elementMap: {
                54529856: {
                  id: "54529856",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    c4de1ac0: {
                      id: "c4de1ac0",
                      position: {
                        x: 416,
                        y: 448,
                      },
                      elementId: "84de0b66",
                      socketId: "44d34892",
                    },
                    "0400ab0f": {
                      id: "0400ab0f",
                      position: {
                        x: 416,
                        y: 408,
                      },
                      elementId: "e423a991",
                      socketId: "b4335954",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "c4de1ac0",
                    pointer: null,
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "0400ab0f",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "associationN",
                  bounds: {
                    minX: 416,
                    minY: 408,
                    maxX: 416,
                    maxY: 448,
                  },
                },
                74756859: {
                  id: "74756859",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    c443cbfe: {
                      id: "c443cbfe",
                      position: {
                        x: 1040,
                        y: 704,
                      },
                      elementId: "f4fd9bc8",
                      socketId: "a4c48a37",
                    },
                    "34d30a6c": {
                      id: "34d30a6c",
                      position: {
                        x: 1008,
                        y: 680,
                      },
                      elementId: "6413a850",
                      socketId: "b4130a7a",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "c443cbfe",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "34d30a6c",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 1008,
                    minY: 680,
                    maxX: 1040,
                    maxY: 704,
                  },
                },
                "04b4cb15": {
                  id: "04b4cb15",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 512,
                    y: 64,
                  },
                  uuIdentity: null,
                  text: "ShoppingListDetail",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "objective",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "e4be79dc",
                    "5489491d",
                    "541b593d",
                    "f4df58e6",
                    "6407abe4",
                    "4467d9d1",
                    "d4432a2f",
                    "b4bd39f8",
                    "549fcaa1",
                  ],
                  rightPointList: [
                    "447009ea",
                    "14f8f850",
                    "a437ea5f",
                    "44dd8a53",
                    "74bd6be5",
                    "14b4db3b",
                    "7401b866",
                    "a4578b4d",
                  ],
                  leftPointList: [
                    "a4abe9bb",
                    "843cd8f3",
                    "a4b5b97f",
                    "14cedaa3",
                    "14ec3b12",
                    "c4d5587a",
                    "f4d99b15",
                    "24055b4b",
                  ],
                  bottomPointList: [
                    "e4fa5946",
                    "c48c8b68",
                    "a4baba6e",
                    "34ab7940",
                    "443ac92a",
                    "b43cf8a3",
                    "d434681a",
                    "e4d10b9c",
                    "8485b9ac",
                  ],
                  socketMap: {
                    e4be79dc: {
                      id: "e4be79dc",
                      position: {
                        x: 512,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "5489491d": {
                      id: "5489491d",
                      position: {
                        x: 520,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "541b593d": {
                      id: "541b593d",
                      position: {
                        x: 528,
                        y: 64,
                      },
                      plugList: [],
                    },
                    f4df58e6: {
                      id: "f4df58e6",
                      position: {
                        x: 536,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "6407abe4": {
                      id: "6407abe4",
                      position: {
                        x: 544,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "4467d9d1": {
                      id: "4467d9d1",
                      position: {
                        x: 552,
                        y: 64,
                      },
                      plugList: [],
                    },
                    d4432a2f: {
                      id: "d4432a2f",
                      position: {
                        x: 560,
                        y: 64,
                      },
                      plugList: [],
                    },
                    b4bd39f8: {
                      id: "b4bd39f8",
                      position: {
                        x: 568,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "549fcaa1": {
                      id: "549fcaa1",
                      position: {
                        x: 576,
                        y: 64,
                      },
                      plugList: [],
                    },
                    "447009ea": {
                      id: "447009ea",
                      position: {
                        x: 576,
                        y: 72,
                      },
                      plugList: [],
                    },
                    "14f8f850": {
                      id: "14f8f850",
                      position: {
                        x: 576,
                        y: 80,
                      },
                      plugList: [],
                    },
                    a437ea5f: {
                      id: "a437ea5f",
                      position: {
                        x: 576,
                        y: 88,
                      },
                      plugList: [],
                    },
                    "44dd8a53": {
                      id: "44dd8a53",
                      position: {
                        x: 576,
                        y: 96,
                      },
                      plugList: [],
                    },
                    "74bd6be5": {
                      id: "74bd6be5",
                      position: {
                        x: 576,
                        y: 104,
                      },
                      plugList: [],
                    },
                    "14b4db3b": {
                      id: "14b4db3b",
                      position: {
                        x: 576,
                        y: 112,
                      },
                      plugList: [],
                    },
                    "7401b866": {
                      id: "7401b866",
                      position: {
                        x: 576,
                        y: 120,
                      },
                      plugList: [],
                    },
                    a4578b4d: {
                      id: "a4578b4d",
                      position: {
                        x: 576,
                        y: 128,
                      },
                      plugList: [],
                    },
                    a4abe9bb: {
                      id: "a4abe9bb",
                      position: {
                        x: 512,
                        y: 72,
                      },
                      plugList: [],
                    },
                    "843cd8f3": {
                      id: "843cd8f3",
                      position: {
                        x: 512,
                        y: 80,
                      },
                      plugList: [],
                    },
                    a4b5b97f: {
                      id: "a4b5b97f",
                      position: {
                        x: 512,
                        y: 88,
                      },
                      plugList: [],
                    },
                    "14cedaa3": {
                      id: "14cedaa3",
                      position: {
                        x: 512,
                        y: 96,
                      },
                      plugList: [],
                    },
                    "14ec3b12": {
                      id: "14ec3b12",
                      position: {
                        x: 512,
                        y: 104,
                      },
                      plugList: [],
                    },
                    c4d5587a: {
                      id: "c4d5587a",
                      position: {
                        x: 512,
                        y: 112,
                      },
                      plugList: [],
                    },
                    f4d99b15: {
                      id: "f4d99b15",
                      position: {
                        x: 512,
                        y: 120,
                      },
                      plugList: [],
                    },
                    "24055b4b": {
                      id: "24055b4b",
                      position: {
                        x: 512,
                        y: 128,
                      },
                      plugList: [],
                    },
                    e4fa5946: {
                      id: "e4fa5946",
                      position: {
                        x: 512,
                        y: 152,
                      },
                      plugList: [],
                    },
                    c48c8b68: {
                      id: "c48c8b68",
                      position: {
                        x: 520,
                        y: 152,
                      },
                      plugList: [],
                    },
                    a4baba6e: {
                      id: "a4baba6e",
                      position: {
                        x: 528,
                        y: 152,
                      },
                      plugList: [],
                    },
                    "34ab7940": {
                      id: "34ab7940",
                      position: {
                        x: 536,
                        y: 152,
                      },
                      plugList: [],
                    },
                    "443ac92a": {
                      id: "443ac92a",
                      position: {
                        x: 544,
                        y: 152,
                      },
                      plugList: [
                        {
                          elementId: "54e5b8b7",
                          plugId: "5461f976",
                        },
                      ],
                    },
                    b43cf8a3: {
                      id: "b43cf8a3",
                      position: {
                        x: 552,
                        y: 152,
                      },
                      plugList: [],
                    },
                    d434681a: {
                      id: "d434681a",
                      position: {
                        x: 560,
                        y: 152,
                      },
                      plugList: [],
                    },
                    e4d10b9c: {
                      id: "e4d10b9c",
                      position: {
                        x: 568,
                        y: 152,
                      },
                      plugList: [],
                    },
                    "8485b9ac": {
                      id: "8485b9ac",
                      position: {
                        x: 576,
                        y: 152,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 480,
                    minY: 64,
                    maxX: 608,
                    maxY: 152,
                  },
                },
                "1403bbc1": {
                  id: "1403bbc1",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 640,
                    y: 320,
                  },
                  uuIdentity: null,
                  text: "LinkPanel\n<Uu5Elements>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {
                    uuBmlIconLabelCode: "r",
                  },
                  topPointList: [
                    "146518f7",
                    "f4e50b1c",
                    "84950aa8",
                    "349e8a43",
                    "54e5480b",
                    "4470bada",
                    "149e5a6f",
                    "14cfdadf",
                    "a496aa54",
                  ],
                  rightPointList: [
                    "747a097b",
                    "c4c67bf2",
                    "74aa38b2",
                    "24d7b968",
                    "e43a782f",
                    "a46049a8",
                    "84e419d8",
                    "a452fb31",
                  ],
                  leftPointList: [
                    "042d4a98",
                    "6419084f",
                    "d4314ae3",
                    "f43f9a2d",
                    "34081a9f",
                    "145da894",
                    "f4a3ba76",
                    "a42ed868",
                  ],
                  bottomPointList: [
                    "c4e5788f",
                    "d4d26a6f",
                    "64efab96",
                    "34de0b5d",
                    "9439da20",
                    "240ebb05",
                    "a459db43",
                    "5464da5a",
                    "a4573bf9",
                  ],
                  socketMap: {
                    "146518f7": {
                      id: "146518f7",
                      position: {
                        x: 640,
                        y: 320,
                      },
                      plugList: [],
                    },
                    f4e50b1c: {
                      id: "f4e50b1c",
                      position: {
                        x: 648,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "84950aa8": {
                      id: "84950aa8",
                      position: {
                        x: 656,
                        y: 320,
                      },
                      plugList: [
                        {
                          elementId: "e4a9280b",
                          plugId: "b427db90",
                        },
                      ],
                    },
                    "349e8a43": {
                      id: "349e8a43",
                      position: {
                        x: 664,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "54e5480b": {
                      id: "54e5480b",
                      position: {
                        x: 672,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "4470bada": {
                      id: "4470bada",
                      position: {
                        x: 680,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "149e5a6f": {
                      id: "149e5a6f",
                      position: {
                        x: 688,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "14cfdadf": {
                      id: "14cfdadf",
                      position: {
                        x: 696,
                        y: 320,
                      },
                      plugList: [],
                    },
                    a496aa54: {
                      id: "a496aa54",
                      position: {
                        x: 704,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "747a097b": {
                      id: "747a097b",
                      position: {
                        x: 704,
                        y: 328,
                      },
                      plugList: [],
                    },
                    c4c67bf2: {
                      id: "c4c67bf2",
                      position: {
                        x: 704,
                        y: 336,
                      },
                      plugList: [],
                    },
                    "74aa38b2": {
                      id: "74aa38b2",
                      position: {
                        x: 704,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "24d7b968": {
                      id: "24d7b968",
                      position: {
                        x: 704,
                        y: 352,
                      },
                      plugList: [
                        {
                          elementId: "b4744995",
                          plugId: "24a96b7c",
                        },
                      ],
                    },
                    e43a782f: {
                      id: "e43a782f",
                      position: {
                        x: 704,
                        y: 360,
                      },
                      plugList: [],
                    },
                    a46049a8: {
                      id: "a46049a8",
                      position: {
                        x: 704,
                        y: 368,
                      },
                      plugList: [],
                    },
                    "84e419d8": {
                      id: "84e419d8",
                      position: {
                        x: 704,
                        y: 376,
                      },
                      plugList: [],
                    },
                    a452fb31: {
                      id: "a452fb31",
                      position: {
                        x: 704,
                        y: 384,
                      },
                      plugList: [],
                    },
                    "042d4a98": {
                      id: "042d4a98",
                      position: {
                        x: 640,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "6419084f": {
                      id: "6419084f",
                      position: {
                        x: 640,
                        y: 336,
                      },
                      plugList: [],
                    },
                    d4314ae3: {
                      id: "d4314ae3",
                      position: {
                        x: 640,
                        y: 344,
                      },
                      plugList: [],
                    },
                    f43f9a2d: {
                      id: "f43f9a2d",
                      position: {
                        x: 640,
                        y: 352,
                      },
                      plugList: [],
                    },
                    "34081a9f": {
                      id: "34081a9f",
                      position: {
                        x: 640,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "145da894": {
                      id: "145da894",
                      position: {
                        x: 640,
                        y: 368,
                      },
                      plugList: [],
                    },
                    f4a3ba76: {
                      id: "f4a3ba76",
                      position: {
                        x: 640,
                        y: 376,
                      },
                      plugList: [],
                    },
                    a42ed868: {
                      id: "a42ed868",
                      position: {
                        x: 640,
                        y: 384,
                      },
                      plugList: [],
                    },
                    c4e5788f: {
                      id: "c4e5788f",
                      position: {
                        x: 640,
                        y: 424,
                      },
                      plugList: [],
                    },
                    d4d26a6f: {
                      id: "d4d26a6f",
                      position: {
                        x: 648,
                        y: 424,
                      },
                      plugList: [],
                    },
                    "64efab96": {
                      id: "64efab96",
                      position: {
                        x: 656,
                        y: 424,
                      },
                      plugList: [],
                    },
                    "34de0b5d": {
                      id: "34de0b5d",
                      position: {
                        x: 664,
                        y: 424,
                      },
                      plugList: [],
                    },
                    "9439da20": {
                      id: "9439da20",
                      position: {
                        x: 672,
                        y: 424,
                      },
                      plugList: [
                        {
                          elementId: "1411bbe8",
                          plugId: "d4d7f8f8",
                        },
                      ],
                    },
                    "240ebb05": {
                      id: "240ebb05",
                      position: {
                        x: 680,
                        y: 424,
                      },
                      plugList: [],
                    },
                    a459db43: {
                      id: "a459db43",
                      position: {
                        x: 688,
                        y: 424,
                      },
                      plugList: [],
                    },
                    "5464da5a": {
                      id: "5464da5a",
                      position: {
                        x: 696,
                        y: 424,
                      },
                      plugList: [],
                    },
                    a4573bf9: {
                      id: "a4573bf9",
                      position: {
                        x: 704,
                        y: 424,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 608,
                    minY: 320,
                    maxX: 736,
                    maxY: 424,
                  },
                },
                e423a991: {
                  id: "e423a991",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 384,
                    y: 320,
                  },
                  uuIdentity: null,
                  text: "ItemList",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "14df2910",
                    "c454a958",
                    "44b54a1d",
                    "24e52af9",
                    "54a95a14",
                    "844bfa5c",
                    "e4f03ba2",
                    "c4523a56",
                    "443c3825",
                  ],
                  rightPointList: [
                    "a4691a6b",
                    "541deac1",
                    "b411f9f0",
                    "4412aaba",
                    "847b4920",
                    "74471b71",
                    "0438caca",
                    "e4ea4b20",
                  ],
                  leftPointList: [
                    "e4323882",
                    "248e195f",
                    "b4b5ab22",
                    "14aaa843",
                    "04a13b77",
                    "54b3aa6d",
                    "848d1b27",
                    "84114966",
                  ],
                  bottomPointList: [
                    "e49ce8ce",
                    "54216a3c",
                    "e4ab18bb",
                    "04a86ba5",
                    "b4335954",
                    "143568ed",
                    "c40ea97e",
                    "745ea890",
                    "a4754874",
                  ],
                  socketMap: {
                    84114966: {
                      id: "84114966",
                      position: {
                        x: 384,
                        y: 384,
                      },
                      plugList: [],
                    },
                    "14df2910": {
                      id: "14df2910",
                      position: {
                        x: 384,
                        y: 320,
                      },
                      plugList: [],
                    },
                    c454a958: {
                      id: "c454a958",
                      position: {
                        x: 392,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "44b54a1d": {
                      id: "44b54a1d",
                      position: {
                        x: 400,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "24e52af9": {
                      id: "24e52af9",
                      position: {
                        x: 408,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "54a95a14": {
                      id: "54a95a14",
                      position: {
                        x: 416,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "844bfa5c": {
                      id: "844bfa5c",
                      position: {
                        x: 424,
                        y: 320,
                      },
                      plugList: [],
                    },
                    e4f03ba2: {
                      id: "e4f03ba2",
                      position: {
                        x: 432,
                        y: 320,
                      },
                      plugList: [
                        {
                          elementId: "a413195b",
                          plugId: "44c5fac3",
                        },
                      ],
                    },
                    c4523a56: {
                      id: "c4523a56",
                      position: {
                        x: 440,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "443c3825": {
                      id: "443c3825",
                      position: {
                        x: 448,
                        y: 320,
                      },
                      plugList: [],
                    },
                    a4691a6b: {
                      id: "a4691a6b",
                      position: {
                        x: 448,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "541deac1": {
                      id: "541deac1",
                      position: {
                        x: 448,
                        y: 336,
                      },
                      plugList: [],
                    },
                    b411f9f0: {
                      id: "b411f9f0",
                      position: {
                        x: 448,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "4412aaba": {
                      id: "4412aaba",
                      position: {
                        x: 448,
                        y: 352,
                      },
                      plugList: [
                        {
                          elementId: "b4dc0af7",
                          plugId: "14e89b68",
                        },
                      ],
                    },
                    "847b4920": {
                      id: "847b4920",
                      position: {
                        x: 448,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "74471b71": {
                      id: "74471b71",
                      position: {
                        x: 448,
                        y: 368,
                      },
                      plugList: [],
                    },
                    "0438caca": {
                      id: "0438caca",
                      position: {
                        x: 448,
                        y: 376,
                      },
                      plugList: [],
                    },
                    e4ea4b20: {
                      id: "e4ea4b20",
                      position: {
                        x: 448,
                        y: 384,
                      },
                      plugList: [],
                    },
                    e4323882: {
                      id: "e4323882",
                      position: {
                        x: 384,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "248e195f": {
                      id: "248e195f",
                      position: {
                        x: 384,
                        y: 336,
                      },
                      plugList: [],
                    },
                    b4b5ab22: {
                      id: "b4b5ab22",
                      position: {
                        x: 384,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "14aaa843": {
                      id: "14aaa843",
                      position: {
                        x: 384,
                        y: 352,
                      },
                      plugList: [],
                    },
                    "04a13b77": {
                      id: "04a13b77",
                      position: {
                        x: 384,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "54b3aa6d": {
                      id: "54b3aa6d",
                      position: {
                        x: 384,
                        y: 368,
                      },
                      plugList: [],
                    },
                    "848d1b27": {
                      id: "848d1b27",
                      position: {
                        x: 384,
                        y: 376,
                      },
                      plugList: [],
                    },
                    e49ce8ce: {
                      id: "e49ce8ce",
                      position: {
                        x: 384,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "54216a3c": {
                      id: "54216a3c",
                      position: {
                        x: 392,
                        y: 408,
                      },
                      plugList: [],
                    },
                    e4ab18bb: {
                      id: "e4ab18bb",
                      position: {
                        x: 400,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "04a86ba5": {
                      id: "04a86ba5",
                      position: {
                        x: 408,
                        y: 408,
                      },
                      plugList: [],
                    },
                    b4335954: {
                      id: "b4335954",
                      position: {
                        x: 416,
                        y: 408,
                      },
                      plugList: [
                        {
                          elementId: "54529856",
                          plugId: "0400ab0f",
                        },
                      ],
                    },
                    "143568ed": {
                      id: "143568ed",
                      position: {
                        x: 424,
                        y: 408,
                      },
                      plugList: [],
                    },
                    c40ea97e: {
                      id: "c40ea97e",
                      position: {
                        x: 432,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "745ea890": {
                      id: "745ea890",
                      position: {
                        x: 440,
                        y: 408,
                      },
                      plugList: [],
                    },
                    a4754874: {
                      id: "a4754874",
                      position: {
                        x: 448,
                        y: 408,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 352,
                    minY: 320,
                    maxX: 480,
                    maxY: 408,
                  },
                },
                f4bc397f: {
                  id: "f4bc397f",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 512,
                    y: 192,
                  },
                  uuIdentity: null,
                  text: "Block\n<Uu5Elements>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "94725b53",
                    "9428eafd",
                    "842f095d",
                    "148788c5",
                    "a4576b4b",
                    "14d44b7b",
                    "74b6cb95",
                    "e4d1f936",
                    "64e209a7",
                  ],
                  rightPointList: [
                    "84769b10",
                    "646e8ab5",
                    "c4c0eb13",
                    "44923884",
                    "54798bea",
                    "d43c3ade",
                    "e4b88905",
                    "f4408872",
                  ],
                  leftPointList: [
                    "6498e86c",
                    "745f7a45",
                    "94f04931",
                    "64571987",
                    "b41cfa00",
                    "a4808b08",
                    "041dba3e",
                    "f428eb8f",
                  ],
                  bottomPointList: [
                    "b4b869de",
                    "d457f9c3",
                    "7472ea6f",
                    "d4e1d899",
                    "a413898f",
                    "44c21bf9",
                    "445559cd",
                    "64a66b59",
                    "9401cbbf",
                  ],
                  socketMap: {
                    44923884: {
                      id: "44923884",
                      position: {
                        x: 576,
                        y: 224,
                      },
                      plugList: [],
                    },
                    64571987: {
                      id: "64571987",
                      position: {
                        x: 512,
                        y: 224,
                      },
                      plugList: [],
                    },
                    "94725b53": {
                      id: "94725b53",
                      position: {
                        x: 512,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "9428eafd": {
                      id: "9428eafd",
                      position: {
                        x: 520,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "842f095d": {
                      id: "842f095d",
                      position: {
                        x: 528,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "148788c5": {
                      id: "148788c5",
                      position: {
                        x: 536,
                        y: 192,
                      },
                      plugList: [],
                    },
                    a4576b4b: {
                      id: "a4576b4b",
                      position: {
                        x: 544,
                        y: 192,
                      },
                      plugList: [
                        {
                          elementId: "54e5b8b7",
                          plugId: "34842abd",
                        },
                      ],
                    },
                    "14d44b7b": {
                      id: "14d44b7b",
                      position: {
                        x: 552,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "74b6cb95": {
                      id: "74b6cb95",
                      position: {
                        x: 560,
                        y: 192,
                      },
                      plugList: [],
                    },
                    e4d1f936: {
                      id: "e4d1f936",
                      position: {
                        x: 568,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "64e209a7": {
                      id: "64e209a7",
                      position: {
                        x: 576,
                        y: 192,
                      },
                      plugList: [],
                    },
                    "84769b10": {
                      id: "84769b10",
                      position: {
                        x: 576,
                        y: 200,
                      },
                      plugList: [],
                    },
                    "646e8ab5": {
                      id: "646e8ab5",
                      position: {
                        x: 576,
                        y: 208,
                      },
                      plugList: [],
                    },
                    c4c0eb13: {
                      id: "c4c0eb13",
                      position: {
                        x: 576,
                        y: 216,
                      },
                      plugList: [],
                    },
                    "54798bea": {
                      id: "54798bea",
                      position: {
                        x: 576,
                        y: 232,
                      },
                      plugList: [],
                    },
                    d43c3ade: {
                      id: "d43c3ade",
                      position: {
                        x: 576,
                        y: 240,
                      },
                      plugList: [],
                    },
                    e4b88905: {
                      id: "e4b88905",
                      position: {
                        x: 576,
                        y: 248,
                      },
                      plugList: [],
                    },
                    f4408872: {
                      id: "f4408872",
                      position: {
                        x: 576,
                        y: 256,
                      },
                      plugList: [],
                    },
                    "6498e86c": {
                      id: "6498e86c",
                      position: {
                        x: 512,
                        y: 200,
                      },
                      plugList: [],
                    },
                    "745f7a45": {
                      id: "745f7a45",
                      position: {
                        x: 512,
                        y: 208,
                      },
                      plugList: [],
                    },
                    "94f04931": {
                      id: "94f04931",
                      position: {
                        x: 512,
                        y: 216,
                      },
                      plugList: [],
                    },
                    b41cfa00: {
                      id: "b41cfa00",
                      position: {
                        x: 512,
                        y: 232,
                      },
                      plugList: [],
                    },
                    a4808b08: {
                      id: "a4808b08",
                      position: {
                        x: 512,
                        y: 240,
                      },
                      plugList: [],
                    },
                    "041dba3e": {
                      id: "041dba3e",
                      position: {
                        x: 512,
                        y: 248,
                      },
                      plugList: [],
                    },
                    f428eb8f: {
                      id: "f428eb8f",
                      position: {
                        x: 512,
                        y: 256,
                      },
                      plugList: [],
                    },
                    b4b869de: {
                      id: "b4b869de",
                      position: {
                        x: 512,
                        y: 296,
                      },
                      plugList: [
                        {
                          elementId: "94cb094e",
                          plugId: "d4d2db7b",
                        },
                      ],
                    },
                    d457f9c3: {
                      id: "d457f9c3",
                      position: {
                        x: 520,
                        y: 296,
                      },
                      plugList: [],
                    },
                    "7472ea6f": {
                      id: "7472ea6f",
                      position: {
                        x: 528,
                        y: 296,
                      },
                      plugList: [],
                    },
                    d4e1d899: {
                      id: "d4e1d899",
                      position: {
                        x: 536,
                        y: 296,
                      },
                      plugList: [
                        {
                          elementId: "a413195b",
                          plugId: "d451d9b8",
                        },
                      ],
                    },
                    a413898f: {
                      id: "a413898f",
                      position: {
                        x: 544,
                        y: 296,
                      },
                      plugList: [],
                    },
                    "44c21bf9": {
                      id: "44c21bf9",
                      position: {
                        x: 552,
                        y: 296,
                      },
                      plugList: [
                        {
                          elementId: "e4a9280b",
                          plugId: "34a2bb00",
                        },
                      ],
                    },
                    "445559cd": {
                      id: "445559cd",
                      position: {
                        x: 560,
                        y: 296,
                      },
                      plugList: [],
                    },
                    "64a66b59": {
                      id: "64a66b59",
                      position: {
                        x: 568,
                        y: 296,
                      },
                      plugList: [],
                    },
                    "9401cbbf": {
                      id: "9401cbbf",
                      position: {
                        x: 576,
                        y: 296,
                      },
                      plugList: [
                        {
                          elementId: "249dbaa7",
                          plugId: "d4fcc8c0",
                        },
                      ],
                    },
                  },
                  bounds: {
                    minX: 480,
                    minY: 192,
                    maxX: 608,
                    maxY: 296,
                  },
                },
                "847159ad": {
                  id: "847159ad",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 640,
                    y: 448,
                  },
                  uuIdentity: null,
                  text: "ItemList",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "24b1393c",
                    "b48ea8a4",
                    "34ea492d",
                    "0484a9ff",
                    "1422c8dc",
                    "442d99f1",
                    "04da3881",
                    "743fcae1",
                    "64dd4b53",
                  ],
                  rightPointList: [
                    "84b8f904",
                    "74a23aa7",
                    "a465d97a",
                    "a4e43927",
                    "1475fb9c",
                    "848b8bd1",
                    "3429da81",
                    "748e5b6c",
                  ],
                  leftPointList: [
                    "e4920aef",
                    "2479fb13",
                    "e43ef8bd",
                    "74b1c91e",
                    "9415fbfa",
                    "d4c02924",
                    "24ca4bcf",
                    "74de6977",
                  ],
                  bottomPointList: [
                    "744d3a26",
                    "7450b860",
                    "54ad786f",
                    "649369df",
                    "e4e32b2f",
                    "c44d2a2c",
                    "44cc8b0c",
                    "34547ae5",
                    "548b697f",
                  ],
                  socketMap: {
                    "24b1393c": {
                      id: "24b1393c",
                      position: {
                        x: 640,
                        y: 448,
                      },
                      plugList: [],
                    },
                    b48ea8a4: {
                      id: "b48ea8a4",
                      position: {
                        x: 648,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "34ea492d": {
                      id: "34ea492d",
                      position: {
                        x: 656,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "0484a9ff": {
                      id: "0484a9ff",
                      position: {
                        x: 664,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "1422c8dc": {
                      id: "1422c8dc",
                      position: {
                        x: 672,
                        y: 448,
                      },
                      plugList: [
                        {
                          elementId: "1411bbe8",
                          plugId: "04210a2b",
                        },
                      ],
                    },
                    "442d99f1": {
                      id: "442d99f1",
                      position: {
                        x: 680,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "04da3881": {
                      id: "04da3881",
                      position: {
                        x: 688,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "743fcae1": {
                      id: "743fcae1",
                      position: {
                        x: 696,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "64dd4b53": {
                      id: "64dd4b53",
                      position: {
                        x: 704,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "84b8f904": {
                      id: "84b8f904",
                      position: {
                        x: 704,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "74a23aa7": {
                      id: "74a23aa7",
                      position: {
                        x: 704,
                        y: 464,
                      },
                      plugList: [],
                    },
                    a465d97a: {
                      id: "a465d97a",
                      position: {
                        x: 704,
                        y: 472,
                      },
                      plugList: [],
                    },
                    a4e43927: {
                      id: "a4e43927",
                      position: {
                        x: 704,
                        y: 480,
                      },
                      plugList: [
                        {
                          elementId: "04c11ba4",
                          plugId: "7485f871",
                        },
                      ],
                    },
                    "1475fb9c": {
                      id: "1475fb9c",
                      position: {
                        x: 704,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "848b8bd1": {
                      id: "848b8bd1",
                      position: {
                        x: 704,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "3429da81": {
                      id: "3429da81",
                      position: {
                        x: 704,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "748e5b6c": {
                      id: "748e5b6c",
                      position: {
                        x: 704,
                        y: 512,
                      },
                      plugList: [],
                    },
                    e4920aef: {
                      id: "e4920aef",
                      position: {
                        x: 640,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "2479fb13": {
                      id: "2479fb13",
                      position: {
                        x: 640,
                        y: 464,
                      },
                      plugList: [],
                    },
                    e43ef8bd: {
                      id: "e43ef8bd",
                      position: {
                        x: 640,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "74b1c91e": {
                      id: "74b1c91e",
                      position: {
                        x: 640,
                        y: 480,
                      },
                      plugList: [],
                    },
                    "9415fbfa": {
                      id: "9415fbfa",
                      position: {
                        x: 640,
                        y: 488,
                      },
                      plugList: [],
                    },
                    d4c02924: {
                      id: "d4c02924",
                      position: {
                        x: 640,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "24ca4bcf": {
                      id: "24ca4bcf",
                      position: {
                        x: 640,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "74de6977": {
                      id: "74de6977",
                      position: {
                        x: 640,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "744d3a26": {
                      id: "744d3a26",
                      position: {
                        x: 640,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "7450b860": {
                      id: "7450b860",
                      position: {
                        x: 648,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "54ad786f": {
                      id: "54ad786f",
                      position: {
                        x: 656,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "649369df": {
                      id: "649369df",
                      position: {
                        x: 664,
                        y: 536,
                      },
                      plugList: [],
                    },
                    e4e32b2f: {
                      id: "e4e32b2f",
                      position: {
                        x: 672,
                        y: 536,
                      },
                      plugList: [
                        {
                          elementId: "8409595b",
                          plugId: "e449ab35",
                        },
                      ],
                    },
                    c44d2a2c: {
                      id: "c44d2a2c",
                      position: {
                        x: 680,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "44cc8b0c": {
                      id: "44cc8b0c",
                      position: {
                        x: 688,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "34547ae5": {
                      id: "34547ae5",
                      position: {
                        x: 696,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "548b697f": {
                      id: "548b697f",
                      position: {
                        x: 704,
                        y: 536,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 608,
                    minY: 448,
                    maxX: 736,
                    maxY: 536,
                  },
                },
                "8436e830": {
                  id: "8436e830",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 896,
                    y: 320,
                  },
                  uuIdentity: null,
                  text: "MemberManager",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "047caa20",
                    "8498fb03",
                    "e4cc4bc3",
                    "14ba78e2",
                    "243baae5",
                    "f40a1ae8",
                    "9467396f",
                    "c4ff3aa9",
                    "a4a039c7",
                  ],
                  rightPointList: [
                    "b4970a92",
                    "64d3a83b",
                    "1448da46",
                    "24e4aaa0",
                    "0497a9f5",
                    "24a9ab8d",
                    "d4f41a39",
                    "d45ae951",
                  ],
                  leftPointList: [
                    "74c618fc",
                    "04a27a7c",
                    "549aab3d",
                    "3438aaa3",
                    "84063a64",
                    "846d596c",
                    "f4a82bf3",
                    "a439d8a8",
                  ],
                  bottomPointList: [
                    "f4ff4ac4",
                    "44d1aaa6",
                    "14ce19b6",
                    "a421491a",
                    "34dae919",
                    "94d69900",
                    "c4b4cb96",
                    "d4fe49bc",
                    "3404f9ca",
                  ],
                  socketMap: {
                    "047caa20": {
                      id: "047caa20",
                      position: {
                        x: 896,
                        y: 320,
                      },
                      plugList: [
                        {
                          elementId: "249dbaa7",
                          plugId: "a4c4ebed",
                        },
                      ],
                    },
                    "8498fb03": {
                      id: "8498fb03",
                      position: {
                        x: 904,
                        y: 320,
                      },
                      plugList: [],
                    },
                    e4cc4bc3: {
                      id: "e4cc4bc3",
                      position: {
                        x: 912,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "14ba78e2": {
                      id: "14ba78e2",
                      position: {
                        x: 920,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "243baae5": {
                      id: "243baae5",
                      position: {
                        x: 928,
                        y: 320,
                      },
                      plugList: [],
                    },
                    f40a1ae8: {
                      id: "f40a1ae8",
                      position: {
                        x: 936,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "9467396f": {
                      id: "9467396f",
                      position: {
                        x: 944,
                        y: 320,
                      },
                      plugList: [],
                    },
                    c4ff3aa9: {
                      id: "c4ff3aa9",
                      position: {
                        x: 952,
                        y: 320,
                      },
                      plugList: [],
                    },
                    a4a039c7: {
                      id: "a4a039c7",
                      position: {
                        x: 960,
                        y: 320,
                      },
                      plugList: [],
                    },
                    b4970a92: {
                      id: "b4970a92",
                      position: {
                        x: 960,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "64d3a83b": {
                      id: "64d3a83b",
                      position: {
                        x: 960,
                        y: 336,
                      },
                      plugList: [],
                    },
                    "1448da46": {
                      id: "1448da46",
                      position: {
                        x: 960,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "24e4aaa0": {
                      id: "24e4aaa0",
                      position: {
                        x: 960,
                        y: 352,
                      },
                      plugList: [],
                    },
                    "0497a9f5": {
                      id: "0497a9f5",
                      position: {
                        x: 960,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "24a9ab8d": {
                      id: "24a9ab8d",
                      position: {
                        x: 960,
                        y: 368,
                      },
                      plugList: [],
                    },
                    d4f41a39: {
                      id: "d4f41a39",
                      position: {
                        x: 960,
                        y: 376,
                      },
                      plugList: [],
                    },
                    d45ae951: {
                      id: "d45ae951",
                      position: {
                        x: 960,
                        y: 384,
                      },
                      plugList: [],
                    },
                    "74c618fc": {
                      id: "74c618fc",
                      position: {
                        x: 896,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "04a27a7c": {
                      id: "04a27a7c",
                      position: {
                        x: 896,
                        y: 336,
                      },
                      plugList: [],
                    },
                    "549aab3d": {
                      id: "549aab3d",
                      position: {
                        x: 896,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "3438aaa3": {
                      id: "3438aaa3",
                      position: {
                        x: 896,
                        y: 352,
                      },
                      plugList: [],
                    },
                    "84063a64": {
                      id: "84063a64",
                      position: {
                        x: 896,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "846d596c": {
                      id: "846d596c",
                      position: {
                        x: 896,
                        y: 368,
                      },
                      plugList: [],
                    },
                    f4a82bf3: {
                      id: "f4a82bf3",
                      position: {
                        x: 896,
                        y: 376,
                      },
                      plugList: [],
                    },
                    a439d8a8: {
                      id: "a439d8a8",
                      position: {
                        x: 896,
                        y: 384,
                      },
                      plugList: [],
                    },
                    f4ff4ac4: {
                      id: "f4ff4ac4",
                      position: {
                        x: 896,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "44d1aaa6": {
                      id: "44d1aaa6",
                      position: {
                        x: 904,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "14ce19b6": {
                      id: "14ce19b6",
                      position: {
                        x: 912,
                        y: 408,
                      },
                      plugList: [],
                    },
                    a421491a: {
                      id: "a421491a",
                      position: {
                        x: 920,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "34dae919": {
                      id: "34dae919",
                      position: {
                        x: 928,
                        y: 408,
                      },
                      plugList: [
                        {
                          elementId: "d439680e",
                          plugId: "4473b88d",
                        },
                      ],
                    },
                    "94d69900": {
                      id: "94d69900",
                      position: {
                        x: 936,
                        y: 408,
                      },
                      plugList: [],
                    },
                    c4b4cb96: {
                      id: "c4b4cb96",
                      position: {
                        x: 944,
                        y: 408,
                      },
                      plugList: [],
                    },
                    d4fe49bc: {
                      id: "d4fe49bc",
                      position: {
                        x: 952,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "3404f9ca": {
                      id: "3404f9ca",
                      position: {
                        x: 960,
                        y: 408,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 864,
                    minY: 320,
                    maxX: 992,
                    maxY: 408,
                  },
                },
                b4fe1ae9: {
                  id: "b4fe1ae9",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 64,
                    y: 448,
                  },
                  uuIdentity: null,
                  text: "TextInput",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "a43e5979",
                    "c42599f4",
                    "24524a42",
                    "44ff290d",
                    "c4158a0d",
                    "34d009ce",
                    "94384885",
                    "f42a78d4",
                    "f4314bd2",
                  ],
                  rightPointList: [
                    "e4864a00",
                    "f4c4d858",
                    "74b799ef",
                    "345cfb0d",
                    "449f8a38",
                    "c46b3a24",
                    "a4219863",
                    "f4dfba94",
                  ],
                  leftPointList: [
                    "64abba79",
                    "0439988a",
                    "04f93a48",
                    "d4392a22",
                    "14deabbe",
                    "74fa997d",
                    "a43da8c7",
                    "04388aef",
                  ],
                  bottomPointList: [
                    "245fbb64",
                    "b4168ade",
                    "d408588e",
                    "6482baea",
                    "c42daae4",
                    "b42feb8b",
                    "24db59a7",
                    "54d0da0f",
                    "a48e1922",
                  ],
                  socketMap: {
                    94384885: {
                      id: "94384885",
                      position: {
                        x: 112,
                        y: 448,
                      },
                      plugList: [],
                    },
                    a43e5979: {
                      id: "a43e5979",
                      position: {
                        x: 64,
                        y: 448,
                      },
                      plugList: [],
                    },
                    c42599f4: {
                      id: "c42599f4",
                      position: {
                        x: 72,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "24524a42": {
                      id: "24524a42",
                      position: {
                        x: 80,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "44ff290d": {
                      id: "44ff290d",
                      position: {
                        x: 88,
                        y: 448,
                      },
                      plugList: [],
                    },
                    c4158a0d: {
                      id: "c4158a0d",
                      position: {
                        x: 96,
                        y: 448,
                      },
                      plugList: [
                        {
                          elementId: "04b5a967",
                          plugId: "d4280935",
                        },
                      ],
                    },
                    "34d009ce": {
                      id: "34d009ce",
                      position: {
                        x: 104,
                        y: 448,
                      },
                      plugList: [],
                    },
                    f42a78d4: {
                      id: "f42a78d4",
                      position: {
                        x: 120,
                        y: 448,
                      },
                      plugList: [],
                    },
                    f4314bd2: {
                      id: "f4314bd2",
                      position: {
                        x: 128,
                        y: 448,
                      },
                      plugList: [],
                    },
                    e4864a00: {
                      id: "e4864a00",
                      position: {
                        x: 128,
                        y: 456,
                      },
                      plugList: [],
                    },
                    f4c4d858: {
                      id: "f4c4d858",
                      position: {
                        x: 128,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "74b799ef": {
                      id: "74b799ef",
                      position: {
                        x: 128,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "345cfb0d": {
                      id: "345cfb0d",
                      position: {
                        x: 128,
                        y: 480,
                      },
                      plugList: [],
                    },
                    "449f8a38": {
                      id: "449f8a38",
                      position: {
                        x: 128,
                        y: 488,
                      },
                      plugList: [],
                    },
                    c46b3a24: {
                      id: "c46b3a24",
                      position: {
                        x: 128,
                        y: 496,
                      },
                      plugList: [],
                    },
                    a4219863: {
                      id: "a4219863",
                      position: {
                        x: 128,
                        y: 504,
                      },
                      plugList: [],
                    },
                    f4dfba94: {
                      id: "f4dfba94",
                      position: {
                        x: 128,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "64abba79": {
                      id: "64abba79",
                      position: {
                        x: 64,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "0439988a": {
                      id: "0439988a",
                      position: {
                        x: 64,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "04f93a48": {
                      id: "04f93a48",
                      position: {
                        x: 64,
                        y: 472,
                      },
                      plugList: [],
                    },
                    d4392a22: {
                      id: "d4392a22",
                      position: {
                        x: 64,
                        y: 480,
                      },
                      plugList: [],
                    },
                    "14deabbe": {
                      id: "14deabbe",
                      position: {
                        x: 64,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "74fa997d": {
                      id: "74fa997d",
                      position: {
                        x: 64,
                        y: 496,
                      },
                      plugList: [],
                    },
                    a43da8c7: {
                      id: "a43da8c7",
                      position: {
                        x: 64,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "04388aef": {
                      id: "04388aef",
                      position: {
                        x: 64,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "245fbb64": {
                      id: "245fbb64",
                      position: {
                        x: 64,
                        y: 536,
                      },
                      plugList: [],
                    },
                    b4168ade: {
                      id: "b4168ade",
                      position: {
                        x: 72,
                        y: 536,
                      },
                      plugList: [],
                    },
                    d408588e: {
                      id: "d408588e",
                      position: {
                        x: 80,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "6482baea": {
                      id: "6482baea",
                      position: {
                        x: 88,
                        y: 536,
                      },
                      plugList: [],
                    },
                    c42daae4: {
                      id: "c42daae4",
                      position: {
                        x: 96,
                        y: 536,
                      },
                      plugList: [
                        {
                          elementId: "c413b81a",
                          plugId: "d4075a51",
                        },
                      ],
                    },
                    b42feb8b: {
                      id: "b42feb8b",
                      position: {
                        x: 104,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "24db59a7": {
                      id: "24db59a7",
                      position: {
                        x: 112,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "54d0da0f": {
                      id: "54d0da0f",
                      position: {
                        x: 120,
                        y: 536,
                      },
                      plugList: [],
                    },
                    a48e1922: {
                      id: "a48e1922",
                      position: {
                        x: 128,
                        y: 536,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 32,
                    minY: 448,
                    maxX: 160,
                    maxY: 536,
                  },
                },
                a4f1283f: {
                  id: "a4f1283f",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 128,
                    y: 320,
                  },
                  uuIdentity: null,
                  text: "header",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "low",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "24ffcbd0",
                    "e45738a4",
                    "74a1dbad",
                    "64adf84f",
                    "f4f0baa2",
                    "4423eb37",
                    "c417e90f",
                    "141c6897",
                    "1402e892",
                  ],
                  rightPointList: [
                    "f4464a22",
                    "54f10a6b",
                    "d4e268d3",
                    "4417e816",
                    "f46828ad",
                    "94925956",
                    "8410ea28",
                    "e407588f",
                  ],
                  leftPointList: [
                    "24344803",
                    "549e983b",
                    "04eae989",
                    "84b21a27",
                    "c422db17",
                    "8460cb4f",
                    "64d868c5",
                    "54333b77",
                  ],
                  bottomPointList: [
                    "e4eb98e0",
                    "c4324818",
                    "240f4a4e",
                    "1426c852",
                    "6492c86e",
                    "842abbbd",
                    "a4e60950",
                    "84796abd",
                    "b4605adf",
                  ],
                  socketMap: {
                    24344803: {
                      id: "24344803",
                      position: {
                        x: 128,
                        y: 328,
                      },
                      plugList: [],
                    },
                    94925956: {
                      id: "94925956",
                      position: {
                        x: 192,
                        y: 368,
                      },
                      plugList: [],
                    },
                    "24ffcbd0": {
                      id: "24ffcbd0",
                      position: {
                        x: 128,
                        y: 320,
                      },
                      plugList: [],
                    },
                    e45738a4: {
                      id: "e45738a4",
                      position: {
                        x: 136,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "74a1dbad": {
                      id: "74a1dbad",
                      position: {
                        x: 144,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "64adf84f": {
                      id: "64adf84f",
                      position: {
                        x: 152,
                        y: 320,
                      },
                      plugList: [],
                    },
                    f4f0baa2: {
                      id: "f4f0baa2",
                      position: {
                        x: 160,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "4423eb37": {
                      id: "4423eb37",
                      position: {
                        x: 168,
                        y: 320,
                      },
                      plugList: [],
                    },
                    c417e90f: {
                      id: "c417e90f",
                      position: {
                        x: 176,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "141c6897": {
                      id: "141c6897",
                      position: {
                        x: 184,
                        y: 320,
                      },
                      plugList: [],
                    },
                    "1402e892": {
                      id: "1402e892",
                      position: {
                        x: 192,
                        y: 320,
                      },
                      plugList: [
                        {
                          elementId: "94cb094e",
                          plugId: "2499e86d",
                        },
                      ],
                    },
                    f4464a22: {
                      id: "f4464a22",
                      position: {
                        x: 192,
                        y: 328,
                      },
                      plugList: [],
                    },
                    "54f10a6b": {
                      id: "54f10a6b",
                      position: {
                        x: 192,
                        y: 336,
                      },
                      plugList: [],
                    },
                    d4e268d3: {
                      id: "d4e268d3",
                      position: {
                        x: 192,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "4417e816": {
                      id: "4417e816",
                      position: {
                        x: 192,
                        y: 352,
                      },
                      plugList: [],
                    },
                    f46828ad: {
                      id: "f46828ad",
                      position: {
                        x: 192,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "8410ea28": {
                      id: "8410ea28",
                      position: {
                        x: 192,
                        y: 376,
                      },
                      plugList: [],
                    },
                    e407588f: {
                      id: "e407588f",
                      position: {
                        x: 192,
                        y: 384,
                      },
                      plugList: [],
                    },
                    "549e983b": {
                      id: "549e983b",
                      position: {
                        x: 128,
                        y: 336,
                      },
                      plugList: [],
                    },
                    "04eae989": {
                      id: "04eae989",
                      position: {
                        x: 128,
                        y: 344,
                      },
                      plugList: [],
                    },
                    "84b21a27": {
                      id: "84b21a27",
                      position: {
                        x: 128,
                        y: 352,
                      },
                      plugList: [],
                    },
                    c422db17: {
                      id: "c422db17",
                      position: {
                        x: 128,
                        y: 360,
                      },
                      plugList: [],
                    },
                    "8460cb4f": {
                      id: "8460cb4f",
                      position: {
                        x: 128,
                        y: 368,
                      },
                      plugList: [],
                    },
                    "64d868c5": {
                      id: "64d868c5",
                      position: {
                        x: 128,
                        y: 376,
                      },
                      plugList: [],
                    },
                    "54333b77": {
                      id: "54333b77",
                      position: {
                        x: 128,
                        y: 384,
                      },
                      plugList: [],
                    },
                    e4eb98e0: {
                      id: "e4eb98e0",
                      position: {
                        x: 128,
                        y: 408,
                      },
                      plugList: [],
                    },
                    c4324818: {
                      id: "c4324818",
                      position: {
                        x: 136,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "240f4a4e": {
                      id: "240f4a4e",
                      position: {
                        x: 144,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "1426c852": {
                      id: "1426c852",
                      position: {
                        x: 152,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "6492c86e": {
                      id: "6492c86e",
                      position: {
                        x: 160,
                        y: 408,
                      },
                      plugList: [
                        {
                          elementId: "04b5a967",
                          plugId: "146909c2",
                        },
                      ],
                    },
                    "842abbbd": {
                      id: "842abbbd",
                      position: {
                        x: 168,
                        y: 408,
                      },
                      plugList: [],
                    },
                    a4e60950: {
                      id: "a4e60950",
                      position: {
                        x: 176,
                        y: 408,
                      },
                      plugList: [],
                    },
                    "84796abd": {
                      id: "84796abd",
                      position: {
                        x: 184,
                        y: 408,
                      },
                      plugList: [],
                    },
                    b4605adf: {
                      id: "b4605adf",
                      position: {
                        x: 192,
                        y: 408,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 96,
                    minY: 320,
                    maxX: 224,
                    maxY: 408,
                  },
                },
                "14bcea3e": {
                  id: "14bcea3e",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 192,
                    y: 448,
                  },
                  uuIdentity: null,
                  text: "name",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "low",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "a402c932",
                    "346d682c",
                    "84235830",
                    "541669fd",
                    "d4f5da9c",
                    "e43fcaf6",
                    "a4cd98a1",
                    "448ba96f",
                    "14c94ac3",
                  ],
                  rightPointList: [
                    "846838e0",
                    "64bbc886",
                    "442a2bf9",
                    "14336846",
                    "a4c428f0",
                    "14b0c814",
                    "e413f8a2",
                    "2467dbc0",
                  ],
                  leftPointList: [
                    "747b0a11",
                    "9485dbeb",
                    "948c3880",
                    "440a0a61",
                    "c415a9b2",
                    "f4e4fbda",
                    "541439de",
                    "5463d8f9",
                  ],
                  bottomPointList: [
                    "a4a9ca54",
                    "84835a4b",
                    "4401dbc7",
                    "1466e804",
                    "c4d9c995",
                    "c4a67868",
                    "54abbaca",
                    "34fb5b42",
                    "6438c9d9",
                  ],
                  socketMap: {
                    14336846: {
                      id: "14336846",
                      position: {
                        x: 256,
                        y: 480,
                      },
                      plugList: [],
                    },
                    84235830: {
                      id: "84235830",
                      position: {
                        x: 208,
                        y: 448,
                      },
                      plugList: [],
                    },
                    a402c932: {
                      id: "a402c932",
                      position: {
                        x: 192,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "346d682c": {
                      id: "346d682c",
                      position: {
                        x: 200,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "541669fd": {
                      id: "541669fd",
                      position: {
                        x: 216,
                        y: 448,
                      },
                      plugList: [],
                    },
                    d4f5da9c: {
                      id: "d4f5da9c",
                      position: {
                        x: 224,
                        y: 448,
                      },
                      plugList: [
                        {
                          elementId: "04b5a967",
                          plugId: "e47368e1",
                        },
                      ],
                    },
                    e43fcaf6: {
                      id: "e43fcaf6",
                      position: {
                        x: 232,
                        y: 448,
                      },
                      plugList: [],
                    },
                    a4cd98a1: {
                      id: "a4cd98a1",
                      position: {
                        x: 240,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "448ba96f": {
                      id: "448ba96f",
                      position: {
                        x: 248,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "14c94ac3": {
                      id: "14c94ac3",
                      position: {
                        x: 256,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "846838e0": {
                      id: "846838e0",
                      position: {
                        x: 256,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "64bbc886": {
                      id: "64bbc886",
                      position: {
                        x: 256,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "442a2bf9": {
                      id: "442a2bf9",
                      position: {
                        x: 256,
                        y: 472,
                      },
                      plugList: [],
                    },
                    a4c428f0: {
                      id: "a4c428f0",
                      position: {
                        x: 256,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "14b0c814": {
                      id: "14b0c814",
                      position: {
                        x: 256,
                        y: 496,
                      },
                      plugList: [],
                    },
                    e413f8a2: {
                      id: "e413f8a2",
                      position: {
                        x: 256,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "2467dbc0": {
                      id: "2467dbc0",
                      position: {
                        x: 256,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "747b0a11": {
                      id: "747b0a11",
                      position: {
                        x: 192,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "9485dbeb": {
                      id: "9485dbeb",
                      position: {
                        x: 192,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "948c3880": {
                      id: "948c3880",
                      position: {
                        x: 192,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "440a0a61": {
                      id: "440a0a61",
                      position: {
                        x: 192,
                        y: 480,
                      },
                      plugList: [],
                    },
                    c415a9b2: {
                      id: "c415a9b2",
                      position: {
                        x: 192,
                        y: 488,
                      },
                      plugList: [],
                    },
                    f4e4fbda: {
                      id: "f4e4fbda",
                      position: {
                        x: 192,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "541439de": {
                      id: "541439de",
                      position: {
                        x: 192,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "5463d8f9": {
                      id: "5463d8f9",
                      position: {
                        x: 192,
                        y: 512,
                      },
                      plugList: [],
                    },
                    a4a9ca54: {
                      id: "a4a9ca54",
                      position: {
                        x: 192,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "84835a4b": {
                      id: "84835a4b",
                      position: {
                        x: 200,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "4401dbc7": {
                      id: "4401dbc7",
                      position: {
                        x: 208,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "1466e804": {
                      id: "1466e804",
                      position: {
                        x: 216,
                        y: 536,
                      },
                      plugList: [],
                    },
                    c4d9c995: {
                      id: "c4d9c995",
                      position: {
                        x: 224,
                        y: 536,
                      },
                      plugList: [],
                    },
                    c4a67868: {
                      id: "c4a67868",
                      position: {
                        x: 232,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "54abbaca": {
                      id: "54abbaca",
                      position: {
                        x: 240,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "34fb5b42": {
                      id: "34fb5b42",
                      position: {
                        x: 248,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "6438c9d9": {
                      id: "6438c9d9",
                      position: {
                        x: 256,
                        y: 536,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 160,
                    minY: 448,
                    maxX: 288,
                    maxY: 536,
                  },
                },
                "4493a880": {
                  id: "4493a880",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 448,
                    y: 704,
                  },
                  uuIdentity: null,
                  text: "TextInput",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "444dd8cc",
                    "543a993c",
                    "14bf384b",
                    "2411cb1e",
                    "c42edb0f",
                    "b47ea880",
                    "c4f9dae9",
                    "24d23be0",
                    "64753981",
                  ],
                  rightPointList: [
                    "84770b2a",
                    "04cd0b49",
                    "34ff18fe",
                    "d40d99fe",
                    "84012b61",
                    "d487ca57",
                    "640e6928",
                    "3469fb0d",
                  ],
                  leftPointList: [
                    "3467faff",
                    "3471faad",
                    "c4305b9e",
                    "84f969fe",
                    "c47a281f",
                    "94f7483a",
                    "6477580a",
                    "1412393e",
                  ],
                  bottomPointList: [
                    "34c58b45",
                    "e445eb84",
                    "34d4aafc",
                    "f4b95a9e",
                    "044c29a9",
                    "94f8ca7a",
                    "94e4aa7a",
                    "44b2da70",
                    "24f1a97b",
                  ],
                  socketMap: {
                    64753981: {
                      id: "64753981",
                      position: {
                        x: 512,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "444dd8cc": {
                      id: "444dd8cc",
                      position: {
                        x: 448,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "543a993c": {
                      id: "543a993c",
                      position: {
                        x: 456,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "14bf384b": {
                      id: "14bf384b",
                      position: {
                        x: 464,
                        y: 704,
                      },
                      plugList: [
                        {
                          elementId: "1486fa36",
                          plugId: "c459d832",
                        },
                      ],
                    },
                    "2411cb1e": {
                      id: "2411cb1e",
                      position: {
                        x: 472,
                        y: 704,
                      },
                      plugList: [],
                    },
                    c42edb0f: {
                      id: "c42edb0f",
                      position: {
                        x: 480,
                        y: 704,
                      },
                      plugList: [],
                    },
                    b47ea880: {
                      id: "b47ea880",
                      position: {
                        x: 488,
                        y: 704,
                      },
                      plugList: [],
                    },
                    c4f9dae9: {
                      id: "c4f9dae9",
                      position: {
                        x: 496,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "24d23be0": {
                      id: "24d23be0",
                      position: {
                        x: 504,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "84770b2a": {
                      id: "84770b2a",
                      position: {
                        x: 512,
                        y: 712,
                      },
                      plugList: [],
                    },
                    "04cd0b49": {
                      id: "04cd0b49",
                      position: {
                        x: 512,
                        y: 720,
                      },
                      plugList: [],
                    },
                    "34ff18fe": {
                      id: "34ff18fe",
                      position: {
                        x: 512,
                        y: 728,
                      },
                      plugList: [],
                    },
                    d40d99fe: {
                      id: "d40d99fe",
                      position: {
                        x: 512,
                        y: 736,
                      },
                      plugList: [],
                    },
                    "84012b61": {
                      id: "84012b61",
                      position: {
                        x: 512,
                        y: 744,
                      },
                      plugList: [],
                    },
                    d487ca57: {
                      id: "d487ca57",
                      position: {
                        x: 512,
                        y: 752,
                      },
                      plugList: [],
                    },
                    "640e6928": {
                      id: "640e6928",
                      position: {
                        x: 512,
                        y: 760,
                      },
                      plugList: [],
                    },
                    "3469fb0d": {
                      id: "3469fb0d",
                      position: {
                        x: 512,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "3467faff": {
                      id: "3467faff",
                      position: {
                        x: 448,
                        y: 712,
                      },
                      plugList: [],
                    },
                    "3471faad": {
                      id: "3471faad",
                      position: {
                        x: 448,
                        y: 720,
                      },
                      plugList: [],
                    },
                    c4305b9e: {
                      id: "c4305b9e",
                      position: {
                        x: 448,
                        y: 728,
                      },
                      plugList: [],
                    },
                    "84f969fe": {
                      id: "84f969fe",
                      position: {
                        x: 448,
                        y: 736,
                      },
                      plugList: [],
                    },
                    c47a281f: {
                      id: "c47a281f",
                      position: {
                        x: 448,
                        y: 744,
                      },
                      plugList: [],
                    },
                    "94f7483a": {
                      id: "94f7483a",
                      position: {
                        x: 448,
                        y: 752,
                      },
                      plugList: [],
                    },
                    "6477580a": {
                      id: "6477580a",
                      position: {
                        x: 448,
                        y: 760,
                      },
                      plugList: [],
                    },
                    "1412393e": {
                      id: "1412393e",
                      position: {
                        x: 448,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "34c58b45": {
                      id: "34c58b45",
                      position: {
                        x: 448,
                        y: 792,
                      },
                      plugList: [],
                    },
                    e445eb84: {
                      id: "e445eb84",
                      position: {
                        x: 456,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "34d4aafc": {
                      id: "34d4aafc",
                      position: {
                        x: 464,
                        y: 792,
                      },
                      plugList: [],
                    },
                    f4b95a9e: {
                      id: "f4b95a9e",
                      position: {
                        x: 472,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "044c29a9": {
                      id: "044c29a9",
                      position: {
                        x: 480,
                        y: 792,
                      },
                      plugList: [
                        {
                          elementId: "e41c4813",
                          plugId: "24311bfd",
                        },
                      ],
                    },
                    "94f8ca7a": {
                      id: "94f8ca7a",
                      position: {
                        x: 488,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "94e4aa7a": {
                      id: "94e4aa7a",
                      position: {
                        x: 496,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "44b2da70": {
                      id: "44b2da70",
                      position: {
                        x: 504,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "24f1a97b": {
                      id: "24f1a97b",
                      position: {
                        x: 512,
                        y: 792,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 416,
                    minY: 704,
                    maxX: 544,
                    maxY: 792,
                  },
                },
                b4e21a9c: {
                  id: "b4e21a9c",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 384,
                    y: 576,
                  },
                  uuIdentity: null,
                  text: "ListItem\n<Uu5Elements>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "b4fa5b05",
                    "84667a11",
                    "f485f83b",
                    "14779a4e",
                    "c4a4ba3c",
                    "a4cd593d",
                    "d49b99d6",
                    "c476fa5a",
                    "84a8d958",
                  ],
                  rightPointList: [
                    "14b3ba64",
                    "c4938860",
                    "9440fb22",
                    "b4e2b86f",
                    "14958ab1",
                    "644b7af7",
                    "64c65b91",
                    "94ff8b69",
                  ],
                  leftPointList: [
                    "544699a9",
                    "74d948b4",
                    "1497ca71",
                    "745feb6e",
                    "142478bd",
                    "b49f7803",
                    "b4c2d975",
                    "44248827",
                  ],
                  bottomPointList: [
                    "24d929ef",
                    "c4418926",
                    "3438ea94",
                    "5431886d",
                    "a4bc4b92",
                    "94415a4c",
                    "d45358d3",
                    "c4452955",
                    "147a8a8b",
                  ],
                  socketMap: {
                    44248827: {
                      id: "44248827",
                      position: {
                        x: 384,
                        y: 640,
                      },
                      plugList: [],
                    },
                    b4fa5b05: {
                      id: "b4fa5b05",
                      position: {
                        x: 384,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "84667a11": {
                      id: "84667a11",
                      position: {
                        x: 392,
                        y: 576,
                      },
                      plugList: [],
                    },
                    f485f83b: {
                      id: "f485f83b",
                      position: {
                        x: 400,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "14779a4e": {
                      id: "14779a4e",
                      position: {
                        x: 408,
                        y: 576,
                      },
                      plugList: [],
                    },
                    c4a4ba3c: {
                      id: "c4a4ba3c",
                      position: {
                        x: 416,
                        y: 576,
                      },
                      plugList: [
                        {
                          elementId: "74107a65",
                          plugId: "94695a62",
                        },
                      ],
                    },
                    a4cd593d: {
                      id: "a4cd593d",
                      position: {
                        x: 424,
                        y: 576,
                      },
                      plugList: [],
                    },
                    d49b99d6: {
                      id: "d49b99d6",
                      position: {
                        x: 432,
                        y: 576,
                      },
                      plugList: [],
                    },
                    c476fa5a: {
                      id: "c476fa5a",
                      position: {
                        x: 440,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "84a8d958": {
                      id: "84a8d958",
                      position: {
                        x: 448,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "14b3ba64": {
                      id: "14b3ba64",
                      position: {
                        x: 448,
                        y: 584,
                      },
                      plugList: [],
                    },
                    c4938860: {
                      id: "c4938860",
                      position: {
                        x: 448,
                        y: 592,
                      },
                      plugList: [],
                    },
                    "9440fb22": {
                      id: "9440fb22",
                      position: {
                        x: 448,
                        y: 600,
                      },
                      plugList: [],
                    },
                    b4e2b86f: {
                      id: "b4e2b86f",
                      position: {
                        x: 448,
                        y: 608,
                      },
                      plugList: [],
                    },
                    "14958ab1": {
                      id: "14958ab1",
                      position: {
                        x: 448,
                        y: 616,
                      },
                      plugList: [],
                    },
                    "644b7af7": {
                      id: "644b7af7",
                      position: {
                        x: 448,
                        y: 624,
                      },
                      plugList: [],
                    },
                    "64c65b91": {
                      id: "64c65b91",
                      position: {
                        x: 448,
                        y: 632,
                      },
                      plugList: [],
                    },
                    "94ff8b69": {
                      id: "94ff8b69",
                      position: {
                        x: 448,
                        y: 640,
                      },
                      plugList: [],
                    },
                    "544699a9": {
                      id: "544699a9",
                      position: {
                        x: 384,
                        y: 584,
                      },
                      plugList: [],
                    },
                    "74d948b4": {
                      id: "74d948b4",
                      position: {
                        x: 384,
                        y: 592,
                      },
                      plugList: [],
                    },
                    "1497ca71": {
                      id: "1497ca71",
                      position: {
                        x: 384,
                        y: 600,
                      },
                      plugList: [],
                    },
                    "745feb6e": {
                      id: "745feb6e",
                      position: {
                        x: 384,
                        y: 608,
                      },
                      plugList: [],
                    },
                    "142478bd": {
                      id: "142478bd",
                      position: {
                        x: 384,
                        y: 616,
                      },
                      plugList: [],
                    },
                    b49f7803: {
                      id: "b49f7803",
                      position: {
                        x: 384,
                        y: 624,
                      },
                      plugList: [],
                    },
                    b4c2d975: {
                      id: "b4c2d975",
                      position: {
                        x: 384,
                        y: 632,
                      },
                      plugList: [],
                    },
                    "24d929ef": {
                      id: "24d929ef",
                      position: {
                        x: 384,
                        y: 680,
                      },
                      plugList: [],
                    },
                    c4418926: {
                      id: "c4418926",
                      position: {
                        x: 392,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "3438ea94": {
                      id: "3438ea94",
                      position: {
                        x: 400,
                        y: 680,
                      },
                      plugList: [
                        {
                          elementId: "34a33a7e",
                          plugId: "b4bb485f",
                        },
                      ],
                    },
                    "5431886d": {
                      id: "5431886d",
                      position: {
                        x: 408,
                        y: 680,
                      },
                      plugList: [],
                    },
                    a4bc4b92: {
                      id: "a4bc4b92",
                      position: {
                        x: 416,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "94415a4c": {
                      id: "94415a4c",
                      position: {
                        x: 424,
                        y: 680,
                      },
                      plugList: [],
                    },
                    d45358d3: {
                      id: "d45358d3",
                      position: {
                        x: 432,
                        y: 680,
                      },
                      plugList: [
                        {
                          elementId: "1486fa36",
                          plugId: "3415690e",
                        },
                      ],
                    },
                    c4452955: {
                      id: "c4452955",
                      position: {
                        x: 440,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "147a8a8b": {
                      id: "147a8a8b",
                      position: {
                        x: 448,
                        y: 680,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 352,
                    minY: 576,
                    maxX: 480,
                    maxY: 680,
                  },
                },
                "6494e957": {
                  id: "6494e957",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 320,
                    y: 704,
                  },
                  uuIdentity: null,
                  text: "CheckBox\n<Uu5Forms>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "04341ae1",
                    "346a4a8d",
                    "b4933a5e",
                    "f406cb55",
                    "1469caa8",
                    "846daa8f",
                    "44277af5",
                    "d4720a15",
                    "a4a8a942",
                  ],
                  rightPointList: [
                    "74b01876",
                    "e4c8ca4b",
                    "4452d80a",
                    "84aa8bda",
                    "a4f2fb2e",
                    "a4c7a9c6",
                    "34b1f818",
                    "14aeb964",
                  ],
                  leftPointList: [
                    "246c986c",
                    "e4899b45",
                    "14452ad9",
                    "74fc29f0",
                    "543e5a9f",
                    "a42028fe",
                    "a4386b26",
                    "c4762889",
                  ],
                  bottomPointList: [
                    "543ecb7a",
                    "344b2a29",
                    "14280be4",
                    "947c3a43",
                    "84ef880c",
                    "a4ecdb5a",
                    "4436dbec",
                    "94309adf",
                    "94dfe9a6",
                  ],
                  socketMap: {
                    "04341ae1": {
                      id: "04341ae1",
                      position: {
                        x: 320,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "346a4a8d": {
                      id: "346a4a8d",
                      position: {
                        x: 328,
                        y: 704,
                      },
                      plugList: [],
                    },
                    b4933a5e: {
                      id: "b4933a5e",
                      position: {
                        x: 336,
                        y: 704,
                      },
                      plugList: [],
                    },
                    f406cb55: {
                      id: "f406cb55",
                      position: {
                        x: 344,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "1469caa8": {
                      id: "1469caa8",
                      position: {
                        x: 352,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "846daa8f": {
                      id: "846daa8f",
                      position: {
                        x: 360,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "44277af5": {
                      id: "44277af5",
                      position: {
                        x: 368,
                        y: 704,
                      },
                      plugList: [
                        {
                          elementId: "34a33a7e",
                          plugId: "d4c14b8f",
                        },
                      ],
                    },
                    d4720a15: {
                      id: "d4720a15",
                      position: {
                        x: 376,
                        y: 704,
                      },
                      plugList: [],
                    },
                    a4a8a942: {
                      id: "a4a8a942",
                      position: {
                        x: 384,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "74b01876": {
                      id: "74b01876",
                      position: {
                        x: 384,
                        y: 712,
                      },
                      plugList: [],
                    },
                    e4c8ca4b: {
                      id: "e4c8ca4b",
                      position: {
                        x: 384,
                        y: 720,
                      },
                      plugList: [],
                    },
                    "4452d80a": {
                      id: "4452d80a",
                      position: {
                        x: 384,
                        y: 728,
                      },
                      plugList: [],
                    },
                    "84aa8bda": {
                      id: "84aa8bda",
                      position: {
                        x: 384,
                        y: 736,
                      },
                      plugList: [],
                    },
                    a4f2fb2e: {
                      id: "a4f2fb2e",
                      position: {
                        x: 384,
                        y: 744,
                      },
                      plugList: [],
                    },
                    a4c7a9c6: {
                      id: "a4c7a9c6",
                      position: {
                        x: 384,
                        y: 752,
                      },
                      plugList: [],
                    },
                    "34b1f818": {
                      id: "34b1f818",
                      position: {
                        x: 384,
                        y: 760,
                      },
                      plugList: [],
                    },
                    "14aeb964": {
                      id: "14aeb964",
                      position: {
                        x: 384,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "246c986c": {
                      id: "246c986c",
                      position: {
                        x: 320,
                        y: 712,
                      },
                      plugList: [],
                    },
                    e4899b45: {
                      id: "e4899b45",
                      position: {
                        x: 320,
                        y: 720,
                      },
                      plugList: [],
                    },
                    "14452ad9": {
                      id: "14452ad9",
                      position: {
                        x: 320,
                        y: 728,
                      },
                      plugList: [],
                    },
                    "74fc29f0": {
                      id: "74fc29f0",
                      position: {
                        x: 320,
                        y: 736,
                      },
                      plugList: [],
                    },
                    "543e5a9f": {
                      id: "543e5a9f",
                      position: {
                        x: 320,
                        y: 744,
                      },
                      plugList: [],
                    },
                    a42028fe: {
                      id: "a42028fe",
                      position: {
                        x: 320,
                        y: 752,
                      },
                      plugList: [],
                    },
                    a4386b26: {
                      id: "a4386b26",
                      position: {
                        x: 320,
                        y: 760,
                      },
                      plugList: [],
                    },
                    c4762889: {
                      id: "c4762889",
                      position: {
                        x: 320,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "543ecb7a": {
                      id: "543ecb7a",
                      position: {
                        x: 320,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "344b2a29": {
                      id: "344b2a29",
                      position: {
                        x: 328,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "14280be4": {
                      id: "14280be4",
                      position: {
                        x: 336,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "947c3a43": {
                      id: "947c3a43",
                      position: {
                        x: 344,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "84ef880c": {
                      id: "84ef880c",
                      position: {
                        x: 352,
                        y: 808,
                      },
                      plugList: [],
                    },
                    a4ecdb5a: {
                      id: "a4ecdb5a",
                      position: {
                        x: 360,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "4436dbec": {
                      id: "4436dbec",
                      position: {
                        x: 368,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "94309adf": {
                      id: "94309adf",
                      position: {
                        x: 376,
                        y: 808,
                      },
                      plugList: [],
                    },
                    "94dfe9a6": {
                      id: "94dfe9a6",
                      position: {
                        x: 384,
                        y: 808,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 288,
                    minY: 704,
                    maxX: 416,
                    maxY: 808,
                  },
                },
                "84de0b66": {
                  id: "84de0b66",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 384,
                    y: 448,
                  },
                  uuIdentity: null,
                  text: "Item",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "44a3d84e",
                    "14914aa1",
                    "741b48b5",
                    "7426a9ed",
                    "44d34892",
                    "3422081b",
                    "44f8db6e",
                    "d4dca92f",
                    "a45a1b8d",
                  ],
                  rightPointList: [
                    "34268af0",
                    "6493ebfb",
                    "c4004ae2",
                    "c4d1eb47",
                    "14383961",
                    "0426cbdf",
                    "b45e9905",
                    "14855a29",
                  ],
                  leftPointList: [
                    "74330a3d",
                    "845f8917",
                    "140e89b4",
                    "544c99c3",
                    "d49d2a4a",
                    "14ac3a0b",
                    "94686a31",
                    "a48ec8b5",
                  ],
                  bottomPointList: [
                    "b41e1bff",
                    "e4aebac9",
                    "44f36950",
                    "6468aa41",
                    "44ead846",
                    "f4f2e81e",
                    "54990980",
                    "c452ba30",
                    "340889b7",
                  ],
                  socketMap: {
                    14383961: {
                      id: "14383961",
                      position: {
                        x: 448,
                        y: 488,
                      },
                      plugList: [],
                    },
                    54990980: {
                      id: "54990980",
                      position: {
                        x: 432,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "44a3d84e": {
                      id: "44a3d84e",
                      position: {
                        x: 384,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "14914aa1": {
                      id: "14914aa1",
                      position: {
                        x: 392,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "741b48b5": {
                      id: "741b48b5",
                      position: {
                        x: 400,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "7426a9ed": {
                      id: "7426a9ed",
                      position: {
                        x: 408,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "44d34892": {
                      id: "44d34892",
                      position: {
                        x: 416,
                        y: 448,
                      },
                      plugList: [
                        {
                          elementId: "54529856",
                          plugId: "c4de1ac0",
                        },
                      ],
                    },
                    "3422081b": {
                      id: "3422081b",
                      position: {
                        x: 424,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "44f8db6e": {
                      id: "44f8db6e",
                      position: {
                        x: 432,
                        y: 448,
                      },
                      plugList: [],
                    },
                    d4dca92f: {
                      id: "d4dca92f",
                      position: {
                        x: 440,
                        y: 448,
                      },
                      plugList: [],
                    },
                    a45a1b8d: {
                      id: "a45a1b8d",
                      position: {
                        x: 448,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "34268af0": {
                      id: "34268af0",
                      position: {
                        x: 448,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "6493ebfb": {
                      id: "6493ebfb",
                      position: {
                        x: 448,
                        y: 464,
                      },
                      plugList: [],
                    },
                    c4004ae2: {
                      id: "c4004ae2",
                      position: {
                        x: 448,
                        y: 472,
                      },
                      plugList: [],
                    },
                    c4d1eb47: {
                      id: "c4d1eb47",
                      position: {
                        x: 448,
                        y: 480,
                      },
                      plugList: [
                        {
                          elementId: "8409595b",
                          plugId: "14731b28",
                        },
                      ],
                    },
                    "0426cbdf": {
                      id: "0426cbdf",
                      position: {
                        x: 448,
                        y: 496,
                      },
                      plugList: [],
                    },
                    b45e9905: {
                      id: "b45e9905",
                      position: {
                        x: 448,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "14855a29": {
                      id: "14855a29",
                      position: {
                        x: 448,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "74330a3d": {
                      id: "74330a3d",
                      position: {
                        x: 384,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "845f8917": {
                      id: "845f8917",
                      position: {
                        x: 384,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "140e89b4": {
                      id: "140e89b4",
                      position: {
                        x: 384,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "544c99c3": {
                      id: "544c99c3",
                      position: {
                        x: 384,
                        y: 480,
                      },
                      plugList: [],
                    },
                    d49d2a4a: {
                      id: "d49d2a4a",
                      position: {
                        x: 384,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "14ac3a0b": {
                      id: "14ac3a0b",
                      position: {
                        x: 384,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "94686a31": {
                      id: "94686a31",
                      position: {
                        x: 384,
                        y: 504,
                      },
                      plugList: [],
                    },
                    a48ec8b5: {
                      id: "a48ec8b5",
                      position: {
                        x: 384,
                        y: 512,
                      },
                      plugList: [],
                    },
                    b41e1bff: {
                      id: "b41e1bff",
                      position: {
                        x: 384,
                        y: 536,
                      },
                      plugList: [],
                    },
                    e4aebac9: {
                      id: "e4aebac9",
                      position: {
                        x: 392,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "44f36950": {
                      id: "44f36950",
                      position: {
                        x: 400,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "6468aa41": {
                      id: "6468aa41",
                      position: {
                        x: 408,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "44ead846": {
                      id: "44ead846",
                      position: {
                        x: 416,
                        y: 536,
                      },
                      plugList: [
                        {
                          elementId: "74107a65",
                          plugId: "249fab23",
                        },
                      ],
                    },
                    f4f2e81e: {
                      id: "f4f2e81e",
                      position: {
                        x: 424,
                        y: 536,
                      },
                      plugList: [],
                    },
                    c452ba30: {
                      id: "c452ba30",
                      position: {
                        x: 440,
                        y: 536,
                      },
                      plugList: [],
                    },
                    "340889b7": {
                      id: "340889b7",
                      position: {
                        x: 448,
                        y: 536,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 352,
                    minY: 448,
                    maxX: 480,
                    maxY: 536,
                  },
                },
                "6402c8d5": {
                  id: "6402c8d5",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 448,
                    y: 832,
                  },
                  uuIdentity: null,
                  text: "Text.Input\n<Uu5Forms>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "245c18cb",
                    "84e7da4c",
                    "847f3aad",
                    "74ff4877",
                    "14a9aae4",
                    "04483986",
                    "04288926",
                    "b4fffada",
                    "d491c8a0",
                  ],
                  rightPointList: [
                    "f42de906",
                    "540acbce",
                    "f473e84f",
                    "347d2b84",
                    "046d1990",
                    "c47edb58",
                    "a444193a",
                    "741859e4",
                  ],
                  leftPointList: [
                    "241b9956",
                    "84c4085f",
                    "246c1b16",
                    "b498a967",
                    "a4230a1a",
                    "74d2c9b9",
                    "c49ac85d",
                    "a430cacd",
                  ],
                  bottomPointList: [
                    "f4b4d90c",
                    "e436fb6c",
                    "e48ea8cc",
                    "f4c5984a",
                    "24dd99b9",
                    "34cafade",
                    "f47ee980",
                    "6417399c",
                    "04828bc6",
                  ],
                  socketMap: {
                    "245c18cb": {
                      id: "245c18cb",
                      position: {
                        x: 448,
                        y: 832,
                      },
                      plugList: [],
                    },
                    "84e7da4c": {
                      id: "84e7da4c",
                      position: {
                        x: 456,
                        y: 832,
                      },
                      plugList: [],
                    },
                    "847f3aad": {
                      id: "847f3aad",
                      position: {
                        x: 464,
                        y: 832,
                      },
                      plugList: [],
                    },
                    "74ff4877": {
                      id: "74ff4877",
                      position: {
                        x: 472,
                        y: 832,
                      },
                      plugList: [],
                    },
                    "14a9aae4": {
                      id: "14a9aae4",
                      position: {
                        x: 480,
                        y: 832,
                      },
                      plugList: [
                        {
                          elementId: "e41c4813",
                          plugId: "d4f4280a",
                        },
                      ],
                    },
                    "04483986": {
                      id: "04483986",
                      position: {
                        x: 488,
                        y: 832,
                      },
                      plugList: [],
                    },
                    "04288926": {
                      id: "04288926",
                      position: {
                        x: 496,
                        y: 832,
                      },
                      plugList: [],
                    },
                    b4fffada: {
                      id: "b4fffada",
                      position: {
                        x: 504,
                        y: 832,
                      },
                      plugList: [],
                    },
                    d491c8a0: {
                      id: "d491c8a0",
                      position: {
                        x: 512,
                        y: 832,
                      },
                      plugList: [],
                    },
                    f42de906: {
                      id: "f42de906",
                      position: {
                        x: 512,
                        y: 840,
                      },
                      plugList: [],
                    },
                    "540acbce": {
                      id: "540acbce",
                      position: {
                        x: 512,
                        y: 848,
                      },
                      plugList: [],
                    },
                    f473e84f: {
                      id: "f473e84f",
                      position: {
                        x: 512,
                        y: 856,
                      },
                      plugList: [],
                    },
                    "347d2b84": {
                      id: "347d2b84",
                      position: {
                        x: 512,
                        y: 864,
                      },
                      plugList: [],
                    },
                    "046d1990": {
                      id: "046d1990",
                      position: {
                        x: 512,
                        y: 872,
                      },
                      plugList: [],
                    },
                    c47edb58: {
                      id: "c47edb58",
                      position: {
                        x: 512,
                        y: 880,
                      },
                      plugList: [],
                    },
                    a444193a: {
                      id: "a444193a",
                      position: {
                        x: 512,
                        y: 888,
                      },
                      plugList: [],
                    },
                    "741859e4": {
                      id: "741859e4",
                      position: {
                        x: 512,
                        y: 896,
                      },
                      plugList: [],
                    },
                    "241b9956": {
                      id: "241b9956",
                      position: {
                        x: 448,
                        y: 840,
                      },
                      plugList: [],
                    },
                    "84c4085f": {
                      id: "84c4085f",
                      position: {
                        x: 448,
                        y: 848,
                      },
                      plugList: [],
                    },
                    "246c1b16": {
                      id: "246c1b16",
                      position: {
                        x: 448,
                        y: 856,
                      },
                      plugList: [],
                    },
                    b498a967: {
                      id: "b498a967",
                      position: {
                        x: 448,
                        y: 864,
                      },
                      plugList: [],
                    },
                    a4230a1a: {
                      id: "a4230a1a",
                      position: {
                        x: 448,
                        y: 872,
                      },
                      plugList: [],
                    },
                    "74d2c9b9": {
                      id: "74d2c9b9",
                      position: {
                        x: 448,
                        y: 880,
                      },
                      plugList: [],
                    },
                    c49ac85d: {
                      id: "c49ac85d",
                      position: {
                        x: 448,
                        y: 888,
                      },
                      plugList: [],
                    },
                    a430cacd: {
                      id: "a430cacd",
                      position: {
                        x: 448,
                        y: 896,
                      },
                      plugList: [],
                    },
                    f4b4d90c: {
                      id: "f4b4d90c",
                      position: {
                        x: 448,
                        y: 936,
                      },
                      plugList: [],
                    },
                    e436fb6c: {
                      id: "e436fb6c",
                      position: {
                        x: 456,
                        y: 936,
                      },
                      plugList: [],
                    },
                    e48ea8cc: {
                      id: "e48ea8cc",
                      position: {
                        x: 464,
                        y: 936,
                      },
                      plugList: [],
                    },
                    f4c5984a: {
                      id: "f4c5984a",
                      position: {
                        x: 472,
                        y: 936,
                      },
                      plugList: [],
                    },
                    "24dd99b9": {
                      id: "24dd99b9",
                      position: {
                        x: 480,
                        y: 936,
                      },
                      plugList: [],
                    },
                    "34cafade": {
                      id: "34cafade",
                      position: {
                        x: 488,
                        y: 936,
                      },
                      plugList: [],
                    },
                    f47ee980: {
                      id: "f47ee980",
                      position: {
                        x: 496,
                        y: 936,
                      },
                      plugList: [],
                    },
                    "6417399c": {
                      id: "6417399c",
                      position: {
                        x: 504,
                        y: 936,
                      },
                      plugList: [],
                    },
                    "04828bc6": {
                      id: "04828bc6",
                      position: {
                        x: 512,
                        y: 936,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 416,
                    minY: 832,
                    maxX: 544,
                    maxY: 936,
                  },
                },
                "849b88af": {
                  id: "849b88af",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 896,
                    y: 448,
                  },
                  uuIdentity: null,
                  text: "Modal\n<Uu5Elements>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "84b1aa44",
                    "9402db4d",
                    "644ff9a8",
                    "b4c089be",
                    "34ab2b48",
                    "646df888",
                    "e4addbbf",
                    "14ba3a62",
                    "54210a5d",
                  ],
                  rightPointList: [
                    "54ca7aa7",
                    "94f89995",
                    "b454f9c9",
                    "14518ab5",
                    "c4399b0e",
                    "44138a9d",
                    "44b619bc",
                    "54c7e883",
                  ],
                  leftPointList: [
                    "b40d1b2b",
                    "e4d83ab4",
                    "04b6a854",
                    "54616b57",
                    "6460d949",
                    "84461bbe",
                    "64b81be2",
                    "84007bab",
                  ],
                  bottomPointList: [
                    "849c28db",
                    "343fa857",
                    "74fafae4",
                    "34fee865",
                    "b438ca4e",
                    "546eca48",
                    "e47478c8",
                    "146bba90",
                    "147d1a04",
                  ],
                  socketMap: {
                    "84b1aa44": {
                      id: "84b1aa44",
                      position: {
                        x: 896,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "9402db4d": {
                      id: "9402db4d",
                      position: {
                        x: 904,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "644ff9a8": {
                      id: "644ff9a8",
                      position: {
                        x: 912,
                        y: 448,
                      },
                      plugList: [],
                    },
                    b4c089be: {
                      id: "b4c089be",
                      position: {
                        x: 920,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "34ab2b48": {
                      id: "34ab2b48",
                      position: {
                        x: 928,
                        y: 448,
                      },
                      plugList: [
                        {
                          elementId: "d439680e",
                          plugId: "347ae937",
                        },
                      ],
                    },
                    "646df888": {
                      id: "646df888",
                      position: {
                        x: 936,
                        y: 448,
                      },
                      plugList: [],
                    },
                    e4addbbf: {
                      id: "e4addbbf",
                      position: {
                        x: 944,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "14ba3a62": {
                      id: "14ba3a62",
                      position: {
                        x: 952,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "54210a5d": {
                      id: "54210a5d",
                      position: {
                        x: 960,
                        y: 448,
                      },
                      plugList: [],
                    },
                    "54ca7aa7": {
                      id: "54ca7aa7",
                      position: {
                        x: 960,
                        y: 456,
                      },
                      plugList: [],
                    },
                    "94f89995": {
                      id: "94f89995",
                      position: {
                        x: 960,
                        y: 464,
                      },
                      plugList: [],
                    },
                    b454f9c9: {
                      id: "b454f9c9",
                      position: {
                        x: 960,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "14518ab5": {
                      id: "14518ab5",
                      position: {
                        x: 960,
                        y: 480,
                      },
                      plugList: [],
                    },
                    c4399b0e: {
                      id: "c4399b0e",
                      position: {
                        x: 960,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "44138a9d": {
                      id: "44138a9d",
                      position: {
                        x: 960,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "44b619bc": {
                      id: "44b619bc",
                      position: {
                        x: 960,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "54c7e883": {
                      id: "54c7e883",
                      position: {
                        x: 960,
                        y: 512,
                      },
                      plugList: [],
                    },
                    b40d1b2b: {
                      id: "b40d1b2b",
                      position: {
                        x: 896,
                        y: 456,
                      },
                      plugList: [],
                    },
                    e4d83ab4: {
                      id: "e4d83ab4",
                      position: {
                        x: 896,
                        y: 464,
                      },
                      plugList: [],
                    },
                    "04b6a854": {
                      id: "04b6a854",
                      position: {
                        x: 896,
                        y: 472,
                      },
                      plugList: [],
                    },
                    "54616b57": {
                      id: "54616b57",
                      position: {
                        x: 896,
                        y: 480,
                      },
                      plugList: [],
                    },
                    "6460d949": {
                      id: "6460d949",
                      position: {
                        x: 896,
                        y: 488,
                      },
                      plugList: [],
                    },
                    "84461bbe": {
                      id: "84461bbe",
                      position: {
                        x: 896,
                        y: 496,
                      },
                      plugList: [],
                    },
                    "64b81be2": {
                      id: "64b81be2",
                      position: {
                        x: 896,
                        y: 504,
                      },
                      plugList: [],
                    },
                    "84007bab": {
                      id: "84007bab",
                      position: {
                        x: 896,
                        y: 512,
                      },
                      plugList: [],
                    },
                    "849c28db": {
                      id: "849c28db",
                      position: {
                        x: 896,
                        y: 552,
                      },
                      plugList: [],
                    },
                    "343fa857": {
                      id: "343fa857",
                      position: {
                        x: 904,
                        y: 552,
                      },
                      plugList: [],
                    },
                    "74fafae4": {
                      id: "74fafae4",
                      position: {
                        x: 912,
                        y: 552,
                      },
                      plugList: [
                        {
                          elementId: "d442da3d",
                          plugId: "1424da54",
                        },
                      ],
                    },
                    "34fee865": {
                      id: "34fee865",
                      position: {
                        x: 920,
                        y: 552,
                      },
                      plugList: [],
                    },
                    b438ca4e: {
                      id: "b438ca4e",
                      position: {
                        x: 928,
                        y: 552,
                      },
                      plugList: [],
                    },
                    "546eca48": {
                      id: "546eca48",
                      position: {
                        x: 936,
                        y: 552,
                      },
                      plugList: [],
                    },
                    e47478c8: {
                      id: "e47478c8",
                      position: {
                        x: 944,
                        y: 552,
                      },
                      plugList: [
                        {
                          elementId: "0498693c",
                          plugId: "b46e1b8e",
                        },
                      ],
                    },
                    "146bba90": {
                      id: "146bba90",
                      position: {
                        x: 952,
                        y: 552,
                      },
                      plugList: [],
                    },
                    "147d1a04": {
                      id: "147d1a04",
                      position: {
                        x: 960,
                        y: 552,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 864,
                    minY: 448,
                    maxX: 992,
                    maxY: 552,
                  },
                },
                f4674a32: {
                  id: "f4674a32",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 832,
                    y: 576,
                  },
                  uuIdentity: null,
                  text: "Member",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "34e02800",
                    "64bd4abc",
                    "64ea4825",
                    "145aab62",
                    "a4994bda",
                    "d4a5d8d0",
                    "64bff9be",
                    "4439cbe0",
                    "64904a51",
                  ],
                  rightPointList: [
                    "a4d35a41",
                    "b41678da",
                    "b4b708b2",
                    "d49a0b31",
                    "b4c499e9",
                    "644728fb",
                    "84f818f0",
                    "4432eb74",
                  ],
                  leftPointList: [
                    "14970af9",
                    "24dbca3f",
                    "64f9abe3",
                    "245dab90",
                    "f4c0c8c4",
                    "44edb9e7",
                    "74f5795b",
                    "649698bd",
                  ],
                  bottomPointList: [
                    "14c2997e",
                    "a4598bee",
                    "d4b20a0d",
                    "a41658a3",
                    "d4d21a22",
                    "64d67882",
                    "e43bdbec",
                    "947e2853",
                    "940abb3e",
                  ],
                  socketMap: {
                    "34e02800": {
                      id: "34e02800",
                      position: {
                        x: 832,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "64bd4abc": {
                      id: "64bd4abc",
                      position: {
                        x: 840,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "64ea4825": {
                      id: "64ea4825",
                      position: {
                        x: 848,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "145aab62": {
                      id: "145aab62",
                      position: {
                        x: 856,
                        y: 576,
                      },
                      plugList: [],
                    },
                    a4994bda: {
                      id: "a4994bda",
                      position: {
                        x: 864,
                        y: 576,
                      },
                      plugList: [],
                    },
                    d4a5d8d0: {
                      id: "d4a5d8d0",
                      position: {
                        x: 872,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "64bff9be": {
                      id: "64bff9be",
                      position: {
                        x: 880,
                        y: 576,
                      },
                      plugList: [
                        {
                          elementId: "d442da3d",
                          plugId: "c47baa6b",
                        },
                      ],
                    },
                    "4439cbe0": {
                      id: "4439cbe0",
                      position: {
                        x: 888,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "64904a51": {
                      id: "64904a51",
                      position: {
                        x: 896,
                        y: 576,
                      },
                      plugList: [],
                    },
                    a4d35a41: {
                      id: "a4d35a41",
                      position: {
                        x: 896,
                        y: 584,
                      },
                      plugList: [],
                    },
                    b41678da: {
                      id: "b41678da",
                      position: {
                        x: 896,
                        y: 592,
                      },
                      plugList: [],
                    },
                    b4b708b2: {
                      id: "b4b708b2",
                      position: {
                        x: 896,
                        y: 600,
                      },
                      plugList: [],
                    },
                    d49a0b31: {
                      id: "d49a0b31",
                      position: {
                        x: 896,
                        y: 608,
                      },
                      plugList: [],
                    },
                    b4c499e9: {
                      id: "b4c499e9",
                      position: {
                        x: 896,
                        y: 616,
                      },
                      plugList: [],
                    },
                    "644728fb": {
                      id: "644728fb",
                      position: {
                        x: 896,
                        y: 624,
                      },
                      plugList: [],
                    },
                    "84f818f0": {
                      id: "84f818f0",
                      position: {
                        x: 896,
                        y: 632,
                      },
                      plugList: [],
                    },
                    "4432eb74": {
                      id: "4432eb74",
                      position: {
                        x: 896,
                        y: 640,
                      },
                      plugList: [],
                    },
                    "14970af9": {
                      id: "14970af9",
                      position: {
                        x: 832,
                        y: 584,
                      },
                      plugList: [],
                    },
                    "24dbca3f": {
                      id: "24dbca3f",
                      position: {
                        x: 832,
                        y: 592,
                      },
                      plugList: [],
                    },
                    "64f9abe3": {
                      id: "64f9abe3",
                      position: {
                        x: 832,
                        y: 600,
                      },
                      plugList: [],
                    },
                    "245dab90": {
                      id: "245dab90",
                      position: {
                        x: 832,
                        y: 608,
                      },
                      plugList: [],
                    },
                    f4c0c8c4: {
                      id: "f4c0c8c4",
                      position: {
                        x: 832,
                        y: 616,
                      },
                      plugList: [],
                    },
                    "44edb9e7": {
                      id: "44edb9e7",
                      position: {
                        x: 832,
                        y: 624,
                      },
                      plugList: [],
                    },
                    "74f5795b": {
                      id: "74f5795b",
                      position: {
                        x: 832,
                        y: 632,
                      },
                      plugList: [],
                    },
                    "649698bd": {
                      id: "649698bd",
                      position: {
                        x: 832,
                        y: 640,
                      },
                      plugList: [],
                    },
                    "14c2997e": {
                      id: "14c2997e",
                      position: {
                        x: 832,
                        y: 664,
                      },
                      plugList: [],
                    },
                    a4598bee: {
                      id: "a4598bee",
                      position: {
                        x: 840,
                        y: 664,
                      },
                      plugList: [],
                    },
                    d4b20a0d: {
                      id: "d4b20a0d",
                      position: {
                        x: 848,
                        y: 664,
                      },
                      plugList: [],
                    },
                    a41658a3: {
                      id: "a41658a3",
                      position: {
                        x: 856,
                        y: 664,
                      },
                      plugList: [],
                    },
                    d4d21a22: {
                      id: "d4d21a22",
                      position: {
                        x: 864,
                        y: 664,
                      },
                      plugList: [
                        {
                          elementId: "b40aa84b",
                          plugId: "543b58e0",
                        },
                      ],
                    },
                    "64d67882": {
                      id: "64d67882",
                      position: {
                        x: 872,
                        y: 664,
                      },
                      plugList: [],
                    },
                    e43bdbec: {
                      id: "e43bdbec",
                      position: {
                        x: 880,
                        y: 664,
                      },
                      plugList: [],
                    },
                    "947e2853": {
                      id: "947e2853",
                      position: {
                        x: 888,
                        y: 664,
                      },
                      plugList: [],
                    },
                    "940abb3e": {
                      id: "940abb3e",
                      position: {
                        x: 896,
                        y: 664,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 800,
                    minY: 576,
                    maxX: 928,
                    maxY: 664,
                  },
                },
                "6413a850": {
                  id: "6413a850",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 960,
                    y: 576,
                  },
                  uuIdentity: null,
                  text: "ListItem\n<Uu5Elements>",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "normal",
                  plural: false,
                  state: {},
                  label: {
                    uuBmlIconLabelCode: "r",
                  },
                  topPointList: [
                    "94ef5a2e",
                    "84fee9c7",
                    "643af9ac",
                    "445d4995",
                    "b4684ac2",
                    "d43fda87",
                    "947af877",
                    "944ffa29",
                    "84e7d921",
                  ],
                  rightPointList: [
                    "84f29b21",
                    "b411eb6f",
                    "04e6db39",
                    "f49148f0",
                    "644468e4",
                    "c4855b0f",
                    "f4375868",
                    "d4483901",
                  ],
                  leftPointList: [
                    "04230957",
                    "24281ab7",
                    "1450fbad",
                    "04c598c2",
                    "348f6ad3",
                    "048e0ace",
                    "b4d8abcf",
                    "04fd8b7c",
                  ],
                  bottomPointList: [
                    "a4e58866",
                    "049d4a9c",
                    "b47979f0",
                    "44122a79",
                    "b4a11a52",
                    "840d5900",
                    "b4130a7a",
                    "14f199c3",
                    "64778929",
                  ],
                  socketMap: {
                    64778929: {
                      id: "64778929",
                      position: {
                        x: 1024,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "94ef5a2e": {
                      id: "94ef5a2e",
                      position: {
                        x: 960,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "84fee9c7": {
                      id: "84fee9c7",
                      position: {
                        x: 968,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "643af9ac": {
                      id: "643af9ac",
                      position: {
                        x: 976,
                        y: 576,
                      },
                      plugList: [
                        {
                          elementId: "0498693c",
                          plugId: "7494ba5d",
                        },
                      ],
                    },
                    "445d4995": {
                      id: "445d4995",
                      position: {
                        x: 984,
                        y: 576,
                      },
                      plugList: [],
                    },
                    b4684ac2: {
                      id: "b4684ac2",
                      position: {
                        x: 992,
                        y: 576,
                      },
                      plugList: [],
                    },
                    d43fda87: {
                      id: "d43fda87",
                      position: {
                        x: 1000,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "947af877": {
                      id: "947af877",
                      position: {
                        x: 1008,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "944ffa29": {
                      id: "944ffa29",
                      position: {
                        x: 1016,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "84e7d921": {
                      id: "84e7d921",
                      position: {
                        x: 1024,
                        y: 576,
                      },
                      plugList: [],
                    },
                    "84f29b21": {
                      id: "84f29b21",
                      position: {
                        x: 1024,
                        y: 584,
                      },
                      plugList: [],
                    },
                    b411eb6f: {
                      id: "b411eb6f",
                      position: {
                        x: 1024,
                        y: 592,
                      },
                      plugList: [],
                    },
                    "04e6db39": {
                      id: "04e6db39",
                      position: {
                        x: 1024,
                        y: 600,
                      },
                      plugList: [],
                    },
                    f49148f0: {
                      id: "f49148f0",
                      position: {
                        x: 1024,
                        y: 608,
                      },
                      plugList: [
                        {
                          elementId: "c4d1fbb6",
                          plugId: "e4e82a07",
                        },
                      ],
                    },
                    "644468e4": {
                      id: "644468e4",
                      position: {
                        x: 1024,
                        y: 616,
                      },
                      plugList: [],
                    },
                    c4855b0f: {
                      id: "c4855b0f",
                      position: {
                        x: 1024,
                        y: 624,
                      },
                      plugList: [],
                    },
                    f4375868: {
                      id: "f4375868",
                      position: {
                        x: 1024,
                        y: 632,
                      },
                      plugList: [],
                    },
                    d4483901: {
                      id: "d4483901",
                      position: {
                        x: 1024,
                        y: 640,
                      },
                      plugList: [],
                    },
                    "04230957": {
                      id: "04230957",
                      position: {
                        x: 960,
                        y: 584,
                      },
                      plugList: [],
                    },
                    "24281ab7": {
                      id: "24281ab7",
                      position: {
                        x: 960,
                        y: 592,
                      },
                      plugList: [],
                    },
                    "1450fbad": {
                      id: "1450fbad",
                      position: {
                        x: 960,
                        y: 600,
                      },
                      plugList: [],
                    },
                    "04c598c2": {
                      id: "04c598c2",
                      position: {
                        x: 960,
                        y: 608,
                      },
                      plugList: [
                        {
                          elementId: "b40aa84b",
                          plugId: "b48c696f",
                        },
                      ],
                    },
                    "348f6ad3": {
                      id: "348f6ad3",
                      position: {
                        x: 960,
                        y: 616,
                      },
                      plugList: [],
                    },
                    "048e0ace": {
                      id: "048e0ace",
                      position: {
                        x: 960,
                        y: 624,
                      },
                      plugList: [],
                    },
                    b4d8abcf: {
                      id: "b4d8abcf",
                      position: {
                        x: 960,
                        y: 632,
                      },
                      plugList: [],
                    },
                    "04fd8b7c": {
                      id: "04fd8b7c",
                      position: {
                        x: 960,
                        y: 640,
                      },
                      plugList: [],
                    },
                    a4e58866: {
                      id: "a4e58866",
                      position: {
                        x: 960,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "049d4a9c": {
                      id: "049d4a9c",
                      position: {
                        x: 968,
                        y: 680,
                      },
                      plugList: [],
                    },
                    b47979f0: {
                      id: "b47979f0",
                      position: {
                        x: 976,
                        y: 680,
                      },
                      plugList: [
                        {
                          elementId: "74de7b17",
                          plugId: "14b42adf",
                        },
                      ],
                    },
                    "44122a79": {
                      id: "44122a79",
                      position: {
                        x: 984,
                        y: 680,
                      },
                      plugList: [],
                    },
                    b4a11a52: {
                      id: "b4a11a52",
                      position: {
                        x: 992,
                        y: 680,
                      },
                      plugList: [],
                    },
                    "840d5900": {
                      id: "840d5900",
                      position: {
                        x: 1000,
                        y: 680,
                      },
                      plugList: [],
                    },
                    b4130a7a: {
                      id: "b4130a7a",
                      position: {
                        x: 1008,
                        y: 680,
                      },
                      plugList: [
                        {
                          elementId: "74756859",
                          plugId: "34d30a6c",
                        },
                      ],
                    },
                    "14f199c3": {
                      id: "14f199c3",
                      position: {
                        x: 1016,
                        y: 680,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 928,
                    minY: 576,
                    maxX: 1056,
                    maxY: 680,
                  },
                },
                f4fd9bc8: {
                  id: "f4fd9bc8",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 1024,
                    y: 704,
                  },
                  uuIdentity: null,
                  text: "TextInput",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "14ac9869",
                    "c49f5a8c",
                    "a4c48a37",
                    "8442a9e0",
                    "a48a4b54",
                    "6406a883",
                    "44634ad7",
                    "34453b17",
                    "f4d29b24",
                  ],
                  rightPointList: [
                    "34102b37",
                    "54c10ab5",
                    "448aba68",
                    "74cb9bd0",
                    "340cbb6a",
                    "1415aab4",
                    "74e56a59",
                    "b4770bc6",
                  ],
                  leftPointList: [
                    "248f39cf",
                    "84139b43",
                    "741a3b33",
                    "8491c945",
                    "74fb2bec",
                    "f4750af6",
                    "c4a6693b",
                    "b4472b3c",
                  ],
                  bottomPointList: [
                    "94a0f83b",
                    "5436088c",
                    "14d578c5",
                    "6469995e",
                    "b40a7810",
                    "e4255911",
                    "349d4934",
                    "b46498d0",
                    "74374966",
                  ],
                  socketMap: {
                    74374966: {
                      id: "74374966",
                      position: {
                        x: 1088,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "14ac9869": {
                      id: "14ac9869",
                      position: {
                        x: 1024,
                        y: 704,
                      },
                      plugList: [],
                    },
                    c49f5a8c: {
                      id: "c49f5a8c",
                      position: {
                        x: 1032,
                        y: 704,
                      },
                      plugList: [],
                    },
                    a4c48a37: {
                      id: "a4c48a37",
                      position: {
                        x: 1040,
                        y: 704,
                      },
                      plugList: [
                        {
                          elementId: "74756859",
                          plugId: "c443cbfe",
                        },
                      ],
                    },
                    "8442a9e0": {
                      id: "8442a9e0",
                      position: {
                        x: 1048,
                        y: 704,
                      },
                      plugList: [],
                    },
                    a48a4b54: {
                      id: "a48a4b54",
                      position: {
                        x: 1056,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "6406a883": {
                      id: "6406a883",
                      position: {
                        x: 1064,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "44634ad7": {
                      id: "44634ad7",
                      position: {
                        x: 1072,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "34453b17": {
                      id: "34453b17",
                      position: {
                        x: 1080,
                        y: 704,
                      },
                      plugList: [],
                    },
                    f4d29b24: {
                      id: "f4d29b24",
                      position: {
                        x: 1088,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "34102b37": {
                      id: "34102b37",
                      position: {
                        x: 1088,
                        y: 712,
                      },
                      plugList: [],
                    },
                    "54c10ab5": {
                      id: "54c10ab5",
                      position: {
                        x: 1088,
                        y: 720,
                      },
                      plugList: [],
                    },
                    "448aba68": {
                      id: "448aba68",
                      position: {
                        x: 1088,
                        y: 728,
                      },
                      plugList: [],
                    },
                    "74cb9bd0": {
                      id: "74cb9bd0",
                      position: {
                        x: 1088,
                        y: 736,
                      },
                      plugList: [],
                    },
                    "340cbb6a": {
                      id: "340cbb6a",
                      position: {
                        x: 1088,
                        y: 744,
                      },
                      plugList: [],
                    },
                    "1415aab4": {
                      id: "1415aab4",
                      position: {
                        x: 1088,
                        y: 752,
                      },
                      plugList: [],
                    },
                    "74e56a59": {
                      id: "74e56a59",
                      position: {
                        x: 1088,
                        y: 760,
                      },
                      plugList: [],
                    },
                    b4770bc6: {
                      id: "b4770bc6",
                      position: {
                        x: 1088,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "248f39cf": {
                      id: "248f39cf",
                      position: {
                        x: 1024,
                        y: 712,
                      },
                      plugList: [],
                    },
                    "84139b43": {
                      id: "84139b43",
                      position: {
                        x: 1024,
                        y: 720,
                      },
                      plugList: [],
                    },
                    "741a3b33": {
                      id: "741a3b33",
                      position: {
                        x: 1024,
                        y: 728,
                      },
                      plugList: [],
                    },
                    "8491c945": {
                      id: "8491c945",
                      position: {
                        x: 1024,
                        y: 736,
                      },
                      plugList: [],
                    },
                    "74fb2bec": {
                      id: "74fb2bec",
                      position: {
                        x: 1024,
                        y: 744,
                      },
                      plugList: [],
                    },
                    f4750af6: {
                      id: "f4750af6",
                      position: {
                        x: 1024,
                        y: 752,
                      },
                      plugList: [],
                    },
                    c4a6693b: {
                      id: "c4a6693b",
                      position: {
                        x: 1024,
                        y: 760,
                      },
                      plugList: [],
                    },
                    b4472b3c: {
                      id: "b4472b3c",
                      position: {
                        x: 1024,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "94a0f83b": {
                      id: "94a0f83b",
                      position: {
                        x: 1024,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "5436088c": {
                      id: "5436088c",
                      position: {
                        x: 1032,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "14d578c5": {
                      id: "14d578c5",
                      position: {
                        x: 1040,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "6469995e": {
                      id: "6469995e",
                      position: {
                        x: 1048,
                        y: 792,
                      },
                      plugList: [],
                    },
                    b40a7810: {
                      id: "b40a7810",
                      position: {
                        x: 1056,
                        y: 792,
                      },
                      plugList: [
                        {
                          elementId: "e41a6aaa",
                          plugId: "4424fa28",
                        },
                      ],
                    },
                    e4255911: {
                      id: "e4255911",
                      position: {
                        x: 1064,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "349d4934": {
                      id: "349d4934",
                      position: {
                        x: 1072,
                        y: 792,
                      },
                      plugList: [],
                    },
                    b46498d0: {
                      id: "b46498d0",
                      position: {
                        x: 1080,
                        y: 792,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 992,
                    minY: 704,
                    maxX: 1120,
                    maxY: 792,
                  },
                },
                "6452ab0b": {
                  id: "6452ab0b",
                  elementType: "Icon",
                  sourceUuBmlStencil: "uuappcommon",
                  uuBmlIconCode: "contentComponent",
                  position: {
                    x: 896,
                    y: 704,
                  },
                  uuIdentity: null,
                  text: "TextInput",
                  searchKey: "",
                  textHidden: false,
                  textWidth: 128,
                  importance: "high",
                  plural: false,
                  state: {},
                  label: {},
                  topPointList: [
                    "0489db83",
                    "04bd2a50",
                    "c4278aea",
                    "a416b80a",
                    "a40d18b2",
                    "74c5dbe9",
                    "e45ca988",
                    "3409d8c5",
                    "d4de1a3f",
                  ],
                  rightPointList: [
                    "24636a93",
                    "543d18ad",
                    "f4811857",
                    "e4f8da19",
                    "d4d038b3",
                    "c4ad6845",
                    "64825bdb",
                    "04ac8987",
                  ],
                  leftPointList: [
                    "04476bb2",
                    "c40e784e",
                    "c490c965",
                    "e4e59be1",
                    "44592803",
                    "b4bf9b19",
                    "c4be8907",
                    "b4a0289c",
                  ],
                  bottomPointList: [
                    "942748b2",
                    "044f390f",
                    "a4077ae9",
                    "d4569854",
                    "c4067ae2",
                    "f4152a17",
                    "d419e94a",
                    "24b6681c",
                    "14fc8b68",
                  ],
                  socketMap: {
                    44592803: {
                      id: "44592803",
                      position: {
                        x: 896,
                        y: 744,
                      },
                      plugList: [],
                    },
                    "0489db83": {
                      id: "0489db83",
                      position: {
                        x: 896,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "04bd2a50": {
                      id: "04bd2a50",
                      position: {
                        x: 904,
                        y: 704,
                      },
                      plugList: [],
                    },
                    c4278aea: {
                      id: "c4278aea",
                      position: {
                        x: 912,
                        y: 704,
                      },
                      plugList: [],
                    },
                    a416b80a: {
                      id: "a416b80a",
                      position: {
                        x: 920,
                        y: 704,
                      },
                      plugList: [],
                    },
                    a40d18b2: {
                      id: "a40d18b2",
                      position: {
                        x: 928,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "74c5dbe9": {
                      id: "74c5dbe9",
                      position: {
                        x: 936,
                        y: 704,
                      },
                      plugList: [],
                    },
                    e45ca988: {
                      id: "e45ca988",
                      position: {
                        x: 944,
                        y: 704,
                      },
                      plugList: [
                        {
                          elementId: "74de7b17",
                          plugId: "d4a19be9",
                        },
                      ],
                    },
                    "3409d8c5": {
                      id: "3409d8c5",
                      position: {
                        x: 952,
                        y: 704,
                      },
                      plugList: [],
                    },
                    d4de1a3f: {
                      id: "d4de1a3f",
                      position: {
                        x: 960,
                        y: 704,
                      },
                      plugList: [],
                    },
                    "24636a93": {
                      id: "24636a93",
                      position: {
                        x: 960,
                        y: 712,
                      },
                      plugList: [],
                    },
                    "543d18ad": {
                      id: "543d18ad",
                      position: {
                        x: 960,
                        y: 720,
                      },
                      plugList: [],
                    },
                    f4811857: {
                      id: "f4811857",
                      position: {
                        x: 960,
                        y: 728,
                      },
                      plugList: [],
                    },
                    e4f8da19: {
                      id: "e4f8da19",
                      position: {
                        x: 960,
                        y: 736,
                      },
                      plugList: [],
                    },
                    d4d038b3: {
                      id: "d4d038b3",
                      position: {
                        x: 960,
                        y: 744,
                      },
                      plugList: [],
                    },
                    c4ad6845: {
                      id: "c4ad6845",
                      position: {
                        x: 960,
                        y: 752,
                      },
                      plugList: [],
                    },
                    "64825bdb": {
                      id: "64825bdb",
                      position: {
                        x: 960,
                        y: 760,
                      },
                      plugList: [],
                    },
                    "04ac8987": {
                      id: "04ac8987",
                      position: {
                        x: 960,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "04476bb2": {
                      id: "04476bb2",
                      position: {
                        x: 896,
                        y: 712,
                      },
                      plugList: [],
                    },
                    c40e784e: {
                      id: "c40e784e",
                      position: {
                        x: 896,
                        y: 720,
                      },
                      plugList: [],
                    },
                    c490c965: {
                      id: "c490c965",
                      position: {
                        x: 896,
                        y: 728,
                      },
                      plugList: [],
                    },
                    e4e59be1: {
                      id: "e4e59be1",
                      position: {
                        x: 896,
                        y: 736,
                      },
                      plugList: [],
                    },
                    b4bf9b19: {
                      id: "b4bf9b19",
                      position: {
                        x: 896,
                        y: 752,
                      },
                      plugList: [],
                    },
                    c4be8907: {
                      id: "c4be8907",
                      position: {
                        x: 896,
                        y: 760,
                      },
                      plugList: [],
                    },
                    b4a0289c: {
                      id: "b4a0289c",
                      position: {
                        x: 896,
                        y: 768,
                      },
                      plugList: [],
                    },
                    "942748b2": {
                      id: "942748b2",
                      position: {
                        x: 896,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "044f390f": {
                      id: "044f390f",
                      position: {
                        x: 904,
                        y: 792,
                      },
                      plugList: [],
                    },
                    a4077ae9: {
                      id: "a4077ae9",
                      position: {
                        x: 912,
                        y: 792,
                      },
                      plugList: [],
                    },
                    d4569854: {
                      id: "d4569854",
                      position: {
                        x: 920,
                        y: 792,
                      },
                      plugList: [],
                    },
                    c4067ae2: {
                      id: "c4067ae2",
                      position: {
                        x: 928,
                        y: 792,
                      },
                      plugList: [
                        {
                          elementId: "e4ac29ec",
                          plugId: "844a99b2",
                        },
                      ],
                    },
                    f4152a17: {
                      id: "f4152a17",
                      position: {
                        x: 936,
                        y: 792,
                      },
                      plugList: [],
                    },
                    d419e94a: {
                      id: "d419e94a",
                      position: {
                        x: 944,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "24b6681c": {
                      id: "24b6681c",
                      position: {
                        x: 952,
                        y: 792,
                      },
                      plugList: [],
                    },
                    "14fc8b68": {
                      id: "14fc8b68",
                      position: {
                        x: 960,
                        y: 792,
                      },
                      plugList: [],
                    },
                  },
                  bounds: {
                    minX: 864,
                    minY: 704,
                    maxX: 992,
                    maxY: 792,
                  },
                },
                "54e5b8b7": {
                  id: "54e5b8b7",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "34842abd": {
                      id: "34842abd",
                      position: {
                        x: 544,
                        y: 192,
                      },
                      elementId: "f4bc397f",
                      socketId: "a4576b4b",
                    },
                    "5461f976": {
                      id: "5461f976",
                      position: {
                        x: 544,
                        y: 152,
                      },
                      elementId: "04b4cb15",
                      socketId: "443ac92a",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "34842abd",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "5461f976",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 544,
                    minY: 152,
                    maxX: 544,
                    maxY: 192,
                  },
                },
                "94cb094e": {
                  id: "94cb094e",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "2499e86d": {
                      id: "2499e86d",
                      position: {
                        x: 192,
                        y: 320,
                      },
                      elementId: "a4f1283f",
                      socketId: "1402e892",
                    },
                    d4d2db7b: {
                      id: "d4d2db7b",
                      position: {
                        x: 512,
                        y: 296,
                      },
                      elementId: "f4bc397f",
                      socketId: "b4b869de",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "2499e86d",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "d4d2db7b",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 192,
                    minY: 296,
                    maxX: 512,
                    maxY: 320,
                  },
                },
                a413195b: {
                  id: "a413195b",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "44c5fac3": {
                      id: "44c5fac3",
                      position: {
                        x: 432,
                        y: 320,
                      },
                      elementId: "e423a991",
                      socketId: "e4f03ba2",
                    },
                    d451d9b8: {
                      id: "d451d9b8",
                      position: {
                        x: 536,
                        y: 296,
                      },
                      elementId: "f4bc397f",
                      socketId: "d4e1d899",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "44c5fac3",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "d451d9b8",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 432,
                    minY: 296,
                    maxX: 536,
                    maxY: 320,
                  },
                },
                e4a9280b: {
                  id: "e4a9280b",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    b427db90: {
                      id: "b427db90",
                      position: {
                        x: 656,
                        y: 320,
                      },
                      elementId: "1403bbc1",
                      socketId: "84950aa8",
                    },
                    "34a2bb00": {
                      id: "34a2bb00",
                      position: {
                        x: 552,
                        y: 296,
                      },
                      elementId: "f4bc397f",
                      socketId: "44c21bf9",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "b427db90",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "34a2bb00",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 552,
                    minY: 296,
                    maxX: 656,
                    maxY: 320,
                  },
                },
                "249dbaa7": {
                  id: "249dbaa7",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    a4c4ebed: {
                      id: "a4c4ebed",
                      position: {
                        x: 896,
                        y: 320,
                      },
                      elementId: "8436e830",
                      socketId: "047caa20",
                    },
                    d4fcc8c0: {
                      id: "d4fcc8c0",
                      position: {
                        x: 576,
                        y: 296,
                      },
                      elementId: "f4bc397f",
                      socketId: "9401cbbf",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "a4c4ebed",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "d4fcc8c0",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 576,
                    minY: 296,
                    maxX: 896,
                    maxY: 320,
                  },
                },
                "1411bbe8": {
                  id: "1411bbe8",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "04210a2b": {
                      id: "04210a2b",
                      position: {
                        x: 672,
                        y: 448,
                      },
                      elementId: "847159ad",
                      socketId: "1422c8dc",
                    },
                    d4d7f8f8: {
                      id: "d4d7f8f8",
                      position: {
                        x: 672,
                        y: 424,
                      },
                      elementId: "1403bbc1",
                      socketId: "9439da20",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "04210a2b",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "d4d7f8f8",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 672,
                    minY: 424,
                    maxX: 672,
                    maxY: 448,
                  },
                },
                d439680e: {
                  id: "d439680e",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "347ae937": {
                      id: "347ae937",
                      position: {
                        x: 928,
                        y: 448,
                      },
                      elementId: "849b88af",
                      socketId: "34ab2b48",
                    },
                    "4473b88d": {
                      id: "4473b88d",
                      position: {
                        x: 928,
                        y: 408,
                      },
                      elementId: "8436e830",
                      socketId: "34dae919",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "347ae937",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "4473b88d",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 928,
                    minY: 408,
                    maxX: 928,
                    maxY: 448,
                  },
                },
                "74107a65": {
                  id: "74107a65",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "94695a62": {
                      id: "94695a62",
                      position: {
                        x: 416,
                        y: 576,
                      },
                      elementId: "b4e21a9c",
                      socketId: "c4a4ba3c",
                    },
                    "249fab23": {
                      id: "249fab23",
                      position: {
                        x: 416,
                        y: 536,
                      },
                      elementId: "84de0b66",
                      socketId: "44ead846",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "94695a62",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "249fab23",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 416,
                    minY: 536,
                    maxX: 416,
                    maxY: 576,
                  },
                },
                "34a33a7e": {
                  id: "34a33a7e",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    d4c14b8f: {
                      id: "d4c14b8f",
                      position: {
                        x: 368,
                        y: 704,
                      },
                      elementId: "6494e957",
                      socketId: "44277af5",
                    },
                    b4bb485f: {
                      id: "b4bb485f",
                      position: {
                        x: 400,
                        y: 680,
                      },
                      elementId: "b4e21a9c",
                      socketId: "3438ea94",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "d4c14b8f",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "b4bb485f",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 368,
                    minY: 680,
                    maxX: 400,
                    maxY: 704,
                  },
                },
                "1486fa36": {
                  id: "1486fa36",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    c459d832: {
                      id: "c459d832",
                      position: {
                        x: 464,
                        y: 704,
                      },
                      elementId: "4493a880",
                      socketId: "14bf384b",
                    },
                    "3415690e": {
                      id: "3415690e",
                      position: {
                        x: 432,
                        y: 680,
                      },
                      elementId: "b4e21a9c",
                      socketId: "d45358d3",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "c459d832",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "3415690e",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 432,
                    minY: 680,
                    maxX: 464,
                    maxY: 704,
                  },
                },
                e41c4813: {
                  id: "e41c4813",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    d4f4280a: {
                      id: "d4f4280a",
                      position: {
                        x: 480,
                        y: 832,
                      },
                      elementId: "6402c8d5",
                      socketId: "14a9aae4",
                    },
                    "24311bfd": {
                      id: "24311bfd",
                      position: {
                        x: 480,
                        y: 792,
                      },
                      elementId: "4493a880",
                      socketId: "044c29a9",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "d4f4280a",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "24311bfd",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 480,
                    minY: 792,
                    maxX: 480,
                    maxY: 832,
                  },
                },
                d442da3d: {
                  id: "d442da3d",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    c47baa6b: {
                      id: "c47baa6b",
                      position: {
                        x: 880,
                        y: 576,
                      },
                      elementId: "f4674a32",
                      socketId: "64bff9be",
                    },
                    "1424da54": {
                      id: "1424da54",
                      position: {
                        x: 912,
                        y: 552,
                      },
                      elementId: "849b88af",
                      socketId: "74fafae4",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "c47baa6b",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "1424da54",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 880,
                    minY: 552,
                    maxX: 912,
                    maxY: 576,
                  },
                },
                "0498693c": {
                  id: "0498693c",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "7494ba5d": {
                      id: "7494ba5d",
                      position: {
                        x: 976,
                        y: 576,
                      },
                      elementId: "6413a850",
                      socketId: "643af9ac",
                    },
                    b46e1b8e: {
                      id: "b46e1b8e",
                      position: {
                        x: 944,
                        y: 552,
                      },
                      elementId: "849b88af",
                      socketId: "e47478c8",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "7494ba5d",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "b46e1b8e",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 944,
                    minY: 552,
                    maxX: 976,
                    maxY: 576,
                  },
                },
                "74de7b17": {
                  id: "74de7b17",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    d4a19be9: {
                      id: "d4a19be9",
                      position: {
                        x: 944,
                        y: 704,
                      },
                      elementId: "6452ab0b",
                      socketId: "e45ca988",
                    },
                    "14b42adf": {
                      id: "14b42adf",
                      position: {
                        x: 976,
                        y: 680,
                      },
                      elementId: "6413a850",
                      socketId: "b47979f0",
                    },
                  },
                  socketMap: {},
                  startPoint: {
                    pointType: "Plug",
                    id: "d4a19be9",
                    pointer: "one",
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "14b42adf",
                    pointer: "association",
                  },
                  middlePointList: [],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "association1",
                  bounds: {
                    minX: 944,
                    minY: 680,
                    maxX: 976,
                    maxY: 704,
                  },
                },
                e4ac29ec: {
                  id: "e4ac29ec",
                  elementType: "Callout",
                  searchKey: "",
                  size: {
                    width: 104,
                    height: 32,
                  },
                  position: {
                    x: 864,
                    y: 816,
                  },
                  importance: "normal",
                  text: "New member ID",
                  pointerStart: {
                    positionOnCallout: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 908,
                        y: 816,
                      },
                      {
                        x: 924,
                        y: 816,
                      },
                    ],
                    orderInPolygon: 1,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "844a99b2",
                  },
                  plugMap: {
                    "844a99b2": {
                      id: "844a99b2",
                      position: {
                        x: 928,
                        y: 792,
                      },
                      elementId: "6452ab0b",
                      socketId: "c4067ae2",
                    },
                  },
                  anchorMap: {
                    84226936: {
                      id: "84226936",
                      positionOnCallout: "bottomLeft",
                      position: {
                        x: 864,
                        y: 848,
                      },
                    },
                    "04ce9bbe": {
                      id: "04ce9bbe",
                      positionOnCallout: "topLeft",
                      position: {
                        x: 864,
                        y: 816,
                      },
                    },
                    c46a9888: {
                      id: "c46a9888",
                      positionOnCallout: "topMiddle",
                      position: {
                        x: 916,
                        y: 816,
                      },
                    },
                    c43feb97: {
                      id: "c43feb97",
                      positionOnCallout: "topRight",
                      position: {
                        x: 968,
                        y: 816,
                      },
                    },
                    "34b27bdb": {
                      id: "34b27bdb",
                      positionOnCallout: "right",
                      position: {
                        x: 968,
                        y: 832,
                      },
                    },
                    "040439e0": {
                      id: "040439e0",
                      positionOnCallout: "bottomRight",
                      position: {
                        x: 968,
                        y: 848,
                      },
                    },
                    "744f18dc": {
                      id: "744f18dc",
                      positionOnCallout: "bottomMiddle",
                      position: {
                        x: 916,
                        y: 848,
                      },
                    },
                    "343cc9d4": {
                      id: "343cc9d4",
                      positionOnCallout: "left",
                      position: {
                        x: 864,
                        y: 832,
                      },
                    },
                  },
                  bounds: {
                    minX: 864,
                    minY: 792,
                    maxX: 968,
                    maxY: 848,
                  },
                },
                e41a6aaa: {
                  id: "e41a6aaa",
                  elementType: "Callout",
                  searchKey: "",
                  size: {
                    width: 96,
                    height: 48,
                  },
                  position: {
                    x: 1016,
                    y: 816,
                  },
                  importance: "normal",
                  text: "<uu5string /><div>New member</div><div>name</div>",
                  pointerStart: {
                    positionOnCallout: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 1056,
                        y: 816,
                      },
                      {
                        x: 1072,
                        y: 816,
                      },
                    ],
                    orderInPolygon: 1,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "4424fa28",
                  },
                  plugMap: {
                    "4424fa28": {
                      id: "4424fa28",
                      position: {
                        x: 1056,
                        y: 792,
                      },
                      elementId: "f4fd9bc8",
                      socketId: "b40a7810",
                    },
                  },
                  anchorMap: {
                    b45d4801: {
                      id: "b45d4801",
                      positionOnCallout: "topLeft",
                      position: {
                        x: 1016,
                        y: 816,
                      },
                    },
                    c472daba: {
                      id: "c472daba",
                      positionOnCallout: "topMiddle",
                      position: {
                        x: 1064,
                        y: 816,
                      },
                    },
                    f4a11b6e: {
                      id: "f4a11b6e",
                      positionOnCallout: "topRight",
                      position: {
                        x: 1112,
                        y: 816,
                      },
                    },
                    "44d7780e": {
                      id: "44d7780e",
                      positionOnCallout: "right",
                      position: {
                        x: 1112,
                        y: 840,
                      },
                    },
                    "8430686d": {
                      id: "8430686d",
                      positionOnCallout: "bottomRight",
                      position: {
                        x: 1112,
                        y: 864,
                      },
                    },
                    "9462ba84": {
                      id: "9462ba84",
                      positionOnCallout: "bottomMiddle",
                      position: {
                        x: 1064,
                        y: 864,
                      },
                    },
                    "84769bcf": {
                      id: "84769bcf",
                      positionOnCallout: "bottomLeft",
                      position: {
                        x: 1016,
                        y: 864,
                      },
                    },
                    b4e0595c: {
                      id: "b4e0595c",
                      positionOnCallout: "left",
                      position: {
                        x: 1016,
                        y: 840,
                      },
                    },
                  },
                  bounds: {
                    minX: 1016,
                    minY: 792,
                    maxX: 1112,
                    maxY: 864,
                  },
                },
                c4d1fbb6: {
                  id: "c4d1fbb6",
                  elementType: "Annotation",
                  searchKey: "",
                  size: {
                    width: 104,
                    height: 64,
                  },
                  position: {
                    x: 1056,
                    y: 568,
                  },
                  text: "<uu5string />Renders only if<div>user is owner</div><div>to add new user</div>",
                  pointerStart: {
                    positionOnAnnotation: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 1056,
                        y: 608,
                      },
                      {
                        x: 1056,
                        y: 592,
                      },
                    ],
                    orderInPolygon: 4,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "e4e82a07",
                  },
                  plugMap: {
                    e4e82a07: {
                      id: "e4e82a07",
                      position: {
                        x: 1024,
                        y: 608,
                      },
                      elementId: "6413a850",
                      socketId: "f49148f0",
                    },
                  },
                  anchorMap: {
                    "64a5cb8c": {
                      id: "64a5cb8c",
                      positionOnAnnotation: "topLeft",
                      position: {
                        x: 1056,
                        y: 568,
                      },
                    },
                    "2430fb8b": {
                      id: "2430fb8b",
                      positionOnAnnotation: "topMiddle",
                      position: {
                        x: 1108,
                        y: 568,
                      },
                    },
                    "24fe1a5b": {
                      id: "24fe1a5b",
                      positionOnAnnotation: "topRight",
                      position: {
                        x: 1160,
                        y: 568,
                      },
                    },
                    f4854850: {
                      id: "f4854850",
                      positionOnAnnotation: "right",
                      position: {
                        x: 1160,
                        y: 600,
                      },
                    },
                    a49edb3d: {
                      id: "a49edb3d",
                      positionOnAnnotation: "bottomRight",
                      position: {
                        x: 1160,
                        y: 632,
                      },
                    },
                    "842a0a3e": {
                      id: "842a0a3e",
                      positionOnAnnotation: "bottomMiddle",
                      position: {
                        x: 1108,
                        y: 632,
                      },
                    },
                    "64abf956": {
                      id: "64abf956",
                      positionOnAnnotation: "bottomLeft",
                      position: {
                        x: 1056,
                        y: 632,
                      },
                    },
                    "74417b7d": {
                      id: "74417b7d",
                      positionOnAnnotation: "left",
                      position: {
                        x: 1056,
                        y: 600,
                      },
                    },
                  },
                  bounds: {
                    minX: 1024,
                    minY: 568,
                    maxX: 1160,
                    maxY: 632,
                  },
                },
                "04b5a967": {
                  id: "04b5a967",
                  elementType: "MultiConnector",
                  plugMap: {
                    "146909c2": {
                      id: "146909c2",
                      position: {
                        x: 160,
                        y: 408,
                      },
                      elementId: "a4f1283f",
                      socketId: "6492c86e",
                    },
                    d4280935: {
                      id: "d4280935",
                      position: {
                        x: 96,
                        y: 448,
                      },
                      elementId: "b4fe1ae9",
                      socketId: "c4158a0d",
                    },
                    e47368e1: {
                      id: "e47368e1",
                      position: {
                        x: 224,
                        y: 448,
                      },
                      elementId: "14bcea3e",
                      socketId: "d4f5da9c",
                    },
                  },
                  socketMap: {},
                  anchorMap: {
                    "44775a6d": {
                      id: "44775a6d",
                      positionOnMultiConnector: "vertical",
                      position: {
                        x: 160,
                        y: 432,
                      },
                    },
                  },
                  startPoint: {
                    pointType: "Plug",
                    id: "146909c2",
                    pointer: "association",
                  },
                  endPointList: [
                    {
                      pointType: "Plug",
                      id: "d4280935",
                      pointer: "one",
                    },
                    {
                      pointType: "Plug",
                      id: "e47368e1",
                      pointer: "one",
                    },
                  ],
                  importance: "normal",
                  direction: "vertical",
                  bidirectional: false,
                  inverted: true,
                  lineStyle: "solid",
                  searchKey: "",
                  relationType: "association1",
                  bounds: {
                    minX: 96,
                    minY: 408,
                    maxX: 224,
                    maxY: 448,
                  },
                },
                c413b81a: {
                  id: "c413b81a",
                  elementType: "Annotation",
                  searchKey: "",
                  size: {
                    width: 152,
                    height: 64,
                  },
                  position: {
                    x: 40,
                    y: 568,
                  },
                  text: "<uu5string />Text input enables inline<div>update of shopping list</div><div>name.</div>",
                  pointerStart: {
                    positionOnAnnotation: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 108,
                        y: 568,
                      },
                      {
                        x: 124,
                        y: 568,
                      },
                    ],
                    orderInPolygon: 1,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "d4075a51",
                  },
                  plugMap: {
                    d4075a51: {
                      id: "d4075a51",
                      position: {
                        x: 96,
                        y: 536,
                      },
                      elementId: "b4fe1ae9",
                      socketId: "c42daae4",
                    },
                  },
                  anchorMap: {
                    "84070b9b": {
                      id: "84070b9b",
                      positionOnAnnotation: "topLeft",
                      position: {
                        x: 40,
                        y: 568,
                      },
                    },
                    b412f9de: {
                      id: "b412f9de",
                      positionOnAnnotation: "topMiddle",
                      position: {
                        x: 116,
                        y: 568,
                      },
                    },
                    "2499f9c5": {
                      id: "2499f9c5",
                      positionOnAnnotation: "topRight",
                      position: {
                        x: 192,
                        y: 568,
                      },
                    },
                    "14d3c851": {
                      id: "14d3c851",
                      positionOnAnnotation: "right",
                      position: {
                        x: 192,
                        y: 600,
                      },
                    },
                    a4c6aa6f: {
                      id: "a4c6aa6f",
                      positionOnAnnotation: "bottomRight",
                      position: {
                        x: 192,
                        y: 632,
                      },
                    },
                    "045099cc": {
                      id: "045099cc",
                      positionOnAnnotation: "bottomMiddle",
                      position: {
                        x: 116,
                        y: 632,
                      },
                    },
                    a4a8e937: {
                      id: "a4a8e937",
                      positionOnAnnotation: "bottomLeft",
                      position: {
                        x: 40,
                        y: 632,
                      },
                    },
                    "7439ea9e": {
                      id: "7439ea9e",
                      positionOnAnnotation: "left",
                      position: {
                        x: 40,
                        y: 600,
                      },
                    },
                  },
                  bounds: {
                    minX: 40,
                    minY: 536,
                    maxX: 192,
                    maxY: 632,
                  },
                },
                b4744995: {
                  id: "b4744995",
                  elementType: "Annotation",
                  searchKey: "",
                  size: {
                    width: 112,
                    height: 72,
                  },
                  position: {
                    x: 728,
                    y: 344,
                  },
                  text: "<uu5string />Renders only if<div>there are some</div><div>completed items</div>",
                  pointerStart: {
                    positionOnAnnotation: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 728,
                        y: 370,
                      },
                      {
                        x: 728,
                        y: 354,
                      },
                    ],
                    orderInPolygon: 4,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "24a96b7c",
                  },
                  plugMap: {
                    "24a96b7c": {
                      id: "24a96b7c",
                      position: {
                        x: 704,
                        y: 352,
                      },
                      elementId: "1403bbc1",
                      socketId: "24d7b968",
                    },
                  },
                  anchorMap: {
                    34898996: {
                      id: "34898996",
                      positionOnAnnotation: "bottomLeft",
                      position: {
                        x: 728,
                        y: 416,
                      },
                    },
                    84358816: {
                      id: "84358816",
                      positionOnAnnotation: "topLeft",
                      position: {
                        x: 728,
                        y: 344,
                      },
                    },
                    "741f3b87": {
                      id: "741f3b87",
                      positionOnAnnotation: "topMiddle",
                      position: {
                        x: 784,
                        y: 344,
                      },
                    },
                    e415ab4e: {
                      id: "e415ab4e",
                      positionOnAnnotation: "topRight",
                      position: {
                        x: 840,
                        y: 344,
                      },
                    },
                    e46d2952: {
                      id: "e46d2952",
                      positionOnAnnotation: "right",
                      position: {
                        x: 840,
                        y: 380,
                      },
                    },
                    a4a93b85: {
                      id: "a4a93b85",
                      positionOnAnnotation: "bottomRight",
                      position: {
                        x: 840,
                        y: 416,
                      },
                    },
                    "54f7f829": {
                      id: "54f7f829",
                      positionOnAnnotation: "bottomMiddle",
                      position: {
                        x: 784,
                        y: 416,
                      },
                    },
                    "94b3d96a": {
                      id: "94b3d96a",
                      positionOnAnnotation: "left",
                      position: {
                        x: 728,
                        y: 380,
                      },
                    },
                  },
                  bounds: {
                    minX: 704,
                    minY: 344,
                    maxX: 840,
                    maxY: 416,
                  },
                },
                b4dc0af7: {
                  id: "b4dc0af7",
                  elementType: "Annotation",
                  searchKey: "",
                  size: {
                    width: 120,
                    height: 48,
                  },
                  position: {
                    x: 472,
                    y: 336,
                  },
                  text: "<uu5string />Shows unchecked<div>items</div>",
                  pointerStart: {
                    positionOnAnnotation: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 472,
                        y: 368,
                      },
                      {
                        x: 472,
                        y: 352,
                      },
                    ],
                    orderInPolygon: 4,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "14e89b68",
                  },
                  plugMap: {
                    "14e89b68": {
                      id: "14e89b68",
                      position: {
                        x: 448,
                        y: 352,
                      },
                      elementId: "e423a991",
                      socketId: "4412aaba",
                    },
                  },
                  anchorMap: {
                    f4c8e8de: {
                      id: "f4c8e8de",
                      positionOnAnnotation: "topLeft",
                      position: {
                        x: 472,
                        y: 336,
                      },
                    },
                    "34542b13": {
                      id: "34542b13",
                      positionOnAnnotation: "topMiddle",
                      position: {
                        x: 532,
                        y: 336,
                      },
                    },
                    a4490b2c: {
                      id: "a4490b2c",
                      positionOnAnnotation: "topRight",
                      position: {
                        x: 592,
                        y: 336,
                      },
                    },
                    "74ad3879": {
                      id: "74ad3879",
                      positionOnAnnotation: "right",
                      position: {
                        x: 592,
                        y: 360,
                      },
                    },
                    d4292975: {
                      id: "d4292975",
                      positionOnAnnotation: "bottomRight",
                      position: {
                        x: 592,
                        y: 384,
                      },
                    },
                    c497fb5e: {
                      id: "c497fb5e",
                      positionOnAnnotation: "bottomMiddle",
                      position: {
                        x: 532,
                        y: 384,
                      },
                    },
                    a48e58f9: {
                      id: "a48e58f9",
                      positionOnAnnotation: "bottomLeft",
                      position: {
                        x: 472,
                        y: 384,
                      },
                    },
                    "349d4b73": {
                      id: "349d4b73",
                      positionOnAnnotation: "left",
                      position: {
                        x: 472,
                        y: 360,
                      },
                    },
                  },
                  bounds: {
                    minX: 448,
                    minY: 336,
                    maxX: 592,
                    maxY: 384,
                  },
                },
                "04c11ba4": {
                  id: "04c11ba4",
                  elementType: "Annotation",
                  searchKey: "",
                  size: {
                    width: 104,
                    height: 48,
                  },
                  position: {
                    x: 728,
                    y: 464,
                  },
                  text: "<uu5string />Shows checked<div>items</div>",
                  pointerStart: {
                    positionOnAnnotation: ["bottom", "left", "top", "right"],
                    pointList: [
                      {
                        x: 728,
                        y: 496,
                      },
                      {
                        x: 728,
                        y: 480,
                      },
                    ],
                    orderInPolygon: 4,
                  },
                  pointerEnd: {
                    pointType: "Plug",
                    id: "7485f871",
                  },
                  plugMap: {
                    "7485f871": {
                      id: "7485f871",
                      position: {
                        x: 704,
                        y: 480,
                      },
                      elementId: "847159ad",
                      socketId: "a4e43927",
                    },
                  },
                  anchorMap: {
                    "84a61b7e": {
                      id: "84a61b7e",
                      positionOnAnnotation: "topLeft",
                      position: {
                        x: 728,
                        y: 464,
                      },
                    },
                    "74dc4a64": {
                      id: "74dc4a64",
                      positionOnAnnotation: "topMiddle",
                      position: {
                        x: 780,
                        y: 464,
                      },
                    },
                    e4844a99: {
                      id: "e4844a99",
                      positionOnAnnotation: "topRight",
                      position: {
                        x: 832,
                        y: 464,
                      },
                    },
                    "14b6bb7e": {
                      id: "14b6bb7e",
                      positionOnAnnotation: "right",
                      position: {
                        x: 832,
                        y: 488,
                      },
                    },
                    e4a7ebaa: {
                      id: "e4a7ebaa",
                      positionOnAnnotation: "bottomRight",
                      position: {
                        x: 832,
                        y: 512,
                      },
                    },
                    d4b4ea50: {
                      id: "d4b4ea50",
                      positionOnAnnotation: "bottomMiddle",
                      position: {
                        x: 780,
                        y: 512,
                      },
                    },
                    "2447fb77": {
                      id: "2447fb77",
                      positionOnAnnotation: "bottomLeft",
                      position: {
                        x: 728,
                        y: 512,
                      },
                    },
                    e4ad6931: {
                      id: "e4ad6931",
                      positionOnAnnotation: "left",
                      position: {
                        x: 728,
                        y: 488,
                      },
                    },
                  },
                  bounds: {
                    minX: 704,
                    minY: 464,
                    maxX: 832,
                    maxY: 512,
                  },
                },
                "8409595b": {
                  id: "8409595b",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    "14731b28": {
                      id: "14731b28",
                      position: {
                        x: 448,
                        y: 480,
                      },
                      elementId: "84de0b66",
                      socketId: "c4d1eb47",
                    },
                    e449ab35: {
                      id: "e449ab35",
                      position: {
                        x: 672,
                        y: 536,
                      },
                      elementId: "847159ad",
                      socketId: "e4e32b2f",
                    },
                  },
                  socketMap: {
                    d4aab802: {
                      id: "d4aab802",
                      position: {
                        x: 544,
                        y: 480,
                      },
                      plugList: [],
                    },
                    "149a9a11": {
                      id: "149a9a11",
                      position: {
                        x: 544,
                        y: 560,
                      },
                      plugList: [],
                    },
                    "14cb9b06": {
                      id: "14cb9b06",
                      position: {
                        x: 672,
                        y: 560,
                      },
                      plugList: [],
                    },
                  },
                  startPoint: {
                    pointType: "Plug",
                    id: "14731b28",
                    pointer: null,
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "e449ab35",
                    pointer: "association",
                  },
                  middlePointList: ["d4aab802", "149a9a11", "14cb9b06"],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "associationN",
                  bounds: {
                    minX: 448,
                    minY: 480,
                    maxX: 672,
                    maxY: 560,
                  },
                },
                b40aa84b: {
                  id: "b40aa84b",
                  elementType: "Connector",
                  searchKey: "",
                  plugMap: {
                    b48c696f: {
                      id: "b48c696f",
                      position: {
                        x: 960,
                        y: 608,
                      },
                      elementId: "6413a850",
                      socketId: "04c598c2",
                    },
                    "543b58e0": {
                      id: "543b58e0",
                      position: {
                        x: 864,
                        y: 664,
                      },
                      elementId: "f4674a32",
                      socketId: "d4d21a22",
                    },
                  },
                  socketMap: {
                    c458385d: {
                      id: "c458385d",
                      position: {
                        x: 928,
                        y: 608,
                      },
                      plugList: [],
                    },
                    c461eacf: {
                      id: "c461eacf",
                      position: {
                        x: 928,
                        y: 688,
                      },
                      plugList: [],
                    },
                    b4fb9b1d: {
                      id: "b4fb9b1d",
                      position: {
                        x: 864,
                        y: 688,
                      },
                      plugList: [],
                    },
                  },
                  startPoint: {
                    pointType: "Plug",
                    id: "b48c696f",
                    pointer: null,
                  },
                  endPoint: {
                    pointType: "Plug",
                    id: "543b58e0",
                    pointer: "association",
                  },
                  middlePointList: ["c458385d", "c461eacf", "b4fb9b1d"],
                  importance: "normal",
                  lineStyle: "solid",
                  relationType: "associationN",
                  bounds: {
                    minX: 864,
                    minY: 608,
                    maxX: 960,
                    maxY: 688,
                  },
                },
              },
              elementZOrderList: [
                "04b4cb15",
                "1403bbc1",
                "e423a991",
                "f4bc397f",
                "847159ad",
                "8436e830",
                "b4fe1ae9",
                "a4f1283f",
                "14bcea3e",
                "4493a880",
                "b4e21a9c",
                "6494e957",
                "84de0b66",
                "6402c8d5",
                "849b88af",
                "f4674a32",
                "6413a850",
                "f4fd9bc8",
                "6452ab0b",
                "54e5b8b7",
                "94cb094e",
                "a413195b",
                "e4a9280b",
                "249dbaa7",
                "54529856",
                "1411bbe8",
                "d439680e",
                "74107a65",
                "34a33a7e",
                "1486fa36",
                "e41c4813",
                "d442da3d",
                "0498693c",
                "74de7b17",
                "74756859",
                "e4ac29ec",
                "e41a6aaa",
                "c4d1fbb6",
                "04b5a967",
                "c413b81a",
                "b4744995",
                "b4dc0af7",
                "04c11ba4",
                "8409595b",
                "b40aa84b",
              ],
            }}
          />
          <DynamicLibraryComponent
            uu5Tag={"UU5.Bricks.Section"}
            contentEditable
            level="4"
            header="Komponenty a jejich propsy"
            colorSchema={null}
          >
            <DynamicLibraryComponent
              uu5Tag={"UU5.RichText.Block"}
              uu5string="<uu5string/><UU5.Bricks.Ul><UU5.Bricks.Li><strong>ShoppingListDetail</strong> - hlavní komponenta, obsahuje většinu business logiky pro práci s nákupním seznamem<UU5.Bricks.Ul><UU5.Bricks.Li>data - kompletní data nákupního seznamu - do budoucna stačí komponentu obalit nevizuální komponentou pro čtení dat ze serveru a nebude nutné nic měnit (OBJECT)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li><UU5.Bricks.Li><strong>ItemList </strong>- seznam položek nákupního seznamu<UU5.Bricks.Ul><UU5.Bricks.Li>data - seznam položek ke zobrazení (ARRAY)</UU5.Bricks.Li><UU5.Bricks.Li>onCheck - funkce pro potvrzení položky seznamu (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>onNameChange - funkce pro změnu názvu položky seznamu (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>onDelete - funkce pro smazání položky (FUNCTION)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li><UU5.Bricks.Li><strong>Item</strong> - položka nákupního seznamu<UU5.Bricks.Ul><UU5.Bricks.Li>...item - všechny vlastnosti položky seznamu</UU5.Bricks.Li><UU5.Bricks.Li>onCheck - funkce pro potvrzení položky seznamu (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>onNameChange - funkce pro změnu názvu položky seznamu (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>onDelete - funkce pro smazání položky (FUNCTION)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li><UU5.Bricks.Li><strong>MemberManager</strong> - komponenta (modální okno) pro správu uživatel, obsahuje business logiku pro přidávání a odebírání členů<UU5.Bricks.Ul><UU5.Bricks.Li>open - modální okno je otevřeno / zavřeno (BOOLEAN)</UU5.Bricks.Li><UU5.Bricks.Li>onClose - funkce pro zavření modálního okna (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>data - seznam členů (ARRAY)</UU5.Bricks.Li><UU5.Bricks.Li>onChange - funkce pro změnu v seznamu členů (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>isOwner - informace jestli přihlášený uživatel je vlastníkem nákupního seznamu (BOOLEAN)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li><UU5.Bricks.Li><strong>Member</strong> - komponenta pro zobrazení jednoho uživatele<UU5.Bricks.Ul><UU5.Bricks.Li>...item - všechny vlastnosti člena</UU5.Bricks.Li><UU5.Bricks.Li>onDelete - funkce pro smazání člena ze seznamu (FUNCTION)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li><UU5.Bricks.Li><strong>TextInput</strong> - komponenta pro inline editaci textových polí (bez nutnosti otevírat modální okna)<UU5.Bricks.Ul><UU5.Bricks.Li>value - název položky (STRING)</UU5.Bricks.Li><UU5.Bricks.Li>onChange - funkce pro změnu názvu položky (FUNCTION)</UU5.Bricks.Li><UU5.Bricks.Li>readOnly - informace o uzamčení možnosti měnit název pro splněné položky (BOOLEAN)</UU5.Bricks.Li></UU5.Bricks.Ul></UU5.Bricks.Li></UU5.Bricks.Ul>"
            />
          </DynamicLibraryComponent>
        </div>
      </div>
    );
  },
  //@@viewOff:render
});

ShoppingListDetailDesign = withRoute(ShoppingListDetailDesign);

//@@viewOn:exports
export { ShoppingListDetailDesign };
export default ShoppingListDetailDesign;
//@@viewOff:exports
