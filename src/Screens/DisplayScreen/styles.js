import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-rows: 0.5fr 3.5fr;
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-rows: 1.3fr 0.7fr;
  grid-template-columns: 1fr 2fr 1fr;
  box-shadow: 3px 4px 5px #00000020;
  border-radius: 8px;
  background-color: #333;
  color: #fff;

  grid-template-areas:
    "total gender disabled"
    "filters filters filters";

  & .dat_info {
    color: #64efbd;
    font-size: 16px;
    font-weight: 500;
  }

  & .total_collected {
    height: 100%;
    width: 100%;
    grid-area: total;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  & .by_gender {
    height: 100%;
    width: 100%;
    grid-area: gender;
    flex: 2;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .by_gender_data {
      height: 100%;
      width: 100%;
      padding: 4px;
      display: flex;
      justify-content: space-between;

      & div {
        display: flex;
        justify-content: center;
      }
    }
  }

  & .disabled_total {
    height: 100%;
    width: 100%;
    grid-area: disabled;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  & .filter_selection {
    height: 100%;
    width: 100%;
    grid-area: filters;
    display: flex;
    align-items: center;

    & select {
      height: 80%;
      width: 100%;
      margin-left: 12px;
      outline: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      /* background-color: #64efbd; */
      background-color: transparent;
      border: none;
      border-bottom: 4px solid #fff;
      /* border-radius: 5px; */
      font-weight: 600;
      color: #64efbd;
      
      &:hover {
        background-color: #64efbdc9;
        color: #333;
      }
    }
  }
`;
