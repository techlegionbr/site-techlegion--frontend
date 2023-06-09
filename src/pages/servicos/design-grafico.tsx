import imageService from "@/assets/images/services/design-grafico.webp"
import ServiceTemplate from "@/templates/Service"

const GraphicDesign = (): JSX.Element => {
  return <ServiceTemplate
    service={{
      icon: <i className='bx bxs-palette'></i>,
      name: "Design Gráfico",
      value: 497.97,
      image: imageService.src,
      introduction: "Libere sua imaginação e transforme sua marca em uma obra de arte visual. Nosso serviço de design gráfico oferece criatividade ilimitada, harmonia de cores e formas, transmitindo sua mensagem de forma impactante. Deixe-nos criar uma identidade visual única e memorável, capaz de cativar seu público e impulsionar o sucesso do seu negócio. Seja notado, seja lembrado e deixe sua marca brilhar através do poder do design gráfico.",
      benefits: [
        "Identidade visual consistente: Um bom design gráfico cria uma identidade visual única e consistente para sua marca, transmitindo seus valores e diferenciais de forma coesa.",
        "Atratividade visual: O design gráfico cuidadosamente elaborado torna sua marca mais atraente, chamando a atenção do público e despertando o interesse em seus produtos.",
        "Comunicação eficaz: O design gráfico permite transmitir informações de forma clara e eficaz, utilizando elementos visuais para comunicar mensagens de maneira impactante.",
        "Credibilidade e profissionalismo: Um design gráfico bem-executado transmite profissionalismo, aumentando a credibilidade da sua marca e gerando confiança nos clientes.",
        "Diferenciação no mercado: Um design gráfico único e memorável ajuda a destacar sua marca em um mercado competitivo, tornando-a reconhecível e diferenciada dos concorrentes.",
        "Reforço da marca: O design gráfico reforça a identidade da sua marca em diferentes materiais e canais de comunicação, criando uma imagem coesa e fortalecendo o reconhecimento da marca.",
        "Melhoria da experiência do usuário: Um design gráfico bem-pensado contribui para uma experiência positiva do usuário, facilitando a navegação em sites, aplicativos e materiais promocionais.",
        "Aumento das taxas de conversão: Um design gráfico apelativo e estrategicamente planejado pode influenciar positivamente as taxas de conversão, levando os clientes a tomar ações desejadas."
      ],
      commonQuestions: [
        {
          name: "pergunta-1",
          question: "O que é design gráfico?",
          response: "O design gráfico é uma disciplina que combina elementos visuais, como cores, tipografia, imagens e layout, para criar materiais de comunicação visualmente atraentes e eficazes. Ele visa transmitir uma mensagem de forma clara, impactante e esteticamente agradável.",
        },
        {
          name: "pergunta-2",
          question: "Quais são os serviços oferecidos pelo design gráfico?",
          response: "Os serviços de design gráfico abrangem uma ampla gama de áreas, incluindo criação de logotipos, identidade visual, design de embalagens, design de materiais promocionais (como cartazes, flyers e brochuras), design de interfaces de usuário (UI) para sites e aplicativos, design de redes sociais e muito mais."
        },
        {
          name: "pergunta-3",
          question: "Qual a importância do design gráfico para minha marca?",
          response: "O design gráfico desempenha um papel crucial no sucesso de uma marca. Ele cria uma identidade visual única, reflete os valores da empresa e estabelece uma conexão emocional com o público-alvo. Um bom design gráfico ajuda a transmitir sua mensagem de forma eficaz, destacando-se da concorrência e deixando uma impressão duradoura."
        },
        {
          name: "pergunta-4",
          question: "Por que devo contratar um profissional de design gráfico?",
          response: "Contratar um profissional de design gráfico garante que sua marca seja representada de forma profissional e coerente. Os designers possuem habilidades técnicas e conhecimento estético para criar peças visualmente atraentes e funcionais. Eles entendem os princípios de design, as tendências atuais e têm experiência em traduzir conceitos em materiais visuais impactantes."
        },
        {
          name: "pergunta-5",
          question: "Quanto tempo leva para concluir um projeto de design gráfico?",
          response: " O tempo de conclusão de um projeto de design gráfico pode variar dependendo da complexidade e escopo do trabalho. É importante ter em mente que a qualidade do resultado final é mais importante do que a rapidez. O prazo é definido com base na discussão inicial com o designer e na análise das necessidades do projeto."
        },
        {
          name: "pergunta-6",
          question: "Posso fornecer ideias e referências para o projeto de design gráfico?",
          response: " Sim, definitivamente! Suas ideias e referências são valiosas para o designer gráfico. Compartilhe suas visões, preferências, exemplos de design que você gosta e discuta seus objetivos. Essas informações ajudarão o designer a entender sua visão e criar um trabalho personalizado que atenda às suas expectativas. A colaboração é essencial para obter resultados de design eficazes."
        },
      ]
    }}
  />
}

export default GraphicDesign