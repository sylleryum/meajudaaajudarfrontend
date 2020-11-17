import React, {Fragment, useEffect, useState} from 'react';
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

const {data} = require('../../util/dumb');
const COLORS = require('../../util/colorScheme');
const InstituicaoPage = () => {
    let {id} = useParams();

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
        "contato": {"id": undefined, "email": "", "logradouro": "", "numero": undefined, "telefone": "", "cidade": ""}
    })

    useEffect(() => {
        async function fetch() {
            //setInstituicao(await getSingleInstituicao("dumb"))
            setInstituicao(await getSingleInstituicao(id))
        }

        fetch();
    }, [id]);

    return (
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
                            <Tabs descricao={instituicao.descricao} sobre={instituicao.sobre} id={instituicao.id}/>
                        </div>
                    </Fragment>}
            </section>

        </Fragment>
    );
};

export default InstituicaoPage;
