import TresInfos from '../Componentes/TresInfos/TresInfos'
import TextoImagem from '../Componentes/TextoImagem/TextoImagem'

function SobreNos(){
    return(
        <>
        <section className='sobreNos'>
        <div className="titulo">
            <h1>Sobre Nós</h1>
        </div>
            <TextoImagem texto1="Protetores do Mar é uma plataforma de monitoramento oceânico que visa democratizar o acesso às informações sobre o estado dos oceanos, especialmente para comunidades costeiras e aqueles que dependem dos recursos marinhos para subsistência. O projeto se baseia na instalação de sensores de baixo custo ao longo da costa brasileira para monitorar o mar 24/7.
 " imagem1="celular-praia.jpeg" imagem2="sensor.png" texto2="Algumas funcionalidades da plataforma inclui o monitoramento contínuo do oceano através de sensores de baixo custo, análise e interpretação dos dados coletados para fácil compreensão, alertas instantâneos através de aplicativos de mensagens para condições extremas do mar, personalização das informações de acordo com as necessidades das comunidades locais, relatórios mensais para acompanhamento das mudanças no oceano para os que se cadastrarem."/>
            <TextoImagem texto1="Nossos valores e missão incluem a democratização das informações, garantindo o acesso das comunidades carentes tenham aos dados do oceano, capacitando as pessoas com conhecimento e tecnologia, além de promover o uso sustentável dos recursos marinhos. " imagem1="corais.jpg" imagem2="pescador-feliz.jpeg" texto2="Queremos facilita o acesso à informação sobre o oceano para pessoas não acadêmicas e capacita as comunidades costeiras com dados relevantes para suas atividades, além de promove a conservação marinha através da conscientização e da adoção de práticas sustentáveis, contribuindo para a mitigação dos impactos das mudanças climáticas nos oceanos."/>
        </section>
        </>
    )
}

export default SobreNos