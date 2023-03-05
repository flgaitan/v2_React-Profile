import ProfileItem from "./ProfileItem";
import "./ProfileStyles.css";
import Work2 from '../assets/fof.jpeg'
import Work1 from '../assets/rm.png'
import Work3 from '../assets/8.jpeg'
import Work4 from '../assets/9.jpeg'
import Work5 from '../assets/11.jpeg'
import Work6 from '../assets/6.jpg'

function MyProfile() {
    return (
        <div className="profile-section">
            <h1>My Projects</h1>
       
        <div className="pcards">
            <ProfileItem image={Work1} heading="PROJECT 1" text="Madlib Game" github="https://github.com/TheIncredibleHulkSmash/RandomMadlib" heroku="https://theincrediblehulksmash.github.io/RandomMadlib/"/>
            <ProfileItem image={Work2} heading="PROJECT 2" text="Feast of Friends potluck app" github="https://github.com/A-Tribu/feast-of-friends" heroku="https://feast-of-friends.herokuapp.com/"/>
            <ProfileItem image={Work3} heading="PROJECT 3" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan" />
          
        </div>
        <div className="pcards">
            <ProfileItem image={Work4} heading="PROJECT 4" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan"/>
            <ProfileItem image={Work5} heading="PROJECT 5" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan" />
            <ProfileItem image={Work6} heading="PROJECT 6" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan"/>

        </div>
    </div>
    );
};

export default MyProfile;