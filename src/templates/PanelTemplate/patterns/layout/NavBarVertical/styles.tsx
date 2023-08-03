import { color, font, layout } from "@/styles/root";
import styled from "styled-components";


export const NavBarVertical = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-right: ${layout.containerPaddingX};
  .content{
    width: 1900px;
    display: flex;
    .nav{
      width: 200px;
      height: calc(100vh - 50px);
      position: sticky;
      top: 50px;
      left: 0;
      border-right: 1.4px solid #7dc0ff1c;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      ul{
        width: 100%;
        .current-router{
          background-color: ${color.secondary};
          color: #fff;
          &:hover{
            background-color: ${color.secondary};
          color: #fff;
          }
        }
        li{
          width: 100%;
          color: #ffffffd0;
          transition: background .2s;
          font-weight: bold;
          font-size: ${font.size.sm};
            &:hover{
              background-color: #0062ff75;
              color: #fff
            }
          a{
            display: inline-flex;
            width: 100%;
            padding: .6rem 1rem;
            font-weight: inherit;
            transition: color .2s;
            color: inherit;
            font-size: inherit;
            align-items: center;
            gap: .5rem;
          }
        }
      }
    }
    .section-nav{
      width: calc(100% - 200px);
      padding: 1rem 0 1rem 1rem;
    }
  }
`