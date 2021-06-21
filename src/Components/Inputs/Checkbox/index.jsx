import React from "react";
import { Container } from "./styles";

const RadioInput = ({ options, label, onChange, mandatory, name }) => {
  return (
    <Container>
      {label && <h4>{label}</h4>}
      <div onChange={onChange}>
        {options.map((opt) => {
          return (
            <>
              <input
                style={{ marginLeft: "10px" }}
                type="radio"
                value={opt}
                name={name}
                id={opt}
              />{" "}
              {opt}
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default RadioInput;
