import React, {Fragment} from 'react';
import {AiFillTag} from "react-icons/ai";
import {postDoacao} from "../../api/fetchResults";
const COLORS = require('../../util/colorScheme');
const {disclaimer} = require('../../util/texts');

const Header = ({instituicao}) => {
    return (
        <Fragment>
            <div className={"col-12 col-sm-4"}>
                <img className={"img-fluid"} src={instituicao.imagem} />
            </div>
            <div className={"col-12 col-sm-6 pr-2"}>


                <span className={COLORS.TEXT_1}>Contato: </span>
                <span className={COLORS.TEXT_4}>{
                    instituicao.contato!=null && instituicao.contato.logradouro+", "+instituicao.contato.numero+" - "+instituicao.contato.cidade}</span>
                <br/>
                <span className={COLORS.TEXT_1}>Telefone: </span>
                <span className={COLORS.TEXT_4}>{instituicao.contato.telefone}</span>
                <br/>
                <span className={COLORS.TEXT_1}>Email: </span>
                <span className={COLORS.TEXT_4}>{instituicao.contato.email}</span>

                <br/><br/>
                <span className={COLORS.TEXT_1}>Municipio de atuação: </span>
                <span className={COLORS.TEXT_4}>{instituicao.cidade}</span>
                <br/>
                <AiFillTag color={"#F18F01"}/>
                <span className={COLORS.TEXT_4}>&nbsp;{instituicao.causa.causa}</span>
            </div>
            <div className={"col-12 col-sm-2 px-2"}>
                <a type={"button"} href={instituicao.doarLink} onClick={()=>postDoacao(instituicao.id)} target="_blank"
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

export default Header;
