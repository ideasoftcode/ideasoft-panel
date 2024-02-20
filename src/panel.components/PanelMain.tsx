import { cls } from "../lib/utils";

type props = {
    children: React.ReactNode;
    classWrapper?: string;
};

export default function PanelMain({ children, classWrapper = "" }: props) {
    return (
        <div className={cls("flex flex-col gap-5 p-3 sm:p-5 md:p-10", classWrapper)}>
            {children}
        </div>
    );
}
