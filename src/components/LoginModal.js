const LoginModal = ({ handleShow }) => {
    return (
            <div className="loginmodal">
                <div className="">
                    <form>
                        <div className=" loginmodal-content">
                            <div className="header">
                                <div> <h3>Login</h3></div>
                                <div> <button onClick={handleShow}><i class="fa-solid fa-x"></i></button></div>

                            </div>
                            <div className="body">
                                <div className="floating-label-div mb-3">
                                    <input className="floating-input" type="email" placeholder=" " required />
                                    <label className="floating-label">Benutzername</label>
                                </div>
                                <div className="floating-label-div mb-3">
                                    <input className="floating-input" type="password" placeholder=" " required />
                                    <label className="floating-label">Passwort</label>
                                </div>
                            </div>
                            <div className="footer">
                                <button className='customButton' onClick={handleShow}>Schließen</button>
                                <input className='customButton ml-2' type='submit' value='Login' />
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default LoginModal;