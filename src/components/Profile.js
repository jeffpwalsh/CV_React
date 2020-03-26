import React from 'react'
// IMAGE IMPORT
import JPP from '../images/JPP.jpg'

//COMPONENT
const  Profile = () => {

    return (

        <div className ="container pofile_block">
            
            <img src={JPP} alt="profile picture"/>
            <br />
            <br />
            <h3> Jeff Walsh</h3>
            <h5> Junior Web Developer</h5>
            <hr />
            <a href="mailto:jeffpwalsh@gmail.com">jeffpwalsh@gmail.com</a>
            <br /> 
            <a>+27 72 157 0009</a>
            <br />
            <a href="http://linkedin.com/in/jeff-walsh-1445414a">LinkedIn</a>
            <br />
            <a href="http://github.com/jeffpwalsh">GitHub</a>
            <hr />
            <p> I built this site using React components.</p>
        
        </div>

    )
}

export default Profile;