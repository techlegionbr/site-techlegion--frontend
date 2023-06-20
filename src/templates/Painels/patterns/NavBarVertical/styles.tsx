import { color, font } from "@/styles/root";
import styled from "styled-components";


export const NavBarVertical = styled.div`
  width: 100%;
  .content{
    display: flex;
    .nav{
      width: 200px;
      min-height: calc(100vh - 50px);
      border-right: 1.4px solid #7dc0ff1c;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      ul{
        width: 100%;
        li{
          width: 100%;
          color: #ffffffd0;
          transition: background .2s;
          font-weight: bold;
          font-size: ${font.size.sm};
            &:hover{
              background-color: ${color.secondary};
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
        .header-nav{
          background-color: ${color.secondary};
          color: #fff;
        }
      }
    }
    .section-nav{
      width: calc(100% - 200px);
      padding: 2rem 3rem;
    }
  }
`