import { Controller } from "react-hook-form";

import Button from "@/components/Button";
import Checkboxes from "@/components/form/Checkboxes";
import Input from "@/components/form/Input";
import useCreateEditor from "@/hooks/form/creation/useCreateEditor";

import CardFeatureStyled from "../../styles/CardFeature";
import * as S from "./styles"


const CreateEditor = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { control, errors, formControl, register } = useCreateEditor()

  return (
    <CardFeatureStyled order={order}>
      <S.CreateEditor>
        <h4>Adicionar novo redator</h4>
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
                  options={[
                    {
                      label: "Visualizar painel",
                      value: "seePainel"
                    },
                    {
                      label: "Adicionar redatores",
                      value: "createUser"
                    },
                  ]}
                  error={!!errors.permissions}
                  helperText={errors.permissions?.message}
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
          </div>
          <Button className="btn-create-manager">Criar</Button>
        </form>
      </S.CreateEditor>
    </CardFeatureStyled>
  )
}

export default CreateEditor