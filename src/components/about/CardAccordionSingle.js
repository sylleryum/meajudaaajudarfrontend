import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {v4 as uuidv4} from 'uuid';
import {AiFillTag} from "react-icons/ai";
const COLORS = require('../../util/colorScheme');


const CardAccordionSingle = ({header, body}) => {
    const key = uuidv4();
    return (
        <Card style={{backgroundColor: "#2F2D2E"}}>

            <Accordion.Toggle as={Card.Header} eventKey={key} className={COLORS.BG_3+" "+COLORS.TEXT_2} style={{textDecoration:"underline"}}>
                {header}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={key}>
                <Card.Body className={COLORS.BG_5}  dangerouslySetInnerHTML={{__html: body}}/>
            </Accordion.Collapse>
        </Card>
    );
};

export default CardAccordionSingle;
