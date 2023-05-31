
import { breackScreens, color, layout } from "@/styles/root";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breackScreens.tv}) {
    min-height: calc(100vh - (${layout.header.sub} + ${layout.header.sup}));
    padding: 0 ${layout.containerPaddingX};
  }
  @media (max-width: ${breackScreens.smart}) {
    padding: 50px ${layout.containerPaddingX};
  }
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    @media (max-width: ${breackScreens.tablet}) {
      flex-direction: column;
    }
    .description-apresentation{
      width: 60%;
      padding: 2rem 0;
      @media (max-width: ${breackScreens.tablet}) {
        width: 100%;
      }
      h3{
        margin-bottom: .5rem;
        @media (max-width: ${breackScreens.smart}) {
          line-height: .6rem;
        }
      }
      h1{
        font-size: 3.6rem;
        line-height: 3.4rem;
        @media (max-width: ${breackScreens.smart}) {
          font-size: 2.8rem;
          line-height: 2.6rem;
        }
        span{
          color: ${color.third}
        }
      }
      p{
        margin-top: 2rem;
      }
      .profile-card{
        margin-top: 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        border: 1.4px solid #4b9ff841;
        border-radius: .4rem;
        padding: .5rem 1.5rem;
        background-color: #171748;
        @media (max-width: ${breackScreens.smart}) {
          width: 100%;
        }
        .image-profile{
          width: 60px;
          height: 60px;
          overflow: hidden;
          @media (max-width: ${breackScreens.smart}) {
            width: 50px;
            height: 50px;
          }
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        article{
          line-height: .5rem;
          small{
            color: ${color.third};
          }

        }
        
      }
      .button-contact{
        margin-top: 3rem;
        @media (max-width: ${breackScreens.smart}) {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    .image-apresentation{
      width: 40%;
      height: 500px;
      overflow: hidden;
      border-radius: .5rem;
      border: 1.4px solid #9290fc4e;
      @media (max-width: ${breackScreens.tablet}) {
        display: none;
      }
      @media (max-width: ${breackScreens.smart}) {
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