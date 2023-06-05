import TitleSection from "@/components/TitleSection"
import Carousel from "@/patterns/CarouselVolunteers"

import * as S from "./styles"
import volunteers from "./volunteers"


const Volunteers = (): JSX.Element => {
  return (
    <S.Volunteers>
      <div className="content">
        <TitleSection
          subTitle="Voluntários"
          title="Nossa Legião"
        />
        <div className="carousel-volunteers">
          <Carousel volunteers={volunteers} />
        </div>
      </div>
    </S.Volunteers>
  )
}

export default Volunteers