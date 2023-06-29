import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './estilo.css';

const Login = () => {
  // Declaração dos estados utilizando o hook useState
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [btnEntrar, setBtnEntrar] = useState(true);
  const [loginSucesso, setLoginSucesso] = useState('');
  const [usuarios, setUsuarios] = useState([]);


  // Hook useEffect utilizado para buscar os usuários
  useEffect(() => {
    async function PegarUser() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/usuarios/');
        setUsuarios(response.data);

      } 


      catch (error) {
        console.error(error);
      }
    }

    PegarUser();

  }, []);

  // Função para atualizar o estado do nome de usuário
  const MudarNome = (event) => {
    setUser(event.target.value);
  };

  // Função para atualizar o estado da senha
  const MudarSenha = (event) => {
    setSenha(event.target.value);
  };

  // Função para enviar os dados do formulário
  const EnviarDados = (event) => {
    event.preventDefault();

    // Verifica se o usuário e a senha correspondem a algum usuário da lista
    const Encontrado = usuarios.find((usuario) => usuario.user === user && usuario.senha === senha);

    // Login bem-sucedido
    if (Encontrado) {
      setLoginSucesso(true);
      setBtnEntrar(false);
      setBtnEntrar2(false);
      setErro(null);
    } else {
      // Dados incorretos
      setErro('Dados Incorretos');
      setBtnEntrar2(true);
      setBtnEntrar(false);
      setLoginSucesso(false);
    }
  };

  // Componente de interface do usuário
  return (
    <div id="body">
      <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
      </header>
      <h2 className="title">LOGIN</h2>
      <main>
        <form onSubmit={EnviarDados}>
          <section>
            <input
              type="text"
              placeholder='Digite seu Nome'
              id="nome-usuario"
              name="user"
              value={user}
              onChange={MudarNome}
            />
            <input
              type="password"
              placeholder='Digite sua Senha'
              id="senha"
              name="senha"
              value={senha}
              onChange={MudarSenha}
            />
          </section>
          {loginSucesso && (
            <span id="sucesso">
    
              <Link to="/home">
                <button id="prosseguir">
                  <p>CONTINUAR</p>
                </button>
              </Link>
            </span>
          )}
          {btnEntrar && <div> <button type="submit">Entrar</button></div>}
          <br />
          <Link id='naopossui' to="/criar_conta">Cadastra-se</Link>
        </form>
      </main>
    </div>
  );
};

export default Login;