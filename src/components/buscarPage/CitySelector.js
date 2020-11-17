import React, {useContext, useEffect, useState} from 'react';
import {getCidadesAtivas} from "../../api/fetchResults";
import {v4 as uuidv4} from "uuid";
import {CidadeContext} from "./BuscarPage";
import DefaultLoader from "../DefaultLoader";
import {ErrorContext} from "../../App";

const CitySelector = () => {
    const [cidadesAvailable, setCidadesAvailable] = useState([{id: 0, nome: ''}]);
    /*context*/const {currentSelectedCidade, setCurrentSelectedCidade} = useContext(CidadeContext)
    /*context*/const {error, setError} = useContext(ErrorContext)

    useEffect(() => {
        async function fetch() {
            const result = await getCidadesAtivas();
            if (result.error != undefined) {
                setError({
                    error: true,
                    errorMessage: result.errorMessage
                })
            } else {
                setCidadesAvailable(result)
            }
        }

        fetch();
    }, [])

    const handleChange = (e) => {
        let id = e.nativeEvent.target.selectedIndex;
        setCurrentSelectedCidade({
            ...currentSelectedCidade,
            id: e.nativeEvent.target[id].value,
            nome: e.nativeEvent.target[id].text,
            instituicaoNomeToSearch: '',
            causas:[],
            page: 0
        });
    }
    return (
        !error.error &&
        cidadesAvailable.length > 1 ?
            <select name="citySelector" id="citySelector" value={currentSelectedCidade.id} className={"w-100 form-text"}
                    onChange={(e) => handleChange(e)}>

                {
                    cidadesAvailable.map(e => {
                        return <option key={uuidv4()} value={e.id} id={"opt"+e.id}>{e.nome}</option>
                        // if (e.id==currentSelectedCidade.id){
                        //     console.log("checked")
                        //     console.log(currentSelectedCidade.nome)
                        //     return <option key={uuidv4()} defaultChecked={true} value={e.id}>{e.nome}</option>
                        // } else{
                        //     console.log("notchecked")
                        //     console.log(currentSelectedCidade.nome)
                        //     return <option key={uuidv4()} value={e.id}>{e.nome}</option>
                        // }
                    })
                }
                {/*<option defaultChecked={true} value={currentSelectedCidade.id}>{currentSelectedCidade.nome}</option>*/}
            </select> : <DefaultLoader size={"h6"}/>
    );
};

CitySelector.defaultProps = {}

export default CitySelector;
