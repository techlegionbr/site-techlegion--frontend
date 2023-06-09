import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Benefits = styled.div`
  width: 100%;
  background: ${color.primary};
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  
  .content{
    width: ${layout.contentWidth};
  }
`



export const AccordionsBenefitService = styled.div`
      margin-top: 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      gap: 2rem;
`

interface PropsCardBenefitService {
  showDescription: "true" | "false"
}
export const CardBenefitService = styled.div<PropsCardBenefitService>`
        display: flex;
        align-items: flex-start;
        gap: .5rem;
        cursor: pointer;
        .column-icon{
          height: 100%;
          .square-icon{
            width: 45px;
            height: 45px;
            background-color: #171757;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: ${color.third};
            border: 1.2px solid #8594f547;
            font-size: 1.2rem;
          }
        }
        .benefit-content{
          border-radius: .6rem;
          background-color: #171757;
            border: 1.2px solid #8594f547;
          .title-benefit{
            padding: .6rem 1rem .6rem 1rem;
            height: 53px;
            display: flex;
            align-items: center;
            position: relative;
            .watch-more{
              position: absolute;
              display: inline-flex;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: ${({ showDescription }) => showDescription === "true" ? color.third : "#18183a"};
              border: 1px solid #ffffff2c;
              color: ${color.primary};
              justify-content: center;
              align-items: center;
              right: .5rem;
              font-size: 1rem;
              transform: rotate(${({ showDescription }) => showDescription === "true" ? "180deg" : "0deg"});
              transition: .2s;
              display: none;
            }
            h4{
              color: ${({ showDescription }) => showDescription === "false" ? "#ffffffb1" : "#fff"};
              line-height: 1rem;
              user-select: none;
              transition: .2s;
            }
          }
          .description-benefit{
            overflow: hidden;
            padding: 0 1rem;
            height: ${({ showDescription }) => showDescription === "false" ? "0px" : "180px"};
            transition: .2s;
            p{
              margin-top: .5rem;
              b{
                color: ${color.third}
              }
            }
          }
        }
`
