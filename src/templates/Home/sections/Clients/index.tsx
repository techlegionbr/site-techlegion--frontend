
import { useEffect, useRef } from "react"

import TitleSection from "@/components/TitleSection"

import * as S from "./styles"

const Clients = (): JSX.Element => {
  const carouselRef = useRef<HTMLUListElement | null>(null)

  const scrollerLooping = (): void => {
    const { current: carousel } = carouselRef
    if (carousel) {

      setInterval(() => {
        const { scrollLeft } = carousel
        carousel.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        })
      }, 100)
    }
  }

  useEffect(() => {
    scrollerLooping()
  }, [])

  return (
    <S.Clients>
      <div className="content">
        <TitleSection
          title="Nossos Clientes"
          subTitle="Acreditaram em nossa Legião "
        />
        <ul className="logo-client-list" ref={carouselRef}>
          <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          <li><a>4</a></li>
          <li><a>5</a></li>
          <li><a>6</a></li>
          <li><a>7</a></li>
          <li><a>8</a></li>
          <li><a>9</a></li>
          <li><a>10</a></li>
        </ul>
      </div>
    </S.Clients>
  )
}

export default Clients