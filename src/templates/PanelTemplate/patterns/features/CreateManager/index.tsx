
import { Controller } from "react-hook-form"

import { Alert } from "@/components/Alert"
import Button from "@/components/Button"
import { Form } from "@/components/Form"
import useCreateManager from "@/hooks/form/creation/useCreateManager"
import { color } from "@/styles/root"

import CardFeatureStyled from "../../styles/CardFeature"
import { optionPermissionsManager } from "./settings"
import * as S from "./styles"

const CreateManager = ({ order = 0 }: { order?: number }): JSX.Element => {
  const {
    control,
    errors,
    formControl,
    alertNewEntitie: { entitie: entitieCreated, show: showAlertEntitie },
    setAlertNewEntitie,
    alertDefault,
    isResetting
  } = useCreateManager()

  return (
    <>
      <CardFeatureStyled order={order}>
        <S.CreateManager>
          <h4>Adicionar novo gestor</h4>
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
              render={({ field: { onChange } }) => (
                <Form.Checkboxes
                  id="checkboxes-permissions"
                  label="Permissões"
                  onChange={onChange}
                  defaultValues={[optionPermissionsManager[0].value]}
                  helperText={errors.permissions?.message}
                  error={!!errors.permissions}
                  options={optionPermissionsManager}
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
                  autoComplete="off"
                  label="Criação de posts *Limite Semanal"
                  id="input-weeklyPostCreationLimit"
                  error={!!errors.weeklyPostCreationLimit}
                  helperText={errors.weeklyPostCreationLimit?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="weeklyManagerCreationLimit"
              render={({ field }) => (
                <Form.Input
                  mask="99"
                  label="Adicionar gestores *Limite Semanal"
                  id="input-weeklyManagerCreationLimit"
                  autoComplete="off"
                  error={!!errors.weeklyManagerCreationLimit}
                  helperText={errors.weeklyManagerCreationLimit?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="weeklyEditorCreationLimit"
              render={({ field }) => (
                <Form.Input
                  mask="99"
                  autoComplete="off"
                  label="Adicionar redatores *Limite Semanal"
                  id="input-weeklyEditorCreationLimit"
                  error={!!errors.weeklyEditorCreationLimit}
                  helperText={errors.weeklyEditorCreationLimit?.message}
                  {...field}
                />
              )}
            />

            <Button className="btn-create-manager">Criar</Button>
          </form>
        </S.CreateManager>
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
export default CreateManager