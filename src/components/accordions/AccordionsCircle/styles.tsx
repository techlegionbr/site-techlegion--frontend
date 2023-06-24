import { color, font } from "@/styles/root";
import { type TModeTheme } from "@/styles/types";
import styled from "styled-components";

export const Accordions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

interface IAccordionProps {
  showDescription: boolean;
  modeTheme: TModeTheme;
}
export const Accordion = styled.div<IAccordionProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  .column-icon {
    height: 100%;
    .square-icon {
      width: 45px;
      height: 45px;
      background-color: ${({ modeTheme }) => modeTheme === "primary" ? "#171757" : "#111a37"};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${color.third};
      border: 1.2px solid #8594f547;
      font-size: 1.2rem;
    }
  }
  .accordion-content {
    border-radius: 0.6rem;
    background-color: ${({ modeTheme }) => modeTheme === "primary" ? "#171757" : "#111a37"};;
    border: 1.2px solid #8594f547;
    .title {
      padding: 0.6rem 1rem 0.6rem 1rem;
      height: 53px;
      display: flex;
      align-items: center;
      position: relative;
      .watch-more {
        position: absolute;
        display: inline-flex;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ showDescription }) =>
    showDescription ? color.third : '#18183a'};
        border: 1px solid #ffffff2c;
        color: ${color.primary};
        justify-content: center;
        align-items: center;
        right: 0.5rem;
        font-size: 1rem;
        transform: rotate(
          ${({ showDescription }) =>
    showDescription ? '180deg' : '0deg'}
        );
        transition: 0.2s;
        display: none;
      }
      h4 {
        color: ${({ showDescription }) =>
    !showDescription ? '#ffffffb1' : '#fff'};
        line-height: 1rem;
        user-select: none;
        transition: 0.2s;
      }
    }
    .description {
      overflow: hidden;
      padding: 0 1rem;
      height: ${({ showDescription }) =>
    !showDescription ? '0px' : '180px'};
      transition: 0.2s;
      p {
        margin-top: 0.5rem;
        font-size: calc(${font.size.sm} - .1rem);
        line-height: calc(${font.line_height.sm} - .1rem);
      }
    }
  }
`;