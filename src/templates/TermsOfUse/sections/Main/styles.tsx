import { font, layout } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
    .term-parchment{
      width: 100%;
      margin-top: 4rem;
      padding: 2rem 2rem;
      background: #181857;
      border-radius: 1rem;
      border: 1.3px solid #7fa6f940;
    }
    h3{
      margin-bottom: .7rem;
    }
    p{
      font-size: ${font.size.xsm};
      line-height: ${font.line_height.xsm};
      margin-bottom: 1.3rem;
      color: #fff;
    }
    ul{
      display: flex;
      flex-direction: column;
      gap: .4rem;
      margin-bottom: 1.3rem;
      li > p{
        margin-bottom: 0;
      }
    }
  }
`