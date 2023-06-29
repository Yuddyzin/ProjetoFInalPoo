import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
      <div id="home">
        <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
        </header>
        <div className="container">
        <h2 className="title">NEWSLETTER DO DIA</h2>
        <div className="button-container">
        <Link to='/investimentos'><button className="round-button">Investimentos Iniciais</button></Link>
        <Link to='/dicas'><button className="round-button">Dicas</button></Link>
        <Link to='/investidores'><button className="round-button">Grandes Investidores</button></Link>
        </div>
        </div>
      </div>
    );
  };
  
  export default Home;