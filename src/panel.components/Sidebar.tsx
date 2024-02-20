import { cls } from "../lib/utils";
import styled from "styled-components";

type SidebarProps = {
    children: any;
    className?: string;
    isOpen?: boolean;
    src?: string;
};
export default function Sidebar({ children, className = "", isOpen, src }: SidebarProps) {
    return (
        <>
            <div
                className={cls(
                    "fixed z-40 top-[var(--header-h)] left-0 bg-[--c2-bg] h-[calc(100dvh-var(--header-h))] max-h-[calc(100dvh-var(--header-h))] w-[--sidebar-w] max-w-full",
                    "transition-[left] duration-200 overflow-hidden",
                    "md:transition-[max-width] duration-200 overflow-hidden",
                    "md:sticky",
                    className,
                    {
                        "md:max-w-[--sidebar-w-close]": !isOpen,
                        "-left-full": !isOpen,
                    }
                )}
                style={
                    {
                        "--img-logo-h": isOpen ? "100px" : "var(--sidebar-w-close)",
                        boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.3) inset",
                    } as any
                }
            >
                <div
                    className={cls(
                        "flex w-full  max-w-[--img-logo-h] h-[--img-logo-h] py-5 items-center justify-center px-2 transition-all duration-200 mx-auto",
                        {
                            "py-5": !isOpen,
                        }
                    )}
                >
                    <img
                        src={src}
                        className={cls(
                            "w-full aspect-square rounded-full object-cover transition-all duration-200"
                        )}
                    />
                </div>
                <div
                    className={cls(
                        "scroll-style flex flex-col w-full max-h-[calc(100dvh-var(--header-h)-var(--img-logo-h)-2px)]  px-2 overflow-y-auto",
                        {
                            "px-0": !isOpen,
                        }
                    )}
                    style={
                        {
                            "--scrollbar-width": "5px",
                            "--scrollbar-bg": "var(--c2-bg)",
                            "--scrollbar-color": "var(--c2-txt)",
                        } as any
                    }
                >
                    <Separator />
                    {children}
                </div>
            </div>
        </>
    );
}

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
`;
