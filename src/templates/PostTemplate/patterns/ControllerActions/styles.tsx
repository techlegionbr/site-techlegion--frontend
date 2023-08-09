import { color } from "@/styles/root";
import styled from "styled-components";


export const ControllerActions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  padding: .8rem 0;
  .display-views, button{
    font-weight: bold;
    display: flex;
    gap: .4rem;
    align-items: center;
    background-color: #11153f;
    padding: .3rem 1rem;
    border: 1px solid #387eff1f;
    border-radius: .4rem;
    opacity: .6;
    transition: .2s;
    font-size: .9rem;
    &:hover{
      opacity: 1;

    }
    i{
      color: ${color.third}
    }
  }
  button.selected{
    background-color: ${color.third};
    opacity: 1;
    color: ${color.dark};
    i{
      color: ${color.dark}
    }
  }
  .display-views{
    cursor: default;
  }
`