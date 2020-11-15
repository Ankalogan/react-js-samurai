import React from 'react';
import x from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={x.nav}>
        <div className={x.item}>
            <NavLink to='/profile' activeClassName={x.activeLink}>profile</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/dialogs' activeClassName={x.activeLink}>messages</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/news' activeClassName={x.activeLink}>news</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/music' activeClassName={x.activeLink}>music</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/settings' activeClassName={x.activeLink}>settings</NavLink>
        </div>
    </div>
}

export default Navbar;