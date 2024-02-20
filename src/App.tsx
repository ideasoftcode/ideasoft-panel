import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import usePanel from "./hooks/usePanel";
import {
    faContactBook,
    faHome,
    faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Other from "./pages/Other";
import PanelContainer from "./panel.components/PanelContainer";
import PanelHeader from "./panel.components/PanelHeader";
import PanelMain from "./panel.components/PanelMain";
import PanelHeaderOption from "./panel.components/PanelHeaderOption";
import PanelSidebar from "./panel.components/PanelSidebar";
import PanelSidebarOption from "./panel.components/PanelSidebarOption";

export default function App() {
    const { isOpen, isMobile, togle, handleClickOption } = usePanel();
    return (
        <PanelContainer sidebarIsOpen={isOpen} isMobile={isMobile}>
            <BrowserRouter>
                <PanelHeader
                    title="Ideasoft Panel"
                    username="Harold Anderson Hernández Zambrano"
                    src="https://avatars.githubusercontent.com/u/77129645?v=4"
                    isOpen={isOpen}
                    togleOpen={togle}
                >
                    <PanelHeaderOption Tag={Link} to="/profile" text="Perfil" icon={faUser} />
                    <PanelHeaderOption
                        Tag={Link}
                        to="/logout"
                        text="Cerrar Sesión"
                        icon={faRightFromBracket}
                        logout
                    />
                </PanelHeader>
                <PanelSidebar
                    isOpen={isOpen}
                    src="https://avatars.githubusercontent.com/u/77129645?v=4"
                >
                    <PanelSidebarOption
                        Tag={Link}
                        path="/"
                        name="Home"
                        icon={faHome}
                        isOpen={isOpen}
                        onClick={handleClickOption}
                    />
                    <PanelSidebarOption
                        Tag={Link}
                        path="/other"
                        name="Other"
                        icon={faContactBook}
                        isOpen={isOpen}
                        onClick={handleClickOption}
                    />
                </PanelSidebar>
                <PanelMain>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/other" element={<Other />} />
                    </Routes>
                </PanelMain>
            </BrowserRouter>
        </PanelContainer>
    );
}
