import { color, layout } from '@/styles/root';
import styled from 'styled-components';

export const Benefits = styled.div`
  width: 100%;
  background: ${color.primary};
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: ${layout.contentWidth};
  }
`;


