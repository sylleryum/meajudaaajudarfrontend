import React, {Fragment, useContext, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {CidadeContext} from "./BuscarPage";
import {getCausasAtivasByCidadeIdAndNomeInstituicao, getCidadesAtivas} from "../../api/fetchResults";
import DefaultLoader from "../DefaultLoader";
import {ErrorContext} from "../../App";
const COLORS = require('../../util/colorScheme');

const CausasSidebar = ({causas}) => {
    const [causasAvailable, setCausasAvailable] = useState([{
        id: -1,
        causa: "",
        amount: -1,
        checked: false
    }]);

    /*context*/
    const {currentSelectedCidade, setCurrentSelectedCidade} = useContext(CidadeContext)
    /*context*/const {error, setError} = useContext(ErrorContext)
    //getCausasAtivasByCidadeIdAndNomeInstituicao(4174);

    useEffect(() => {
        async function fetch() {
            const result = await getCausasAtivasByCidadeIdAndNomeInstituicao(currentSelectedCidade.id, currentSelectedCidade.instituicaoNomeToSearch);
            setCausasAvailable(result)

        }

        fetch();
    }, [currentSelectedCidade])

    const handleChange = (e) => {

        let currentCausas = currentSelectedCidade.causas;
        // if (currentSelectedCidade.causas.length > 0) {
        //     currentSelectedCidade.causas.forEach((i, pos,) => {
        //         console.log()
        //         if (parseInt(e.target.id) == i) {
        //             currentCausas.splice(pos, 1);
        //         } else {
        //             currentCausas.push(parseInt(e.target.id));
        //         }
        //     })
        // } else {
        //     currentCausas.push(parseInt(e.target.id));
        // }
        if (currentSelectedCidade.causas.indexOf(parseInt(e.target.id)) != -1) {
            currentCausas.splice(currentSelectedCidade.causas.indexOf(parseInt(e.target.id)), 1)
        } else {
            currentCausas.push(parseInt(e.target.id))
        }

        setCurrentSelectedCidade({
            ...currentSelectedCidade,
            page:0,
            causas: currentCausas

        });
    }

    return (
        !error.error &&
        <Fragment>

            <h6 className={COLORS.TEXT_2+" text-uppercase font-weight-bold mb-3"}>Causas para municipio atual</h6>
            {causasAvailable.length < 1 ? 'Nenhuma causa para atual seleção' :
                causasAvailable[0].id > -1 ? causasAvailable.map(
                    e => {
                        return <div key={uuidv4()} className="mt-2 mb-2 pl-2">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                       onChange={(e) => handleChange(e)}
                                       id={e.id}
                                       checked={currentSelectedCidade.causas.indexOf(e.id) != (-1) ? true : false}
                                />
                                <label className="custom-control-label"
                                       htmlFor={e.id}>{e.causa}&nbsp;({e.amount})</label>
                            </div>
                        </div>
                    }
                ) : <DefaultLoader size={"h3"}/>}

            {/*{causas.map(*/}
            {/*    e => {*/}
            {/*        return <div key={uuidv4()} className="mt-2 mb-2 pl-2">*/}
            {/*            <div className="custom-control custom-checkbox">*/}
            {/*                <input type="checkbox" className="custom-control-input" id="category-1"/>*/}
            {/*                <label className="custom-control-label" htmlFor="category-1">{e}</label>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*)}*/}
        </Fragment>
    );
};

CausasSidebar.defaultProps = {
    causas: ["Direitos humanos",
        "Educação e cultura",
        "Esporte e lazer",
        "LGBT",
        "Meio ambiente",
        "Saúde",
        "Direitos da mulher",
        "Crianças e adolecentes",
        "Animais",
        "Coronavirus",
        "Bem-estar social",
        "Combate a fome"]
}

export default CausasSidebar;
