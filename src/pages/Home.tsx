import CrudForm from "../crud.components/CrudForm";
import CrudHeader from "../crud.components/CrudHeader";
import {
    InputFile,
    InputPassword,
    InputRadio,
    InputSelect,
    InputText,
    InputTextarea,
} from "../crud.components/CrudInputs";
import CrudTable from "../crud.components/CrudTable";

export default function Home() {
    return (
        <>
            <CrudHeader />
            <CrudTable />
            <CrudForm>
                <InputRadio
                    title="Genero"
                    name="genero"
                    options={[
                        { text: "Masculino", value: "Masculino", checked: true },
                        { text: "Femenino", value: "Femenino" },
                    ]}
                />
                <InputPassword title="Contraseña" name="password" />
                <InputSelect
                    title="Pais"
                    name="pais"
                    options={[
                        { text: "Mexico", value: "Mexico" },
                        { text: "Colombia", value: "Colombia" },
                        { text: "Argentina", value: "Argentina" },
                    ]}
                />
                <InputText title="Nombre" name="name" placeholder="Escribe tu Nombre" />
                <InputTextarea title="Descripcion" name="descripcion" classInput="min-h-20" />
                <InputFile
                    title="Foto"
                    name="foto"
                    placeholder="Selecciona una foto"
                    accept="image/*"
                />
            </CrudForm>
        </>
    );
}
