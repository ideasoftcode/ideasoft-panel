import { cls } from "../lib/utils";

export default function CrudSectionContainer({
    children,
    classWrapper = "",
    classContainer = "",
}: any) {
    return (
        <div
            className={cls(
                "relative bg-[--c3-bg] w-full p-4 rounded-lg overflow-hidden border border-black/20 border-t-4 border-t-[--c1-bg]  shadow-xl",
                classWrapper
            )}
        >
            <div className="absolute z-10 inset-0 bg-black/10" />
            <div className={cls("relative z-10 w-full", classContainer)}>{children}</div>
        </div>
    );
}
