import imageBillGates from "@/assets/images/persons-profile/bill-gates-png.png"

import Image from "next/image"

import * as S from "./styles"

const StrikingPhrase = (): JSX.Element => {
  return (
    <S.StrikingPhrase>
      <div className="content">
        <i className='bx bxs-quote-left quate-icon' ></i>
        <p><i>{'"'}O Conteúdo é o rei.{'"'}</i></p>
        <div className="profile-author">
          <div className="image-author-01">
            <div className="image-author-02">
              <Image src={imageBillGates} alt="Bill Gates" width={70} height={70} />
            </div>
          </div>
          <article>
            <span className="name">Bill Gates</span>
            <span className="known-for">Co-fundador da Microsoft</span>
          </article>
        </div>
      </div>
    </S.StrikingPhrase>
  )
}

export default StrikingPhrase