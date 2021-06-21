import Styled from "styled-components";

export const Container = Styled.div`
    height: 100%;
    width: 100%;
    padding: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media(max-width: 600px) {
        font-size: 12px;
    }
`;

export const Input = Styled.input`
    margin-top: 4px;
    width: 80%;
    height: 20px;
    border: 1.5px solid ${({ border_color }) => border_color};
    border-radius: 5px;
    outline: none;
`;
