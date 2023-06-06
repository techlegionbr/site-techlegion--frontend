import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Plans = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .cards-plan{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
      .card{
        background-color: #1a1c4b;
        width: 100%;
        padding: 1.5rem 1rem;
        border-radius: .5rem;
        border: 1.3px solid #5d9cfa6d;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: .2s;
        &:hover{
          transform: scale(1.05);
        }
        .icon-cloud{
          font-size: 4rem;
        }
        .status-plan{
          display: inline-block;
          font-size: .6rem;
          border: 1.2px dashed #83a8ffce;
          color: ${color.third};
          font-weight: bold;
          padding: .3rem 1rem;
          border-radius: .4rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .price{
          margin-top: 1rem;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          color: ${color.third};
          .sub-price{
            display: block;
            font-size: .8rem;
            font-weight: bold;
          }
          .value-price{
            line-height: 1.8rem;
            font-size: 2.1rem;
            font-weight: bold;
          }
        }
        ul{
          margin-top: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: .4rem;
          border-top: 1.2px solid #6b8bff53;
          padding-top: 1rem;
          li{
            font-size: .9rem;
            display: flex;
            align-items: center;
            gap: .4rem;
            i{
              font-size: 1.1rem;
              
            }
          }
          .attr-include{
            i{
              color: ${color.third};
            }
          }
          .attr-exclude{
            span{
              text-decoration: line-through;
              opacity: .7;
            }
            i{
              color: #ff0303;
            }
          }
        }
        .button-know-more{
          margin-top: 3rem;
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    .benefits-cloud{
      width: 100%;
      margin-top: 3rem;
      h2{
        text-align: center;
        color: ${color.third}
      }
      ul{
        margin-top: 1.2rem;
        display: flex;
        gap: .6rem;
        flex-direction: column;
        li{
          background-color: #1a1c4b;
          padding: .7rem 1rem;
          border-radius: .5rem;
          border: 1.2px solid #9474ff44;
          font-size: .9rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: .8rem;
          i{
            color: ${color.third};
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`