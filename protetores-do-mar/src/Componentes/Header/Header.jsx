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
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link'  to="sobre">Sobre nós</Link></li>
                    <li><Link className='link' to="mar">Como está o mar hoje?</Link></li>
                    <li className="botao"><Link className='link'  to="cadastro">Cadastre-se</Link></li>
                    <li className="botao"><Link className='link' to="login">Login</Link></li>
                </ul>
            </nav>

        </header>
        </>
    )
}

export default Header
// <Link className='link' to="paginaLogada"></>