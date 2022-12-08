function SupportComp() {

    return (
        <main>
            <center>
                <div className="sign-up-form">
                    <h1 className="hero">Support</h1>
                    <p className="register-section  ">
                        Do you have any questions? Fill out the form below.
                    </p>
                    <form id="support">
                        {/* <label className="support" htmlFor="name">Enter your full name:</label> */}

                        <input type="text" placeholder="Full name" name="name" id="name" className="form-input " /><br />

                        {/* <label className="support " htmlFor="email">Enter your email address:</label> */}

                        <input type="text" placeholder="Email address" name="email" id="email" className="form-input " /><br />

                        {/* <label className="support " htmlFor="phone">Enter your contact number:</label> */}

                        <input type="text" placeholder="Phone number" name="phone" id="phone" className="form-input " /><br />

                        <hr></hr>

                        <label className="support " htmlFor="message">Enter your message:</label>

                        <textarea className="textarea" name="Message" rows={8} cols={30} defaultValue={""} />
                        
                        <br /><button className="button">Submit</button><br /><br />
                    </form>
                </div>
            </center>
        </main>
    )
}
export default SupportComp
