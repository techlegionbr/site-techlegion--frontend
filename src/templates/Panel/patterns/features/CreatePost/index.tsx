

import { Controller } from "react-hook-form"

import imageLogo from "@/assets/images/logos/tech_legion_logo_lion_azul_escuro.png"
import Button from "@/components/Button"
import { Form } from "@/components/Form"
import { HeadTemplate } from "@/components/HeadTemplate"
import useCreatePost from "@/hooks/form/creation/useCreatePost"
import TextEditor from "@/patterns/TextEditor"

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"


const CreatePost = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { watch, formControl, isResetting, control, errors } = useCreatePost()
  const { metaDescription, metaTitle, routeName } = watch()
  return (
    <CardFeatureStyled order={order}>
      <S.CreatePost>
        <h4>Criar um novo post</h4>
        <HeadTemplate.Title title={metaTitle} logoSite={{
          src: imageLogo.src,
          alt: "Logo Tech Legion"
        }} />
        <HeadTemplate.Url
          className="url-template"
          domain="techlegion.com.br"
          router={{
            main: `${routeName}`,
            baseUrl: "blog/post"
          }}
        />
        <HeadTemplate.Description
          description={metaDescription}
          domain="techlegion.com.br"
          title={metaTitle}
          url="https://techlegion.com.br > blog"
          logoSite={{
            src: imageLogo.src,
            alt: "Logo Tech Legion"
          }}
        />
        <form {...formControl}>
          <Controller
            control={control}
            name="metaTitle"
            render={({ field }) => (
              <Form.Input
                className="title-input"
                label="Título"
                error={!!errors.metaTitle}
                helperText={errors.metaTitle?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="routeName"
            render={({ field }) => (
              <Form.Input
                className="route-name-input"
                label="Nome da rota"
                error={!!errors.routeName}
                helperText={errors.routeName?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="metaDescription"
            render={({ field }) => (
              <Form.Textarea
                className="description-textarea"
                label="Descrição"
                error={!!errors.metaDescription}
                helperText={errors.metaDescription?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="postHTML"
            render={({ field: { onChange } }) => (
              <TextEditor
                className="text-editor-conteiner"
                reset={isResetting}
                onChangeHTML={onChange}
                helperText={errors.postHTML?.message}
              />
            )}
          />
          <Button size="medium" className="btn-create-post">Fazer Post</Button>
        </form>
      </S.CreatePost>
    </CardFeatureStyled>
  )
}

export default CreatePost