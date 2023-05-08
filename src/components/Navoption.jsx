import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const Navoption = ({path, link}) => {
    const location = useLocation();
    let navigate = useNavigate();

    function handleClick() {
        navigate(link);
    }

    return (
        <button onClick={() => handleClick()} className={`text-2xl ${location.pathname === link ? "text-red": "text-beige"}`}>
            {path}
        </button>
    )
}

export default Navoption

        //<Link className={`text-2xl ${location.pathname.slice(1) === path ? "text-red": "text-beige"}`} to={"/" + path}>
        //    <div className=''>
        //        {path}
        //    </div>
        //</Link>