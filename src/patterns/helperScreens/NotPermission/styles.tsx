import { color, font } from "@/styles/root";
import styled from "styled-components";


export const NotPermission = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  flex-direction: column;
  .error-number{
    font-weight: bold;
    text-transform: uppercase;
    color: ${color.third}
  }
  h1{
    font-size: ${font.size.lg};
    line-height: ${font.line_height.lg};
    margin-top: .1rem;
  }
  h1, p{
    text-align: center;
  }
  p{
    margin-top: 1rem;
    max-width: 600px;
  }
  .btn-back-home{
    margin-top: 3rem;
  }

`