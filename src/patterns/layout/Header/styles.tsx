import { breackScreens, color, layout } from "@/styles/root"
import styled from "styled-components"

interface PropsHeader {
  istransparent: "true" | "false"
}

export const Header = styled.header<PropsHeader>`
  width: 100%;
  height: 80px;
  padding: 0 ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ istransparent }) => istransparent === "true" ? color.primary : "#181d47c8"};
  backdrop-filter: blur(4px);
  position: sticky;
  top: 30px;
  left: 0;
  z-index: 10;
  border-bottom: ${({ istransparent }) => istransparent === "true" ? "0px" : "1px"} solid #ffffff17;
  transition: .2s;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-hamburger{
      display: none;
      @media (max-width: ${breackScreens.tablet}) {
        display: inline-block;
      }
    }
    .home_link-img img{
      object-fit: contain;
      width: 210px;
      @media (max-width: ${breackScreens.smart}) {
        width: 180px;
      }
    }
    nav{
      display: flex;
      gap: 1rem;
      font-weight: bold;
      @media (max-width: 720px) {
        display: none;
      }
      a{
        color: ${color.light};
        text-decoration: none;
        padding: .4rem 0;
        font-size: .9rem;
        opacity: .8;
        transition: .2s;
        &:hover{
          opacity: 1;
        }
      }
      .marked{
        background: ${color.secondary};
        padding: .4rem 1rem;
        border-radius: .4rem;
        opacity: 1;

      }
    }
  }
`

export const Contacts = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${color.secondary};
  position: sticky;
  z-index: 11;
  top: 0;
  left: 0;
  padding: 0 ${layout.containerPaddingX};

  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${breackScreens.tablet}) {
      justify-content: center;
    }
    .contact-info{
      font-size: .7rem;
      display: flex;
      gap: 1rem;
      font-weight: bold;
      @media (max-width: ${breackScreens.smart}) {
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
      @media (max-width: ${breackScreens.tablet}) {
        display: none;
      }
      a:nth-last-child(1){
        transform: rotate(40deg);
      }
    }
  }
`