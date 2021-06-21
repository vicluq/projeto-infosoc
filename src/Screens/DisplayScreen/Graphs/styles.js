import styled, { css } from "styled-components";
import { FILTERS } from "../../../data/dataHandler";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  ${({ layout }) => {
    if (layout === FILTERS.BY_GENDER) {
      return css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      `;
    }
    else if(layout === FILTERS.DISABLED) {
        return css`
        display: grid;
        grid-template-rows: 1fr 1fr;
      `;
    } else {
        return css`
        display: flex;
      `;
    }
  }}
`;
