

import * as S from "./styles"

interface ISectionDividerProps {
  bgColor: "primary" | "bluishGray"
}

const SectionDivider = ({ bgColor }: ISectionDividerProps): JSX.Element => {
  return (
    <S.SectionDivider bgColor={bgColor}>
      <div className="content">
        <h2>Uma Legião de <span>Excelência<i className='bx bxs-crown icon-crown'></i></span></h2>
        <p>Com um <strong>time de profissionais</strong> altamente capacitados ao seu lado, sua empresa será impulsionada com <strong>soluções tecnológicas inovadoras</strong> e de <strong>excelência</strong>.</p>
      </div>
    </S.SectionDivider>
  )
}

export default SectionDivider