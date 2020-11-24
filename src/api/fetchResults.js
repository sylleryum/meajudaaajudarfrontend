import React, {useContext} from 'react';
import {CidadeContext} from "../components/buscarPage/BuscarPage";
import {ErrorContext} from "../App";

const axios = require('axios');

const TOKEN_USER = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udGVuZHVzZXIiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM0MTgwNDAwfQ.VYaAEbccRpqS_-ONNR2RX0pfDFvsaa-L6mLXtUcEQCe50_HbRgM0vW7v1pqN0yChrLK1CnO8CvHGiyEV7W581g';
const HEADER_PREFIX = 'Bearer ';
const ENDPOINT_HEROKU = 'https://meajudaaajudar.herokuapp.com/v1/';
const ENDPOINT_LOCALHOST = 'http://sylleryum.ddns.net:8080/v1/';
const ENDPOINT = ENDPOINT_HEROKU;
const {data} = require('../util/dumb');
export const fetchResults = async () => {
    await getCidadesAtivas();
};


async function ApiCaller(resource) {

    let res
    try {
        res = await axios.get(ENDPOINT + resource,
            {headers: {'Authorization': HEADER_PREFIX + TOKEN_USER}}
        );
        console.log(`ApiCaller: query before call: ` + ENDPOINT + resource);
        // console.log(`ApiCaller ok`)
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.error(`error`)
        let debug = error.data;
        console.log(error)
        let errorToReturn;
        if (error.response!==undefined){
            errorToReturn = error.response.data.errorMessage
        }
        errorToReturn += error.toString()
        return {
            // if ()
            error: true,
            errorMessage: errorToReturn
        }
        // throw new Error(error.response)
    }
}

export const getCidadesAtivas = async () => {
    const CIDADES_ATIVAS = 'cidades/ativas?size=10000';

    let result = await ApiCaller(CIDADES_ATIVAS);
    if (result.error !== undefined){
        return result;
    }
    let {content} = result
    return content
}

/**
 *
 * @param cidadeId
 * @returns {id,causa,amount}
 */
export const getCausasAtivasByCidadeIdAndNomeInstituicao = async (cidadeId, instituicaoNomeToSearch) => {
    if (cidadeId && instituicaoNomeToSearch === undefined) {
        throw new Error("No parameter passed (cidadeId or instituicaoNomeToSearch)");
    }
    let query = "causas/ativas/instituicoes/search?";
    if (cidadeId != -1) {
        query += `cidade=${cidadeId}`;
    }
    if (instituicaoNomeToSearch != '') {
        query += `&instituicao=${instituicaoNomeToSearch}`
    }
    query += '&size=10000'

    const result = await ApiCaller(query);
    if (result.error !== undefined){
        return result;
    }
    const {content} = result
    const causas = content.map(e => {
        return {
            id: e[0].id,
            causa: e[0].causa,
            amount: e[1]
        }

    })
    console.log(`getCausasAtivasByCidadeId - causas: `)
    console.log({causas})
    return causas
}

/**
 * get all available instituicoes based on the passed cidadeId and causas[]
 * @param = {id:number, causas:[numbers], page:number}
 * @returns = {instituicoes} which is the main data regarding instituicoes
 */
export const getInstituicaoSearch = async (searchQuery) => {
    //{id:10023, causas:[]}

    if (searchQuery === undefined) {
        throw new Error("No parameter passed (should be {cidade:number, causas:[numbers], page})");
    }

    //todo if cidade unavailable
    let query = 'instituicoes/search?cidade=' + searchQuery.cidade

    if (searchQuery.instituicaoNomeToSearch != '') {
        query += "&nome=" + searchQuery.instituicaoNomeToSearch
    }

    //if causas available
    if (searchQuery.causas.length > 0) {
        searchQuery.causas.forEach(value => query += "&causa=" + value)
    }

    searchQuery.page !== undefined ? query += "&page=" + searchQuery.page : query += "&page=" + 0


    let response = await ApiCaller(query);
    console.log(`getInstituicaoSearch: returned results `);
    console.log(response);


    return response;
}

export const getSingleInstituicao = async (id) => {
    if (id === undefined) {
        throw new Error("No parameter passed)");
    }
    if (id === "dumb") {
        return data;
    }
    let query = 'instituicoes/' + id
    let response = await ApiCaller(query);
    console.log(`getSingleInstituicao: returned result `);
    console.log(response);
    return response
}

export const searchNomeInstituicao = async (nomeInstituicao) => {
    if (nomeInstituicao === undefined) {
        throw new Error("No parameter passed)");
    }
    let query = 'instituicoes/search?nome=' + nomeInstituicao

}

export const postDoacao = async (id) => {
    if (id === undefined) {
        throw new Error("No parameter passed)");
    }
    let res
    try {
        console.log(`ApiCaller: query before call: ` + ENDPOINT + "registrardoacao/");
        res = await axios.post(ENDPOINT + "registrardoacao/",
            {instituicao: id},
            {headers: {'Authorization': HEADER_PREFIX + TOKEN_USER}})
    } catch (error) {
        console.error(`error`)
        console.log(error)
        throw new Error(error.response)
    }

    /*
    let res
    try {
        res = await axios.get(ENDPOINT_LOCALHOST + resource,
            {headers: {'Authorization': HEADER_PREFIX + TOKEN_USER}}
        );
        console.log(`ApiCaller: query before call: ` + ENDPOINT_LOCALHOST+resource);
        // console.log(`ApiCaller ok`)
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.error(`error`)
        console.log(error)
        throw new Error(error.response)
    }
     */
}