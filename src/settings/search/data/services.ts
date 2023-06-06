import { hostLinks } from '@/settings/links';

import { type TypeSearchedTopic } from '../types';

const services: Array<Omit<TypeSearchedTopic, 'type'>> = [
  {
    name: 'Desenvolvimento de Site',
    shortDescription:
      'Potencialize seu negócio com um site único e impactante! Desenvolvimento profissional, design moderno, responsivo e otimizado para buscadores. Atraia mais clientes e alcance o sucesso online!',
    redirect: hostLinks.services['desenvolvimento-de-site'],
    tags: [
      'Desenvolvimento de site',
      'Criação de site',
      'Web design',
      'Programação web',
      'Desenvolvedor web',
      'Construção de site',
      'Hospedagem de site',
      'Design responsivo',
      'Otimização de site',
      'E-commerce',
      'CMS (Content Management System)',
      'HTML',
      'CSS',
      'SEO (Search Engine Optimization)',
      'UX',
      'UI',
      'Front-end',
      'Back-end',
      'Mobile-friendly',
      'Integração de API',
      'Plataforma de desenvolvimento',
      'WordPress',
      'Magento',
      'Joomla',
      'Drupal',
      'Shopify',
      'WooCommerce',
      'Site estático',
      'Site dinâmico',
      'Arquitetura da informação',
      'Banco de dados',
      'Bootstrap',
      'JavaScript',
      'JQuery',
      'Frameworks web',
      'Responsividade',
      'Performance do site',
      'Acessibilidade',
      'Segurança do site',
      'Testes de usabilidade'
    ]
  },
  {
    name: 'Desenvolvimento de Página de Vendas',
    redirect: hostLinks.services['desenvolvimento-de-pagina-de-vendas'],
    shortDescription:
      'Aumente suas conversões com páginas de vendas irresistíveis! Desenvolvimento profissional, layout persuasivo e copywriting estratégico. Maximize seus resultados e impulsione suas vendas!',
    tags: [
      'Desenvolvimento de página de vendas',
      'Página de vendas online',
      'Copywriting persuasivo',
      'Call to Action (CTA)',
      'Conversão de leads',
      'Funil de vendas',
      'Design de página de vendas',
      'Elementos persuasivos',
      'Testemunhos de clientes',
      'Oferta irresistível',
      'Escassez de tempo',
      'Gatilhos mentais',
      'Vídeos de vendas',
      'Formulários de captura',
      'Pagamentos seguros',
      'Upsell e cross-sell',
      'Análise de métricas de conversão',
      'Landing page de vendas',
      'Autoresponder e e-mails de acompanhamento',
      'Campanhas de marketing direcionadas'
    ]
  },
  {
    name: 'Desenvolvimento de Ecommerce',
    redirect: hostLinks.services['desenvolvimento-de-ecommerce'],
    shortDescription:
      'Crie sua loja virtual de sucesso! Desenvolvimento de e-commerce profissional, funcionalidades avançadas, design atrativo e integração de pagamento segura. Venda online de forma eficiente!',
    tags: [
      'Desenvolvimento de e-commerce',
      'Plataforma de e-commerce',
      'Loja virtual',
      'Carrinho de compras',
      'Pagamentos online',
      'Catálogo de produtos',
      'Integração de meios de pagamento',
      'Gateway de pagamento',
      'Gestão de estoque',
      'Logística de entrega',
      'Segurança do e-commerce',
      'Personalização de produtos',
      'Checkout simplificado',
      'Marketing de e-commerce',
      'SEO para e-commerce',
      'Categorias de produtos',
      'Recomendações de produtos',
      'Avaliações e comentários de clientes',
      'Retenção de clientes',
      'Análise de métricas de vendas'
    ]
  },
  {
    name: 'Desenvolvimento de Aplicativo Mobile',
    redirect: hostLinks.services['desenvolvimento-de-aplicativo-mobile'],
    shortDescription:
      'Transforme sua ideia em um aplicativo móvel de sucesso! Desenvolvimento profissional, interface intuitiva, recursos avançados e compatibilidade multiplataforma. Conquiste seu público-alvo no mundo mobile com nosso serviço em desenvolvimento de aplicativos mobile!',
    tags: [
      'Desenvolvimento de aplicativo mobile',
      'Plataforma mobile',
      'iOS',
      'Android',
      'Interface do usuário (UI)',
      'Experiência do usuário (UX)',
      'Design responsivo',
      'Desenvolvedor de aplicativos mobile',
      'Programação mobile',
      'Navegação intuitiva',
      'Push notifications',
      'Integração de APIs',
      'Armazenamento em nuvem',
      'Banco de dados mobile',
      'Geolocalização',
      'Realidade aumentada',
      'Autenticação e segurança',
      'Testes de usabilidade',
      'Atualizações e manutenção',
      'Monetização de aplicativos'
    ]
  },
  {
    name: 'Desenvolvimento de Chatbot e Assitente',
    redirect: hostLinks.services['desenvolvimento-de-chatbot-e-assistente'],
    shortDescription:
      'Automatize e encante com chatbots inteligentes! Desenvolvimento de chatbots e assistentes virtuais personalizados, respostas instantâneas, interações humanizadas e integração perfeita. Otimize seu atendimento e impulsione a satisfação do seus cliente!',
    tags: [
      'Desenvolvimento de chatbot',
      'Desenvolvimento de assistente virtual',
      'Plataforma de chatbot',
      'Inteligência Artificial (IA)',
      'Processamento de linguagem natural (NLP)',
      'Integração de API de chatbot',
      'Design de diálogo',
      'Respostas automáticas',
      'Personalização do chatbot',
      'Treinamento do chatbot',
      'Aprendizado de máquina',
      'Assistente virtual de voz',
      'Integração com sistemas externos',
      'Chatbot omnichannel',
      'Análise e métricas de conversas',
      'Atendimento ao cliente automatizado',
      'Chatbot baseado em regras',
      'Chatbot baseado em IA',
      'Integração com redes sociais',
      'Gerenciamento de contexto'
    ]
  },
  {
    name: 'Design Gráfico e Identidade Visual',
    redirect: hostLinks.services['design-grafico'],
    shortDescription:
      'Impressione com design gráfico de qualidade! Logotipos, banners, materiais promocionais, materiais impressos e muito mais. Destaque-se visualmente e conquiste seu público-alvo. Transforme sua marca com nossos serviços de design gráfico profissional!',
    tags: [
      'Design gráfico',
      'Identidade visual',
      'Logotipo',
      'Paleta de cores',
      'Tipografia',
      'Ilustração',
      'Diagramação',
      'Composição visual',
      'Marca',
      'Branding',
      'Arte-finalização',
      'Mockup',
      'Design de embalagens',
      'Diagramação de impressos',
      'Design editorial',
      'Design de materiais promocionais',
      'Cartão de visita',
      'Papelaria corporativa',
      'Manual de identidade visual',
      'Apresentações visuais'
    ]
  },
  {
    name: 'UX/UI Design',
    redirect: hostLinks.services['ux-ui-design'],
    shortDescription:
      'Crie experiências memoráveis! UX/UI design para websites e aplicativos. Interfaces intuitivas, estéticas encantadoras e navegação fluida. Cative seu público, promova engajamento e impulsione o sucesso do seu produto com nosso serviço de UX/UI design!',
    tags: [
      'UX/UI Design',
      'Experiência do usuário',
      'Interface do usuário',
      'Arquitetura da informação',
      'Wireframe',
      'Prototipagem',
      'Design centrado no usuário',
      'Testes de usabilidade',
      'Pesquisa de usuário',
      'Jornada do usuário',
      'Design responsivo',
      'Padrões de design',
      'Navegação intuitiva',
      'Interatividade',
      'Acessibilidade',
      'Design visual',
      'Grid layout',
      'Ícones e imagens',
      'Animações e transições',
      'Consistência de design'
    ]
  },
  {
    name: 'Social Media',
    redirect: hostLinks.services['social-media'],
    shortDescription:
      'Conquiste as redes sociais! Tenha uma boa gestão estratégica, conteúdo cativante e interações engajadoras. Aumente sua visibilidade, fortaleça sua marca e atinja resultados incríveis. Maximize seu potencial nas mídias sociais com nosso serviço de social media!',
    tags: [
      'Social Media',
      'Marketing nas redes sociais',
      'Gerenciamento de redes sociais',
      'Estratégia de mídia social',
      'Conteúdo para redes sociais',
      'Engajamento de audiência',
      'Criação de calendário de conteúdo',
      'Análise de métricas de redes sociais',
      'Monitoramento de marca',
      'Publicidade em redes sociais',
      'Influenciadores digitais',
      'Campanhas de mídia social',
      'Gestão de comunidades',
      'Interação com seguidores',
      'Conteúdo viral',
      'Hashtags',
      'Storytelling nas redes sociais',
      'Imagens e vídeos atrativos',
      'Gerenciamento de crise nas redes sociais',
      'Automação de postagens'
    ]
  },
  {
    name: 'Marketing Digital',
    redirect: hostLinks.services['marketing-digital'],
    shortDescription:
      'Acelere seu negócio com estratégias de marketing digital! Aumente sua visibilidade, conquiste mais leads e potencialize suas vendas. Campanhas eficientes, SEO, mídias sociais, e-mail marketing e muito mais. Alcance o sucesso online com nosso serviço especializado em marketing digital!',
    tags: [
      'Marketing Digital',
      'SEO (Search Engine Optimization)',
      'SEM (Search Engine Marketing)',
      'Marketing de Conteúdo',
      'E-mail Marketing',
      'Redes Sociais',
      'Publicidade Online',
      'Marketing de Busca',
      'Inbound Marketing',
      'Analytics',
      'Funil de Vendas',
      'Marketing de Afiliados',
      'Mobile Marketing',
      'Remarketing',
      'Marketing de Influência',
      'Automação de Marketing',
      'ROI (Return on Investment)',
      'CRO (Conversion Rate Optimization)',
      'Marketing de Performance',
      'Marketing de Experiência'
    ]
  },
  {
    name: 'Gestão de Tráfego e Anúncios',
    redirect: hostLinks.services['gestao-de-trafego'],
    shortDescription:
      'Maximize seu potencial com uma gestão de tráfego eficiente! Atraia visitantes qualificados, aumente suas conversões e impulsione seus resultados. Anúncios segmentados, otimização contínua e análise de dados estratégica. Alcance o sucesso com nossa expertise em gestão de tráfego!',
    tags: [
      'Gestão de Tráfego e Anúncios',
      'Publicidade Online',
      'Google Ads',
      'Facebook Ads',
      'LinkedIn Ads',
      'Instagram Ads',
      'Twitter Ads',
      'YouTube Ads',
      'Remarketing',
      'Segmentação de audiência',
      'Planejamento de campanhas',
      'Orçamento de anúncios',
      'Acompanhamento de métricas',
      'Otimização de anúncios',
      'Testes A/B',
      'CTR (Click-through Rate)',
      'CPM (Cost per Mille)',
      'CPC (Cost per Click)',
      'CPA (Cost per Action)',
      'ROI (Return on Investment)'
    ]
  },
  {
    name: 'Criação de Filtros de Realidade Virtual',
    redirect: hostLinks.services['criacao-de-filtros-de-realidade-virtual'],
    shortDescription:
      'Maximize seu potencial com uma gestão de tráfego eficiente! Atraia visitantes qualificados, aumente suas conversões e impulsione seus resultados. Anúncios segmentados, otimização contínua e análise de dados estratégica. Alcance o sucesso com nossa expertise em gestão de tráfego!',
    tags: [
      'Criação de Filtros de Realidade Virtual',
      'Realidade Virtual',
      'Filtros AR (Augmented Reality)',
      'Desenvolvimento de Filtros',
      'Interação em Realidade Virtual',
      'Tracking de movimento',
      'Renderização 3D',
      'Detecção facial',
      'Programação de shaders',
      'Texturas e efeitos visuais',
      'Reconhecimento de gestos',
      'Imersão virtual',
      'Calibração de câmera',
      'Ambientes virtuais',
      'Integração com hardware',
      'Rastreamento de profundidade',
      'Experiências interativas',
      'Efeitos de partículas',
      'Animação em tempo real',
      'Compatibilidade de plataformas'
    ]
  },
  {
    name: 'Análise e Ciência de Dados',
    redirect: hostLinks.services['analise-e-ciencia-de-dados'],
    shortDescription:
      'Transforme dados em insights poderosos! Análise e ciência de dados avançada para tomadas de decisão inteligentes. Descubra padrões, identifique oportunidades e otimize seus resultados. Potencialize seu negócio com nosso serviço especializado em análise e ciência de dados!',
    tags: [
      'Análise e Ciência de Dados',
      'Mineração de Dados',
      'Big Data',
      'Aprendizado de Máquina',
      'Análise de Dados',
      'Visualização de Dados',
      'Estatística',
      'Modelagem de Dados',
      'Processamento de Linguagem Natural',
      'Algoritmos',
      'Previsão',
      'Clusterização',
      'Classificação',
      'Regressão',
      'Análise de Sentimento',
      'Análise de Redes',
      'Análise de Padrões',
      'Inteligência Artificial',
      'Hadoop',
      'SQL'
    ]
  }
];

const servicesFinal: TypeSearchedTopic[] = services.map((service) => ({
  ...service,
  type: 'Serviços'
}));

export default servicesFinal;
