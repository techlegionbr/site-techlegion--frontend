export type TypeSocialMedia =
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'whatsapp'
  | 'email';

export type TypeLinks = Record<TypeSocialMedia, string>;

export type TypeHostOurValues = '#diversidade-e-inclusao' | '#impacto-social';

export type TypeHostLinkPainel =
  | 'admin'
  | 'user'
  | 'user/posts'
  | 'user/comments'
  | 'user/editors'
  | 'user/managers'
  | 'admin/posts'
  | 'admin/comments'
  | 'admin/editors'
  | 'admin/managers'
  | 'admin/settings'
  | 'admin/profile'
  | 'user/settings'
  | 'user/profile';

export type TypeHostLinkMain =
  | 'início'
  | 'sobre'
  | 'servicos'
  | 'blog'
  | 'vender-mais'
  | 'contato'
  | 'politica-de-privacidade'
  | 'termos-de-uso';
export type TypeHostLinkService =
  | 'analise-e-ciencia-de-dados'
  | 'criacao-de-filtros-de-realidade-virtual'
  | 'desenvolvimento-de-aplicativo-mobile'
  | 'desenvolvimento-de-chatbot-e-assistente'
  | 'desenvolvimento-de-ecommerce'
  | 'desenvolvimento-de-pagina-de-vendas'
  | 'desenvolvimento-de-site'
  | 'design-grafico'
  | 'gestao-de-trafego'
  | 'marketing-digital'
  | 'social-media'
  | 'ux-ui-design';

export interface TypeHostLinks {
  main: Record<TypeHostLinkMain, string>;
  services: Record<TypeHostLinkService, string>;
  ourValues: Record<TypeHostOurValues, string>;
  painel: Record<TypeHostLinkPainel, string>;
}
