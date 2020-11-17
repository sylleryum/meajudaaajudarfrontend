import React, {Children} from 'react';
import CardSingle from "./buscarPage/CardSingle";
import CausasSidebar from "./buscarPage/CausasSidebar";
import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {BeatLoader, CircleLoader} from "react-spinners";
import DefaultLoader from "./DefaultLoader";
import Paging from "./buscarPage/Paging";

const COLORS = require('../util/colorScheme');

const LayoutMainSection = (props) => {

    return (

        <div className="container pt-5">
            <div className="row">
                {/*start sidebar*/}
                <div className="col-md-3 col-lg-3 sidebar-filter">
                    <CausasSidebar/>
                </div>
                {/*end sidebar*/}

                {/*start main session*/}
                <div className={"col-md-9"}>
                    {/*start cards*/}
                    <div className={"row module"} id={"card-container"}>

                        {
                            props.children
                        }


                    </div>
                    {/*end cards*/}
                    <Paging {...props}/>

                </div>
                {/*end main session*/}
            </div>
        </div>

    );
};

export default LayoutMainSection;
