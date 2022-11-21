import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const FooterMobil = ({handleShow, showMobile, mobile, switchTheme,checked }) => {
    return (
        <div className="footer-mobil-div">
            {mobile && <div className="modal">
                <button className='login-btn' onClick={handleShow}>Login</button>
            </div>}
            <footer className="footer-mobil">
                <NavLink to='/'><i class="fa-solid fa-house fa-xl"></i></NavLink>
                <NavLink to='/cv'><i class="fa-solid fa-file fa-xl"></i></NavLink>
                <NavLink to='/projekte'><i class="fa-solid fa-diagram-project fa-xl"></i></NavLink>
                <HashLink to='/#kontakt'><i class="fa-solid fa-phone fa-xl"></i></HashLink>
                <button onClick={e => showMobile(!mobile)}><i class="fa-solid fa-bars fa-xl"></i></button>
            </footer>
        </div>
    );
}

export default FooterMobil;