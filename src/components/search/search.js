import React from "react";
import { Select } from "antd";

const { Option } = Select;

export const Search = ({
  placeholder = "placeholder",
  onChange,
  options = [],
}) => {
  console.log("search ", options);
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      style={{ width: "100%" }}
    >
      {options.map((option) => {
        return (
          <Option key={option.station_id} value={option.station_id}>
            {option.name}
          </Option>
        );
      })}
    </Select>
  );
};
