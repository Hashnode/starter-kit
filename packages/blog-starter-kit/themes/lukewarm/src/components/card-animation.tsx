'use client'

import { motion, MotionProps } from "framer-motion"

interface Props extends MotionProps {
    children: React.ReactNode
}

const CardAnimation = ({ children, ...props }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export default CardAnimation