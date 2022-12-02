import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import FooterMobil from '../components/FooterMobil';

const Check24 = ({ show, handleShow, showMobile, mobile, switchTheme, checked }) => {
    return (
        <div>
            <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} />
            <div className="content-all  black">
                <p> <Link className='linkBack' to='/'>Home</Link> / <Link className='linkBack' to='/projekte'>Projekte</Link> / Check24</p>
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10 col-md-6">
                            <iframe width='100%' height='300px' src="https://www.youtube.com/embed/x7Z6MZ_Vwlc" title="Check24 Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <FooterMobil handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} />
            {show && <LoginModal handleShow={handleShow} />}
            {show && <div className='loginmodal-div'></div>}
        </div>
    );
}

export default Check24;