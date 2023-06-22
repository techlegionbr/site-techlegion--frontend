import { Controller } from "react-hook-form"

import Button from "@/components/Button"
import Checkboxes from "@/components/form/Checkboxes"
import Input from "@/components/form/Input"
import useCreateManager from "@/hooks/form/creation/useCreateManager"

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const CreateManager = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { control, errors, formControl, register } = useCreateManager()
  return (
    <CardFeatureStyled order={order}>
      <S.CreateManager>
        <h4>Adicionar novo gestor</h4>
        <form {...formControl}>
          <div className="form-top">
            <Input
              label="Nome"
              id="input-name"
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <Input
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
                <Checkboxes
                  id="permissions"
                  label="Permissões"
                  onChange={field.onChange}
                  defaultValues={["seePainel"]}
                  helperText={errors.permissions?.message}
                  error={!!errors.permissions}
                  options={[
                    {
                      label: "Visualizar painel",
                      value: "createPost"
                    },
                    {
                      label: "Adicionar redatores",
                      value: "managePost"
                    },
                  ]}
                />
              )}
            />
          </div>
          <div className="form-footer">
            <Input
              type="number"
              label="Criação de posts *Limite Semanal"
              className="input-form-footer"
              error={!!errors.weeklyPostCreationLimit}
              helperText={errors.weeklyPostCreationLimit?.message}
              {...register("weeklyPostCreationLimit")}
            />
            <Input
              type="number"
              label="Adicionar gestores *Limite Semanal"
              className="input-form-footer"
              error={!!errors.weeklyManagerCreationLimit}
              helperText={errors.weeklyManagerCreationLimit?.message}
              {...register("weeklyManagerCreationLimit")}
            />
            <Input
              type="number"
              label="Adicionar redatores *Limite Semanal"
              className="input-form-footer"
              error={!!errors.weeklyEditorCreationLimit}
              helperText={errors.weeklyEditorCreationLimit?.message}
              {...register("weeklyEditorCreationLimit")}
            />
          </div>
          <Button className="btn-create-manager">Criar</Button>
        </form>
        <p>Ola</p>
        <p>Ola</p>
        <p>Ola</p>
        <p>Ola</p>
      </S.CreateManager>
    </CardFeatureStyled>
  )
}

export default CreateManager