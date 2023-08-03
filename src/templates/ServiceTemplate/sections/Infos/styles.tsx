import { screens, color, layout, font } from "@/styles/root";
import styled from "styled-components";


export const Infos = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
    }
    .price-card{
      width: 300px;
      background-color: #241f4f;
      padding: 2rem 1.5rem;
      border: 1.3px solid #8566ff65;
      border-radius: .6rem;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      article{
        p{
          margin-top: .4rem;
          font-size: .8rem;
        }
      }
      .price{
        margin-top: 3rem;
        span{
          display: block;
        }
        .sub-price{
          font-size: .8rem;
          font-weight: bold;
        }
        .price-value{
          line-height: ${font.line_height.xlg};
          font-size: ${font.size.xlg};
          font-weight: bold;
          color: ${color.third};
        }
        .button-contract{
          margin-top: 1rem;
          @media (min-width: ${screens.md}) {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }
      }
      .differentials{
        margin-top: 3rem;
        ul{
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li{
            font-size: .9rem;
            line-height: 1rem;
          }
        }
      }
      .included-service{
        margin-top: 3rem;
        ul{
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li{
            display: flex;
            align-items: center;
            font-size: .9rem;
            line-height: 1rem;
            gap: 1rem;
            i{
              color: ${color.third};
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .introduction{
      width: calc(100% - 300px);
      display: flex;
      flex-direction: column;
      gap: 3rem;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      article{
        h1{
          font-size: 2.4rem;
          margin-bottom: 1.4rem;
          @media (max-width: ${screens.sm}) {
            font-size: 2.1rem;
            line-height: 2rem;
          }
        }
        .benefits{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          list-style: disc;
          padding-left: 1rem;
        }
      }
    }
  }
`