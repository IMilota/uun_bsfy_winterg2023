//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import { Select } from "uu5g05-forms";
import LanguageContext from "./language-context";
import Config from "./config/config";

//@@viewOff:imports

export const LanguageProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "LanguageProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [language, setLanguage] = useState(props.initialLanguageList?.[0] || "en");
    console.log(language);

    const value = {
      language,
      languageList: props.initialLanguageList,
      languageSelector: (
        <Select
          value={language}
          itemList={props.initialLanguageList.map((item) => {
            return { value: item, children: item.toUpperCase() };
          })}
          onChange={(e) => setLanguage(e.data.value)}
        />
      ),
      setLanguage,
    };
    //@@viewOff:private

    //@@viewOn:render
    return (
      <LanguageContext.Provider value={value}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </LanguageContext.Provider>
    );
    //@@viewOff:render
  },
});

export default LanguageProvider;
