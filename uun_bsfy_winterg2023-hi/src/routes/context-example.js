//@@viewOn:imports
import { Utils, createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import PositionBar from "../core/position-bar.js";
import Component1 from "../core/context-example/component1.js";
import { useThemeContext } from "../core/context-example/theme-context.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ContextExample = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ContextExample",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [isDark] = useThemeContext();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <PositionBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <Component1 props={isDark} />
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

ContextExample = withRoute(ContextExample, { authenticated: true });

//@@viewOn:exports
export { ContextExample };
export default ContextExample;
//@@viewOff:exports
