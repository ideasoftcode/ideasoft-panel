import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";

type ButtonTypes = {
    children?: any;
    text?: string | null;
    icon?: any;
    small?: boolean;
    big?: boolean;
    scaleHover?: boolean;
    pseudoElement?: boolean;
    checked?: boolean;
    theme?: "info" | "danger" | "success" | "warning" | "cancel" | "transparent";
    TagWrapper?: any;
    classWrapper?: string;
    classPseudo?: string;
    type?: HTMLButtonElement["type"];
    disabled?: HTMLButtonElement["disabled"];
    onClick?: HTMLButtonElement["onclick"];
};

export default function Button({
    children,
    text = null,
    icon = null,
    small = false,
    big = false,
    scaleHover = true,
    pseudoElement = true,
    checked = false,
    theme = "info",
    TagWrapper = "button",
    classWrapper = "",
    classPseudo = "",
    ...props
}: ButtonTypes) {
    const options: any = {
        info: "bg-[#2c74dc] text-[#ffffff]",
        danger: "bg-[#e53e3e] text-[#ffffff]",
        success: "bg-[#38a169] text-[#ffffff]",
        warning: "bg-[#d97706] text-[#ffffff]",
        cancel: "bg-[#718096] text-[#ffffff]",
        transparent: "bg-transparent text-[#000000]",
    };
    const hexColor: any = options[theme];
    return (
        <TagWrapper
            className={cls(
                "relative group/button flex justify-center items-center gap-1  py-2 px-3 rounded-md overflow-hidden hover:scale-105 transition-transform duration-200 select-none cursor-pointer",
                "text-base",
                hexColor,
                classWrapper,
                {
                    "text-xs": small,
                    "text-lg": big,
                    "aspect-square p-2": !text,
                    "hover:scale-100": !scaleHover,
                }
            )}
            {...props}
        >
            {icon && (
                <FontAwesomeIcon
                    icon={icon}
                    className={cls("text-base", {
                        "text-lg": big,
                        "text-xs": small,
                    })}
                />
            )}
            {text && (
                <span
                    className={cls("text-base", {
                        "text-lg": big,
                        "text-xs": small,
                    })}
                >
                    {text}
                </span>
            )}
            {!icon && !text && children}
            {pseudoElement && (
                <div
                    className={cls(
                        "absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 opacity-0 rounded-sm bg-black/20 group-hover/button:w-full transition-[width,height,opacity] duration-200 group-hover/button:h-full group-hover/button:opacity-100",
                        classPseudo,
                        {
                            "w-full h-full opacity-100": checked,
                        }
                    )}
                />
            )}
        </TagWrapper>
    );
}
