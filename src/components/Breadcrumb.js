import React, {Fragment} from 'react';
import Margin5vh from "./Margin5vh";

const COLORS = require('../util/colorScheme');

/**
 *banner with 5vh of margin, image selected randomly
 * @param banner main text
 * @param subtext smaller text (optional)
 * @returns {JSX.Element}
 * @constructor
 */
const Breadcrumb = ({banner}) => {

    const randomImage = ()=>Math.floor((Math.random() * 7) + 1);

    return (
        <Fragment>
            <Margin5vh/>
            <Margin5vh/>
            <section className={COLORS.BG_2+" breadcrumb-section breadcrumb-background d-flex banner-image-"+randomImage()}>
                <div className="col-lg-12 text-center my-auto text-breadcrumb">
                    <h2 className={" display-5 p-0 m-0 font-weight-bold text-breadcrumb"}>{banner}</h2>
                </div>
            </section>
        </Fragment>
    );
};


export default Breadcrumb;
