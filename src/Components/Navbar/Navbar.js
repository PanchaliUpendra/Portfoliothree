import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className='Navbar_container'>
            <div>
                <h3>PANCHALI</h3>
            </div>
            <div className='Navbar_container_menu'>
                <ul>
                    <li>Home</li> 
                    <li>Recent Work</li>
                    <li>Contact Me</li>
                    <li>About Me</li>
                </ul>
            </div>
            <div className='Navbar_container_menu_mobile'>
                <div>
                <div className='Navbar_container_menu_mobile_div'></div>
                <div className='Navbar_container_menu_mobile_div'></div>
                <div className='Navbar_container_menu_mobile_div'></div>
                </div>
                <div className='navbar_menu_mobile_view'>
                <ul>
                <li>Home</li> 
                <li>Recent Work</li>
                <li>Contact Me</li>
                <li>About Me</li>
                </ul>
            </div>
            </div>
           
        </div>
    );
}
export default Navbar;