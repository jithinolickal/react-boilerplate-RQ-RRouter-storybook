import { Button as AntdButton } from "antd";

import "./Button.css";
import { BaseButtonProps } from "antd/es/button/button";

type ButtonProps = {
  label?: string;
};
type Props = ButtonProps & BaseButtonProps;

const Button = ({ label, type, icon, loading, size, shape, disabled, ...props }: Props) => {
  return (
    <>
      {/* <AntdButton>{label}</AntdButton>
      <AntdButton type="default">Default Button</AntdButton>
      <AntdButton type="dashed">Dashed Button</AntdButton>
      <AntdButton type="text">Text Button</AntdButton>
      <AntdButton type="link">Link Button</AntdButton> */}

      <AntdButton
        type={type}
        icon={icon}
        loading={loading}
        size={size}
        shape={shape}
        disabled={disabled}
        {...props}
      >
        {label}
      </AntdButton>
    </>
  );
};

export default Button;
