import { cls } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SidebarOptionProps = {
    path?: string;
    name: string;
    icon?: any;
    Tag?: any;
    isOpen?: boolean;
    isActive?: boolean;
    to?: string;
    href?: string;
    onClick?: (e: any) => void;
};
export default function SidebarOption({
    path = "",
    name,
    icon = null,
    Tag = DefaultTag,
    isOpen = true,
    isActive = false,
    ...props
}: SidebarOptionProps) {
    const _isActive = isActive || window.location.pathname === path;
    return (
        <Tag
            className={cls(
                "relative group/button flex items-center justify-start p-2 w-full min-h-[--sidebar-w-close] h-[--sidebar-w-close] gap-3 text-center text-[--c2-txt] cursor-pointer rounded-sm transition-all duration-300 overflow-hidden text-base",

                {
                    "w-auto aspect-square gap-0 delay-0": !isOpen,
                }
            )}
            href={props.href || path}
            to={props.to || path}
            {...props}
        >
            <div
                className={cls(
                    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 opacity-0 bg-[--c1-bg] rounded-sm transition-[width,height,opacity] duration-200 group-hover/button:w-full group-hover/button:h-full group-hover/button:opacity-100",
                    {
                        "w-full h-full opacity-50 group-hover/button:opacity-50": _isActive,
                    }
                )}
            />
            {icon && (
                <div className="flex justify-center items-center w-5 aspect-square">
                    <FontAwesomeIcon icon={icon} className="relative z-10" />
                </div>
            )}
            <span
                className={cls(
                    "relative z-10 block transition-[max-width] max-w-full max-h-full duration-200 overflow-hidden text-nowrap text-ellipsis",
                    {
                        "max-w-0": !isOpen,
                    }
                )}
            >
                {name}
            </span>
        </Tag>
    );
}

const DefaultTag = ({ children, ...props }: any) => <a {...props}>{children}</a>;
