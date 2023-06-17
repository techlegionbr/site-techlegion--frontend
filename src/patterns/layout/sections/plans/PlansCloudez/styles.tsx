import { color, font, layout } from '@/styles/root';
import styled from 'styled-components';

export const Plans = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  .content {
    width: ${layout.contentWidth};
    .cards-plan {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    .benefits-cloud {
      border-top: 1.4px solid #95b8ff33;
      padding: 3rem 0;
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        text-align: center;
      }
      .line-sub-title {
        margin-top: 0.6rem;
        width: 60px;
        height: 2px;
        background-color: ${color.third};
        border-radius: 0.4rem;
      }
      ul {
        margin-top: 3rem;
        display: flex;
        width: 100%;
        gap: 0.6rem;
        flex-direction: column;
        li {
          background-color: #1a1c4b;
          padding: 1.3rem 1rem;
          border-radius: 0.5rem;
          border: 1.2px solid #9474ff44;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          p {
            font-size: calc(${font.size.xsm} + 0.1rem);
            line-height: calc(${font.line_height.xsm} + 0.1rem);
          }
          i {
            color: ${color.third};
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;

export const CardPlan = styled.li`
  background-color: #1a1c4b;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  border: 1.3px solid #5d9cfa6d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  .icon-cloud {
    font-size: 4rem;
  }
  .status-plan {
    display: inline-block;
    font-size: 0.6rem;
    border: 1.2px dashed #83a8ffce;
    color: ${color.third};
    font-weight: bold;
    padding: 0.3rem 1rem;
    border-radius: 0.4rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .price {
    margin-top: 1rem;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: ${color.third};
    .sub-price {
      display: block;
      font-size: 0.8rem;
      font-weight: bold;
    }
    .value-price {
      line-height: ${font.line_height.xlg};
      font-size: ${font.size.xlg};
      font-weight: bold;
    }
  }
  ul {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border-top: 1.2px solid #6b8bff53;
    padding-top: 1rem;
    .attr-exclude {
      i {
        color: #ff0300;
      }
      span {
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
    .attr-include {
      i {
        color: ${color.third};
      }
    }
    li {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      i{
        font-size: 1.3rem;
      }
    }
  }
  .button-know-more {
    margin-top: 3rem;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;
