type PanelProps = {
    children: any;
    sidebarIsOpen?: boolean;
    isMobile?: boolean;
    headerHeight?: string;
    sidebarWidth?: string;
    sidebarWidthClose?: string;
    c1Bg?: string;
    c1Txt?: string;
    c2Bg?: string;
    c2Txt?: string;
    c3Bg?: string;
    c3Txt?: string;
    scrollbarWidth?: string;
    scrollbarColor?: string;
    scrollbarBg?: string;
};
export default function Panel({
    children,
    sidebarIsOpen = true,
    isMobile = false,
    ...props
}: PanelProps) {
    const theme = {
        "--header-h": props.headerHeight || "3rem",
        "--sidebar-w": props.sidebarWidth || "15rem",
        "--sidebar-w-close": props.sidebarWidthClose || "3rem",
        "--c1-bg": props.c1Bg || "#2f74dc",
        "--c1-txt": props.c1Txt || "#e1e1e3",
        "--c2-bg": props.c2Bg || "#292d3e",
        "--c2-txt": props.c2Txt || "#e1e1e3",
        "--c3-bg": props.c3Bg || "#f0f0f0",
        "--c3-txt": props.c3Txt || "#292d3e",
        "--scrollbar-width": props.scrollbarWidth || "10px",
        "--scrollbar-color": props.scrollbarColor || "var(--c1-bg)",
        "--scrollbar-bg": props.scrollbarBg || "var(--c1-txt)",
    };

    return (
        <div
            className="grid grid-cols-2 w-full min-h-screen transtion-[grid-template-columns] duration-200"
            style={{
                ...theme,
                gridTemplateColumns: sidebarIsOpen
                    ? `${isMobile ? "1fr" : "var(--sidebar-w) 1fr"}`
                    : `${isMobile ? "1fr" : "var(--sidebar-w-close) 1fr"}`,
                gridTemplateRows: "var(--header-h) 1fr",
            }}
        >
            {children}
        </div>
    );
}
