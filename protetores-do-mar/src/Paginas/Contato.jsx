function Contato(){
    return(
        <>
        <section className='contato'>
            <div className="titulo text-center py-3">
                <h1>Deixe sua mensagem</h1>
                <p>Envie seus comentarios, sugestões, criticas e elogios em relação ao projeto. Estamos sempre abertos a novas opiniões para seguir melhorando cada dia mais.</p>
            </div>
            <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <form class="needs-validation" novalidate>  
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="nome" class="form-label">Nome</label>
                                    <input type="text" id="nome" class="form-control" required/>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="sobrenome" class="form-label">Sobrenome</label>
                                    <input type="text" id="sobrenome" class="form-control" required/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input type="text" id="email" class="form-control" required/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label for="comentario">Deixe seu comentário</label>
                                    <textarea name="comentario" id="comentario" rows="3" class="form-control" required></textarea>
                                </div>
                            </div>
                        </form>      
                    </div>
                    <div className="botaoMensagem">
                        <button type="submit" class="btn btn-warning">Enviar</button>
                    </div>
            </div>

        </section>
        </>
    )
}

export default Contato