import { color } from "@/styles/root";
import styled from "styled-components";


export const UrlHeadTemplate = styled.div`
  width: 100%;
  background-color: #212229;
  padding: .3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .router-utils{
    width: 80%;
    min-width: 900px;
    background-color: #121214;
    padding: .4rem 1rem;
    border-radius: .3rem;
    display: flex;
    align-items: center;
    gap: .4rem;
    .icon-shield, .icon-lock{
      font-size: 1.2rem;
    }
    .router{
      color: #ffffffa9;
      .domain{
        text-transform: lowercase;
        color: ${color.light}
      }
    }
  }
`