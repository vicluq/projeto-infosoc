import { useState, useEffect, useCallback } from "react";
import FormSection from "../../Components/FormSection";
import InitialData from "../../data/parameters.json";
import makeRequest from "../../data/makeRequest";
import ScreenTypes from "../../data/screens";
import formSections from "../../data/formSections";
import {
  Container,
  FormContainer,
  InputContainer,
  Submit,
  Button,
  FormTitle,
  FormPoints,
} from "./styles";

const TOTAL_POINTS = 60;

const Form = ({ changeScreen, setLoading }) => {
  const [error, setError] = useState(false);
  const [points, setPoints] = useState(TOTAL_POINTS);
  const [formData, setFormData] = useState([
    {
      field_name: "Login CIn",
      value: "",
      mandatory: true,
      section: "Você",
      type: "text",
    },
    {
      field_name: "Email",
      value: "",
      mandatory: true,
      section: "Você",
      type: "text",
    },
    {
      field_name: "Gênero",
      value: "",
      mandatory: true,
      section: "Você",
      type: "radio",
      options: ["Feminino", "Masculino", "Não Binário", "Outro"],
    },
    ...InitialData,
  ]);

  if (error) {
    setTimeout(() => {}, 2000);
  }

  const inputChange = (event, field_name) => {
    const inputValue = event.target.value;
    let totalPoints = 0;
    console.log(field_name, inputValue);

    let data = [...formData].map((field) => {
      let inptPoint;
      if (
        field.field_name === field_name &&
        (field_name === "Login CIn" ||
          field_name === "Email" ||
          field_name === "Gênero")
      ) {
        return { ...field, value: inputValue };
      } else if (
        field.field_name === field_name &&
        (Number(inputValue) || inputValue === "")
      ) {
        inptPoint = Number(inputValue) || 0;
        totalPoints += inptPoint; // updating total points
        return { ...field, value: inputValue };
      } else {
        inptPoint = Number(field.value) || 0;
        totalPoints += inptPoint; // calc total points
        return field;
      }
    });

    setFormData(data);
    setPoints(TOTAL_POINTS - totalPoints);
  };

  const formSubmit = () => {
    if (points >= 0) {
      setLoading(true);
      makeRequest(formData, "post")
        .then((res) => {
          console.log(res);
          setLoading(false);
          changeScreen(ScreenTypes.THANK_YOU_SCREEN);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  };

  return (
    <Container>
      {error && <div>Ocorreu algum erro, tente novamente!</div>}
      <FormContainer className="FormArea">
        <FormTitle>Opa! Preencha esse lindo formulário!</FormTitle>
        <FormPoints>
          <p>
            Você tem <b>{points}</b> pontos para distribuir
          </p>
          {points < 0 ? (
            <p>
              Você excedeu a quantia máxima de pontos! Diminua algum campo 😉
            </p>
          ) : null}
        </FormPoints>
        <InputContainer>
          {Object.values(formSections).map((section, index) => (
            <FormSection
              key={section + index}
              sectionName={section}
              sectionFields={formData.filter(
                (field) => field.section === section
              )}
              onChange={inputChange}
            />
          ))}
        </InputContainer>
        <Submit>
          <Button
            disabled={
              points < 0 ||
              !formData.reduce((curr, { value }) => value && curr, true)
            }
            onClick={formSubmit}
          >
            Enviar
          </Button>
        </Submit>
      </FormContainer>
    </Container>
  );
};

export default Form;
