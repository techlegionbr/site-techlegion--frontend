import { color } from "@/styles/root";
import styled from "styled-components";


export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  .divider-line{
    width: 1px;
    height: 20px;
    background-color: ${color.dark};
  }
`