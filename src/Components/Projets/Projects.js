import React from 'react';
import './Projects.css';

import pro1 from '../../Images/last1.png';
import pro2 from '../../Images/last2.png';
import pro3 from '../../Images/last3.png';

function Projects(){
    return(
        <div className='personal_projects_container'>
            <h4>Personal Projects</h4>
            <div className='personal-projects-all-imgs'>
                <img src={pro1} alt='pro1-img' className='personal-projects-img'/>
                <img src={pro2} alt='pro1-img' className='personal-projects-img'/>
                <img src={pro3} alt='pro1-img' className='personal-projects-img'/>

            </div>

        </div>
    );
}
export default Projects;