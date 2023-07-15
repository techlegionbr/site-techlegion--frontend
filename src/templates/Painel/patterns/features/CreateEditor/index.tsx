import { Controller } from "react-hook-form";

import Button from "@/components/Button";
import { Form } from "@/components/Form";
import useCreateEditor from "@/hooks/form/creation/useCreateEditor";

import CardFeatureStyled from "../../styles/CardFeature";
import { optionPermissionsEditor } from "./settings";
import * as S from "./styles"


const CreateEditor = ({ order = 0 }: { order?: number }): JSX.Element => {
  const { control, errors, formControl, register } = useCreateEditor()

  return (
    <CardFeatureStyled order={order}>
      <S.CreateEditor>
        <h4>Adicionar novo redator</h4>
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
                  defaultValues={[optionPermissionsEditor[0].value]}
                  options={optionPermissionsEditor}
                  error={!!errors.permissions}
                  helperText={errors.permissions?.message}
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
          </div>
          <Button className="btn-create-manager">Criar</Button>
        </form>
      </S.CreateEditor>
    </CardFeatureStyled>
  )
}

export default CreateEditor