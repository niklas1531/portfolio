import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import FooterMobil from '../components/FooterMobil';

const WordCounter = ({ show, handleShow , showMobile, mobile, switchTheme,checked }) => {
    // Eingabe:
    const [text, setText] = useState('')

    //gezählte Wörter
    const [wordCount, setWordCount] = useState(0);

    //gezählte Zeichen
    const [charCount, setCharCount] = useState(0);

    const changeText = (event) => {
        setText(event.target.value);
    };

    const deleteText = () => {
        setText('');
    }
    useEffect(() => {
        // Wörter werden in Array gespeichert
        const words = text.split(' ');

        // Word Count wird für jedes einzelne Wort inkrementiert
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });

        //word count aktualisieren
        setWordCount(wordCount);

        // char count aktualisieren
        setCharCount(text.length);
    }, [text]);

    return (
        <div>
            <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
            {show && <div className='loginmodal-div'></div>}
            {show && <LoginModal handleShow={handleShow} />}
            <div className="content-all black">
            <p> <Link className='linkBack'to='/'>Home</Link> / <Link className='linkBack'to='/projekte'>Projekte</Link> / Word Counter</p>
                <div className='blured'>
                    <div className="container">
                        <h2>Word Counter</h2>
                        <div className="row">
                            <div class="col-12">
                                <div class="floating-label-div mb-3">
                                    <textarea class="floating-input mt-3" value={text} onChange={changeText} placeholder=" " required />
                                    <label class="floating-label">Text eingeben</label>
                                </div>
                                <button onClick={deleteText} className='trash black mt-3'><i class="fa-solid fa-trash-can fa-lg"></i></button>
                            </div>
                            <div className="col-12">
                                <h3 className='mt-4 black'>Word Count: {wordCount}</h3>
                            </div>
                            <div className="col-12">
                                <h3 className='mt-4 black'>Character Count: {charCount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <FooterMobil handleShow={handleShow}  showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
        </div>
    );
}

export default WordCounter


