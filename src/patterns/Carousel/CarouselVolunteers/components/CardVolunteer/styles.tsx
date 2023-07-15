import { color } from '@/styles/root';
import styled from 'styled-components';

export const CardVolunteer = styled.div`
  flex: none;
  width: 240px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem;
  .layer-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1.3px solid #8cb8fe58;
    background-color: #072545;
    border-radius: 0.6rem;
    padding: 2rem 1rem;
    text-align: center;
    .profile-image {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    h4 {
      margin-top: 1rem;
    }
    h5 {
      font-size: 0.7rem;
      color: ${color.third};
    }
    nav {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;
      a {
        width: 30px;
        height: 30px;
        background-color: ${color.third};
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: ${color.primary};
        opacity: 0.7;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
