
import { useRef, useState } from "react"

import CardVolunteer from "@/components/CardVolunteer"
import { type TypeVolunteer } from "@/components/CardVolunteer/types"

import * as S from "./styles"

interface PropsCarousel {
  volunteers: TypeVolunteer[]
}

interface IBlockButtons {
  left: boolean,
  right: boolean
}


const CarouselVolunteers = ({ volunteers }: PropsCarousel): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [blockButtons, setBlockButtons] = useState<IBlockButtons>({
    left: false,
    right: false
  })
  const gapCarousel = 16 * 2

  const scrollerCarousel = (direction: "left" | "right"): void => {
    const { current: carouselElement } = carouselRef;
    if (!carouselElement) return;
    const offsetWidth = carouselElement.offsetWidth + gapCarousel;
    const { left: leftBlock, right: rightBlock } = blockButtons;

    const setBlockButtonsState = (left: boolean, right: boolean): void => {
      setBlockButtons(prevBlock => ({
        ...prevBlock,
        left,
        right
      }));
    };

    if (direction === "left" && !leftBlock) {
      carouselElement.scrollLeft -= offsetWidth;
      setBlockButtonsState(true, false);
      setTimeout(() => { setBlockButtonsState(false, false); }, 1000);
    } else if (direction === "right" && !rightBlock) {
      carouselElement.scrollLeft += offsetWidth;
      setBlockButtonsState(false, true);
      setTimeout(() => { setBlockButtonsState(false, false); }, 1000);
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