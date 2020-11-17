import React, {Fragment} from 'react';
import Jumbotron100vh from "./Jumbotron100vh";
import {homePageJumboMain, homePageJumboSub, homePageExplanation} from "../../util/texts";
import AboutPage from "../about/AboutPage";


const HomePage = () => {
    return (
        <div className={"home-page"}>
            <Jumbotron100vh main={homePageJumboMain} sub={homePageJumboSub} explanation={homePageExplanation}/>
            <AboutPage/>
        </div>
    );
};

export default HomePage;
