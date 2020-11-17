import React, {Fragment} from 'react';
import {AiOutlineFacebook, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

const COLORS = require('../../util/colorScheme');

const LINKEDIN = "https://www.linkedin.com/in/alissonpn/"
const GITHUB = "https://github.com/sylleryum"
const EMAIL = "alisson_piuco@yahoo.com.br"
const FACEBOOK = "https://web.facebook.com/alisson.nunes.378/"

const Contato = () => {
    return (
        <Fragment>
            <div id={"contato"} className={"row justify-content-center "}>
                <div className={"col-sm-4 text-left"}>
                    <div className={COLORS.TEXT_4 + " col-12 pb-2"}><AiOutlineMail size={40} color={"#99C24D"}/><span>&nbsp;{EMAIL}</span></div>
                    <div className={"col-12 "}>
                        <a href={FACEBOOK} target={"_blank"}><AiOutlineFacebook className={"icons"} size={40}
                                                                                color={"#048BA8"}/></a>
                        <a href={LINKEDIN} target={"_blank"}><AiOutlineLinkedin className={"icons"} size={40}
                                                                                color={"#048BA8"}/></a>
                        <a href={GITHUB} target={"_blank"}><AiOutlineGithub className={"icons"} size={40}
                                                                            color={"#048BA8"}/></a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Contato;
