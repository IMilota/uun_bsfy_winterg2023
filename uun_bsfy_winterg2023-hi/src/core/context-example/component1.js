//@@viewOn:imports
import { createVisualComponent } from "uu5g05";

import { Block } from "uu5g05-elements";

import Config from "./config/config.js";
import Component2 from "./component2.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Component1 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Component1",
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
    return (
      <Block header={"Component1"} card="full">
        <Component2 />
      </Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Component1 };
export default Component1;
//@@viewOff:exports
