import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const MAX_PAGE_ITEMS = 3;

export default function usePagination({ rows, options }: any) {
    const [pageSelected, setPageSelected] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(options[0]);
    const [numPages, setNumPages] = useState(0);
    const [filteredRows, setFilteredRows] = useState([]);
    const [itemPages, setItemPages]: any = useState([]);

    const handleChangeItemsPerPage = (e: any) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(value);
        setPageSelected(1);
    };

    const handleSelectPage = (page: any) => () => {
        const numPage = parseInt(page);
        if (numPage < 1 || numPage > numPages) return;
        setPageSelected(numPage);
    };

    const processItemPages = () => {
        const pages = [];
        const start = Math.max(1, pageSelected - Math.floor(MAX_PAGE_ITEMS / 2));
        const end = Math.min(numPages, start + MAX_PAGE_ITEMS - 1);
        pages.push({
            id: "prev",
            icon: faChevronLeft,
            text: null,
            selected: false,
            disabled: pageSelected === 1,
            onClick: handleSelectPage(pageSelected - 1),
        });
        for (let i = start; i <= end; i++) {
            pages.push({
                id: i,
                icon: null,
                text: i,
                selected: i === pageSelected,
                disabled: false,
                onClick: handleSelectPage(i),
            });
        }
        pages.push({
            id: "next",
            icon: faChevronRight,
            text: null,
            selected: false,
            disabled: pageSelected === numPages,
            onClick: handleSelectPage(pageSelected + 1),
        });
        setItemPages(pages);
    };

    useEffect(() => {
        processItemPages();
    }, [pageSelected, numPages]); // eslint-disable-line

    useEffect(() => {
        setPageSelected(1);
        setNumPages(Math.ceil(rows.length / itemsPerPage));
    }, [itemsPerPage, rows]);

    useEffect(() => {
        const start = (pageSelected - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setFilteredRows(rows.slice(start, end));
    }, [pageSelected, rows, itemsPerPage]);

    return {
        options,
        rows: filteredRows,
        pageSelected,
        numPages,
        itemPages,
        handleChangeItemsPerPage,
    };
}
