import React from 'react';
import {disclaimerAbout} from "../util/texts";
const COLORS = require('../util/colorScheme');

const Footer = () => {
    return (
        <footer className={"text-center p-1 m-0 bg-4 footer"}>
            <div className={COLORS.TEXT_5+" p-0 m-0"}>Me ajuda a ajudar, <a href={"/sobre#contato"}>Contato</a></div>
            <div className={COLORS.TEXT_5}>{disclaimerAbout}</div>

        </footer>
    );
};

export default Footer;
