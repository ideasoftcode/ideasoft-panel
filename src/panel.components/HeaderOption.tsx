import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";

type HeaderOptionProps = {
    icon?: any;
    text: string;
    Tag?: any;
    logout?: boolean;
    className?: string;
    to?: string;
    href?: string;
};
export default function HeaderOption({
    icon = null,
    text,
    Tag = TagDefault,
    logout = false,
    ...props
}: HeaderOptionProps) {
    return (
        <Tag
            className={cls(
                "group/option relative flex items-center gap-2 cursor-pointer p-2 rounded-md overflow-hidden",
                props.className || "",
                {
                    "bg-[--c1-bg] justify-center": logout,
                }
            )}
            {...props}
        >
            <div className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 opacity-0 rounded-sm bg-black/20 group-hover/option:w-full transition-[width,height,opacity] duration-200 group-hover/option:h-full group-hover/option:opacity-100" />
            {icon && <FontAwesomeIcon icon={icon} className="" />}
            <span
                className={cls(
                    "block transition-[max-width] max-w-full max-h-full duration-200 overflow-hidden text-nowrap text-ellipsis"
                )}
            >
                {text}
            </span>
        </Tag>
    );
}

const TagDefault = ({ children, ...props }: any) => <button {...props}>{children}</button>;
