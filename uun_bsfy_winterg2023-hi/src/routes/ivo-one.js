//@@viewOn:imports
import { Utils, createVisualComponent, useRoute, useScreenSize, useElementSize, useState } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import Uu5Elements from "uu5g05-elements";
import Ingredient from "../bricks/ingredient.js";
//@@viewOff:imports

//@@viewOn:constants
const RecipeDetailMap = {
  one: { name: "One", ingredienceList: ["i1", "i4"] },
  two: { name: "Two" },
  three: { name: "Three" },
};

const IngredienceMap = {
  i1: "paprika",
  i2: "cibule",
  i3: "česnek",
  i4: "brambory",
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let IvoOne = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "IvoOne",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [route, setRoute] = useRoute();
    const recipeId = route.params.id;
    const [ingredienceList, setIngredienceList] = useState(RecipeDetailMap[recipeId]?.ingredienceList || []);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        {["one", "two", "three"].map((item) => {
          return (
            <Uu5Elements.Button key={item} onClick={() => setRoute("ivo", { id: item })}>
              {item}
            </Uu5Elements.Button>
          );
        })}
        <h2>{RecipeDetailMap[recipeId]?.name || "recipe with given ID does not exist"}</h2>
        {ingredienceList.map((item) => {
          return (
            <Ingredient key={item} id={item} name={IngredienceMap[item]} setIngredienceList={setIngredienceList} />
          );
        })}
      </div>
    );
  },
  //@@viewOff:render
});

IvoOne = withRoute(IvoOne);

//@@viewOn:exports
export { IvoOne };
export default IvoOne;
//@@viewOff:exports
