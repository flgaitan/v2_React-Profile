import "./FooterStyles.css"


const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Stay in touch</h1>
                </div>
                <div>
                    <a href="https://github.com/flgaitan">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fiama-gaitan-220321112/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/FiLee_G">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;