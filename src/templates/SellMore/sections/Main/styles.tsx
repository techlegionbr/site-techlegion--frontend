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
    padding: ${layout.containerPaddingX};
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
      height: 350px;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

`