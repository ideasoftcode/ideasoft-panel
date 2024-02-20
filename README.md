<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
    <img src="./public/logo.png" width="150px" />
    <h1>IDEASOFT PANEL</h1>
</div>

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
    npm install ideasoft-panel
```

### 1. Si no tienes tailwindcss instalado, instala tailwindcss, postcss y autoprefixer

```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

### 2. Configurar tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/ideasoft-panel/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

### 3. Agrega tailwindcss en tu archivo `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Si ya tienes tailwindcss instalado solo debes incluir `"./node_modules/ideasoft-panel/dist/**/*.{js,ts,jsx,tsx}"` en el `content:[]` de tu archivo `tailwind.config.js`.

# Cómo importar

```javascript
import {
    Panel,
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
```

# Como utilizar el CRUD

```jsx
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
        <InputFile title="Foto" name="foto" placeholder="Selecciona una foto" accept="image/*" />
    </Form>
</>
```
