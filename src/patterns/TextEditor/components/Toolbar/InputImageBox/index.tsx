
import { type ChangeEvent } from "react"

import TitleItem from "@/components/TitleItem"
import { v4 as uuidV4 } from "uuid"

import * as S from "./styles"

interface IInputImageBoxProps {
  onChange?: (image: File | null) => void,
  title?: string
}

const InputImageBox = ({ onChange, title }: IInputImageBoxProps): JSX.Element => {
  const id = uuidV4()

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const files = event.target.files
    const selectedImageFile = files ? files[0] : null
    if (onChange) {
      onChange(selectedImageFile)
    }
  }

  return (
    <TitleItem title={title}>
      <S.InputImageBox>
        <label htmlFor={id}><i className='bx bxs-image' ></i></label>
        <input id={id} type="file" accept="image/*" onChange={handleImageChange} />
      </S.InputImageBox>
    </TitleItem>

  )
}

export default InputImageBox