import { type TypeHostLinkMain, type TypeHostLinkService, type TypeHostLinks, type TypeLinks } from "./types";
import generateRoutes from "./utils/generateRoutes";

export const socialMediaLinks: TypeLinks = {
  linkedin: 'https://www.linkedin.com/company/techlegionbr/',
  twitter: 'https://twitter.com/techlegionbr',
  instagram: 'https://www.instagram.com/techlegionbr/',
  facebook: 'https://www.facebook.com/techlegionbr',
  tiktok: 'https://www.tiktok.com/@techlegionbr',
  whatsapp: "https://api.whatsapp.com/send?phone=555180276708",
  email: "mailto:contato@techlegion.com.br"
};


export const hostLinks: TypeHostLinks = {
  main: {
    "início": "/",
    ...generateRoutes([
      "sobre",
      "servicos",
      "blog",
      "contato"
    ]) as Omit<Record<TypeHostLinkMain, string>, "início">
  },
  services: {
    ...generateRoutes([
      "analise-e-ciencia-de-dados",
      "criacao-de-filtros-de-realidade-virtual",
      "desenvolvimento-de-aplicativo-mobile",
      "desenvolvimento-de-chatbot-e-assistente",
      "desenvolvimento-de-ecommerce",
      "desenvolvimento-de-pagina-de-vendas",
      "desenvolvimento-de-site",
      "design-grafico",
      "gestao-de-trafego",
      "marketing-digital",
      "social-media",
      "ux-ui-design"
    ], "/servicos") as Record<TypeHostLinkService, string>
  }
}