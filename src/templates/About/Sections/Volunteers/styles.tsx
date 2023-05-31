
import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Volunteers = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  border-top: 2px solid #ffffff17;
  border-bottom: 2px solid #ffffff17;
  .content{
    width: ${layout.contentWidth};
    .carousel-volunteers{
      margin-top: 4rem;
    }
  }
`
