import React from 'react';
import { Backdrop, Spinner } from './styles';

const Loading = (props) => (
    <>
        <Backdrop />
        <Spinner />
    </>
);

export default Loading;