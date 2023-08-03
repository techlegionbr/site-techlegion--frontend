import { color } from "@/styles/root";
import styled from "styled-components";


interface IDropDownMenuProps {
  width?: number
}

export const DropDownMenu = styled.div<IDropDownMenuProps>`
  position: relative;
  display: inline-flex;
  .btn-open-dropdown{
    ${({ width }) => width ? `
      width: ${width}px;
    ` : ""}
    
    padding: .5rem .8rem;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: .4rem;
    transition: .2s;
    border-radius: .2rem;
    font-size: .9rem;
    span{
      all: unset;
    }
    &:hover{
      background-color: #f1f1f1;
    }
  }
  .option-selected-active{
    color: ${color.secondary};
    background-color: #6969f013;
    &:hover{
      background-color: #6969f013;
    }
  }
  .options-to-select{
    position: absolute;
    z-index: 2;
    top: calc(100% - .1rem);
    left: .2rem;
    background-color: #fff;
    box-shadow: 1px 1px 10px #0000001a;
    border-radius: .3rem;
    padding: .5rem 0;
    min-width: 100%;
    li{
      width: 100%;
      padding: .4rem 1rem;
      font-size: .9rem;
      cursor: pointer;
      transition: .2s;
      white-space: nowrap;
      &:hover{
        background-color: #f1f1f1;
      }
    }
    .option-selected-active-list{
      background-color: ${color.secondary};
      color: ${color.light};
      &:hover{
        background-color: ${color.secondary};
      }
    }
  }
`