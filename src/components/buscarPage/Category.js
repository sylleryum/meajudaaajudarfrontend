import React, {Children, useEffect, useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import CitySelector from "./CitySelector";
import {getCidadesAtivas} from "../../api/fetchResults";
import {v4 as uuidv4} from 'uuid';
import SearchInstituicao from "./SearchInstituicao";
const COLORS = require('../../util/colorScheme');


const Category = () => {


    return (
        <section className={"container"}>
            <form className={"row justify-content-center"}>
                <div className={"col-12 col-sm-2 pr-2"}>

                    <CitySelector/>

                </div>

                <SearchInstituicao/>

            </form>
        </section>
    );
};

export default Category;
