
import imageTeste from "@/assets/images/persons-profile/Leonardo-Ferraz.jpg"
import TitleSection from "@/components/TitleSection"
import Carousel from "@/patterns/CarouselVolunteers"

import * as S from "./styles"


const Volunteers = (): JSX.Element => {
  return (
    <S.Volunteers>
      <div className="content">
        <TitleSection
          subTitle="Voluntários"
          title="Nossa Legião"
        />
        <div className="carouse-volunteers">
          <Carousel volunteers={[
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                },
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                },
              ]
            },
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                }
              ]
            },
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                }
              ]
            },
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                }
              ]
            },
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                }
              ]
            },
            {
              name: "Leonardo Ferraz",
              image: imageTeste.src,
              office: "Desenvolvedor Full-Stack",
              links: [
                {
                  icon: <i className='bx bxl-github'></i>,
                  href: "/"
                }
              ]
            },
          ]} />
        </div>
      </div>
    </S.Volunteers>
  )
}

export default Volunteers