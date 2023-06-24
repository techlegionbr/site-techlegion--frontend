import { color, font, layout } from "@/styles/root";
import styled from "styled-components";


export const ManageTeam = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    .cards-benefits{
      margin-top: 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.4rem;
      li{
        height: 200px;
        background-color: #111a37;
        border-radius: .5rem;
        border: 1.2px solid #8594f547;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1rem;
        gap: 1rem;
        transition: .2s;
        cursor: default;
        &:hover{
          transform: scale(1.05);
          border: 1.2px solid #8594f5c4;
          i, span{
            opacity: 1;
          }
        }
        i, span{
          display: inline-flex;
          justify-content: center;
          opacity: .8;
          height: 50%;
          transition: .2s;
        } 
        i{
          align-items: flex-end;
          font-size: 3rem;
          color: ${color.third};
        }
        span{
          align-items: flex-start;
          font-size: calc(${font.size.sm} + .1rem);
          font-weight: bold;
          line-height: calc(${font.line_height.sm} + .1rem);
          color: ${color.light};
        }
      }
    }
  }
`