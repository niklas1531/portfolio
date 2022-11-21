import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom'
import BMW from '../images/BMW.png'
import Rewe from '../images/Rewe.png'
import TUM from '../images/TUM.webp'
import Durstexpress from '../images/Durstexpress.png'
import Webasto from '../images/Webasto.jpeg'
import OPUS from '../images/OPUS.png'
import GymnasiumFürstenried from '../images/GymnasiumFürstenried.png'
import Lebenslauf from '../Lebenslauf_NiklasMinth.pdf'
import Profilbild from '../images/Profilbild.png'
import FooterMobil from '../components/FooterMobil';

const CV = ({ show, handleShow, showMobile, mobile, switchTheme,checked  }) => {
    return (<div>
        <Nav handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
        <div className="content-all black">
            {show && <LoginModal handleShow={handleShow} />}
            {show && <div className='loginmodal-div'></div>}
            {/* Allgemeines */}

            <div className="container">
            <p> <Link className='linkBack'to='/'>Home</Link> / CV</p>
                <div className="blured">
                    <h2>Allgemeines</h2>
                    <div className="row items-centered">
                        <div className=" col-10 offset-1 col-sm-5 col-md-4" style={{ boxSizing: 'border-box' }}>
                            <img className='profilbild-cv' src={Profilbild} alt='Profilbild' />
                        </div>

                        <div className="col-12 col-sm-7 col-md-5 offset-md-2 mt-5 pt-1" style={{ boxSizing: 'border-box' }}>
                            <div className="mb-3"><i class="fa-solid fa-signature mr-2"></i>Niklas Minth</div>
                            <div className="mb-3"><i class="fa-solid fa-envelope mr-2"></i>niklas.minth@gmail.com</div>
                            <div className="mb-3"><i class="fa-solid fa-phone mr-2"></i>0159 01628364</div>
                            <div className="mb-3"><a class='black' href="https://www.linkedin.com/in/niklasminth" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin mr-2"></i></a><a class='a black' href="https://www.linkedin.com/in/niklasminth" target='_blank' rel="noreferrer">linkedin.com/in/niklasminth</a></div>
                            <div className="mb-4"><a href="https://github.com/niklas1531" target='_blank' rel="noreferrer"><i class="fa-brands fa-github mr-2"></i></a><a class='a black' href="https://github.com/niklas1531" target='_blank' rel="noreferrer">github.com/niklas1531</a></div>
                            <a className='customButton' href={Lebenslauf} download="Lebenslauf_NiklasMinth">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Berufliche Erfahrung */}
            <div className="container">

                {/* BMW */}
                <div className="mt-md-5 blured">
                    <h2>Berufliche Erfahrung</h2>
                    <div className="mb-4 row">
                        <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={BMW} alt='BMW-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 date">
                            <div className="italic">04/2022 - heute</div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="bold">BMW Group</div>
                            <div>Corporate Security - Werkstudent</div>
                            <details>
                                <summary>Aufgabenbereiche</summary>
                                <ul className="list">
                                    <li>Erstellen neuer Views im SQL Developer</li>
                                    <li>Überführen von Dokumenten in Confluence</li>
                                    <li>Organisatorische Aufgaben im Projektumfeld</li>
                                    <li>Mithilfe bei der Weiterentwicklung von Web-Applikationen</li>
                                </ul>
                            </details>
                        </div>
                    </div>

                    {/* OPUS */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={OPUS} alt='OPUS-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">03/2021 - 03/2022</div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="bold">OPUS GmbH</div>
                            <div>IT Support und SW Testing - Werkstudent</div>
                            <details>
                                <summary>Aufgabenbereiche</summary>
                                <ul className="list">
                                    <li>Schreiben von Testcases und Ausführen dieser Tests für die KLUSA Software bei Kundenreleases</li>
                                    <li>Aufnahme und Abarbeiten von Kundenanfragen und Problemen in Form von Tickets (Kundenkontakt ausschließlich auf Englisch)</li>
                                    <li>Erstellen von Projektdokumentationen auf Sharepoint</li>
                                    <li>Erste Erfahrungen im Projektmanagement und SCRUM</li>

                                </ul>
                            </details>
                        </div>
                    </div>

                    {/* Gymnasium Fürstenried */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={GymnasiumFürstenried} alt='Gymnasium Fürstenried - Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">09/2020 - 05/2021</div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="bold">Gymnasium Fürstenried</div>
                            <div>Betreuer in der offenen Ganztagsschule - Freiberuflich</div>
                        </div>
                    </div>

                    {/* Durstexpress */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={Durstexpress} alt='Durstexpress-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">12/2019 - 02/2021</div>
                        </div>
                        

                        <div className="col-12 col-md-5">
                            <div className="bold">Durstexpress GmbH</div>
                            <div>Auslieferungsfahrer</div>
                        </div>
                    </div>

                    {/* Webasto */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={Webasto} alt='Webasto-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">05/2018</div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="bold">Webasto Roof & Components SE</div>
                            <div>Freiwilliges Schülerpraktikum (1 Woche)</div>
                        </div>
                    </div>

                    {/* Rewe */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={Rewe} alt='Rewe-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">03/2018 - 12/2018</div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="bold">Rewe Group</div>
                            <div>Kassierer - Minijob</div>
                        </div>
                    </div>

                    {/* BMW Praktikum */}
                    <div className="row mb-4">
                    <div className="col-3 col-md-1 mt-3 mt-md-0">
                            <img className='company-logo' src={BMW} alt='BMW-Logo' />
                        </div>
                        <div className="col-9 mt-md-0 col-md-5 offset-md-1 order-md-first date">
                            <div className="italic">07/2017</div>
                        </div>
                        

                        <div className="col-12 col-md-5">
                            <div className="bold">BMW Group</div>
                            <div>Schülerpraktikum (1 Woche)</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Ausbildung */}

            <div className="container">
                <div className="blured">
                    <h2>Ausbildung</h2>
                    <div className="row mb-4 mt-md-5">
                    <div className="col-3 col-md-1  mt-3 ">
                            <img className='company-logo' src={TUM} alt='TUM-Logo' />
                        </div>
                        <div className="col-9 col-md-5 offset-md-1 date">
                            <div className="italic">2019 - 2023</div>
                        </div>
                        
                        <div className="col-12 col-md-5">
                            <div className="bold">Technische Universität München</div>
                            <div>Bachelor of Science - BS, Wirtschaftsinformatik</div>
                        </div>
                    </div>

                    <div className="row mb-4">
                    <div className="col-3 col-md-1">
                            <img className='company-logo' src={GymnasiumFürstenried} alt='Gymnasium Fürstenried-Logo' />
                        </div>
                        <div className="col-9 col-md-5 offset-md-1 date">
                            <div className="italic">2011 - 2019</div>
                        </div>
                      

                        <div className="col-12 col-md-5">
                            <div className="bold">Gymnasium Fürstenried</div>
                            <div>Allgemeine Hochschulreife</div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                {/* Kenntnisse */}
                <div className="blured">
                    <div className="container">
                        <h2>Kenntnisse</h2>
                        <div className="row mb-4 mt-md-5  mt-3 ">
                            <div className="col-12 col-md-5 offset-md-1 ">
                                <div className="italic">Sprachen</div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div> Deutsch - Muttersprache</div>
                                <div>Englisch - C1</div>
                                <div>Französisch - B2</div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-12 col-md-5 offset-md-1 ">
                                <div className="italic">Programmieren</div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>Grundkenntnisse: SQL, HTML/CSS/JS/React</div>
                                <div>Fundierte Kenntnisse: Java</div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-12 col-md-5 offset-md-1 ">
                                <div className="italic">Betriebssysteme</div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>Grundkenntnisse: IOS, Android, Windows, MacOS</div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12 col-md-5 offset-md-1 ">
                                <div className="italic">Software</div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>Microsoft Office: Word, Excel, Powerpoint, Teams, SharePoint</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interessen */}
                <div className="blured">
                    <div className="container">
                        <h2>Interessen</h2>
                        <div className="row">
                            <div className="mb-4 mt-5 col-5 offset-1 col-md-2 offset-md-1"><i class="fa-solid fa-car fa-2xl"></i><div className="mt-3">Autos</div></div>
                            <div className="mb-4 mt-5 col-5 offset-1 col-md-2 offset-md-1"><i class="fa-solid fa-person-skiing fa-2xl"></i><div className="mt-3">Ski</div></div>
                            <div className="mb-4 mt-5 col-5 offset-1 col-md-2 offset-md-1"><i class="fa-solid fa-earth-americas fa-2xl"></i><div className="mt-3">Reisen</div></div>
                            <div className="mb-4 mt-5 col-5 offset-1 col-md-2 offset-md-1"><i class="fa-solid fa-laptop-code fa-2xl"></i><div className="mt-3">Technik</div></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
        <FooterMobil handleShow={handleShow} showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked}/>
    </div>);
}

export default CV;