import React from "react";
import TextInput from "../Inputs/Text";
import Slider from "../Inputs/Slider";
import Radio from "../Inputs/Checkbox";
import { Container, Inputs, SectionTitle } from './styles'

const FormSection = ({ sectionName, sectionFields, onChange }) => {
  return (
    <Container section={sectionName}>
      <SectionTitle>{sectionName}</SectionTitle>
      <Inputs>
        {sectionFields.map(
          ({ field_name, value, mandatory, type, options }) => {
            if (type === "slider") {
              return (
                <Slider
                  key={field_name}
                  label={field_name}
                  track_color="#64EFBD"
                  thumb_color="#f3f3f3"
                  value={value}
                  onChange={() => onChange(field_name)}
                />
              );
            } else if (type === "text") {
              return (
                <TextInput
                  key={field_name}
                  label={field_name}
                  onChange={(event) => onChange(event, field_name)}
                  text_color="#333"
                  border_color="#64EFBD"
                  placeholder="..."
                  mandatory={mandatory}
                  value={value}
                />
              );
            } else {
              return (
                <Radio
                  label={field_name}
                  options={options}
                  name={field_name}
                  onChange={(event) => onChange(event, field_name)}
                />
              );
            }
          }
        )}
      </Inputs>
    </Container>
  );
};

export default FormSection;
