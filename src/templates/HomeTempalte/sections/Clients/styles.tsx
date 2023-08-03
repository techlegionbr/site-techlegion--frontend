import { color, font, layout, screens } from "@/styles/root";
import styled from "styled-components";


export const Clients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${color.primary};
  padding: 140px ${layout.containerPaddingX};
  position: relative;
  .invitation-link{
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      cursor: pointer;
      color: ${color.third};
      font-weight: bold;
      font-size: ${font.size.xsm};
      line-height: ${font.line_height.xsm};
      opacity: .7;
      max-width: 250px;
      padding-left: .5rem;
      border-left: 3px solid ${color.third};
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
  .content{
    width: ${layout.contentWidth};
    .logo-client-list{
      margin-top: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      border-radius: 7rem;
      gap: 2rem;
      flex-wrap: wrap;
      li{
        flex: none;
        width: 200px;
        height: 200px;
        background-color: #181846;
        position: relative;
        display: flex;
        border-radius: 3rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #a1adf728;
        padding: .5rem;
        transition: .2s;
        z-index: 2;
        @media (max-width: ${screens.sm}) {
          width: 150px;
          height: 150px;
        }
        &:hover{
          padding: 0;
          a{
            border-radius: 3rem;
          }
        }
        .icon-crown{
          position: absolute;
          top: -.7rem;
          right: -.9rem;
          transform: rotate(38deg);
          color: ${color.alert};
          font-size: 1.5rem;
          pointer-events: none;
          transition: .2s;
          display: none;
        }
        a{
          border-radius: 2.5rem;
          width: 100%;
          height: 100%;
          transition: .2s;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`