//@@viewOn:imports
import { createVisualComponent, useRef } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import Member from "./member";
import TextInput from "./text-input";
//@@viewOff:imports

//@@viewOn:css
//@@viewOff:css

const MemberManager = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TextInput",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { itemList, onChange, isOwner, ...restProps } = props;

    const tempDataRef = useRef({});

    function addMember(key, value) {
      tempDataRef.current[key] = value;
      if (tempDataRef.current.id && tempDataRef.current.name) {
        const newItemList = [...itemList];
        newItemList.push(tempDataRef.current);
        onChange(newItemList);
        tempDataRef.current = {};
      }
    }

    //@@viewOn:render
    return (
      <Uu5Elements.Modal header="Members" width={600} {...restProps}>
        {itemList.map((item) => (
          <Member
            key={item.id}
            {...item}
            onDelete={isOwner ? () => onChange(itemList.filter(({ id }) => id !== item.id)) : undefined}
          />
        ))}
        {isOwner && (
          <Uu5Elements.ListItem significance="subdued" key={itemList.length}>
            <TextInput placeholder="id" onChange={(id) => addMember("id", id)} />
            <TextInput placeholder="name" onChange={(name) => addMember("name", name)} />
          </Uu5Elements.ListItem>
        )}
      </Uu5Elements.Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MemberManager };
export default MemberManager;
//@@viewOff:exports
