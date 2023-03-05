import './ProfileStyles.css';


function ProfileItem(props){
    return(
        <div className='p-card'>
            <div className='p-image'>
                <img src={props.image} alt='image'/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <section className='links'>
                <section className='github'> 
                <a href={props.github}>
                 <h5>GITHUB</h5>    
                </a> 
    
                </section>
                <section className='web-link'>
                <a href={props.heroku}>
                    <h5>WEBSITE</h5>
                </a> 
                

                </section>
            </section>
        </div>
    )
}

export default ProfileItem;