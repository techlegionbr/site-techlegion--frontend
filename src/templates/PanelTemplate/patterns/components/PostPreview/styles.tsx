import { color, font } from "@/styles/root";
import styled from "styled-components";



export const Post = styled.li`
  width: 100%;
  height: 100px;
  border-top: 1px solid #00ddff8d;
  padding: 1rem 6rem 1rem .4rem;
  cursor: default;
  transition: .2s;
  display: flex;
  align-items: flex-start;
  position: relative;
  opacity: .7;
  &:hover{
    opacity: 1;
    border-color: #00ddffdd;
  }
  .controllers{
    position: absolute;
    right: .4rem;
    a, button{
      background-color: ${color.secondary};
      font-weight: bold;
      font-size: .8rem;
      border-radius: .3rem;
      padding: .3rem 1rem;
    }
  }
  .infos-tech{
    width: 300px;
    .profile-editor{
      display: flex;
      margin-bottom: .5rem;
      align-items: center;
      gap: .5rem;
      width: 100%;
      .profile-img{
        flex: none;
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }  
      .name-editor{
        font-size: ${font.size.xsm};
        line-height: ${font.line_height.xsm};
        font-weight: bold;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        .capitalize-name{
          display: block;
          margin-top: -.2rem;
          text-transform: capitalize;
          color: ${color.third};
        }
      }
    }
    .display-statistics{
      display: flex;
      gap: 1rem;
      background-color: #121a3d;
      padding: .3rem 1rem;
      
      border-radius: .3rem;
      li{
        font-size: .9rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: .2rem;
        i{
          font-size: .8rem;
        }
      }
    }
  }
  .infos-main{
    width: 30%;
    .title-post, .description-post{
      font-size: ${font.size.xsm};
      line-height: ${font.line_height.xsm};
      width: 100%;
      color: ${color.light};
      transition: .2s;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title-post{
      font-weight: bold;
      display: block;
    }
    .description-post{
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  
`