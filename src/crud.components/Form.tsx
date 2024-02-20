import { faCancel, faFileWord, faSave } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form({ children, onSubmit, onClickCancel }: any) {
    return (
        <SectionContainer>
            <div className="flex items-center gap-1 text-[--c1-bg]">
                <FontAwesomeIcon icon={faFileWord} />
                <h4 className="text-xl font-mono font-bold">Formulario</h4>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
                {children}
                <div className="lg:col-span-2 flex justify-center gap-2 mt-5">
                    <Button type="submit" text="Guardar" icon={faSave} />
                    <Button
                        type="button"
                        text="Cancelar"
                        icon={faCancel}
                        theme="cancel"
                        onClick={onClickCancel}
                    />
                </div>
            </form>
        </SectionContainer>
    );
}
