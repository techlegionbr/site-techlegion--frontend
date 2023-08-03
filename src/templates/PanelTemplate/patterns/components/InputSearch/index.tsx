import { Form } from "@/components/Form"

import * as S from "./styles"

interface InputSearchProps {

}

const InputSearch = ({ }: InputSearchProps): JSX.Element => {
  return (
    <S.InputSearch>
      <Form.Input className="input-search" />
      <button className="btn-search"><i className='bx bxs-search-alt-2'></i></button>
    </S.InputSearch>
  )
}
export default InputSearch