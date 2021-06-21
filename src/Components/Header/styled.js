import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100%;
  background-color: #64efbd;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid #333;
`;

export const Title = styled.h1`
  color: #333;
  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

export const Navbar = styled.nav`
  width: 30%;
  height: 100%;
  background-color: #64efbd;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.div`
  height: 30px;
  width: 100px;
  background-color: #333;
  color: #64efbd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 6px;
  transition: 0.18s ease-in;
  ${({selected}) => selected ? "border: 3px solid #fff;" : null}

  &:hover {
    transform: scale(1.08);
  }

  /* @media(max-width: 600px) {
    height: 25px;
    font-size: 14px;
    } */
`;
