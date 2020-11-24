import React, {Fragment} from 'react';
const texts = require('../../util/texts');
const COLORS = require('../../util/colorScheme');


const Tabs = ({descricao, sobre, id, infoDoacao}) => {
    return (
        <Fragment>
            <div className="bs-example">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a id={"tabDescricao"} href="#descricao" className="nav-link active tabs"
                           style={{color: "#048BA8", textDecoration: "none"}} data-toggle="tab">Descrição</a>
                    </li>
                    <li className="nav-item">
                        <a id={"tabSobre"} href="#sobreInstituicao" className="nav-link tabs"
                           style={{color: "#048BA8", textDecoration: "none"}} data-toggle="tab">Sobre a instituição</a>
                    </li>
                    {infoDoacao !== null && <li className="nav-item">
                        <a id={"tabDoar"} href="#infoDoacao" className="nav-link tabs"
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
