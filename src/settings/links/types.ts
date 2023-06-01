export type TypeSocialMedia =
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'whatsapp'
  | 'email';

export type TypeLinks = Partial<Record<TypeSocialMedia, string>>;
