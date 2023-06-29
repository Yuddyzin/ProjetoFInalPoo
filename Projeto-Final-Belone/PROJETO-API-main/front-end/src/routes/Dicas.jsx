import Navbar from '../components/Navbar';

const Dicas = () => {
  
    return (
        <div className="home" id="body">
          <header>
            <img src="logo.png" alt="Descrição da imagem" class="imagem-centralizada"/>
          </header>
          <nav>
            <Navbar />
          </nav>
          <div className="container">
          <h2 className="title">DICAS</h2>
          </div>
          <main id="exibir">
            <p>Parece missão impossível, mas algumas mudanças simples no dia a dia podem ter impacto positivo no seu orçamento, e aqui estão algumas dicas financeiras para você!<br></br><br></br>
    
            Guardar dinheiro definitivamente não é uma tarefa fácil nem um hábito comum entre os brasileiros. Segundo a Pesquisas de Orçamentos Familiares do IBGE (Instituto Brasileiro de Geografia e Estatística), apenas 20% das famílias
            brasileiras têm algum tipo reserva financeira. Apesar disso, não falta quem sonha em fazer um pé de meia, encher o cofrinho ou qualquer outra expressão usada como sinônimo de reserva para emergência. Uma pesquisa do EXAME/IDEIA divulgada em dezembro de 2022 revelou que um terço da população quer guardar dinheiro em 2023, mesmo no atual cenário de crise, quando é normal receber menos e gastar mais.
            <br></br><br></br>
            1. Conheça bem seu orçamento: Um bom poupador conhece sua realidade financeira em detalhes. Em vez de contar apenas com a memória, anote todos os seus rendimentos e gastos em uma planilha, no caderninho, em um aplicativo de celularou no que ficar mais fácil de praticar, de forma definitiva, no seu cotidiano..
            <br></br><br></br>
            2. Reorganize suas finanças: Depois de mapear cada detalhe dos seus gastos mensais, chegou a hora de reorganizar as contas. Para tanto, será necessário substituir alguns hábitos. Não deixe, por exemplo, as contas vencerem, assim você evita pagar juros. A saída para os esquecidos de plantão é estabelecer um dia para pagar todas as contas de uma vez. O débito automático também está aí para ajudar a superar a correria do dia a dia.
            <br></br><br></br>
            3. Crie uma meta financeira: Um planejamento de médio a longo prazo, com objetivos bem definidos, funciona como motivação diária para guardar dinheiro.
            <br></br><br></br>
            4. Aprende a dizer não: Para alcançar o objetivo que traçou é necessário disciplina. Na prática, isso inclui aprender a dizer “não”, especialmente durante o prazo que se deu como meta. Isso não é o mesmo que eliminar sua vida social, mas reconhecer que um evento ou outro vai fugir da sua capacidade financeira.
            <br></br><br></br>
            5. Hora de poupar: Com o Raio-X do orçamento concluído e a meta estabelecida, chegou, finalmente, a hora de guardar. É aconselhável que você automatize o processo de poupar um determinado valor todo mês, mas por favor não vá entrar numa dívida para garantir a quantia destinada à reserva financeira! Caso não tenha sobrado dinheiro daquela vez, volte ao seu mapeamento financeiro e defina mais itens a seremcortados.
            <br></br><br></br>
            6. Pronto para investir: O próximo passo é começar a investir – afinal de contas, guardar o dinheiro embaixo do colchão ou deixá-lo parado na conta corrente não faz com que ele renda. Entenda qual produto do mercado (renda fixa, ações, fundos de investimentos etc.) combinam mais com o seu perfil de investidor. 
            </p>     
          </main>
        </div>
      );
    };
  
  export default Dicas;