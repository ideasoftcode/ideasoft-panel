import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

type HeaderProps = {
    children: any;
    togleOpen: () => void;
    className?: string;
    isOpen?: boolean;
    src?: string;
    title?: string;
    username?: string;
};
export default function Header({
    children,
    className = "",
    isOpen = true,
    togleOpen,
    src = "",
    title = "Ideasoft Panel",
    username = "",
}: HeaderProps) {
    return (
        <>
            <header
                className={cls(
                    "sticky z-40 top-0 col-span-2 flex justify-between h-[--header-h] min-h-[--header-h] bg-[--c1-bg]",
                    className
                )}
                style={{
                    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.4)",
                }}
            >
                <div className="flex">
                    <div
                        className={cls(
                            "relative flex justify-center items-center w-[--sidebar-w] max-w-full h-full bg-[--c1-bg] text-[--c2-txt] overflow-hidden",
                            "transition-[max-width] duration-100",
                            {
                                "md:max-w-[--sidebar-w-close]": !isOpen,
                                "max-w-0": !isOpen,
                            }
                        )}
                    >
                        <div className="absolute z-10 inset-0 bg-black/10" />
                        <h1 className="relative z-10 block text-nowrap text-ellipsis overflow-hidden text-base md:text-xl px-1">
                            {title}
                        </h1>
                    </div>
                    <button
                        className="group/button relative flex justify-center items-center h-full aspect-square outline-none"
                        onClick={togleOpen}
                    >
                        <div className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 opacity-0 rounded-full bg-black/10 group-hover/button:w-full transition-[width,height,opacity,rounded] duration-200 group-hover/button:h-full group-hover/button:opacity-100 group-hover/button:rounded-sm" />
                        <FontAwesomeIcon icon={faBars} className="text-lg text-[--c1-txt]" />
                    </button>
                </div>
                <Options headerIsOpen={isOpen} src={src} username={username}>
                    {children}
                </Options>
            </header>
        </>
    );
}

function Options({ children, headerIsOpen, src, username }: any) {
    let _username = username.split(" ");
    if (_username.length > 2) _username = _username.slice(0, 2).join(" ") + "...";
    else _username = _username.join(" ");
    const [isOpen, setIsOpen] = useState(false);
    const optionsRef: any = useRef(null);
    document.addEventListener("click", (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) setIsOpen(false);
    });
    return (
        <div className="relative flex sm:mr-2" ref={optionsRef}>
            <div className="h-full">
                <button
                    className="group/button relative flex items-center gap-2 h-full text-[--c1-txt] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 opacity-0 rounded-full bg-black/10 group-hover/button:w-full transition-[width,height,opacity,rounded] duration-200 group-hover/button:h-full group-hover/button:opacity-100 group-hover/button:rounded-sm" />
                    <h3
                        className={cls(
                            "text-base text-nowrap overflow-hidden transition-all duration-200 delay-200",
                            {
                                "w-0 sm:w-auto": headerIsOpen,
                            }
                        )}
                    >
                        {_username}
                    </h3>
                    <div className="h-full aspect-square rounded-full overflow-hidden ">
                        <img src={src} className="w-full h-full object-cover" />
                    </div>
                </button>
            </div>

            <div
                className={cls(
                    "absolute z-20 top-full right-0 flex flex-col w-dvw max-w-48 bg-[--c2-bg] rounded-b-lg py-2 px-3 overflow-hidden transition-all duration-200",
                    {
                        "max-h-0 py-0": !isOpen,
                    }
                )}
            >
                <h1 className="text-[--c2-txt] font-bold text-center text-base my-2">
                    Opciones de Perfil
                </h1>
                <div className="relative flex flex-col gap-2 text-[--c2-txt]">{children}</div>
            </div>
        </div>
    );
}
