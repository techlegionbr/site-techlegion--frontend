
import { useRef } from "react"

import Image from "next/image"

import * as S from "./styles"

interface TypeLink {
  icon: React.ReactNode,
  href: string
}

interface TypeVolunteer {
  image: string,
  name: string,
  office: string,
  links: TypeLink[]
}

interface PropsCarousel {
  volunteers: TypeVolunteer[]
}

interface PropsCardVolunteers {
  volunteers: TypeVolunteer
}

const CardVolunteer = ({ volunteers }: PropsCardVolunteers): JSX.Element => {
  return (
    <S.CardVolunteer>
      <div className="profile-image">
        <Image src={volunteers.image} alt={volunteers.name} width={60} height={60} />
      </div>
      <h4>{volunteers.name}</h4>
      <h5>{volunteers.office}</h5>
      <nav>
        {
          volunteers.links.map((volunt, index) => (
            <a key={index} title={volunteers.name} href={volunt.href}>{volunt.icon}</a>
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
    if (carousel && direction === "left") {
      carousel.scrollLeft -= carousel.offsetWidth + gapItems
    }
    if (carousel && direction === "right") {
      carousel.scrollLeft += carousel.offsetWidth + gapItems
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