import Header from '../Componentes/Header/Header'
import Banner from '../Componentes/Banner/Banner'
import Card from '../Componentes/Card/Card'
import Footer from '../Componentes/Footer/Footer'

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
                            <div class="col-md-3 mb-3">
                                <label for="cep" class="form-label">CEP</label>
                                <input type="text" id="cep" class="form-control"/>
                            </div>
                            <div class="col-md-7 mb-3">
                                <label for="endereco" class="form-label">Endereço</label>
                                <input type="text" id="endereco" class="form-control"/>
                            </div>
                            <div class="col-md-2 mb-3">
                                <label for="numero" class="form-label">Número</label>
                                <input type="number" id="numero" class="form-control"/>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="pais" class="form-label">País</label>
                            <select name="pais" id="pais" class="form-select">
                                <option value="" selected disabled>Selecione...</option>
                                <option value="br">Brasil</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="estado" class="form-label">Estado</label>
                            <select name="estado" id="estado" class="form-select">
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
                        <div class="col-md-4 mb-3">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" id="cidade" class="form-control"/>
                        </div>
                    </div>

                        <div class="row g-3 align-items-center">
                            <div class="col-md-6 mb-3">
                                <label for="inputPassword6" class="col-form-label">Senha</label>
                                <label class="text-muted">  Sua senha deve possuir entre 8-20 caracteres</label>
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="inputPassword6" class="col-form-label">Reescreva sua senha</label>
                                <label class="text-muted"> As senhas duas devem estar escritas iguais</label>
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                        </div>
                            
                        </form>      
                    </div>
                    <div className="botaoMensagem">
                        <button type="submit" class="btn btn-warning">Cadastrar</button>
                    </div>
            </div>            
        </section>
        </>
    )
}

export default Cadastro