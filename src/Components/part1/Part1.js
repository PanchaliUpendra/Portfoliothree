import React from 'react';
import './Part1.css';

import img2 from '../../Images/first1.png';

function Part1(){
    return(
        <div className='part1_container'>
            <div className='part1_container_div1'>
                <h1>Hi, I am Alexa
                A Product Designer 
                based in Los Angeles.
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Est, posuere ultrices 
                    viverra enim sit urna tempor pellentesque.
                </p>
                <div className='part1_container_div1_btn'>Contact Me Now</div>

            </div>
            <div className='part1_container_div2'>
                <img src={img2} alt="img2" className='part1_container_div2_img'/>
            </div>

        </div>
    );
}
export default Part1;