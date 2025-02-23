import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{backgroundColor:"green",height:"100px",display:"flex"}}>
                <ul style={{display:"flex",listStyle:"none",justifyContent:"space-around",width:"100%",alignItems:"center"}}>
                    <li> <Link style={{textDecoration:"none",color:"white",fontSize:"2rem"}} to="/">Anasayfa</Link> </li>
                  
                    <li> <Link style={{textDecoration:"none",color:"white",fontSize:"2rem"}} to="todoApp">Todo App</Link> </li>

                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar