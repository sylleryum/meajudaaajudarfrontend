import React from 'react';
import CardSingle from "./components/buscarPage/CardSingle";

const Error = ({errorMessage}) => {
    return (
        <div className={"row align-items-center justify-content-center height-100"}>
        <div className={"square row align-items-center justify-content-center"}>
            <div>Erro: {errorMessage}</div>
        </div>
        </div>
    );
};

export default Error;
Error.defaultProps = {
    errorMessage:"desconhecido"
}
