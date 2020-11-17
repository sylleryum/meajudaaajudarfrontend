import React, {Fragment} from 'react';
const COLORS = require('../../util/colorScheme');

const Tabs = ({descricao, sobre}) => {
    return (
        <Fragment>
            <div className="bs-example">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#descricao" className="nav-link active tabs" style={{color:"#048BA8", textDecoration:"none"}} data-toggle="tab">Descrição</a>
                    </li>
                    <li className="nav-item">
                        <a href="#sobreInstituicao" className="nav-link tabs" style={{color:"#048BA8", textDecoration:"none"}} data-toggle="tab">Sobre a instituição</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active px-2" id="descricao">
                        <h4 className={COLORS.TEXT_2+" mt-2 font-weight-bold text-center py-2"}>Descrição</h4>
                        <div className={"mb-5"}>
                            {descricao}
                        </div>
                    </div>
                    <div className="tab-pane fade px-2" id="sobreInstituicao">
                        <h4 className={COLORS.TEXT_2+" mt-2 font-weight-bold text-center py-2"}>Sobre a instituição</h4>
                        <div className={"mb-5"}>
                            {sobre}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Tabs;
