import { Input } from "antd";
import { AreaChartOutlined } from "@ant-design/icons";

export const InputField = ({ className, placeholder, action }) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      prefix={<AreaChartOutlined />}
      onKeyPress={(key) => {
        if (key.code == "Enter") {
          const { defaultValue } = key.target;
          action(defaultValue);
        }
      }}
    />
  );
};
