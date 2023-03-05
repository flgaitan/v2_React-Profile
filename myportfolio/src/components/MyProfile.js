import ProfileItem from "./ProfileItem";
import "./ProfileStyles.css";
import Work1 from '../assets/fof.jpeg'
import Work2 from '../assets/rm.png'
import Work3 from '../assets/4.jpeg'
import Work4 from '../assets/3.jpeg'
import Work5 from '../assets/5.jpeg'
import Work6 from '../assets/6.jpg'

function MyProfile() {
    return (
        <div className="profile-section">
            <h1>MY PROJECTS</h1>
            <p>Caption Here</p>
       
        <div className="pcards">

            <ProfileItem image={Work1} heading="PROJECT 1" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories"/>
            <ProfileItem image={Work2} heading="PROJECT 2" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories"/>
            <ProfileItem image={Work3} heading="PROJECT 3" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories" />
          
        </div>
        <div className="pcards">
            <ProfileItem image={Work4} heading="PROJECT 4" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories"/>
            <ProfileItem image={Work5} heading="PROJECT 5" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories" />
            <ProfileItem image={Work6} heading="PROJECT 6" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan?tab=repositories"/>

        </div>
    </div>
    );
};

export default MyProfile;