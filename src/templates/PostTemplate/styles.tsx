import { layout } from "@/styles/root";
import styled from "styled-components";

export const PostTemplate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
  }
`