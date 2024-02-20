import PageContent from "../panel.components/PageContent";

export default function Loading() {
    return (
        <PageContent className="flex justify-center items-center w-[100%] h-[100%] px-[--padding]">
            <div className="flex flex-col justify-center items-center gap-2">
                <svg viewBox="0 0 38 38" className="max-w-14">
                    <defs>
                        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                            <stop
                                style={{
                                    stopColor: "var(--c1-bg)",
                                }}
                                stopOpacity="0"
                                offset="0%"
                            />
                            <stop
                                style={{
                                    stopColor: "var(--c1-bg)",
                                }}
                                stopOpacity=".631"
                                offset="63.146%"
                            />
                            <stop
                                style={{
                                    stopColor: "var(--c1-bg)",
                                }}
                                offset="100%"
                            />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)">
                            <path
                                d="M36 18c0-9.94-8.06-18-18-18"
                                id="Oval-2"
                                stroke="url(#a)"
                                strokeWidth="2"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            <circle
                                style={{
                                    stroke: "var(--c1-bg)",
                                }}
                                cx="36"
                                cy="18"
                                r="1"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                    </g>
                </svg>
                <div className="ml-4 text-xl text-[--c1-bg]">Loading</div>
            </div>
        </PageContent>
    );
}
