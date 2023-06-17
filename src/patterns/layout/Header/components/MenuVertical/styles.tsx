import { presenceOpacity, presenceTranslateRight } from "@/animations/presence";
import { color, screens } from "@/styles/root";
import styled from "styled-components";



export const Hamburger = styled.button`
  font-size: 2rem;

`

export const PopUpMenuVertical = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #0c113758;
  z-index: 15;
  ${presenceOpacity};
  @media (min-width: ${screens.md}) {
    display: none;
  }
  .vertical-menu{
    position: absolute;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: #0d1235;
    ${presenceTranslateRight};
    border-left: 2px solid #66a7f731;
    padding: 2rem 2rem;
    @media (max-width: ${screens.sm}) {
      width: calc(100% - 1.5rem);
    }
    .button-close{
        position: absolute;
        left: -1.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #2b2964;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        justify-content: center;
        color: ${color.third};
        
      }
    .button-search{
      width: 100%;
      background: #1e1e60;
      padding: .5rem 1rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 1.3px solid #8ba3ff37;
      opacity: .7;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
      .icon-search{
        color: ${color.third}
      }
      span{
        font-size: .9rem;
      }
    }
    nav{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
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
`