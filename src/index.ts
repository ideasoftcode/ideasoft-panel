import Panel from "./panel.components/PanelContainer";

import PanelHeader from "./panel.components/PanelHeader";
import PanelHeaderOption from "./panel.components/PanelHeaderOption";
import PanelSidebar from "./panel.components/PanelSidebar";
import PanelSidebarOption from "./panel.components/PanelSidebarOption";
import PanelMain from "./panel.components/PanelMain";

import CrudHeader from "./crud.components/CrudHeader";
import CrudTable from "./crud.components/CrudTable";
import CrudForm from "./crud.components/CrudForm";

import {
    InputFile,
    InputPassword,
    InputRadio,
    InputSelect,
    InputText,
    InputTextarea,
} from "./crud.components/CrudInputs";

import Loading from "./components/Loading";

// hooks

import usePanel from "./hooks/usePanel";
import usePagination from "./hooks/usePagination";

export default {
    PanelContainer: Panel,
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
    // hooks
    usePanel,
    usePagination,
};
