import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import Nav from "../../components/Nav";
import FooterMobil from '../../components/FooterMobil';
import './styles.css'
import { useState } from "react";
const Calculator = ({ show, handleShow, showMobile, mobile, switchTheme, checked }) => {
    const [inputString, setInputString] = useState('0')
    const [num1, setNum1] = useState('')
    const [operator, setOperator] = useState('')


    const handleChange = (e) => {
        switch (e.target.value) {
            case 'C': setInputString('0'); break;
            case 'd': inputString !== '0' && setInputString(inputString.substring(0, inputString.length - 1)); break;
            case '=': calcResult(); break;
            default:  saveNumbs(e); inputString === '0' ? setInputString(inputString.substring(1, inputString.length).concat(e.target.value)) : setInputString(inputString.concat(e.target.value)) ;

        }
    }

    const saveNumbs = (e) => {
        switch (e.target.value) {
            case '+': num1 === '' && setNum1(inputString); setOperator('+'); break;
            case '-': setNum1(inputString); setOperator('-'); break;
            case 'x': setNum1(inputString); setOperator('x'); break;
            case '/': setNum1(inputString); setOperator('/'); break;
            default: ;
        }
    }
    const calcResult = () => {
        const NUM1 = parseFloat(num1)
        const NUM2 = parseFloat(inputString.substring(num1.length + 1, inputString.length))
        switch (operator) {
            case '+': setInputString(NUM1 + NUM2); break;
            case '-': setInputString(NUM1 - NUM2); break;
            case 'x': setInputString(NUM1 * NUM2); break;
            case '/': NUM2 === 0 ? setInputString('Division with 0!') : setInputString(NUM1 / NUM2); break;
            default: ;
        }
        setOperator('')
    }

    return (
        <div>
            <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} />
            <div className="content-all black">
                <p> <Link className='linkBack' to='/'>Home</Link> / <Link className='linkBack' to='/projekte'>Projekte</Link> / Calculator</p>
                <div className="container calculator">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 display">
                            <div className="inputs">{inputString}</div>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 calc-row">
                            <button value='C' onClick={handleChange} className="circle-btn ac">AC</button>
                            <button value='d' onClick={handleChange} className="circle-btn">DEL</button>
                            <button value='/' onClick={handleChange} className="circle-btn">/</button>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 calc-row">
                            <button value='7' onClick={handleChange} className="circle-btn">7</button>
                            <button value='8' onClick={handleChange} className="circle-btn">8</button>
                            <button value='9' onClick={handleChange} className="circle-btn">9</button>
                            <button value='x' onClick={handleChange} className="circle-btn">x</button>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 calc-row">
                            <button value='4' onClick={handleChange} className="circle-btn">4</button>
                            <button value='5' onClick={handleChange} className="circle-btn">5</button>
                            <button value='6' onClick={handleChange} className="circle-btn">6</button>
                            <button value='-' onClick={handleChange} className="circle-btn">-</button>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 calc-row">
                            <button value='1' onClick={handleChange} className="circle-btn">1</button>
                            <button value='2' onClick={handleChange} className="circle-btn">2</button>
                            <button value='3' onClick={handleChange} className="circle-btn">3</button>
                            <button value='+' onClick={handleChange} className="circle-btn">+</button>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 calc-row">
                            <button value='0' onClick={handleChange} className="circle-btn">0</button>
                            <button value='.' onClick={handleChange} className="circle-btn">,</button>
                            <button value='=' onClick={handleChange} className="circle-btn equals">=</button>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6 warning">
                            * Um eine neue Rechung zu starten, bitte auf AC drücken
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

export default Calculator;