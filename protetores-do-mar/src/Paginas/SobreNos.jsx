import Header from '../Componentes/Header/Header'
import Banner from '../Componentes/Banner/Banner'
import Card from '../Componentes/Card/Card'
import Footer from '../Componentes/Footer/Footer'
import TresInfos from '../Componentes/TresInfos/TresInfos'
import TextoImagem from '../Componentes/TextoImagem/TextoImagem'

function SobreNos(){
    return(
        <>
        <section className='sobreNos'>
        <div className="titulo">
            <h1>Sobre Nós</h1>
        </div>
            <TextoImagem/>
            <TextoImagem/>
        </section>
        <TresInfos/>
        </>
    )
}

export default SobreNos