import React, { useState } from 'react';

import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Motion = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            
        </div>
        // <motion.nav
        //     animate={isOpen ? "open" : "closed"}
        //     variants={variants}
        // >
        //     <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
        //     <Items />
        // </motion.nav>
    );
};

export default Motion;