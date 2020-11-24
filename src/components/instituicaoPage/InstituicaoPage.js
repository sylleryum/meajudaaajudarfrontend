import React, {Fragment, useContext, useEffect, useState} from 'react';
import Breadcrumb from "../Breadcrumb";
import {
    useParams
} from "react-router-dom";
import {getInstituicaoSearch, getSingleInstituicao} from "../../api/fetchResults";
import Margin5vh from "../Margin5vh";
import CitySelector from "../buscarPage/CitySelector";
import SearchInstituicao from "../buscarPage/SearchInstituicao";
import {AiFillTag} from "react-icons/ai";
import Header from "./Header";
import Tabs from "./Tabs";
import DefaultLoader from "../DefaultLoader";
import {ErrorContext} from "../../App";

const {data} = require('../../util/dumb');
const COLORS = require('../../util/colorScheme');
const InstituicaoPage = () => {
    let {id} = useParams();
    /*context*/
    const {error, setError} = useContext(ErrorContext)

    const [instituicao, setInstituicao] = useState({
        "id": undefined,
        "nome": "",
        "imagem": "",
        "descricao": "",
        "cidade": "",
        "causa": {"id": undefined, "causa": ""},
        "sobre": "",
        "url": "",
        "doarLink": "",
        "infoDoacao":null,
        "contato": {"id": undefined, "email": "", "logradouro": "", "numero": undefined, "telefone": "", "cidade": ""}
    })

    useEffect(() => {
        async function fetch() {
            //setInstituicao(await getSingleInstituicao("dumb"))
            let instituicaoReturn = await getSingleInstituicao(id);
            if (instituicaoReturn.error != undefined) {
                setError({
                    error: true,
                    errorMessage: instituicaoReturn.errorMessage
                })
            } else {
                if (instituicaoReturn.contato === null) {
                    setInstituicao({
                        ...instituicaoReturn,
                        "contato": {
                            "id": "Não disponivel",
                            "email": "Não disponivel",
                            "logradouro": "Não disponivel",
                            "numero": "",
                            "telefone": "Não disponivel",
                            "cidade": ""
                        }
                    })
                } else {
                    setInstituicao(instituicaoReturn)
                }
            }
        }

        fetch();
    }, [id]);

    return (
        !error.error &&
        <Fragment>
            <Breadcrumb banner={instituicao.nome}/>
            <Margin5vh/>

            <section className={"container"}>
                {instituicao.id === undefined ? <DefaultLoader/> :
                    <Fragment>
                        <div id={"header-container"} className={"row justify-content-center pb-3"}>
                            <Header instituicao={instituicao}/>

                        </div>

                        <div id={"tabs-container"} className={"row justify-content-center"}>
                            <Tabs descricao={instituicao.descricao} sobre={instituicao.sobre} id={instituicao.id} infoDoacao={instituicao.infoDoacao} />
                        </div>
                    </Fragment>}
            </section>

        </Fragment>
    );
};

export default InstituicaoPage;
