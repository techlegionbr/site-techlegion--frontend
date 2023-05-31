
import { useRef } from "react"

import Image from "next/image"

import * as S from "./styles"
import { type TypeVolunteer } from "./types"


interface PropsCarousel {
  volunteers: TypeVolunteer[]
}

interface PropsCardVolunteers {
  volunteers: TypeVolunteer
}

const CardVolunteer = ({ volunteers }: PropsCardVolunteers): JSX.Element => {
  const { image, links, name, office } = volunteers
  return (
    <S.CardVolunteer>
      <div className="profile-image">
        <Image src={image} alt={name} width={60} height={60} />
      </div>
      <h4>{name}</h4>
      <h5>{office}</h5>
      <nav>
        {
          links.map((volunt, index) => (
            <a key={index} title={name} href={volunt.href}>{volunt.icon}</a>
          ))
        }
      </nav>
    </S.CardVolunteer>
  )
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
            <CardVolunteer key={index} volunteers={volunt} />
          ))
        }
      </div>
    </S.CarouselVolunteers>
  )
}

export default CarouselVolunteers