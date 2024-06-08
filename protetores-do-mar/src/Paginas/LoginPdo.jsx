import { Outlet, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { useState } from 'react'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fotoPerfil, setFotoPerfil] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const responseGoogle = (response) => {
        console.log(response)
        const { profileObj: { name, email, imageUrl } } = response;
        setName(name);
        setEmail(email);
        setFotoPerfil(imageUrl);
        setIsLoggedIn(true);
    }

    return (
        <>
            <section className='paginaLogin'>
                <div className='login'>
                    <h1>Login</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Permanecer conectado</label>
                        </div>
                        <button type="submit" className="btn btn-info"><Link className="link2" to="relatorio">Entrar</Link></button>
                        <GoogleLogin
                            clientId='644232628530-a46bkbkg62l3m1dhi5c4blv6jbbkknsp.apps.googleusercontent.com'
                            buttonText='Continuar com o Google'
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />
                    </form>

                    {isLoggedIn ? (
                        <div>
                            <h1>Informação do usuario</h1>
                            <img src={fotoPerfil} alt='Perfil' />
                            <p>Nome: {name}</p>
                            <p>E-mail: {email}</p>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </section>
        </>
    )
}

export default Login;
