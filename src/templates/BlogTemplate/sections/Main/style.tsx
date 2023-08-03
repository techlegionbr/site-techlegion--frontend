import { screens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .posts-main-blog{
      width: 100%;
      margin-top: 3rem;
      display: flex;
      gap: 2rem;
      @media (max-width: ${screens.md}) {
        flex-direction: column;
      }
      .feed-posts{
        width: 60%;
        @media (max-width: ${screens.md}) {
          width: 100%;
        }
      }
      .list-articles{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        justify-content: space-between;
        @media (max-width: ${screens.md}) {
          width: 100%;
        }
      }
    }
    .list-all-articles{
      width: 100%;
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    .call-for-writers{
      margin-top: 4rem;
      border-top: 1.4px solid #2575ec32;
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      nav{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        a{
          font-size: .7rem;
          text-transform: uppercase;
          font-weight: bold;
          color: ${color.third};
          opacity: .7;
          transition: .2s;
          &:hover{
            opacity: 1;
            text-decoration: underline;
          }
      }
      }
      i{
        opacity: .7;
        color: ${color.third};
        transform: rotate(-30deg);
        @media (max-width: ${screens.sm}) {
          display: none;
        }
      }
    }
  }
`