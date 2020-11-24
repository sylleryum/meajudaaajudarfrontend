import React, {Fragment} from 'react';
import {FcDonate} from "react-icons/fc";
import {v4 as uuidv4} from 'uuid';
import {Link} from "react-router-dom";
const COLORS = require('../util/colorScheme');

/**
 *
 * @param mapOfLinks which is an array: headerLinks[0] = ID, headerLinks[1] = href, headerLinks[2] = description
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = ({ListOfLinks}) => {


    return (
        <Fragment>
            <nav id={"navbar"} className={" navbar navbar-expand-sm navbar-dark text-uppercase p-0 mb-0 fixed-top"}>
                <Link className="navbar-brand pl-3" to="/"><FcDonate size={50}/></Link>

                <button className="navbar-toggler mr-3" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav pl-2">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Me ajuda a ajudar <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                            ListOfLinks.map(
                                e => {
                                    return <li key={uuidv4()} className={"nav-item"}>
                                        {/*<a className={"nav-link"} id={e[0]}*/}
                                        {/*                                              href={e[1]}>{e[2]}</a>*/}
                                        <Link className={"nav-link"} to={e[1]}>{e[2]}</Link>
                                    </li>
                                }
                            )

                        }
                    </ul>
                </div>
            </nav>
            {/*<div id={"navbar"} className={"height-6"}/>*/}
        </Fragment>
    );
};

export default Navbar;
