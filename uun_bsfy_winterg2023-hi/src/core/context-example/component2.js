//@@viewOn:imports
import { createVisualComponent } from "uu5g05";

import { Block } from "uu5g05-elements";

import { useLanguageContext } from "./language-context.js";

import Config from "./config/config.js";
import Component3 from "./component3.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Component2 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Component2",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    const { language } = useLanguageContext();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Block header={"Component2 " + language} card="full">
        <Component3 />
      </Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Component2 };
export default Component2;
//@@viewOff:exports
