import styled from 'styled-components';

export const Backdrop = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #00000020;
    z-index: 999;
`
export const Spinner = styled.div`
    height: 100px;
    width: 100px;
    position: fixed;
    background-color: transparent;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    z-index: 9999;
    border: 10px dashed #64efbd;
    border-radius: 50%;
    @keyframes spin {
    10% {
        transform: rotate(36deg);
    }
    30% {
        transform: rotate(100deg);
    }
    50% {
        transform: rotate(140deg);
    }
    75% {
        transform: rotate(220deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
    animation: spin infinite;
`