function TextoImagem({texto1,imagem1,imagem2,texto2}){
    return(
        <>
        <div className="divTI">
            <div className='divTI-1'>
                <div className="texto">
                    <p>{texto1}</p>
                </div>
                <div className="imagem">
                    <img src={imagem1} alt="imagem"/>
                </div>
            </div>
            <div className='divTI-2'>
                <div className="imagem">
                    <img src={imagem2} alt="imagem"/>
                </div>
                <div className="texto">
                    <p>{texto2}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default TextoImagem