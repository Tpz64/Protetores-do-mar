import Header from '../Componentes/Header/Header'
import Banner from '../Componentes/Banner/Banner'
import Card from '../Componentes/Card/Card'
import Footer from '../Componentes/Footer/Footer'

function Login(){
    return(
        <>
        <section className='paginaLogin'>
            <div className='login'>
                <h1>Login</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Permanecer conectado</label>
                    </div>
                    <button type="submit" class="btn btn-info">Entrar</button>
                </form>
            </div>
        </section>
        
        </>
    )
}

export default Login