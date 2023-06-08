import { breackScreens, color, layout } from "@/styles/root";
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
      @media (max-width: ${breackScreens.tablet}) {
        flex-direction: column;
      }
      .feed-posts{
        width: 60%;
        @media (max-width: ${breackScreens.tablet}) {
          width: 100%;
        }
      }
      .list-articles{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        justify-content: space-between;
        @media (max-width: ${breackScreens.tablet}) {
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
  }
`