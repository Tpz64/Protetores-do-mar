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
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">E-mail</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Senha</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" for="exampleCheck1">Permanecer conectado</label>
                    </div>
                    <button type="submit" className="btn btn-info">Entrar</button>
                </form>
            </div>
        </section>
        
        </>
    )
}

export default Login