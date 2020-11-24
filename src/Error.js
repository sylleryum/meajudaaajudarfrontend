import React from 'react';
import CardSingle from "./components/buscarPage/CardSingle";
import {TEXT_1} from "./util/colorScheme";

const Error = ({errorMessage, descriptionMain, descriptionSub}) => {
    return (
        <div className={"row align-items-center justify-content-center height-100"}>
        <div className={"square row align-items-center justify-content-center text-center"}>
            <h3>Deu ruim ¯\_(ツ)_/¯</h3>
            <span>{descriptionMain}</span>
            <div className={"width-100"}/>
            <h3 className={TEXT_1}>{descriptionSub}</h3>
            <div className={"width-100"}/>
            <div>Erro: {errorMessage}</div>
        </div>
        </div>
    );
};

export default Error;
Error.defaultProps = {
    errorMessage:"desconhecido",
    descriptionMain: "",
    descriptionSub: "Nada encontrado"

}
