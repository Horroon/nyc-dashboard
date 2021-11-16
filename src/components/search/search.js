import React, { useCallback } from "react";
import { Select } from "antd";

const { Option } = Select;

export const Search = ({
  placeholder = "placeholder",
  onChange,
  options = [],
  selectedValue = "all",
}) => {
  const LiveSearch = useCallback(() => {
    return (
      <Select
        id="searchuniqu"
        data-tes
        showSearch
        defaultValue={selectedValue}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        style={{ width: "100%" }}
      >
        <Option key="all" value="all">
          All
        </Option>
        {options.map((option) => {
          return (
            <Option key={option.station_id} value={option.station_id}>
              {option.name}
            </Option>
          );
        })}
      </Select>
    );
  }, [selectedValue, options]);

  return <LiveSearch />;
};
