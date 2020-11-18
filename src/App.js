import React, {Component, Fragment, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Z_OLDLayoutMainSection from "./components/Z_OLDLayoutMainSection";
import Margin5vh from "./components/Margin5vh";
import LayoutMainSection from "./components/LayoutMainSection";
import Category from "./components/buscarPage/Category";
import {fetchResults, getCausasAtivasByCidadeIdAndNomeInstituicao, postDoacao} from "./api/fetchResults";
import BuscarPage, {CidadeContext} from "./components/buscarPage/BuscarPage";
import {createContext} from "react";
import InstituicaoPage from "./components/instituicaoPage/InstituicaoPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Footer from "./components/Footer";
import Error from "./Error";

export const ErrorContext = createContext(null);

const App = () => {

    const [error, setError] = useState({
        error: false,
        errorMessage: 'desconhecido'
    })
    const [headerLinks, setHeaderLinks] = useState([["busca", "/busca", "Buscar instituição"], ["sobre", "/sobre", "Sobre"]])


    return (
        <Fragment>
            <Router>
                <div className={"main-container"}>
                    <Navbar ListOfLinks={headerLinks}/>
                    <ErrorContext.Provider value={{error, setError}}>
                        {!error.error ?
                            <Switch>
                                <Route exact path="/" children={<HomePage/>}/>
                                <Route exact path="/busca" children={<BuscarPage/>}/>
                                <Route exact path="/instituicao/:id" children={<InstituicaoPage/>}/>
                                <Route exact path="/sobre" children={<AboutPage/>}/>
                                <Route children={<Error errorMessage={"404 página não encontrada"}/>} />
                            </Switch>
                            : <Error errorMessage={error.errorMessage}
                                     descriptionMain={"Nosso servidor resolveu sair para um café e ainda não voltou."}
                                     descriptionSub={"Por favor, verifique o endereço digitado, tente atualizar a página ou volte mais tarde"}/>}
                    </ErrorContext.Provider>
                </div>
            </Router>
            <Footer/>
        </Fragment>
    );
};

export default App;

////CLASSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// class App extends Component {
//     state = {
//         error: true,
//         errorMessage:'desconhecido'
//     }
//     constructor(props) {
//         super(props);
//         this.headerLinks = []
//         this.headerLinks.push(["busca", "/busca", "Buscar instituição"]);
//         this.headerLinks.push(["sobre", "/sobre", "Sobre"]);
//     }
//
//
//     render() {
//         //getCausasAtivasByCidadeIdAndNomeInstituicao(4174)
//         return (
//             <Fragment>
//                 <Router>
//                     <div className={"main-container"}>
//                         <Navbar ListOfLinks={this.headerLinks}/>
//                         {!this.state.error?
//                         <Switch>
//                             <Route exact path="/" children={<HomePage/>}/>
//                             <Route exact path="/busca" children={<BuscarPage/>}/>
//                             <Route exact path="/instituicao/:id" children={<InstituicaoPage/>}/>
//                             <Route exact path="/sobre" children={<AboutPage/>}/>
//                         </Switch>: <Error errorMessage={this.state}/>}
//
//                     </div>
//                 </Router>
//                 <Footer/>
//             </Fragment>
//         );
//     }
// }
//
// export default App;
