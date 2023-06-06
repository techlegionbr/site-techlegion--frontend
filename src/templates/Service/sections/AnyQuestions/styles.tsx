import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const AnyQuestions = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .button-contact{
      margin-top: 3rem;
    }
  }

`