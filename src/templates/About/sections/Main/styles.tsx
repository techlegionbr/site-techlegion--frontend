
import { screens, color, layout, font } from "@/styles/root";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 100px ${layout.containerPaddingX};
  @media (max-width: ${screens.xlg}) {
    min-height: calc(100vh - (${layout.header.sub} + ${layout.header.sup}));
    padding: 10px ${layout.containerPaddingX};
  }
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
    }
    .description-apresentation{
      width: 60%;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      h4{
        margin-bottom: .5rem;
        @media (max-width: ${screens.sm}) {
          line-height: .6rem;
        }
      }
      h1{
        font-size: ${font.size.xxlg};
        line-height: ${font.line_height.xxlg};
        @media (max-width: ${screens.sm}) {
          font-size: calc(${font.size.xxlg} - .2rem);
        line-height: calc(${font.line_height.xxlg} - .2rem);
        }
        span{
          color: ${color.third}
        }
      }
      p{
        margin-top: 2rem;
      }
      .persons-charge{
        margin-top: 2rem;
        display: flex;
        gap: .7rem;
        flex-wrap: wrap;
        @media (max-width: ${screens.md}) {
          flex-direction: column;
        }
        .profile-card{
          width: 270px;
          @media (max-width: ${screens.sm}) {
            width: 100%;
          }
        }
        
      }
      .button-contact{
        margin-top: 3rem;
        @media (max-width: ${screens.sm}) {
          width: 100%;
        }
      }
    }
    .image-apresentation{
      width: 40%;
      height: 500px;
      overflow: hidden;
      border-radius: .5rem;
      border: 1.4px solid #9290fc4e;
      @media (max-width: ${screens.md}) {
        display: none;
      }
      @media (max-width: ${screens.sm}) {
        display: inline-block;
        width: 100%;
        height: 500px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
`