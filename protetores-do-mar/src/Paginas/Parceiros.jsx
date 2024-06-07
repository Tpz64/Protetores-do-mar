import TextoImagem from "../Componentes/TextoImagem/TextoImagem"

function Parceiros(){
  return(
      <>
      <section className='parceiros'>
        <div className="titulo">
          <h1>Parceiros</h1>
        </div>
            <TextoImagem texto1='Nosso principal aliado é a Oceans 20 Brasil, conhecida como O20. Criado durante a presidência brasileira do G20, acabou inovando na agenda dos oceanos ao formalizar esse grupo de engajamento da sociedade civil. É coordenado pela Cátedra UNESCO para Sustentabilidade dos oceanos, em colaboração com o Pacto Global da ONU, o Fórum Econômico Mundial, o Fundo Brasileiro para Biodiversidade (FUNBIO) e o Instituto Nacional de Pesquisas Oceânicas (INPO), juntamente com diversos outros parceiros nacionais e internacionais. ' imagem1='o20.png' imagem2="softek.png" texto2="A Softtek, uma empresa mexicana que está há 30 anos no Brasil, e que ajuda seus clientes a se destacarem no mercado por meio da implementação de soluções digitais que impulsionam suas estratégias de negócios, também está nessa empreitada. Seu propósito é gerar valor através da tecnologia, para seus clientes e acionistas. Possuem a crença de que ao proporcionar o ambiente adequado, pessoas talentosas e autodeterminadas criam coisas incríveis, e que colaborar é a única forma de cumprir o propósito da empresa. "/>
            <TextoImagem texto1='Select Soluções, uma empresa de consultoria em Cloud, com serviços de migração, suporte e gerenciamento na nuvem, que possui como pilares essenciais a inovação, a tecnologia, o “customer centric” e a paixão por transformar.' imagem1="select.png" imagem2="aws.png" texto2="Amazon Web Service (AWS), a plataforma de nuvem mais adotada e mais abrangente do mundo, oferecendo vários serviços completos de datacenters em todo o mundo. A Select Soluções é uma de seus principais parceiros."/>
            <TextoImagem texto1='O Pacto Global da ONU (UN Global Compact) é a maior iniciativa de sustentabilidade corporativa do mundo. Possui um apelo às empresas para que alinhem estratégias e operações com os a princípios universais sobre direitos humanos, trabalho, ambiente e combate à corrupção e tomam medidas que promovem os objetivos sociais. Além disso, possui a ambição de acelerar e dimensionar o impacto coletivo global dos negócios, defendendo e entregando os ODS através de empresas e ecossistemas responsáveis que permitem a mudança. ' imagem1="pactoglobal.png" imagem2="catedra.png" texto2="Cátedra UNESCO para a Sustentabilidade do Oceano, é outro importante parceiro. Criada em 2018 para “A Ciência que Precisamos para o Oceano que Queremos”, tendo um papel fundamental na promoção da Década do Oceano. Está vinculada ao Instituto de Estudos avançados e ao Instituto Oceanográfico, ambos da Universidade de São Paulo (USP), e busca concentrar pessoas e esforços de diversas instituições para a promoção da sustentabilidade do oceano. 
A Cátedra realiza um trabalho estruturante, continuado e crescente de promoção e disseminação do conhecimento e valorização do oceano, além de promover e contribuir com a Agenda Global do Oceano e a Agenda 2030, com destaque para o Objetivo de desenvolvimento sustentável 14, Vida na água.
"/>
        </section>
        <section className="linear-grad">

        </section>
      </>
  )
}

export default Parceiros






// Jogado aqui o negocio do slideshow para não perder
//const imagensMar =[
 //   './imgs/slideShow/foto-mar.jpeg',
  //];
  
  //ReactDOM.render(
    //<React.StrictMode>
      //<SlideShow imagens={imagensMar} intervalo={3000}/>
    //</React.StrictMode>, 
    //document.getElementById('root')
  
  //)