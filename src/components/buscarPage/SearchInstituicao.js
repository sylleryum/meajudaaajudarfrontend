import React, {Fragment, useContext, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {RiCloseCircleFill} from "react-icons/ri";
import * as COLORS from "../../util/colorScheme";
import {CidadeContext} from "./BuscarPage";
import {ErrorContext} from "../../App";

const SearchInstituicao = () => {
    const [searchQuery, setSearchQuery] = useState("");
    /*context*/const {currentSelectedCidade, setCurrentSelectedCidade} = useContext(CidadeContext)
    /*context*/const {error, setError} = useContext(ErrorContext)

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentSelectedCidade({
            ...currentSelectedCidade,
            instituicaoNomeToSearch: searchQuery,
            causas: [],
            page: 0,
        });
        setSearchQuery('');
    }

    return (
        !error.error &&
        <Fragment>
            <div className={"col-11 col-sm-4 justify-content-center pr-0"}>
                <input className={"w-100 form-text"} onChange={(e) => setSearchQuery(e.target.value)} type={"text"}
                       value={searchQuery}
                       placeholder={"Pesquisar por nome de instituição"}/>
            </div>
            <div className={"col-1 col-sm-1 p-0"}>
                <button className={COLORS.BG_1 + " form-text"} onClick={(e) => {
                    handleClick(e)
                }} id={"searchSubmit"}>
                    <FaSearch color={"#048BA8"} size={15}/>
                </button>
            </div>
            <div className={"w-100"}/>
            {currentSelectedCidade.instituicaoNomeToSearch != '' &&
            <div className={"text-center"}>
                <br/>
                Resultados da busca por: <a className={"font-weight-bold"} role={"button"} onClick={
                () => {
                    setCurrentSelectedCidade({
                        ...currentSelectedCidade,
                        page:0,
                        instituicaoNomeToSearch: ''
                    })
                    setSearchQuery('')
                }}>
                {currentSelectedCidade.instituicaoNomeToSearch}<RiCloseCircleFill className={"pb-1"}/></a></div>}
        </Fragment>
    );
};

export default SearchInstituicao;
