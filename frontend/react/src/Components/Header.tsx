import "../styles/header.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css';

function Header () {
    return(
        <div className="header">
        <h1>Estrelar</h1>
        <button>Séries</button>
        <button>Novelas</button>
        <button>Filmes</button>
        <button>Cartoons</button>
        <button>Animes</button> 
        <input placeholder= "Pesquisar Filmes"type="search" aria-label="pesquisa" />
        <div className="material-icons search"></div>
        </div>
    );
}

export default Header;
