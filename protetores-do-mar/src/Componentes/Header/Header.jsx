import {Link} from 'react-router-dom'

function Header(){
    return(
        <>
        <header className='no-tablet'>
            <nav>
                <div className="logo-nome">
                    <img src="logo.png" alt="Logo Protetores do Mar" />
                    <h1>Protetores do Mar</h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="sobre">Sobre nós</Link></li>
                    <li><Link to="mar">Como está o mar hoje?</Link></li>
                    <li className="botao"><Link to="cadastro">Cadastre-se</Link></li>
                    <li className="botao"><Link to="login">Login</Link></li>
                </ul>
            </nav>

        </header>
        </>
    )
}

export default Header