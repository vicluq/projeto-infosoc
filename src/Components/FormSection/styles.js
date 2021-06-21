import styled, { css } from "styled-components";
import formSections from "../../data/formSections";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${({ section }) => section.slice(0, 4)};
  padding: 10px 0;
  display: grid;
  grid-template-rows: 40px auto;

  ${({ section }) =>
    section === formSections.YOU &&
    css`
      padding: 10px;
      border: 3px solid #64efbd;
      border-radius: 5px;
    `};

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
    grid-template-rows: 30px auto;
  }
`;

export const SectionTitle = styled.h2`
  height: 100%;
  width: 100%;
  color: #64efbd;
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Inputs = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
