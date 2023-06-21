import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


export const ListPosts = styled.div`
  width: 100%;
  background-color: #171742;
  padding: 1rem;
  border-radius: .4rem;
  border: 1.3px solid #8cb8ff35;
  ${presenceAnimation({
  animation: "scale",
  duration: .3
})}
  h4{
    span{
      color: ${color.third}
    }
  }
  .posts-list{
    margin-top: 2rem;
  }
`