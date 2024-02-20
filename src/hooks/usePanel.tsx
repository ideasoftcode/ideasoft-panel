import { useEffect, useState } from "react";

export default function usePanel() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            close();
            setIsMobile(true);
        } else {
            open();
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        const _isOpen = localStorage.getItem("sidebarIsOpen");
        if (_isOpen === "true" || _isOpen === "false") setIsOpen(_isOpen === "true");

        if (window.innerWidth < 768) {
            setIsMobile(true);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // eslint-disable-line

    const handleClickOption = () => {
        if (isMobile) close();
    };

    const togle = () => {
        setIsOpen(!isOpen);
        localStorage.setItem("sidebarIsOpen", "" + !isOpen);
    };

    const close = () => {
        setIsOpen(false);
        localStorage.setItem("sidebarIsOpen", "" + false);
    };

    const open = () => {
        setIsOpen(true);
        localStorage.setItem("sidebarIsOpen", "" + true);
    };

    return {
        isOpen,
        isMobile,
        togle,
        close,
        open,
        handleClickOption,
    };
}
