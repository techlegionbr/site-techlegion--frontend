import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Benefits = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    .benefits-accordions{
      margin-top: 4rem;
    }
  }
`