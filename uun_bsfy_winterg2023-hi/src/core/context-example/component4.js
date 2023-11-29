//@@viewOn:imports
import { createVisualComponent } from "uu5g05";

import { Block } from "uu5g05-elements";

import { useThemeContext } from "./theme-context.js";
import { useLanguageContext } from "./language-context.js";

import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Component4 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Component4",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    const [isDark] = useThemeContext();
    const { language, languageSelector } = useLanguageContext();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Block
        header={
          <>
            {"Component4 "}
            {language}
            {languageSelector}
          </>
        }
        card="full"
        significance={isDark ? "highlighted" : undefined}
      >
        Hello World
      </Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Component4 };
export default Component4;
//@@viewOff:exports
