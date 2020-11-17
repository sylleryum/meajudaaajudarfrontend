import React from 'react';

const COLORS = require('../../util/colorScheme');


const Jumbotron100vh = ({main, sub, explanation}) => {
    const randomImage = () => Math.floor((Math.random() * 3) + 1);
    return (
        <div id="home" className={"jumbotron jumbotron-fluid height-100 mb-0 jumbotron-image" + randomImage()}>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col d-flex align-items-start justify-content-center text-center">
                        <div style={{height:"85vh"} }>
                            <h1 className={COLORS.TEXT_5 + " mobile-header"}>{main}
                            </h1>
                            <h3 className={COLORS.TEXT_2 + " lead display-4 font-weight-bold mobile-header sub"}>{sub}</h3>
                            <hr className={COLORS.BG_2 + " my-2 mb-5"}/>
                            <h4 className={COLORS.TEXT_5+" mobile-h-desc"}>{explanation}</h4>
                            <div className={"margin-jumbotron-desktop d-flex justify-content-center align-items-end"}><a type={"button"} href={"/busca"}
                                                                           className={"btn btn-outline-primary sub"} style={{textDecoration: "none", borderRadius:"0"}}>
                                {/*// className={"display-4"}>*/}
                                Buscar instituição
                            </a></div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron100vh;
