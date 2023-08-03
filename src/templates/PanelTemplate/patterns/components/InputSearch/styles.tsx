import { color } from "@/styles/root";
import styled from "styled-components";


export const InputSearch = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  gap: .5rem;
  margin-bottom: 1rem;
  
  .input-search{
    width: 100%;
  }
  .btn-search{
    flex: none;
    width: 30px;
    height: 30px;
    background-color: ${color.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    i{
      font-size: .8rem;
    }
  }
`