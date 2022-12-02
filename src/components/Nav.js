import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import '../switchButton.css'
const Nav = ({ handleShow, showMobile, mobile, switchTheme, checked }) => {


    return (
        <div >
            <nav className="mobile-div">
                <div className="container">
                    <div className="row navbar" style={{ margin: '0' }}>
                        <div className="col-12 title-div">
                            <NavLink to='/' className='title'>NIKLAS MINTH</NavLink>
                            <div>
                                <i class="fa-solid fa-sun i-darkmode fa-md ms-2"></i>
                                <label class="switch">
                                    <input type="checkbox" onClick={switchTheme} checked={checked} />
                                    <span class="slider round"></span>
                                </label>
                                <i class="fa-solid fa-moon i-darkmode fa-md"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="desktop-div">
                <div className="navbar">
                    <div className="allLinks">
                        <NavLink to='/' className='title'>NIKLAS MINTH</NavLink>
                        <div className="links ml-3">
                            <NavLink to='/' className='link mr-3'>HOME</NavLink>
                            <NavLink to='/cv' className='link mr-3'>CV</NavLink>
                            <NavLink to='/projekte' className='link mr-3'>PROJEKTE</NavLink>
                            <HashLink smooth to='/#kontakt' className='link mr-3'>KONTAKT</HashLink>
                        </div>
                    </div>
                    <div className="items-right">
                        <button className='login-btn' onClick={handleShow}>Login</button>
                        <i class="fa-solid fa-sun i-darkmode fa-md ms-2"></i>
                        <label class="switch">
                            <input type="checkbox" onClick={switchTheme} checked={checked} />
                            <span class="slider round"></span>
                        </label>
                        <i class="fa-solid fa-moon i-darkmode fa-md"></i>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Nav;