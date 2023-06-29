import { Link } from "react-router-dom"
import "./Navbar.css";

function Navbar() {
  // Componente de interface do usuário
  return (
      <nav>
          <Link to={'/Home'}>Home</Link>
          <Link to={'/Investimentos'}>Investimentos</Link>
          <Link to={'/Dicas'}>Dicas</Link>
          <Link to={'/Investidores'}>Investidores</Link>
      </nav>
  )
}

export default Navbar