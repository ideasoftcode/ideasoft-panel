type PanelProps = {
    children: any;
    sidebarIsOpen?: boolean;
    isMobile?: boolean;
    headerHeight?: string | null;
    sidebarWidth?: string | null;
    sidebarWidthClose?: string | null;
    c1Bg?: string | null;
    c1Txt?: string | null;
    c2Bg?: string | null;
    c2Txt?: string | null;
    c3Bg?: string | null;
    c3Txt?: string | null;
    scrollbarWidth?: string | null;
    scrollbarColor?: string | null;
    scrollbarBg?: string | null;
};
export default function PanelContainer({
    children,
    sidebarIsOpen = true,
    isMobile = false,
    headerHeight = null,
    sidebarWidth = null,
    sidebarWidthClose = null,
    c1Bg = null,
    c1Txt = null,
    c2Bg = null,
    c2Txt = null,
    c3Bg = null,
    c3Txt = null,
    scrollbarWidth = null,
    scrollbarColor = null,
    scrollbarBg = null,
}: PanelProps) {
    const theme = {
        "--header-h": headerHeight || "3rem",
        "--sidebar-w": sidebarWidth || "15rem",
        "--sidebar-w-close": sidebarWidthClose || "3rem",
        "--c1-bg": c1Bg || "#2f74dc",
        "--c1-txt": c1Txt || "#e1e1e3",
        "--c2-bg": c2Bg || "#292d3e",
        "--c2-txt": c2Txt || "#e1e1e3",
        "--c3-bg": c3Bg || "#f0f0f0",
        "--c3-txt": c3Txt || "#292d3e",
        "--scrollbar-width": scrollbarWidth || "10px",
        "--scrollbar-color": scrollbarColor || "var(--c1-bg)",
        "--scrollbar-bg": scrollbarBg || "var(--c1-txt)",
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
