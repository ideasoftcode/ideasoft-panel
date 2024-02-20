import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageContent({ fade = true, ...props }) {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    let initial = { opacity: 0 };
    let animate = { opacity: 1 };
    let transition = { duration: 0.5 };

    if (!fade) {
        initial = { x: window.innerWidth };
        animate = { x: 0 };
        transition = { delay: 0 };
    }

    return <motion.div {...props} initial={initial} animate={animate} transition={transition} />;
}
