
import { screens, color, layout } from "@/styles/root"
import styled from "styled-components"

interface PropsHeader {
  istransparent: "true" | "false"
}

export const Header = styled.div`
  width: 100%;
  height: 110px;
  z-index: 11;
  position: sticky;
  top: 0;
  left: 0;
`

export const SubHeader = styled.header<PropsHeader>`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ istransparent }) => istransparent === "true" ? color.primary : "#181d47c8"};
  backdrop-filter: blur(4px);
  border-bottom: 1px solid ${({ istransparent }) => istransparent === "true" ? "transparent" : "#ffffff17"};
  transition: .2s;
  padding: 0 ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-hamburger{
      display: none;
      @media (max-width: ${screens.md}) {
        display: inline-block;
      }
    }
    .home_link-img img{
      object-fit: contain;
      width: 210px;
      @media (max-width: ${screens.sm}) {
        width: 180px;
      }
    }
    .menu-nav{
      display: flex;
      align-items: center;
      gap: 1.4rem;
      @media (max-width: 720px) {
          display: none;
      }
      .button-search{
        font-size: .9rem;
        color: ${color.light};
        width: 32px;
        height: 32px;
        background-color:${color.secondary};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: .8;
        transition: .2s;
        i{  pointer-events: none; }
        &:hover{
          opacity: 1;
        }
      }
      nav{  
        a{
          color: ${color.light};
          text-decoration: none;
          padding: .4rem .8rem;
          font-size: .9rem;
          opacity: .8;
          transition: .2s;
          font-weight: bold;
          &:hover{
            opacity: 1;
          }
        }
        .marked{
          background: ${color.secondary};
          padding: .4rem .8rem;
          border-radius: .4rem;
          opacity: 1;

        }
      }
    }
  }
`

export const SupHeader = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 ${layout.containerPaddingX};
  background-color: ${color.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${screens.md}) {
      justify-content: center;
    }
    .contact-info{
      font-size: .7rem;
      display: flex;
      gap: 1rem;
      font-weight: bold;
      @media (max-width: ${screens.sm}) {
        font-size: .6rem;
      }
      i{
        display: inline-block;
        margin-right: .2rem;
      }
    }
    .social-medias{
      display: flex;
      gap: .3rem;
      @media (max-width: ${screens.md}) {
        display: none;
      }
      /* a:nth-last-child(1){
        transform: rotate(40deg);
      } */
    }
  }
`


