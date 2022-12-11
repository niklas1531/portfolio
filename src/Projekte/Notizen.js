import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import FooterMobil from '../components/FooterMobil';

const Notizen = ({ show, handleShow, showMobile, mobile, switchTheme, checked }) => {
    return (
        <div>
            <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} />
            <div className="black content-all">
                <p> <Link className='linkBack' to='/'>Home</Link> / <Link className='linkBack' to='/projekte'>Projekte</Link> / Notizen</p>
                <div className="blured">
                    <a href="https://niklas1531.github.io/notizen" target='_blank' rel="noreferrer">Link zur Website</a>
                </div>
            </div>
            <Footer />
            <FooterMobil handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} />
            {show && <LoginModal handleShow={handleShow} />}
            {show && <div className='loginmodal-div'></div>}
        </div>
    );
}

export default Notizen;