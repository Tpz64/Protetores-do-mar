import TextoImagem from "../Componentes/TextoImagem/TextoImagem"

function Parceiros(){
  return(
      <>
      <section className='parceiros'>
        <div className="titulo">
          <h1>Parceiros</h1>
        </div>
            <TextoImagem/>
            <TextoImagem/>
            <TextoImagem/>
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