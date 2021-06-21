import styled, { css } from "styled-components";
import {formSections} from "../../data/formSections";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 70%;
  display: grid;
  grid-template-rows: 5% 5% 83% 7%;
  grid-template-areas:
    "form_title"
    "points_control"
    "input_area"
    "button";

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
    grid-template-rows: 5% 5% 84% 6%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  align-self: center;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const FormPoints = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 3px solid #64efbd;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr 1fr;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "${formSections.YOU.slice(0, 4)} ${formSections.YOU.slice(0, 4)}"
    "${formSections.DADOS_E_TECH.slice(0, 4)} ${formSections.GOV.slice(0, 4)}"
    "${formSections.SOCIETY.slice(0, 4)} ${formSections.SOCIETY.slice(0, 4)}"
    "${formSections.ENVIRONMENT.slice(
      0,
      4
    )} ${formSections.ENVIRONMENT.slice(0, 4)}";
`;

export const Submit = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  height: 30px;
  width: 100px;
  background-color: #64efbd;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
          cursor: not-allowed;
        `
      : null}

  @media(max-width: 600px) {
    height: 25px;
    font-size: 14px;
  }
`;
