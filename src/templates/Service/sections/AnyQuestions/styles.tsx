import { color, layout } from "@/styles/root";
import styled from "styled-components";


interface IAnyQuestionsProps {
  bgColor: "primary" | "bluishGray"
}

export const AnyQuestions = styled.div<IAnyQuestionsProps>`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor === "primary" ? color.primary : color.bluishGray};
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