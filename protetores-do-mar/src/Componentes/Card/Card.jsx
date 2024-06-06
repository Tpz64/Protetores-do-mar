import {Link} from 'react-router-dom'

function Card({titulo, descricao, textoBotao,caminho}){
    return(
        <div className="card">
            <h3 className="card-title">{titulo}</h3>
            <p className="card-text">{descricao}</p>
            <button type="button" className="btn btn-info"><Link to={caminho}>{textoBotao}</Link></button>
        </div>
    );
};

export default Card