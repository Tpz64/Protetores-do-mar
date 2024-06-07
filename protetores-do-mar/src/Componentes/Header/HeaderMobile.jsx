import {Link} from 'react-router-dom'

function HeaderMobile(){
    return(
        <>
        <header className='no-desktop'>
                <nav className="navbar cor-header">
                    <div class="container-fluid">
                        <div className="logo-nome">
                            <img src="logo.png" alt="Logo Protetores do Mar"/>
                            <h1>Protetores do Mar</h1>
                        </div>
                        <button className="navbar-toggler botao-menu-hamburguer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src="onda-off-white.png" alt="menu-hamburguer" />
                        </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                       
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                                    <li className="nav-item"><Link to="/">Home</Link></li>
                                    <li className="nav-item"><Link to="sobre">Sobre nós</Link></li>
                                    <li className="nav-item"><Link to="parceiros">Parceiros</Link></li>
                                    <li className="nav-item"><Link to="mar">Como está o mar hoje?</Link></li>
                                    <li className="nav-item"><Link to="contato">Deixe sua mensagem</Link></li>
                                    <li className="botao nav-item"><Link to="cadastro">Cadastre-se</Link></li>
                                    <li className="botao nav-item"><Link to="login">Login</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
        </header>
        </>
    )
}

export default HeaderMobile

/*<ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="sobre">Sobre nós</Link></li>
                    <li><Link to="mar">Como está o mar hoje?</Link></li>
                    <li className="botao"><Link to="cadastro">Cadastre-se</Link></li>
                    <li className="botao"><Link to="login">Login</Link></li>
                </ul> */