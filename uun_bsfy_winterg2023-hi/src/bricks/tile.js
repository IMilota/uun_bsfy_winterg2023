//@@viewOn:imports
import React from "react";
import { createVisualComponent } from "uu5g05";
import { Config } from "uu5g05-dev";
import Uu5Elements from "uu5g05-elements";
import Uu5TilesElements from "uu5tilesg02-elements";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: "Uu5TilesElements.Mock.Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let { data, ...otherProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5TilesElements.Tile {...otherProps} headerOverlap>
        {({ padding }) => {
          return (
            <>
              <img
                src={`https://uuapp.plus4u.net/uu-webkit-maing02/1bdb540a0c53458aa20cfd9c179e6a1c/${data.img}`}
                alt={data.img}
                className={Config.Css.css({ width: "100%", height: 120, display: "block", objectFit: "cover" })}
              />
              <div
                className={Config.Css.css({
                  paddingTop: padding.top,
                  paddingRight: padding.right,
                  paddingBottom: padding.bottom,
                  paddingLeft: padding.left,
                })}
              >
                <div>
                  <Uu5Elements.Icon icon="uugds-favorites" />
                  <strong>{data.speciesName}</strong>
                  <em>
                    <small>({data.speciesTaxonomyName})</small>
                  </em>
                </div>
                <Uu5Elements.Text key="location" colorScheme="green">
                  <Uu5Elements.Icon icon="uugdsstencil-navigation-mapmarker-solid" />
                  {data.location}
                </Uu5Elements.Text>
                <div key="description"></div>
                <small key="taxonomy">
                  <div>
                    Class{"\xA0"}
                    <strong>{data.class}</strong>, Order{"\xA0"}
                    <strong>{data.order}</strong>, Family{"\xA0"}
                    <strong>{data.family}</strong>
                  </div>
                </small>
              </div>
            </>
          );
        }}
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

export default Tile;
