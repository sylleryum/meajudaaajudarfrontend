import React from 'react';
import {Container} from "react-bootstrap";

const Z_OLDLayoutMainSection = (props) => {
    return (
        <div className="container pt-5">
            <div className="row">
            {props.children}
            </div>
        </div>
    );
};

export default Z_OLDLayoutMainSection;
