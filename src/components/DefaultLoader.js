import React from 'react';
import {BeatLoader} from "react-spinners";
import * as COLORS from "../util/colorScheme";
import CardSingle from "./buscarPage/CardSingle";

/**
 * default size = h1
 * @param size - from h1 to h6
 * @returns {DefaultLoader(three dots)}
 * @constructor
 */
const DefaultLoader = ({size}) => {
    return (
        <div id={"loader"} className={"row col-12 justify-content-center align-items-center p-0 m-0"}>
            <div className={COLORS.TEXT_1+" "+size}>Carregando&nbsp;</div>
            <BeatLoader color={"#F18F01"}/>
        </div>
    );
};
DefaultLoader.defaultProps = {
    size:'h1'
}

export default DefaultLoader;
