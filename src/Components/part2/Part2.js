import React from 'react';
import './Part2.css';
import img1 from '../../Images/second1.png';
import img2 from '../../Images/second2.png';
import img3 from '../../Images/second3.png';
import img4 from '../../Images/second4.png';
import img5 from '../../Images/second5.png';
import img6 from '../../Images/second6.png';
import third2 from '../../Images/third2.png';
function Part2(){
    return(
        <div className='Part2_container'>
            <p>Feature Work</p>
            <div className='part2_container_div'>
                <img src={img1} alt='img1' className='part2_all_images'/>
                <img src={img2} alt='img2' className='part2_all_images'/>
                <img src={img3} alt='img3' className='part2_all_images'/>
                <img src={img4} alt='img4' className='part2_all_images'/>
                <img src={img5} alt='img5' className='part2_all_images'/>
                <img src={img6} alt='img6' className='part2_all_images'/>

            </div>
            <div className='part2_part3_container'>
                <div className='Part2_container_part3_div1'>
                    <h1>WHY ME</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nibh est eget non 
                        pharetra tincidunt.</h2>
                    <p>Learn More</p>
                </div>
                <div className='part2_part3_third2'>
                    <img src={third2} alt='third2-img' className='part2_part3_third2_img'/>
                </div>
            </div>
        </div>
    );
}
export default Part2;