import Styled from 'styled-components';

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

