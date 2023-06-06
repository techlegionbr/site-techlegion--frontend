import { breackScreens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const Footer = styled.footer`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.bluishGray};
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    width: ${layout.contentWidth};
    .sup-footer{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 3rem;
      ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .4rem;
        li:first-child{
          color: ${color.third};
          border-bottom: 1.4px solid ${color.third};
          text-transform: uppercase;
          padding-bottom: .5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .speack{
          border-left: 3px solid ${color.third};
          padding-left: 1rem;
          color: ${color.third};
          margin: .6rem 0;
        }
        li{
          width: 100%;
          font-size: .8rem;
          font-weight: bold;
          line-height: 1rem;
        }
        li a{
          display: inline-block;
          width: 100%;
          transition: .2s;
          &:hover{
            color: ${color.third}
          }
        }
      }
    }
    .sub-footer{
      margin-top: 3rem;
      width: 100%;
      border-top: 1.4px solid #ffffff31;
      padding: 1.4rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      @media (max-width: ${breackScreens.tablet}) {
        flex-direction: column;
        justify-content: center;
      }

      .logo-lion{
        width: 80px;
        height: 80px;
        background-color: #11174d;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.4px solid #87abff1e;
        display: none;
        img{
          width: 40px;
          object-fit: contain;
          margin-top: .4rem;
        }
      }
      .terms-polity-nav{
        display: flex;
        gap: 1.4rem;
        a{
          font-size: .8rem;
          font-weight: bold;
          color: #ffffffc1;
          transition: .2s;
          &:hover{
            color: #fff;
          }
        }
      }
      .social-media-nav{
        display: flex;
        gap: .6rem;
        a{
          display: inline-flex;
          width: 35px;
          height: 35px;
          color: ${color.third};
          border: 1.5px solid ${color.third};
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          transition: .2s;
          background-color: ${color.third};
          color: ${color.bluishGray};
          &:hover{
            background-color: transparent;
            color: ${color.third};
          }
        }
      }
    }
  }
`