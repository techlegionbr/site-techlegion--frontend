import * as S from "./styles"

interface ISectionDividerProps {
  bgColor: "primary" | "bluishGray"
}

const SectionDivider = ({ bgColor }: ISectionDividerProps): JSX.Element => {
  return (
    <S.SectionDivider bgColor={bgColor}>
      <div className="content">
        <h2>Tech Legion</h2>
        <p>Uma <strong>Legião de profissionais</strong> ao seu lado, impulsionando sua empresa com <strong>soluções tecnológicas inovadoras</strong>.</p>
      </div>
    </S.SectionDivider>
  )
}

export default SectionDivider