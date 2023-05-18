import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Navoption = ({path, link}) => {
    const location = useLocation();
    let navigate = useNavigate();

    function handleClick() {
        navigate(link);
    }

    return (
        <motion.div
            whileHover={{
                y: location.pathname === link ? '' : -5
            }}
            animate={{
                y: location.pathname === link ? -5 : 0
            }}
        >
            <button onClick={() => handleClick()} className={`text-2xl ${location.pathname === link ? "text-red": "text-beige"}`}>
                {path}
            </button>
        </motion.div>
    )
}

export default Navoption

        //<Link className={`text-2xl ${location.pathname.slice(1) === path ? "text-red": "text-beige"}`} to={"/" + path}>
        //    <div className=''>
        //        {path}
        //    </div>
        //</Link>