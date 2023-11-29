//@@viewOn:imports
import { createVisualComponent } from "uu5g05";

import { Block } from "uu5g05-elements";

import { LanguageProvider } from "./language-provider.js";

import Config from "./config/config.js";
import Component4 from "./component4.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Component3 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Component3",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Block header={"Component3"} card="full">
        <LanguageProvider initialLanguageList={["pl", "sk", "cs"]}>
          <Component4 />
        </LanguageProvider>
      </Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Component3 };
export default Component3;
//@@viewOff:exports
