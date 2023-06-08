import imageService from "@/assets/images/services/programador-profissional-trabalhando-ate-tarde-no-escritorio-escuro-scaled.jpg"
import ServiceTemplate from "@/templates/Service"
const TrafficManagement = (): JSX.Element => {
  return <ServiceTemplate
    service={{
      icon: <i className='bx bx-desktop'></i>,
      name: "Desenvolvimento de Site",
      value: 497.97,
      image: imageService.src,
      introduction: "Conquiste o mundo digital com um site único e impactante. Através do desenvolvimento cuidadoso, sua marca ganhará vida online, conquistando clientes, expandindo horizontes e abrindo portas para o sucesso. Seja notado, seja lembrado e transforme sua presença na web em uma poderosa ferramenta de crescimento. O futuro começa com o desenvolvimento do seu site. Vamos construí-lo juntos.",
      benefits: [
        "Presença online: Um site permite que sua empresa esteja presente na internet, alcançando um público global.",
        "Acessibilidade: Os clientes podem acessar informações sobre sua empresa, produtos e serviços a qualquer momento, de qualquer lugar.",
        "Credibilidade: Ter um site profissional transmite confiança aos clientes e fortalece a credibilidade da sua marca.",
        "Presença global: Um site expande sua marca além das fronteiras físicas, conectando com audiências internacionais e gerando visibilidade global.",
        "Expansão dos negócios: Um site pode ajudar sua empresa a expandir seus negócios, atingindo um público maior e abrindo novas oportunidades de mercado.",
        "Interação com os clientes: Um site permite que você se envolva com seus clientes por meio de formulários de contato, bate-papo online, comentários e redes sociais.",
        "Exibição de portfólio: Se você é um freelancer ou uma empresa de serviços, um site é uma plataforma para exibir seu portfólio de trabalhos e atrair novos clientes.",
        "Análise e métricas: Um site fornece dados sobre o comportamento dos visitantes, permitindo decisões informadas para melhorar a estratégia de negócios online."
      ],
      commonQuestions: [
        {
          name: "pergunta-1",
          question: "Quanto tempo leva para desenvolver uma página de venda?",
          response: "O tempo necessário para desenvolver uma página de venda pode variar dependendo da complexidade do projeto. Uma página de venda simples pode levar de algumas semanas a um mês, enquanto uma página mais complexa pode levar de dois a seis meses ou mais.",
        },
        {
          name: "pergunta-2",
          question: "Quais são os custos envolvidos no desenvolvimento de uma página de venda?",
          response: "Os custos envolvidos no desenvolvimento de uma página de venda podem variar de acordo com o escopo do projeto, os recursos necessários e os requisitos específicos da sua empresa. É importante discutir suas necessidades e objetivos com a equipe da Tech Legion para obter um orçamento personalizado."
        },
        {
          name: "pergunta-3",
          question: "Qual é a diferença entre uma página de venda estática e uma página de venda dinâmica?",
          response: "Uma página de venda estática apresenta conteúdo fixo que não muda com frequência, enquanto uma página de venda dinâmica permite a atualização e personalização do conteúdo de forma mais fácil e interativa. Uma página de venda dinâmica oferece maior flexibilidade e interatividade para envolver seus visitantes."
        },
        {
          name: "pergunta-4",
          question: "Quais são as etapas do processo de desenvolvimento de uma página de venda?",
          response: `O processo de desenvolvimento de uma página de venda geralmente envolve as seguintes etapas:

      Planejamento e definição de objetivos
      Design e criação do layout da página
      Desenvolvimento e implementação dos recursos e funcionalidades
      Testes e ajustes para garantir o bom funcionamento da página
      Lançamento e monitoramento contínuo do desempenho da página`
        },
        {
          name: "pergunta-5",
          question: "Posso atualizar a página de venda após o desenvolvimento?",
          response: "Sim, é possível atualizar e adicionar conteúdo a página de venda após o desenvolvimento inicial. Para isso, você pode utilizar um sistema de gerenciamento de conteúdo (CMS) que permite fazer alterações de forma fácil e rápida, sem a necessidade de conhecimento em programação."
        },
        {
          name: "pergunta-6",
          question: "A página de venda será otimizada para dispositivos móveis (responsiva)?",
          response: "Sim, é altamente recomendado que a página de venda seja desenvolvida de forma responsiva, o que significa que ela se adapta automaticamente a diferentes tamanhos de tela, proporcionando uma experiência de usuário otimizada em dispositivos móveis, tablets e desktops."
        },
      ]
    }}
  />
}

export default TrafficManagement