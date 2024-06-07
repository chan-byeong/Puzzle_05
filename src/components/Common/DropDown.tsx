import React from "react";
import Select, { ActionMeta } from "react-select";
import { numberStyle, timeStyle, dateStyle } from "./customDropdown.style";

// TODO: prop -> 너비, 내용물(리스트), options? = {}
export type OptionType = {
  value: number | string;
  label: string;
};

interface DropDownProps {
  options: OptionType[];
  placeholder: string;
  styleOption: string;
  onChange: (selectedOption: OptionType | null, actionMeta: ActionMeta<OptionType>) => void;
}

function DropDown({ options, placeholder, styleOption, onChange }: DropDownProps) {
  const styleOptions = (styleOption: string) => {
    if (styleOption === "time") return timeStyle;
    if (styleOption === "date") return dateStyle;
    if (styleOption === "num") return numberStyle;
  };

  return (
    <Select
      options={options}
      styles={styleOptions(styleOption)}
      placeholder={placeholder}
      isSearchable={false}
      onChange={onChange}
      blurInputOnSelect={true}
      maxMenuHeight={100}
    />
  );
}

export default DropDown;
