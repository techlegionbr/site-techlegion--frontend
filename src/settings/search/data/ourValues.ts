import { hostLinks } from '@/settings/links';

import { type TypeSearchedTopic } from '../types';

const ourValues: Array<Omit<TypeSearchedTopic, 'type'>> = [
  {
    name: 'Diversidade e Inclusão',
    tags: [],
    shortDescription:
      'Na Tech Legion, acreditamos que a diversidade e a inclusão são essenciais para impulsionar a inovação e o crescimento.',
    redirect: hostLinks.ourValues['#diversidade-e-inclusao']
  },
  {
    name: 'Impacto Social',
    tags: [],
    redirect: hostLinks.ourValues['#impacto-social'],
    shortDescription:
      'A Tech Legion não é apenas uma empresa de tecnologia, mas sim uma legião de profissionais apaixonados por tecnologia que buscam um propósito maior: impactar a vida das pessoas através da tecnologia.'
  }
];

const ourValuesFinal: TypeSearchedTopic[] = ourValues.map((section) => ({
  ...section,
  type: 'Nossos Valores'
}));

export default ourValuesFinal;
