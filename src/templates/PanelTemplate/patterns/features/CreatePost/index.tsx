

import { Controller } from "react-hook-form"

import imageLogo from "@/assets/images/logos/tech_legion_logo_lion_azul_escuro.png"
import { Alert } from "@/components/Alert"
import Button from "@/components/Button"
import { Form } from "@/components/Form"
import { HeadTemplate } from "@/components/HeadTemplate"
import useCreatePost from "@/hooks/form/creation/useCreatePost"
import TextEditor from "@/patterns/TextEditor"
import { color } from "@/styles/root"
import scrollToTop from "@/utils/layout/scrollToTop"

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"


const CreatePost = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { watch, formControl, isResetting, control, errors, alertNewEntitie: { entitie: entitieCreated, show: showAlertEntitie },
    setAlertNewEntitie,
    alertDefault } = useCreatePost()
  const { head: { description, title }, route: { name: routeName } } = watch()
  return (
    <>
      <CardFeatureStyled order={order}>
        <S.CreatePost>
          <h4>Criar um novo post</h4>
          <HeadTemplate.Title title={title} logoSite={{
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
            description={description}
            domain="techlegion.com.br"
            title={title}
            url="https://techlegion.com.br > blog"
            logoSite={{
              src: imageLogo.src,
              alt: "Logo Tech Legion"
            }}
          />
          <form {...formControl}>
            <Controller
              control={control}
              name="head.title"
              render={({ field }) => (
                <Form.Input
                  className="title-input"
                  label="Título"
                  error={!!errors.head?.title}
                  helperText={errors.head?.title?.message}
                  autoComplete="off"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="route.name"
              render={({ field }) => (
                <Form.Input
                  className="route-name-input"
                  label="Nome da rota"
                  error={!!errors.route?.name}
                  helperText={errors.route?.name?.message}
                  autoComplete="off"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="head.description"
              render={({ field }) => (
                <Form.Textarea
                  className="description-textarea"
                  label="Descrição"
                  error={!!errors.head?.description}
                  helperText={errors.head?.description?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="content.rawString"
              render={({ field: { onChange } }) => (
                <TextEditor
                  onChangeContentRawString={onChange}
                  reset={isResetting}
                  className="text-editor-conteiner"
                  helperText={errors.content?.rawString?.message}
                />
              )}
            />
            <Button size="medium" className="btn-create-post">Fazer Post</Button>
          </form>
        </S.CreatePost>
      </CardFeatureStyled>
      <Alert.Default
        show={alertDefault.show}
        onClose={alertDefault.onClose}
        iconLeft={
          alertDefault.status === "success" ?
            <i style={{ color: color.third }} className='bx bxs-check-circle' ></i> :
            <i style={{ color: color.danger }} className='bx bxs-x-circle'></i>}
        helperText={{
          main: alertDefault.helperText.main,
          sup: alertDefault.helperText.sup,
        }}
      />

      <Alert.NewEntitie.Root show={showAlertEntitie && Boolean(entitieCreated)}>
        {
          entitieCreated && (
            <>
              <Alert.NewEntitie.Field label="Título:" value={entitieCreated.title} />
              <Alert.NewEntitie.Field label="Nome da rota:" value={entitieCreated.nameRoute} />
              <Alert.NewEntitie.Button label="Ok" onAction={() => {
                scrollToTop()
                setAlertNewEntitie({ show: false, entitie: null });
              }} />
            </>
          )
        }
      </Alert.NewEntitie.Root>

    </>
  )
}

export default CreatePost