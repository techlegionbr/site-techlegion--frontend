import imageAugusto from "@/assets/images/persons-profile/augusto.webp"
import imageEmanuel from "@/assets/images/persons-profile/emanuel.webp"
import imageItalo from "@/assets/images/persons-profile/italo.webp"
import { type TypeVolunteer } from "@/patterns/CarouselVolunteers/components/CardVolunteer/types"
const volunteers: TypeVolunteer[] = [
  {
    name: "Augusto Westphal",
    image: imageAugusto.src,
    office: "Desenvolvedor Full-Stack",
    links: [
      {
        icon: <i className='bx bxl-github'></i>,
        href: "https://github.com/AugustoGitH"
      },
      {
        icon: <i className='bx bxl-linkedin'></i>,
        href: "https://www.linkedin.com/in/augusto-westphal/"
      },
    ]
  },
  {
    name: "Emanuel Rocha",
    image: imageEmanuel.src,
    office: "Desenvolvedor Full-Stack ",
    links: [
      {
        icon: <i className='bx bxl-github'></i>,
        href: "https://www.linkedin.com/in/emanuel-akuma/"
      },
      {
        icon: <i className='bx bxl-linkedin'></i>,
        href: "https://github.com/EmanuelAkumaA"
      },
    ]
  },
  {
    name: "Italo Oliveira",
    image: imageItalo.src,
    office: "Desenvolvedor Full-Stack ",
    links: [
      {
        icon: <i className='bx bxl-github'></i>,
        href: "https://www.linkedin.com/in/camilo-italo/"
      },
      {
        icon: <i className='bx bxl-linkedin'></i>,
        href: "https://github.com/Alpha19i"
      },
    ]
  }
]

export default volunteers