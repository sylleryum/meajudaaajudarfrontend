import React, {Fragment} from 'react';
import {AiFillTag} from "react-icons/ai";
import {postDoacao} from "../../api/fetchResults";
import CardSingle from "../buscarPage/CardSingle";
import {checkNull} from "../../util/checkNull";
const COLORS = require('../../util/colorScheme');
const {disclaimer} = require('../../util/texts');


const Header = ({instituicao}) => {

    const doarLinkToggler = () =>{
        document.getElementById("descricao").classList.remove("show","active");
        document.getElementById("sobreInstituicao").classList.remove("show","active");
        document.getElementById("infoDoacao").classList.add("show","active");
        document.getElementById("tabDescricao").classList.remove("active");
        document.getElementById("tabSobre").classList.remove("active");
        document.getElementById("tabDoar").classList.add("active");
        // active show
    }

    return (
        <Fragment>
            <div className={"col-12 col-sm-4"}>
                <img className={"img-fluid"} src={instituicao.imagem} alt={instituicao.nome}/>
            </div>
            <div className={"col-12 col-sm-6 pr-2"}>


                <span className={COLORS.TEXT_1}>Contato: </span>
                <span className={COLORS.TEXT_4}>{
                    checkNull(instituicao.contato.logradouro,(`${instituicao.contato.logradouro} ${instituicao.contato.numero} ${instituicao.contato.cidade}`))}</span>
                <br/>
                <span className={COLORS.TEXT_1}>Telefone: </span>
                <span className={COLORS.TEXT_4}>
                    {checkNull(instituicao.contato.telefone)}
                </span>
                <br/>
                <span className={COLORS.TEXT_1}>Email: </span>
                <span className={COLORS.TEXT_4}>
                    {checkNull(instituicao.contato.telefone)}
                </span>

                <br/><br/>
                <span className={COLORS.TEXT_1}>Municipio de atuação: </span>
                <span className={COLORS.TEXT_4}>{instituicao.cidade}</span>
                <br/>
                <AiFillTag color={"#F18F01"}/>
                <span className={COLORS.TEXT_4}>&nbsp;{instituicao.causa.causa}</span>
            </div>
            <div className={"col-12 col-sm-2 px-2"}>
                <a type={"button"} href={instituicao.doarLink} onClick={(e)=> {
                    return instituicao.doarLink!==null?instituicao.id:doarLinkToggler()
                }} target="_blank"
                   className={"btn btn-primary mb-2 nav-link"} id={"doar"} data-toggle={"tooltip"} title={disclaimer}>
                    Doar agora!
                </a>
                <a type={"button"} href={instituicao.url} target="_blank"
                   className={"btn btn-outline-primary nav-link"}>
                    Site da instituição
                </a>
            </div>
        </Fragment>
    );
};
Header.defaultProps = {
    instituicao:{
        cidade:"Não disponivel",
        causa:{causa:"Não disponivel"},
        contato:{
            logradouro:"Não disponivel",
            numero:"",
            cidade:"",
            telefone:"Não disponivel",
            email:"Não disponivel",

        }
    }
}

export default Header;
