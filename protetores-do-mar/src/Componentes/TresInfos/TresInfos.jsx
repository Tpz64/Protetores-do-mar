import Card from "../Card/Card"
import {Outlet} from "react-router-dom"

function TresInfos(){
    return(
        <>
        <section className="home linear-grad">
            <Card titulo="Como está o mar agora?" descricao="Verifique as informações em tempo real" textoBotao='Clicando aqui' caminho="mar"/>
            <Card titulo="Conheça nossos parceiros" descricao="Esse projeto não sairia do papel sem a ajuda deles" textoBotao='Saiba Mais' caminho="parceiros"/>
            <Card titulo="Deixe uma mensagem para nós" descricao="Envie seus comentarios, sugestões, criticas e elogios" textoBotao='Clique aqui' caminho="contato"/>
        </section>
        </>
    )
}
export default TresInfos