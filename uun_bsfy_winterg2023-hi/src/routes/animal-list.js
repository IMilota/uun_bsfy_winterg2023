//@@viewOn:imports
import { Utils, createVisualComponent, useDataList } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";

import TilesExample from "./tiles-example.js";

import Calls from "calls";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let AnimalList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "AnimalList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const animalDataList = useDataList({ handlerMap: { load: Calls.getAnimalList } });
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <TilesExample animalDataList={animalDataList} />
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

AnimalList = withRoute(AnimalList, { authenticated: true });

//@@viewOn:exports
export { AnimalList };
export default AnimalList;
//@@viewOff:exports
