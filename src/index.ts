import Panel from "./pages/Panel";

import Header from "./panel.components/Header";
import HeaderOption from "./panel.components/HeaderOption";
import Sidebar from "./panel.components/Sidebar";
import SidebarOption from "./panel.components/SidebarOption";
import Main from "./panel.components/Main";

import CrudHeader from "./crud.components/Header";
import Table from "./crud.components/Table";
import Form from "./crud.components/Form";

import {
    InputFile,
    InputPassword,
    InputRadio,
    InputSelect,
    InputText,
    InputTextarea,
} from "./crud.components/Input";

import Loading from "./components/Loading";

// hooks

import usePanel from "./hooks/usePanel";
import usePagination from "./hooks/usePagination";

export default {
    PanelContainer: Panel,
    PanelHeader: Header,
    PanelHeaderOption: HeaderOption,
    PanelSidebar: Sidebar,
    PanelSidebarOption: SidebarOption,
    PanelMain: Main,
    CrudHeader: CrudHeader,
    CrudTable: Table,
    CrudForm: Form,
    InputText,
    InputTextarea,
    InputRadio,
    InputPassword,
    InputSelect,
    InputFile,
    Loading,
    // hooks
    usePanel,
    usePagination,
};
