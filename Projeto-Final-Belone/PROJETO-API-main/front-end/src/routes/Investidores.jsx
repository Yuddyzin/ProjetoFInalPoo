import Navbar from '../components/Navbar';

const Investidores = () => {
  
    return (
        <div className="home" id="body">
          <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
          </header>
          <nav>
            <Navbar />
          </nav>
          <div className="container">
          <h2 className="title">INVESTIDORES</h2>
          </div>
          <main id="exibir">
            <p>Grandes investidores: saiba onde eles buscam informações!<br></br><br></br>
    
            Um levantamento conduzido junto a 257 grandes investidores e analistas de mercado de localidades com Estados Unidos, Canadá e União Europeia, apurou quais são os canais online onde eles buscam informações e o impacto dessas análises em suas decisões.
            Os dados revelaram que 81% dos entrevistados já tomaram uma decisão de investimento com base em notícias coletadas em canais digitais ou mídias sociais. Outros 88% afirmaram que já fizeram uma recomendação ou tomaram uma decisão baseada nesses mesmos meios. 
            Entre os canais preferidos por eles, estão alguns bens conhecidos dos brasileiros como LinkedIn, Google e YouTube. 
            <br></br><br></br>
            1. A Company's Investor Relations Website: O website de Relações com Investidores de uma empresa é um canal preferido pelos investidores devido à sua capacidade de fornecer informações atualizadas, transparência, confiabilidade, acesso a documentos e recursos relevantes, comunicação direta e conveniência. Ele oferece aos investidores uma fonte confiável de informações sobre a empresa, facilitando a tomada de decisões informadas e o estabelecimento de relacionamentos de confiança com a empresa.
            <br></br><br></br>
            2. Linkedin: O LinkedIn é um canal preferido para investidores por oferecer uma rede profissional ampla, permitindo acesso a perfis de executivos e especialistas do mercado financeiro. Os investidores podem obter insights valiosos sobre tendências e oportunidades de investimento, participar de discussões e se conectar com outros profissionais do setor. É uma plataforma focada em negócios que fornece informações relevantes para estratégias de investimento.
            <br></br><br></br>
            3. Google Search Results: O Google Search Results é um canal preferido para investidores devido à sua capacidade de fornecer acesso rápido e abrangente a informações relevantes sobre empresas, ações e tendências de mercado. Os investidores podem obter dados financeiros, notícias recentes, análises de especialistas e relatórios de empresas diretamente nos resultados de busca. Isso permite uma pesquisa eficiente e ajuda os investidores a tomarem decisões informadas sobre seus investimentos.
            <br></br><br></br>
            4. E-mail Newsletters: As newsletters por e-mail são um canal preferido para os investidores, pois oferecem uma maneira conveniente e personalizada de receber informações relevantes sobre o mercado financeiro. Os investidores podem se inscrever em newsletters de empresas, especialistas e instituições financeiras para receber análises, recomendações de investimento e atualizações diretamente em suas caixas de entrada. Isso permite que os investidores acompanhem as últimas notícias e tendências de forma eficiente e oportuna, ajudando-os em suas decisões de investimento.
            </p>     
          </main>
        </div>
      );
    };
  
  export default Investidores;