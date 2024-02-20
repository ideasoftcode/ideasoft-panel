import { cls } from "../lib/utils";
import { faCheck, faEye, faEyeSlash, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CrudButton from "./CrudButton";

type InputTextTypes = WrapperTypes & {
    name: string;
    placeholder?: string;
};
export function InputText({ name, placeholder = "", title, cols = "1" }: InputTextTypes) {
    return (
        <Wrapper title={title} cols={cols}>
            <input
                name={name}
                placeholder={placeholder}
                className="w-full outline-none text-lg py-1 px-5 rounded-sm"
            />
        </Wrapper>
    );
}

type InputRadioTypes = WrapperTypes & {
    options: { text: string; value: string; checked?: boolean }[];
    name: string;
};
export function InputRadio({ cols = 1, title, options = [], ...props }: InputRadioTypes) {
    return (
        <Wrapper title={title} cols={cols}>
            <div className="flex gap-2 h-full">
                {options.map((item: any) => (
                    <label
                        key={item.value}
                        className="relative flex-1 h-full cursor-pointer select-none"
                    >
                        <input
                            className="hidden [&:checked~div]:w-full [&:checked~span>svg]:w-4 [&:checked~span>svg]:h-4 [&:checked~span]:text-[#2c74dc]"
                            type="radio"
                            value={item.value}
                            defaultChecked={item.checked ? true : false}
                            {...props}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2 h-full">
                            {item.text}
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-[#2c74dc] w-0 h-0 transition-all duration-200"
                            />
                        </span>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-[width] duration-200 bg-[#2c74dc]" />
                    </label>
                ))}
            </div>
        </Wrapper>
    );
}
type InputPasswordTypes = WrapperTypes & {
    name: string;
    placeholder?: string;
};

export function InputPassword({
    name,
    title,
    placeholder = "Ingresa tu contraseña",
    cols = 1,
}: InputPasswordTypes) {
    const [showPass, setShowPass] = useState(false);
    return (
        <Wrapper title={title} cols={cols} withBackground={false}>
            <div className="flex flex-row h-full inputpass gap-2">
                <input
                    name={name}
                    type={showPass ? "password" : "text"}
                    placeholder={placeholder}
                    className="w-full h-full outline-none text-lg py-1 px-5 rounded-sm"
                />
                <CrudButton
                    type="button"
                    theme="info"
                    classWrapper="rounded-sm"
                    scaleHover={false}
                    onClick={() => setShowPass(!showPass)}
                    icon={showPass ? faEye : faEyeSlash}
                />
            </div>
        </Wrapper>
    );
}

type InputSelectTypes = WrapperTypes & {
    name: string;
    placeholder?: string;
    options: { text: string; value: string }[];
};
export function InputSelect({
    title,
    name,
    placeholder = "Selecciona una opción",
    cols = "1",
    options = [],
}: InputSelectTypes) {
    return (
        <Wrapper title={title} cols={cols}>
            <select name={name} className="w-full h-full outline-none pl-4">
                <option value="">{placeholder}</option>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </Wrapper>
    );
}
type InputTextareaTypes = WrapperTypes & {
    name: string;
    placeholder?: string;
    classInput?: string;
};
export function InputTextarea({
    title,
    name,
    placeholder = "Escribe algo..",
    cols = "1",
    classInput = "",
}: InputTextareaTypes) {
    return (
        <Wrapper title={title} cols={cols}>
            <textarea
                name={name}
                placeholder={placeholder}
                className={cls("w-full min-h-full outline-none p-2", classInput)}
            />
        </Wrapper>
    );
}

type InputFileTypes = WrapperTypes & {
    name: string;
    placeholder?: string;
    accept?: string;
};
export function InputFile({
    title,
    name,
    placeholder = "Seleccionar",
    accept = "",
    cols = "1",
}: InputFileTypes) {
    return (
        <Wrapper title={title} cols={cols}>
            <label className="relative flex  items-center w-full h-full gap-1 pl-2 cursor-pointer">
                <input type="file" className="cursor-pointer" accept={accept} name={name} />
                <div className="absolute left-0 flex w-[160px] h-full bg-[#2c74dc] text-white text-sm items-center gap-1 px-2 rounded-sm">
                    <FontAwesomeIcon icon={faFile} className="w-5 h-5" />
                    <span className="flex items-center w-full h-full">{placeholder}</span>
                </div>
            </label>
        </Wrapper>
    );
}

type WrapperTypes = {
    title: string;
    cols?: 1 | 2 | "1" | "2";
};
type WrapperTypesMore = WrapperTypes & {
    children: any;
    withBackground?: boolean;
};
function Wrapper({ children, title, withBackground = true, cols = 1 }: WrapperTypesMore) {
    return (
        <div
            className={cls("flex flex-col gap-1 w-full", {
                "lg:col-span-2": cols == 2,
            })}
        >
            <h3 className="font-semibold">{title}</h3>
            <div
                className={cls("min-h-10 border-black/20 rounded-sm overflow-hidden", {
                    "bg-white": withBackground,
                })}
            >
                {children}
            </div>
        </div>
    );
}
