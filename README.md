<center>
    <img src="./public/logo.png" width="150px" />
</center>

# Esta dependencia es para hacer un PANEL de forma rápida.

# Dependencies

-   React
-   React-DOM
-   tailwindcss
-   tailwind-merge
-   clsx
-   styled-components
-   framer-motion
-   fontawesome

# Nuestros componentes

-   `<PanelHeader />`
-   `<PanelHeaderOption />`
-   `<PanelSidebar />`
-   `<PanelSidebarOption />`
-   `<PanelMain />`
-   `<CrudHeader />`
-   `<CrudTable />`
-   `<CrudForm />`
-   `<InputText />`
-   `<InputTextarea />`
-   `<InputRadio />`
-   `<InputPassword />`
-   `<InputSelect />`
-   `<InputFile />`
-   `<Loading />`

# Cómo instalar

```bash
    npm i ideasoft-panel
```

# Cómo importar

```javascript
import {
    PanelHeader,
    PanelHeaderOption,
    PanelSidebar,
    PanelSidebarOption,
    PanelMain,
    CrudHeader,
    CrudTable,
    CrudForm,
    InputText,
    InputTextarea,
    InputRadio,
    InputPassword,
    InputSelect,
    InputFile,
    Loading,
} from "ideasoft-panel";
```

# Cómo utilizar el Panel

```jsx
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
                <YourComponent />
            </Main>
        </Panel>
    );
}
```

# Como utilizar el CRUD

```jsx
import Form from "../crud.components/Form";
import Header from "../crud.components/Header";
import {
    InputFile,
    InputPassword,
    InputRadio,
    InputSelect,
    InputText,
    InputTextarea,
} from "../crud.components/Input";
import Table from "../crud.components/Table";

export default function Home() {
    return (
        <>
            <Header />
            <Table />
            <Form>
                <InputRadio
                    title="Genero"
                    name="genero"
                    options={[
                        { text: "Masculino", value: "Masculino", checked: true },
                        { text: "Femenino", value: "Femenino" },
                    ]}
                />
                <InputPassword title="Contraseña" name="password" />
                <InputSelect
                    title="Pais"
                    name="pais"
                    options={[
                        { text: "Mexico", value: "Mexico" },
                        { text: "Colombia", value: "Colombia" },
                        { text: "Argentina", value: "Argentina" },
                    ]}
                />
                <InputText title="Nombre" name="name" placeholder="Escribe tu Nombre" />
                <InputTextarea title="Descripcion" name="descripcion" classInput="min-h-20" />
                <InputFile
                    title="Foto"
                    name="foto"
                    placeholder="Selecciona una foto"
                    accept="image/*"
                />
            </Form>
        </>
    );
}
```
