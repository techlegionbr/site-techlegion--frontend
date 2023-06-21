import { color, font } from "@/styles/root";
import styled from "styled-components";



export const Post = styled.li`
  width: 100%;
  height: 80px;
  border-top: 1px solid #00ddff5c;
  padding: 1rem .4rem;
  cursor: default;
  transition: .2s;
  &:hover{
    border-top: 1px solid #00ddffb5;
    .title-post{
      color: ${color.light}
    }
  }
  .title-post{
    display: inline-block;
    font-size: ${font.size.xsm};
    line-height: ${font.line_height.xsm};
    width: 300px;
    color: #ffffffd3;
    transition: .2s;
  }
`