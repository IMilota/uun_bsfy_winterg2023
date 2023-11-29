//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import UserProvider from "./user-list/user-provider.js";

import Config from "./config/config.js";
import Home from "../routes/home.js";
import ShoppingListListProvider from "./shopping-list-list/shopping-list-list-provider.js";
import ThemeProvider from "./context-example/theme-provider.js";
import LanguageProvider from "./context-example/language-provider.js";
//@@viewOff:imports

//@@viewOn:constants
const About = Utils.Component.lazy(() => import("../routes/about.js"));
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));
const ControlPanel = Utils.Component.lazy(() => import("../routes/control-panel.js"));

// homework exapmle components
const ShoppingListList = Utils.Component.lazy(() => import("../routes/shopping-list-list.js"));
const ShoppingListListDesign = Utils.Component.lazy(() => import("../routes/shopping-list-list-design.js"));
const ShoppingListDetail = Utils.Component.lazy(() => import("../routes/shopping-list-detail.js"));
const ShoppingListDetailDesign = Utils.Component.lazy(() => import("../routes/shopping-list-detail-design.js"));

// other examples
const TilesExample = Utils.Component.lazy(() => import("../routes/tiles-example.js"));
const ContextExample = Utils.Component.lazy(() => import("../routes/context-example.js"));
const AnimalList = Utils.Component.lazy(() => import("../routes/animal-list.js"));

const ROUTE_MAP = {
  "": { redirect: "home" },
  home: (props) => <Home {...props} />,

  // homework examples
  shoppingListList: (props) => <ShoppingListList {...props} />,
  shoppingListListDesign: (props) => <ShoppingListListDesign {...props} />,
  shoppingListDetail: (props) => <ShoppingListDetail {...props} />,
  shoppingListDetailDesign: (props) => <ShoppingListDetailDesign {...props} />,

  // other examples
  animalList: (props) => <AnimalList {...props} />,
  tilesExample: (props) => <TilesExample {...props} />,
  contextExample: (props) => <ContextExample {...props} />,

  //
  about: (props) => <About {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
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
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <UserProvider>
            <ShoppingListListProvider>
              <ThemeProvider>
                <LanguageProvider initialLanguageList={["cs", "en"]}>
                  <Plus4U5App.Spa routeMap={ROUTE_MAP} />
                </LanguageProvider>
              </ThemeProvider>
            </ShoppingListListProvider>
          </UserProvider>
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
