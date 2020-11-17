import React, {Fragment, useContext} from 'react';
import {MdArrowForward, MdArrowBack} from "react-icons/md";
import {CidadeContext} from "./BuscarPage";
import * as COLORS from "../../util/colorScheme";

const Paging = ({paging}) => {
    /*context*/
    const {currentSelectedCidade, setCurrentSelectedCidade} = useContext(CidadeContext)
    /*
    first
    last
    totalElements
    totalPages
    currentPage
     */
    return (
        <div className={COLORS.TEXT_5 + " text-center font-weight-bold"}>
            {paging.first === false &&
            <a role={"button"}
               onClick={() => {
                   setCurrentSelectedCidade({
                       ...currentSelectedCidade,
                       page: (currentSelectedCidade.page - 1)
                   })
               }}> <MdArrowBack size={30} color={"#048BA8"}/>
            </a>}
            {paging.totalElements>0&&"Pagina "+(paging.currentPage+1)+" de "+paging.totalPages}
            {paging.last === false &&
            <a role={"button"} onClick={() => setCurrentSelectedCidade({
                ...currentSelectedCidade,
                page: (currentSelectedCidade.page + 1)
            })}>
                <MdArrowForward size={30} color={"#048BA8"}/>
            </a>}
            <br/>
            {paging.totalElements>-1&& paging.totalElements +" instituições encontradas para a seleção atual"}
        </div>
    );
};

export default Paging;
