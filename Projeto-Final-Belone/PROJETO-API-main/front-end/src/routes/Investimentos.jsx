import Navbar from '../components/Navbar';

const Investimentos = () => {
  
    return (
        <div className="home" id="body">
          <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
          </header>
          <nav>
            <Navbar />
          </nav>
          <div className="container">
          <h2 className="title">INVESTIMENTOS</h2>
          </div>
          <main id="exibir">
            <p>Conheça 6 investimentos melhores que a Poupança para aplicar dinheiro!<br></br><br></br>
    
            Entre as melhores formas de investir dinheiro por meio de investimentos com maior rentabilidade que a poupança, estão: Tesouro Direto, CDBs, LCI, LCA, Fundos de Investimentos, Fundos Imobiliários (FIIs), CRIs/CRAs, investimento em ouro e as melhores ações na Bolsa de Valores.
            <br></br><br></br>
            1. Tesouro Direto.
            <br></br><br></br>
            2. Certificado de Depósito Bancário (CDB).
            <br></br><br></br>
            3. Letra de Crédito Imobiliário (LCI).
            <br></br><br></br>
            4. Fundos Imobiliários.
            <br></br><br></br>
            5. Fundos de Investimentos.
            <br></br><br></br>
            6. Investimento em ouro.
            <br></br><br></br>
            6. Bolsa de Valores: 
            <br></br><br></br>
            Antes de finalizarmos, vamos deixar outra dica de investimento melhor que Poupança e com a maior rentabilidade para você: a Bolsa de Valores. Quando o papo chega no mercado de renda variável, muitas pessoas ficam tensas e há aquelas que acreditam ser algo completamente distante e complicado.
            <br></br><br></br>
            É possível encontrar oportunidades excelentes na Bolsa, muito melhores do que a Poupança pode oferecer.
            </p>     
          </main>
        </div>
      );
    };
  
  export default Investimentos;