import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Profilbild from '../images/Profilbild.png'
import LoginModal from '../components/LoginModal';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FooterMobil from '../components/FooterMobil';
const Home = ({ show, handleShow , showMobile, mobile, switchTheme,checked }) => {
    // EMAIL CONTACT
    const [alert, setAlert] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('template_2manjpt', 'template_2manjpt', form.current, 'UiZghIwj_-H1ZWtWn')
            .then((result) => {
                console.log(result.text);
                setAlert(true);
                document.getElementById('kontakt').reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
            {show && <div className='loginmodal-div'></div>}
            <div className='content-all black'>

                <div className='container'>
                    <div className='row center-items reverse-order'>
                        <div className='col-md-1 col-0'></div>
                        <div className='col-10  col-md-4 offset-md-0'>
                            <img className='profile-home' src={Profilbild} alt='Profilbild' />
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='blured'>
                                <p>Hi, Ich bin Niklas. <br />Ich studiere Wirtschaftsinformatik und interessiere mich besonders für die Softwareentwicklung. Auf meiner Website finden Sie meinen Lebenlsauf, meine Projekte sowie mehrere Kontaktmöglichkeiten.</p>
                            </div>
                        </div>


                    </div>
                    <div className='row'>
                        <div className="col-12 offset-md-1">
                            <h3 className="header-h3-bold">Kontaktiere Mich</h3>
                        </div>
                        <div className="col-12 col-md-10 offset-md-1 mt-2">
                            <div className='alert' style={{ display: alert ? 'flex' : 'none' }}>
                                <h3>Danke für Deine Nachricht!</h3>
                                <button onClick={e => setAlert(false)}><i class="fa-solid fa-x"></i></button>
                            </div>
                        </div>
                    </div>
                    <form id="kontakt" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className='col-12 col-md-3 offset-md-8 social-icons'>
                                <a href="https://www.linkedin.com/in/niklasminth" target='_blank' rel="noreferrer"><i class="fa-lg fa-brands fa-linkedin-in "></i></a>
                                <a href="https://www.instagram.com/niklas_1531/" target='_blank' rel="noreferrer"><i class="fa-lg fa-brands fa-instagram"></i></a>
                                <a href="mailto:niklas.minth@gmail.com"><i class="fa-lg fa-solid fa-envelope"></i></a>
                                <a href="tel:015901628364"><i class="fa-lg fa-solid fa-phone"></i></a>

                            </div>
                            <div className="col-12 col-md-10 offset-md-1 mt-2">
                                <div class="floating-label-div mb-3">
                                    <input class="floating-input" type="text" placeholder=" " />
                                    <label class="floating-label">Betreff</label>
                                </div>
                            </div>
                            <div className="col-6 col-md-5 offset-md-1">
                                <div class="floating-label-div mb-3">
                                    <input class="floating-input" type="text" placeholder=" " />
                                    <label class="floating-label">Vorname</label>
                                </div>
                            </div>

                            <div className="col-6 col-md-5">
                                <div class="floating-label-div mb-3">
                                    <input class="floating-input" type="text" placeholder=" " />
                                    <label class="floating-label">Nachname</label>
                                </div>
                            </div>
                            <div className="col-12 col-md-10 offset-md-1">
                                <div class="floating-label-div mb-3">
                                    <input class="floating-input" type="email" placeholder=" " />
                                    <label class="floating-label">E-mail</label>
                                </div>
                            </div>
                            <div className="col-12 col-md-10 offset-md-1">
                                <div class="floating-label-div mb-3">
                                    <textarea class="floating-input" placeholder=" " required />
                                    <label class="floating-label">Nachricht *</label>
                                </div>
                            </div>
                            <div className="offset-md-1 mt-3">
                                <button className="customButton" type="submit">Abschicken</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <FooterMobil handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
            {show && <LoginModal handleShow={handleShow} />}
        </div>);
}

export default Home;