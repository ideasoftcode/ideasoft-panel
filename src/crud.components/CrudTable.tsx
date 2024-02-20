import styled from "styled-components";
import { faPen, faTable, faTrash } from "@fortawesome/free-solid-svg-icons";

import info from "../mocks/table.json";
import { cls } from "../lib/utils";
import usePagination from "../hooks/usePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CrudButton from "./CrudButton";
import CrudSectionContainer from "./CrudSectionContainer";

export default function CrudTable() {
    const { options, itemPages, rows, handleChangeItemsPerPage } = usePagination({
        rows: info,
        options: [5, 10, 20, 50, 100],
    });

    return (
        <CrudSectionContainer classWrapper="w-full" classContainer="flex flex-col gap-3">
            <TableHeader onChangeItemsPerPage={handleChangeItemsPerPage} options={options} />
            <table className="w-full text-center">
                <Thead>
                    <tr>
                        <th>ID</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Action</th>
                    </tr>
                </Thead>
                <Tbody>
                    {rows.map((item: any) => (
                        <Row key={item.id} {...item} />
                    ))}
                </Tbody>
            </table>
            <TableFooter items={itemPages} />
        </CrudSectionContainer>
    );
}

const Thead = styled.thead`
    & th {
        --rounded: 0.5rem;
        padding: 0.5rem;
        background: var(--c3-bg);
    }
    & th:first-child {
        border-radius: var(--rounded) 0 0 var(--rounded);
    }
    & th:last-child {
        border-radius: 0 var(--rounded) var(--rounded) 0;
    }
`;

const Tbody = styled.tbody`
    & td {
        --rounded: 0.5rem;
        padding: 0.5rem;
    }
    & tr {
        transition: background 0.2s ease;
    }
    & tr:nth-child(even) {
        background: rgba(0, 0, 0, 0.03);
    }
    & tr:hover {
        background: rgba(0, 0, 0, 0.05);
        transition: background 0.2s ease;
    }
    & td:first-child {
        border-radius: var(--rounded) 0 0 var(--rounded);
    }
    & td:last-child {
        border-radius: 0 var(--rounded) var(--rounded) 0;
    }
`;

function TableHeader({ onChangeItemsPerPage, options = [5] }: any) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-[--c1-bg]">
                <FontAwesomeIcon icon={faTable} />
                <h4 className="text-xl font-mono font-bold">Datos</h4>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[--c3-txt] text-base font-bold">Items por pagina:</span>
                <select
                    onChange={onChangeItemsPerPage}
                    className="outline-none rounded-md px-2 py-1"
                >
                    {options.map((item: any) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

function TableFooter({ items }: any) {
    return (
        <div className="flex justify-center gap-2">
            {items.map((item: any) => (
                <PaginationButton
                    key={item.id}
                    theme={item.selected ? "info" : "transparent"}
                    {...item}
                />
            ))}
        </div>
    );
}

function PaginationButton({ disabled = false, ...props }) {
    return (
        <CrudButton
            classWrapper={cls("aspect-square w-6 h-6", {
                "opacity-50": disabled,
            })}
            classPseudo={cls({
                hidden: disabled,
            })}
            disabled={disabled}
            theme="transparent"
            scaleHover={false}
            {...props}
        />
    );
}

function Row({ ...item }) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <div className="flex justify-center gap-1">
                    <CrudButton icon={faPen} small />
                    <CrudButton icon={faTrash} small theme="danger" />
                </div>
            </td>
        </tr>
    );
}
