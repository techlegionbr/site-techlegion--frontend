import { Controller } from "react-hook-form";

import { Alert } from "@/components/Alert";
import Button from "@/components/Button";
import { Form } from "@/components/Form";
import useCreateEditor from "@/hooks/form/creation/useCreateEditor";
import { color } from "@/styles/root";

import CardFeatureStyled from "../../styles/CardFeature";
import { optionPermissionsEditor } from "./settings";
import * as S from "./styles"


const CreateEditor = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { control, errors, formControl, alertDefault, alertNewEntitie: { show: showAlertEntitie, entitie: entitieCreated }, isResetting, setAlertNewEntitie } = useCreateEditor()

  return (
    <>
      <CardFeatureStyled order={order}>
        <S.CreateEditor>
          <h4>Adicionar novo redator</h4>
          <form {...formControl}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Form.Input
                  label="Nome"
                  id="input-name"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Form.Input
                  label="Email"
                  id="input-email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="whatsapp"
              render={({ field }) => (
                <Form.Input
                  mask={"(99) 99999-9999"}
                  placeholder="Ex: (99) 99999-9999"
                  label="Whatsapp"
                  id="input-whatsapp"
                  error={!!errors.whatsapp}
                  helperText={errors.whatsapp?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="permissions"
              render={({ field }) => (
                <Form.Checkboxes
                  id="checkboxes-permissions"
                  label="Permissões"
                  onChange={field.onChange}
                  defaultValues={[optionPermissionsEditor[0].value]}
                  options={optionPermissionsEditor}
                  error={!!errors.permissions}
                  helperText={errors.permissions?.message}
                  reset={isResetting}
                />
              )}
            />
            <Controller
              control={control}
              name="weeklyPostCreationLimit"
              render={({ field }) => (
                <Form.Input
                  mask="99"
                  label="Criação de posts *Limite Semanal"
                  id="input-weeklyPostCreationLimit"
                  error={!!errors.weeklyPostCreationLimit}
                  helperText={errors.weeklyPostCreationLimit?.message}
                  {...field}
                />
              )}
            />

            <Button className="btn-create-editor">Criar</Button>
          </form>
        </S.CreateEditor>
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
              <Alert.NewEntitie.Profile alt={entitieCreated.name} src={entitieCreated.profile} />
              <Alert.NewEntitie.Field label="Nome:" value={entitieCreated.name} />
              <Alert.NewEntitie.Field label="Email:" value={entitieCreated.email} />
              <Alert.NewEntitie.Field label="Senha:" value={entitieCreated.password} />
              <Alert.NewEntitie.Button label="Ok" onAction={() => {
                setAlertNewEntitie({ show: false, entitie: null });
              }} />
            </>
          )
        }
      </Alert.NewEntitie.Root>
    </>
  )
}

export default CreateEditor