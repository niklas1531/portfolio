import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import CardComponent from "../components/CardComponent";
import Check24 from '../images/Check24.png'
import Notizen from '../images/notizen.png'
import Taschenrechner from '../images/Calculator.png'
import GreenCoding from '../images/GreenCoding.png'
import WorCounter from '../images/WordCounter.png'
import WebCrawler from '../images/webcrawler.png'
import { Link } from "react-router-dom";
import FooterMobil from '../components/FooterMobil';

const Projekte = ({show, handleShow, showMobile, mobile, switchTheme,checked }) => {
    return (<div>
        <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
        <div className="content-all black">
        <p> <Link className='linkBack'to='/'>Home</Link> / Projekte</p>
                    <CardComponent title='Word Counter'
                        img={WorCounter}
                        to='/projekte/wordcounter'
                    />
                    <CardComponent title='Taschenrechner'
                        img={Taschenrechner}
                        to='/projekte/taschenrechner'
                    />
                    <CardComponent title='Notizen'
                        img={Notizen}
                        to='/projekte/notizen'
                        notification='Description coming soon'
                    />
                    <CardComponent title='Check24 Challenge'
                        img={Check24}
                        to='/projekte/check24'
                        notification='Description coming soon'
                    />
                    <CardComponent title='Green Coding'
                        img={GreenCoding}
                        to='/projekte/greencoding'
                        notification='Description coming soon'
                    />
                    <CardComponent title="Web Crawler"
                        img={WebCrawler}
                        to='projekte/webcrawler'
                        notification='Coming Soon'
                    />
            {show && <LoginModal handleShow={handleShow} />}
            {show && <div className='loginmodal-div'></div>}
        </div>
        <Footer />
        <FooterMobil handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
    </div>);
}

export default Projekte;