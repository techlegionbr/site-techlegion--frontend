import { Controller } from "react-hook-form"

import { Alert } from "@/components/Alert"
import Button from "@/components/Button"
import { Form } from "@/components/Form"
import useCreateManager from "@/hooks/form/creation/useCreateManager"

import CardFeatureStyled from "../../styles/CardFeature"
import { optionPermissionsManager } from "./settings"
import * as S from "./styles"

const CreateManager = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { control, errors, formControl, register } = useCreateManager()
  return (
    <>
      <CardFeatureStyled order={order}>
        <S.CreateManager>
          <h4>Adicionar novo gestor</h4>
          <form {...formControl}>
            <div className="form-top">
              <Form.Input
                label="Nome"
                id="input-name"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name")}
              />
              <Form.Input
                label="Email"
                id="input-email"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />
              <Controller
                control={control}
                name="permissions"
                render={({ field }) => (
                  <Form.Checkboxes
                    id="checkboxes-permissions"
                    label="Permissões"
                    onChange={field.onChange}
                    defaultValues={[optionPermissionsManager[0].value]}
                    helperText={errors.permissions?.message}
                    error={!!errors.permissions}
                    options={optionPermissionsManager}
                  />
                )}
              />
            </div>
            <div className="form-footer">
              <Form.Input
                mask="99"
                label="Criação de posts *Limite Semanal"
                className="input-form-footer"
                error={!!errors.weeklyPostCreationLimit}
                helperText={errors.weeklyPostCreationLimit?.message}
                {...register("weeklyPostCreationLimit")}
              />
              <Form.Input
                mask="99"
                label="Adicionar gestores *Limite Semanal"
                className="input-form-footer"
                error={!!errors.weeklyManagerCreationLimit}
                helperText={errors.weeklyManagerCreationLimit?.message}
                {...register("weeklyManagerCreationLimit")}
              />
              <Form.Input
                mask="99"
                label="Adicionar redatores *Limite Semanal"
                className="input-form-footer"
                error={!!errors.weeklyEditorCreationLimit}
                helperText={errors.weeklyEditorCreationLimit?.message}
                {...register("weeklyEditorCreationLimit")}
              />
            </div>
            <Button className="btn-create-manager">Criar</Button>
          </form>
        </S.CreateManager>
      </CardFeatureStyled>
      <Alert.NewEntitie
        entitie={{
          email: "augustoc.westphal@gmail.com",
          name: "Augusto Caetano Westphal",
          passowrd: "senhateste",
          profile: "https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/jonathancooperparkwalk/images/view/b3ee60c8bf39f4977370dfa065648fe9j/jonathancooper-gary-stinton-study-of-african-lion-s-profile.jpg"
        }}
        show
      />
    </>
  )
}
export default CreateManager