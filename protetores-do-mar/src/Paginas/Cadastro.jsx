
function Cadastro(){
    return(
        <>
        <section className="cadastro">
            <div className="titulo text-center py-3">
                <h1>Cadastro</h1>
                <p>Faça seu cadastro para acessar conteúdos exclusivos, como relatórios mensais sobre a situação do oceano nos lugares onde o sensor já está instalado, além de poder solicitar um kit de monitoramento do mar para a sua região</p>
            </div>

            <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <form className="needs-validation" novalidate>  
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="nome" className="form-label">Nome</label>
                                    <input type="text" id="nome" className="form-control" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="sobrenome" className="form-label">Sobrenome</label>
                                    <input type="text" id="sobrenome" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="text" id="email" className="form-control" required/>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="cep" className="form-label">CEP</label>
                                <input type="text" id="cep" className="form-control"/>
                            </div>
                            <div className="col-md-7 mb-3">
                                <label for="endereco" className="form-label">Endereço</label>
                                <input type="text" id="endereco" className="form-control"/>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label for="numero" className="form-label">Número</label>
                                <input type="number" id="numero" className="form-control"/>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label for="pais" className="form-label">País</label>
                            <select name="pais" id="pais" className="form-select">
                                <option value="" selected disabled>Selecione...</option>
                                <option value="br">Brasil</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="estado" className="form-label">Estado</label>
                            <select name="estado" id="estado" className="form-select">
                                <option value="" selected disabled>Selecione...</option>
                                <option value="sp">São Paulo</option>
                                <option value="rj">Rio de Janeiro</option>
                                <option value="bh">Bahia</option>
                                <option value="rn">Rio Grande do Norte</option>
                                <option value="rs">Rio Grande do Sul</option>
                                <option value="pa">Pará</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="cidade" className="form-label">Cidade</label>
                            <input type="text" id="cidade" className="form-control"/>
                        </div>
                    </div>

                        <div className="row g-3 align-items-center">
                            <div className="col-md-6 mb-3">
                                <label for="inputPassword6" className="col-form-label">Senha</label>
                                <label className="text-muted">  Sua senha deve possuir entre 8-20 caracteres</label>
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputPassword6" className="col-form-label">Reescreva sua senha</label>
                                <label className="text-muted"> As senhas duas devem estar escritas iguais</label>
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                        </div>
                            
                        </form>      
                    </div>
                    <div className="botaoMensagem">
                        <button type="submit" className="btn btn-warning">Cadastrar</button>
                    </div>
            </div>            
        </section>
        </>
    )
}

export default Cadastro