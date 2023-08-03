
import styled from "styled-components";



export const InputImageBox = styled.button`
  flex: none;
  width: 35px;
  height: 35px;
  border-radius: .2rem;
  &:hover{
      background-color: #f1f1f1;
    }
  i{
    font-size: 1.4rem;
  }
  label{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  input{
    display: none;
  }

`