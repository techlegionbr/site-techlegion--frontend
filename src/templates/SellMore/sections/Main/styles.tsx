import { layout, screens } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px ${layout.containerPaddingX};
  @media (max-width: ${screens.xlg}) {
    min-height: calc(100vh - (${layout.header.sub} + ${layout.header.sup}));
    padding: 50px ${layout.containerPaddingX};
  }
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: center;
    gap: 4rem;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
    }
    .description-apresentation{
      width: 60%;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      p{
        margin-top: 1rem;
      }
      .btn-sell-more{
        margin-top: 3rem;
      }
    }
    .image-apresentation{
      width: 40%;
      border-radius: .7rem;
      height: 350px;
      background-color: #1b204d;
      border: 1px solid #8389fe16;
      position: relative;
      overflow: hidden;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      img{
        position: absolute;
        width: auto;
        left: 2rem;
        height: 100%;
        @media (max-width: ${screens.md}) {
          left: auto;
          right: -4rem;
        }
        @media (max-width: ${screens.sm}) {
          left: 2rem;
          right: auto;
        }
      }
    }
  }

`