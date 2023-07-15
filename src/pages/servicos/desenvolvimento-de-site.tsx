import imageService from "@/assets/images/services/desenvolvimento-de-site.webp"
import ServiceTemplate from "@/templates/Service"

const WebsiteDevelopment = (): JSX.Element => {
  return <ServiceTemplate
    service={{
      icon: <i className='bx bxs-window-alt'></i>,
      name: "Desenvolvimento de Site",
      value: 497.97,
      image: imageService.src,
      introduction: "Desperte o potencial do seu negócio com o nosso serviço de desenvolvimento de sites. Combinando criatividade, tecnologia e estratégia, criamos uma presença online poderosa e envolvente. Através de um design personalizado, funcionalidades avançadas e uma experiência intuitiva, transformamos visitantes em clientes fiéis. Esteja pronto para conquistar o mundo digital e alcançar o sucesso que você merece. Vamos construir juntos o site dos seus sonhos!",
      benefits: [
        "Visibilidade online: Um site bem desenvolvido aumenta a visibilidade da sua marca na internet, permitindo que mais pessoas descubram seus produtos.",
        "Credibilidade: Ter um site profissional transmite confiança aos clientes, mostrando que você é uma empresa estabelecida e comprometida.",
        "Acesso global: Um site permite que você alcance um público global, expandindo o alcance do seu negócio além das limitações geográficas.",
        "Informações 24/7: Seu site está disponível 24 horas por dia, 7 dias por semana, fornecendo informações relevantes sobre seus produtos, serviços e contato.",
        "Geração de leads: Um site bem otimizado pode ajudar a capturar leads qualificados, permitindo que você entre em contato com potenciais clientes.",
        "Vendas online: Se você vende produtos ou serviços, um site de comércio eletrônico permite que você venda diretamente online.",
        "Marketing digital: Um site é uma plataforma central para suas estratégias de marketing digital, permitindo que você promova seus produtos.",
        "Competitividade: Ter um site de qualidade coloca você à frente da concorrência, permitindo que você se destaque e ofereça uma experiência superior aos seus clientes."
      ],
      commonQuestions: [
        {
          name: "pergunta-1",
          question: "Quanto tempo leva para desenvolver um site?",
          response: "O prazo de desenvolvimento varia dependendo da complexidade do projeto, mas em média leva de 4 a 8 semanas, considerando a criação do design, desenvolvimento das funcionalidades e revisões necessárias.",
        },
        {
          name: "pergunta-2",
          question: "Meu site será responsivo, ou seja, adaptável a dispositivos móveis?",
          response: "Sim, desenvolveremos seu site de forma responsiva para que seja visualizado corretamente em dispositivos móveis, como smartphones e tablets, garantindo uma experiência de navegação perfeita em qualquer dispositivo."
        },
        {
          name: "pergunta-3",
          question: "Posso atualizar o conteúdo do site por conta própria?",
          response: "Sim, você terá acesso a um sistema de gerenciamento de conteúdo (CMS) intuitivo, que permitirá que você atualize facilmente o texto, imagens, vídeos e outros elementos do site, sem a necessidade de conhecimentos técnicos."
        },
        {
          name: "pergunta-4",
          question: "Meu site será otimizado para mecanismos de busca (SEO)?",
          response: "Sim, implementaremos práticas de otimização para mecanismos de busca (SEO) durante o desenvolvimento do site, incluindo a otimização de palavras-chave, metadados e estrutura de URL, para ajudar seu site a ter uma melhor visibilidade nos resultados de pesquisa."
        },
        {
          name: "pergunta-5",
          question: "Vocês oferecem suporte técnico após o lançamento do site?",
          response: " Sim, após o lançamento do site, oferecemos suporte técnico contínuo para resolver quaisquer problemas técnicos, fazer ajustes necessários e fornecer orientação sobre o uso do site, garantindo o seu bom funcionamento."
        },
        {
          name: "pergunta-6",
          question: "Quais são as formas de pagamento para o serviço de desenvolvimento de site?",
          response: "Oferecemos diferentes opções de pagamento, incluindo pagamento único, parcelamento ou acordo personalizado, dependendo das necessidades e preferências do cliente. Entre em contato para discutir as opções de pagamento disponíveis."
        },
      ]
    }} />
}

export default WebsiteDevelopment