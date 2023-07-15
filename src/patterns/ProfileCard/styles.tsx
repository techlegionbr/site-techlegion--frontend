import { color, screens } from '@/styles/root';
import styled from 'styled-components';

export const ProfileCardRoot = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border: 1.4px solid #4b9ff841;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  background-color: #171748;
`;

export const ProfileCardImage = styled.div`
  flex: none;
  width: 60px;
  height: 60px;
  @media (max-width: ${screens.sm}) {
    width: 50px;
    height: 50px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProfileCardContent = styled.div`
  line-height: 0.5rem;
  small {
    color: ${color.third};
  }
`;
