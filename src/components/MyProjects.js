import ProjectItem from "./ProjectItem";
import "./ProjectStyles.css";
import Work2 from '../assets/fof.jpeg'
import Work1 from '../assets/rm.png'
import Work3 from '../assets/meal-train-final.png'
import Work4 from '../assets/6.jpg'
import Work5 from '../assets/9.jpeg'
import Work6 from '../assets/11.jpeg'

function MyProjects () {
    return (
        <div className="profile-section">
            <h1>My Projects</h1>
       
        <div className="pcards">
            <ProjectItem image={Work1} heading="PROJECT 1" text="Madlib Game" github="https://github.com/TheIncredibleHulkSmash/RandomMadlib" heroku="https://theincrediblehulksmash.github.io/RandomMadlib/"/>
            <ProjectItem image={Work2} heading="PROJECT 2" text="Feast of Friends potluck app" github="https://github.com/A-Tribu/feast-of-friends" heroku="https://feast-of-friends.herokuapp.com/"/>
            <ProjectItem image={Work3} heading="PROJECT 3" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan" />
          
        </div>
        <div className="pcards">
            <ProjectItem image={Work4} heading="PROJECT 4" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan"/>
            <ProjectItem image={Work5} heading="PROJECT 5" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan" />
            <ProjectItem image={Work6} heading="PROJECT 6" text="Caption this" github="https://github.com/flgaitan?tab=repositories" heroku="https://github.com/flgaitan"/>
        </div>
    </div>
    );
};

export default MyProjects;