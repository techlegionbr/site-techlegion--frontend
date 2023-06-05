
import { useRef } from "react"

import CardVolunteer from "@/components/CardVolunteer"
import { type TypeVolunteer } from "@/components/CardVolunteer/types"


import * as S from "./styles"


interface PropsCarousel {
  volunteers: TypeVolunteer[]
}


const CarouselVolunteers = ({ volunteers }: PropsCarousel): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollerCarousel = (direction: "left" | "right"): void => {
    const { current: carousel } = carouselRef
    const gapItems = (16 * 2) // 1rem === 16px
    if (carousel) {
      const { offsetWidth, scrollLeft } = carousel
      carousel.scrollLeft = direction === "left" ?
        (scrollLeft - offsetWidth) - gapItems :
        (scrollLeft + offsetWidth) + gapItems
    }
  }

  return (
    <S.CarouselVolunteers>
      <button className="controller controller-left" onClick={() => { scrollerCarousel("left"); }}><i className='bx bxs-left-arrow' ></i></button>
      <button className="controller controller-right" onClick={() => { scrollerCarousel("right"); }}><i className='bx bxs-right-arrow' ></i></button>
      <div className="content-carousel" ref={carouselRef}>
        {
          volunteers.map((volunt, index) => (
            <CardVolunteer key={index} volunteer={volunt} />
          ))
        }
      </div>
    </S.CarouselVolunteers>
  )
}

export default CarouselVolunteers