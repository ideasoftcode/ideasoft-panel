import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./panel.components/Main";
import Sidebar from "./panel.components/Sidebar";
import SidebarOption from "./panel.components/SidebarOption";
import usePanel from "./hooks/usePanel";
import Panel from "./pages/Panel";
import {
    faContactBook,
    faHome,
    faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import HeaderOption from "./panel.components/HeaderOption";
import Header from "./panel.components/Header";
import Other from "./pages/Other";

export default function App() {
    const { isOpen, isMobile, togle, handleClickOption } = usePanel();
    return (
        <Panel sidebarIsOpen={isOpen} isMobile={isMobile}>
            <BrowserRouter>
                <Header
                    title="Ideasoft Panel"
                    username="Harold Anderson Hernández Zambrano"
                    src="https://avatars.githubusercontent.com/u/77129645?v=4"
                    isOpen={isOpen}
                    togleOpen={togle}
                >
                    <HeaderOption Tag={Link} to="/profile" text="Perfil" icon={faUser} />
                    <HeaderOption
                        Tag={Link}
                        to="/logout"
                        text="Cerrar Sesión"
                        icon={faRightFromBracket}
                        logout
                    />
                </Header>
                <Sidebar isOpen={isOpen} src="https://avatars.githubusercontent.com/u/77129645?v=4">
                    <SidebarOption
                        Tag={Link}
                        path="/"
                        name="Home"
                        icon={faHome}
                        isOpen={isOpen}
                        onClick={handleClickOption}
                    />
                    <SidebarOption
                        Tag={Link}
                        path="/other"
                        name="Other"
                        icon={faContactBook}
                        isOpen={isOpen}
                        onClick={handleClickOption}
                    />
                </Sidebar>
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/other" element={<Other />} />
                    </Routes>
                </Main>
            </BrowserRouter>
        </Panel>
    );
}
