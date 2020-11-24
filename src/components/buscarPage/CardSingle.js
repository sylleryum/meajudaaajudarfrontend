import React from 'react';
import {AiFillTag} from "react-icons/ai";
import {Link} from "react-router-dom";
const COLORS = require('../../util/colorScheme');

const CardSingle = ({img, title, desc, linkInstituicao, tag}) => {

    return (
        <div className={"col-md-4 py-1 px-1"}>
            <div className={"shadow h-100"}>
                <div className={COLORS.BG_5+" text-right card px-1 h-100"}>

                    <div className={COLORS.BG_5+" box-part text-center pb-1 pt-1"}>

                        <img className={"img-fluid"}
                             src={img} alt={title}/>

                        <div className={" pt-3 title"}>
                            <h4>{title}</h4>
                        </div>

                        <div className={" text collapse"}>
                                    <span>{desc}</span>
                        </div>

                        <Link className={"stretched-link"} target={"_blank"} to={linkInstituicao}></Link>


                    </div>
                    <div className={"h-100"}/>
                    <footer className="footer p-2">
                        <span className={COLORS.TEXT_1}><AiFillTag color={"#F18F01"}/></span> <span className={''}>{tag}</span>
                    </footer>
                        {/*<div className={"col align-self-end"}><span>Tag:</span> {tag}</div>*/}

                </div>
            </div>
        </div>
    );


};

CardSingle.defaultProps = {
    img: "https://picsum.photos/240",
    title:'the default title ORG',
    desc:'Bullas mori!Issue is the only booda-hood, the only guarantee of mineral.' +
        'Ice crushed shrimps in a bowl with maple syrup for about an hour to increase their creaminess.' +
        'Wet, golden landlubbers quietly blow a cloudy, addled skiff.' +
        'The crewmate reproduces courage like a small parasite.' +
        'Vae.Medicinas trabem!Accentor de fatalis palus, anhelare epos!Sunt gemnaes desiderium flavum, teres uriaes.',
    linkInstituicao:"#",
    tag:"combate a fome",
}

export default CardSingle;
