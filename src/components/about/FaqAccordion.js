import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import {BG_3, BG_5} from "../../util/colorScheme";
import CardAccordionSingle from "./CardAccordionSingle";
import {v4 as uuidv4} from 'uuid';
const {faq} = require("../../util/texts");



const FaqAccordion = () => {

    return (
        <Fragment>
            <Accordion >
                {faq.map(
                    (v)=><CardAccordionSingle key={uuidv4()} header={v[0]} body={v[1]}/>)}
            </Accordion>
        </Fragment>
    );
};

export default FaqAccordion;
