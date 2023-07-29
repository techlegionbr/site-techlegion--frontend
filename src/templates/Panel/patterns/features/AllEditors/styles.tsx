import { color, font } from "@/styles/root";
import styled from "styled-components";


export const AllEditors = styled.div`
  .editors-list{
    margin-top: 2rem;
    li{
      display: flex;
      gap: 1rem;
      align-items: center;
      background-color: #141e4d;
      width: 370px;
      border-radius: .4rem;
      padding: .6rem 3rem .6rem 1rem;
      border: 1px solid #9bbeff61;
      position: relative;
      .stamp{
        position: absolute;
        right: .6rem;
        top: .6rem;
        background-color: ${color.secondary};
        width: 20px;
        height: 20px;
        color: ${color.light};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .7rem;
      }
      .profile{
        width: 50px;
        flex: none;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .infos-personal{
        width: calc(100% - 50px);
        span{
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          
          display: block;
          font-size: ${font.size.xsm};
          line-height: ${font.line_height.xsm};
          font-weight: bold;
        }
        .name{
          text-transform: capitalize;
        }
      }
    }
  }
`