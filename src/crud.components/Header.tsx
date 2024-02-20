import { faPlus, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";
import Button from "./Button";

export default function Header({ classWrapper = "" }: any) {
    return (
        <div
            className={cls(
                "relative bg-[--c3-bg] p-4 rounded-lg w-full overflow-hidden border border-black/20 border-t-4 border-t-[--c1-bg]  shadow-xl",
                classWrapper
            )}
        >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-2 w-full">
                <div className="flex items-center gap-1 text-[--c1-bg]">
                    <FontAwesomeIcon icon={faUsers} />
                    <h4 className="text-xl font-mono font-bold">Usuarios</h4>
                </div>
                <div className="flex-1 flex items-center w-full lg:max-w-96 bg-white rounded-md py-2 px-3 shadow-sm">
                    <input type="text" placeholder="Buscar.." className="flex-1 outline-none" />
                    <FontAwesomeIcon icon={faSearch} className="" />
                </div>
                <Button icon={faPlus} text="Agregar" theme="success" />
            </div>
        </div>
    );
}
