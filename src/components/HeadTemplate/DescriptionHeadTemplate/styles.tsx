import { color } from '@/styles/root';
import styled from 'styled-components';

export const DescriptionHeadTemplate = styled.div`
  width: 100%;
  background-color: #212229;
  padding: 2rem;
  display: flex;
  justify-content: center;
  .description-content {
    width: 800px;
    .header-site {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      .logo-site {
        width: 35px;
        height: 35px;
        background: #d4d4d4f0;
        border-radius: 50%;
        overflow: hidden;
        padding: 0.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .infos-site {
        display: flex;
        flex-direction: column;
        .domain {
          font-size: 0.9rem;
          font-weight: bold;
        }
        .url {
          font-size: 0.8rem;
        }
      }
    }
    .title,
    .description {
      display: block;
    }
    .title {
      width: 100%;
      margin-top: 1rem;
      font-size: 1.5rem;
      color: ${color.third};
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .description{
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      white-space: break-spaces;
    }
  }
`;
