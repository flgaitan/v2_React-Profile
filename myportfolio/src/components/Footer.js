import "./FooterStyles.css"


const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Stay in touch</h1>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>

                <div className="bottom"></div>
        </div>
    )
}

export default Footer;