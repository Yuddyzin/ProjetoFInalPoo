import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function NewPost() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [erro, setErro] = useState('');

  async function addUser() {
    if (!emailIsValid(email)) {
      setErro('Dados inválidos.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/alunos/', {
        nome: nome,
        email: email,
        cpf: cpf
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErro('Erro ao cadastrar usuário');
    }
  }

  function emailIsValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div id='body'>
      <header>
        <h1>Cadastro</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <img src="/favicon-32x32.png" alt="" />
        <section>
          <input
            type='text'
            placeholder='Nome completo'
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            maxLength='11'
            placeholder='CPF'
            onChange={(e) => setCpf(e.target.value)}
          />
        </section>
        {erro && <span id="erro">{erro && <p>{erro}</p>}</span>}
        <button onClick={addUser}>
          <p>CADASTRAR</p>
        </button>
      </main>
      <footer>
        <p>
        Desenvolvido por <strong>Henrique</strong> e <strong>Pedro</strong>
        </p>
      </footer>
    </div>
  );
}

export default NewPost;