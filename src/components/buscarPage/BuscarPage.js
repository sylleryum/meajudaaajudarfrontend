import React, {Children, createContext, Fragment, useContext, useEffect, useState} from 'react';
import Breadcrumb from "../Breadcrumb";
import Margin5vh from "../Margin5vh";
import Category from "./Category";
import LayoutMainSection from "../LayoutMainSection";
import {getInstituicaoSearch} from "../../api/fetchResults";
import CardSingle from "./CardSingle";
import {v4 as uuidv4} from 'uuid';
import DefaultLoader from "../DefaultLoader";
import Paging from "./Paging";
import {ErrorContext} from "../../App";
import Error from "../../Error";

export const CidadeContext = createContext(null);

/**
 * BuscarPage is responsible for fetching the results of instituicoes to be displayed, child components update currentSelectedCidade which trigger the new fetch
 * <br/>
 * single responsabilities under this component:
 * <br/>
 ->CitySelector (inside category): responsible for listing and selecting cidade from all of the available ones (cities which contain instituicoes), once cidade is selected it updates currentSelectedCidade
 * <br/>
 ->CausasSidebar (insideLayoutMainSection): responsible for listing and selecting causas for currentSelectedCidade, once causa is selected it updates currentSelectedCidade
 * @returns entire BuscarPage assembled
 * @constructor
 */
const BuscarPage = () => {
    /*context*/
    const {error, setError} = useContext(ErrorContext)

    const [err, setErr] = useState({
        error: false,
        errorMessage: ""
    });
    const [banner, setBanner] = useState("Buscar instituição");

    const [currentSelectedCidade, setCurrentSelectedCidade] = useState({
        id: 10023,
        nome: 'Intermunicipal',
        instituicaoNomeToSearch: '',
        causas: [],
        page: 0
    })

    //all current available instituicoes based on currentSelectedCidade
    const [instituicoes, setinstituicoes] = useState({
        "content": [],
        "pageable": {},
        "last": undefined,
        "totalElements": -1,
        "totalPages": -1,
        "number": -1,
        "size": -1,
        "sort": {},
        "numberOfElements": -1,
        "first": undefined,
        "empty": undefined
    })

    useEffect(() => {
        async function fetch() {

            let instituicoesResults = await getInstituicaoSearch({
                cidade: currentSelectedCidade.id,
                causas: currentSelectedCidade.causas,
                instituicaoNomeToSearch: currentSelectedCidade.instituicaoNomeToSearch,
                page: currentSelectedCidade.page
            });
            if (instituicoesResults.error != undefined) {
                setError({
                    error: true,
                    errorMessage: instituicoesResults.errorMessage
                })
            } else {
                setinstituicoes(instituicoesResults)
            }


            // setinstituicoes(await getInstituicaoSearch({
            //     cidade: currentSelectedCidade.id,
            //     causas: currentSelectedCidade.causas,
            //     instituicaoNomeToSearch: currentSelectedCidade.instituicaoNomeToSearch,
            //     page: currentSelectedCidade.page
            // }))
            console.log()

            //let tempInstituicoes = await getInstituicaoSearch({cidade: currentSelectedCidade.id, causas: []});
            //getCausasAtivasByCidadeIdAndNomeInstituicao
        }

        fetch();
        //let instituicaoSearch = getInstituicaoSearch({cidade: currentSelectedCidade.id, causas: []});
    }, [currentSelectedCidade, err]);


    return (
        <Fragment>
            {!error.error &&
            <Fragment>
                <Breadcrumb banner={banner}/>
                <Margin5vh/>

                <CidadeContext.Provider value={{currentSelectedCidade, setCurrentSelectedCidade}}>
                    <Category/>
                    <LayoutMainSection searchQuery={currentSelectedCidade.instituicaoNomeToSearch}
                                       paging={{
                                           first: instituicoes.first,
                                           last: instituicoes.last,
                                           totalElements: instituicoes.totalElements,
                                           totalPages: instituicoes.totalPages,
                                           currentPage: instituicoes.number
                                       }}>
                        {

                            instituicoes.totalElements == 0 ?
                                <div>Nenhum resultado encontrado <br/>(por favor tenha em consideração que você deve
                                    selecionar primeiramente a cidade correspondente ao nome a buscar)</div> :
                                instituicoes.content.length > 0 ? instituicoes.content.map(
                                    e => {
                                        return <CardSingle key={uuidv4()} img={e.imagem}
                                                           title={e.nome}
                                                           desc={e.descricao}
                                                           linkInstituicao={"/instituicao/" + e.id}
                                                           tag={e.causa.causa}/>
                                    }
                                ) : <DefaultLoader/>
                        }
                    </LayoutMainSection>
                </CidadeContext.Provider>
            </Fragment>}
                {/*: <Error errorMessage={error.errorMessage}/> }*/}
        </Fragment>
    );
};

export default BuscarPage;
