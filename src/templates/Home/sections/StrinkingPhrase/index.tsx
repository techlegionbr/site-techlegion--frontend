import imageBillGates from "@/assets/images/persons-profile/bill-gates-02-original.webp"

import Image from "next/image"

import * as S from "./styles"

const StrikingPhrase = (): JSX.Element => {
  return (
    <S.StrikingPhrase>
      <div className="content">
        <i className='bx bxs-quote-left quate-icon' ></i>
        <p><i>{'"'}O Conteúdo é o rei.{'"'}</i></p>
        <div className="profile-author">
          <div className="image-author">
            <Image src={imageBillGates} alt="Bill Gates" width={200} />
          </div>
          <small>Bill Gates</small>
        </div>
      </div>
    </S.StrikingPhrase>
  )
}

export default StrikingPhrase