import React, {Fragment} from 'react';
import Breadcrumb from "../Breadcrumb";
import Margin5vh from "../Margin5vh";
import {homePageExplanation, disclaimerAbout} from "../../util/texts";
import FaqAccordion from "./FaqAccordion";
import * as COLORS from "../../util/colorScheme";
import Contato from "./Contato";

const AboutPage = () => {
    return (
        <Fragment>
            <Breadcrumb banner={"Sobre o Me ajuda a ajudar"}/>
            <Margin5vh/>
            <section className={"container"}>
                <div className={"row justify content-center text-center"}>
                    <h3 className={"explanation pb-2"}>{homePageExplanation}</h3>
                    <h6 className={"disclaimer"}><u>{disclaimerAbout}</u></h6>
                    <div className={"py-5 justify content-center col-12"}>
                        <FaqAccordion/>
                    </div>
                    <div className={"py-5 col-12"}>
                        <h2 className={COLORS.TEXT_2+" display-5 font-weight-bold"}>Contato</h2>
                        <hr className={COLORS.BG_2 + " my-2 mb-5"}/>
                        <Contato/>
                    </div>
                    <hr className={COLORS.BG_1 + " my-2 mb-5"}/>
                </div>
            </section>
        </Fragment>
    );
};

export default AboutPage;
