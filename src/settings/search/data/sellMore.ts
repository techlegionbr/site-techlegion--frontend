import { hostLinks } from '@/settings/links';

import { type TypeSearchedTopic } from '../types';

const sellMore: Array<Omit<TypeSearchedTopic, 'type'>> = [
  {
    name: 'Nosso compromisso é fazer o seu negócio vender mais!',
    tags: ['kommo', 'vender mais'],
    shortDescription:
      'O nosso compromisso é fazer o seu negócio vender mais. Você está preparado para transformar seu resultado digital em vendas? Se a resposta for sim, não perca tempo e entre em contato imediatamente.',
    redirect: hostLinks.main['vender-mais']
  }
];

const sellMoreFinal: TypeSearchedTopic[] = sellMore.map((section) => ({
  ...section,
  type: 'Vender Mais'
}));

export default sellMoreFinal;
