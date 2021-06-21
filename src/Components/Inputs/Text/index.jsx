import React from "react";
import { Container, Input } from "./styles";

const TextInput = ({
  value,
  placeholder,
  text_color,
  background,
  border_color,
  label,
  onChange,
  mandatory,
}) => {
  return (
    <Container>
      {label && <h4>{label}</h4>}
      <Input
        background={background}
        text_color={text_color}
        border_color={value ? border_color : "#FD3838"}
        type="text"
        name={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={mandatory}
      />
    </Container>
  );
};

export default TextInput;
