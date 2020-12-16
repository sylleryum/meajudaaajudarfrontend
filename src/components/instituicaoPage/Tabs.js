import React, {Fragment} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const texts = require('../../util/texts');
const COLORS = require('../../util/colorScheme');


const Tabs = ({descricao, sobre, id, infoDoacao}) => {

    //gambiarra that makes me wanna cry, but faster then touching tabs/researching react router ¯\_(ツ)_/¯
    const linksToggler = (toggle) =>{
        document.getElementById("descricao").classList.remove("show","active");
        document.getElementById("tabDescricao").classList.remove("active");
        document.getElementById("sobreInstituicao").classList.remove("show","active");
        document.getElementById("tabSobre").classList.remove("active");
        if (infoDoacao!==null) {
            document.getElementById("infoDoacao").classList.remove("show", "active");
            document.getElementById("tabDoar").classList.remove("active");
        }
        if (toggle===0){
            document.getElementById("descricao").classList.add("show","active");
            document.getElementById("tabDescricao").classList.add("active");
        } else if (toggle===1){
            document.getElementById("sobreInstituicao").classList.add("show","active");
            document.getElementById("tabSobre").classList.add("active");
        } else if (toggle===2){
            document.getElementById("infoDoacao").classList.add("show", "active");
            document.getElementById("tabDoar").classList.add("active");
        }
        // active show
    }

    return (
        <Fragment>
            <div className="bs-example">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a id={"tabDescricao"} onClick={(e)=> linksToggler(0)} className="nav-link active tabs"
                           style={{color: "#048BA8", textDecoration: "none"}} data-toggle="tab">Descrição</a>
                    </li>
                    <li className="nav-item">
                        <a id={"tabSobre"} onClick={(e)=> linksToggler(1)} className="nav-link tabs"
                           style={{color: "#048BA8", textDecoration: "none"}} data-toggle="tab">Sobre a instituição</a>
                    </li>
                    {infoDoacao !== null && <li className="nav-item">
                        <a id={"tabDoar"} onClick={(e)=> linksToggler(2)} className="nav-link tabs"
                           style={{color: "#f18f01", textDecoration: "none", fontWeight:"bold"}} data-toggle="tab">Informações para doar</a>
                    </li>}
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active px-2" id="descricao">
                        <h4 className={COLORS.TEXT_2 + " mt-2 font-weight-bold text-center py-2"}>Descrição</h4>
                        <div className={"mb-5 pre"}>
                            {descricao}
                        </div>
                    </div>
                    <div className="tab-pane fade px-2" id="sobreInstituicao">
                        <h4 className={COLORS.TEXT_2 + " mt-2 font-weight-bold text-center py-2"}>Sobre a
                            instituição</h4>
                        <div className={"mb-5 pre"}>
                            {sobre}
                        </div>
                    </div>
                    <div className="tab-pane fade px-2" id="infoDoacao">
                        <h4 className={COLORS.TEXT_2 + " mt-2 font-weight-bold text-center py-2"}>Como doar</h4>
                        <div className={COLORS.TEXT_1 + " disclaimer text-center"}>
                            <span>{texts.disclaimerInfoDoacao}</span><br/>
                            <span>{texts.disclaimerAbout}</span>
                        </div>
                        <div className={"mb-5 pre"}>
                            {infoDoacao}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Tabs;
