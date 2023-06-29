import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function CriarConta() {
  // Declaração dos estados utilizando o hook useState
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [btnEntrar, setBtnEntrar] = useState(true);

  // Função assíncrona para adicionar um usuário
  async function addUser() {
    // Verifica se o e-mail é válido utilizando uma expressão regular
    if (!emailIsValid(email)) {
      setErro('Dados inválidos.');
      setBtnEntrar(false);
      setCadastroSucesso(false);
      return;
    }

    try {
      // Faz uma requisição POST para cadastrar um usuário
      const response = await axios.post('http://127.0.0.1:8000/usuarios/', {
        user: user,
        email: email,
        senha: senha,
      });
      console.log(response.data);
      setCadastroSucesso(true);
      setBtnEntrar(false)
      setErro('');
    } catch (error) {
      console.error(error);
      setBtnEntrar(false);
      setErro('Erro ao cadastrar usuário');
    }
  }

  // Função para validar o formato do e-mail utilizando uma expressão regular
  function emailIsValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Componente de interface do usuário
  return (
    <div id='body'>
      <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
      </header>
      <h2 className="title">CRIAR CONTA</h2>
      <main>
        <section>
          <input
            type='text'
            placeholder='Usuário'
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setSenha(e.target.value)}
          />
        </section>
        {btnEntrar && (
          <span>
            <button onClick={addUser}>Cadastra-se</button>
          </span>
        )}
        {erro && (
          <span id="erro">
            {erro}
            <button id='caso' onClick={addUser}>
              <p>Cadastrar</p>
            </button>
          </span>
        )}
        {cadastroSucesso && (
          <span id="sucesso">
            <p>Conta criada!</p>
            <Link to="/home">
              <button id='caso2'>
                <p>PROSSEGUIR</p>
              </button>
            </Link>
          </span>
        )}
      </main>
    </div>
  );
}

export default CriarConta;
