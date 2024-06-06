import React from "react"
import ReactDOM from "react-dom";
import Home from "./Paginas/Home";
import {Outlet} from "react-router-dom"
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import TresInfos from "./Componentes/TresInfos/TresInfos";

/*const imagensMar =[
    './imgs/slideShow/foto-mar.jpeg',
    './imgs/slideShow/foto-mar-2.jpeg',
  ];*/

function App(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default App

//<section>
//<SlideShow imagens={imagensMar} intervalo={3000}/>
//</section>
//
//