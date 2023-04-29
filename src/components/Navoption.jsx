import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Navoption = ({path}) => {
    const location = useLocation();

    return (
        <Link className={`text-2xl ${location.pathname.slice(1) === path ? "text-red": "text-beige"}`} to={"/" + path}>
            <div className=''>
                {path}
            </div>
        </Link>
    )
}

export default Navoption