import "./ConFormStyles.css"


function ContactForm () {
    return(
        <div className="form-container">
            <h1>Contact Me!</h1>
            <form>
                <input placeholder= "Name"/>
                <input placeholder= "Email"/>
                <input placeholder= "Subject"/>
                <textarea placeholder="Message" rows="10"></textarea>
                <button>Send</button>
            </form>
        </div>
    )
};

export default ContactForm;