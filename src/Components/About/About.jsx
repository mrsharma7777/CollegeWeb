import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setplaystate }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => {
                    setplaystate(true)
                }} />
            </div>
            <div className="about-right">
                <h3>About university</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad tenetur itaque minus! Omnis esse nulla incidunt nostrum laboriosam exercitationem soluta illo, dolorem odio cum magnam obcaecati mollitia porro. Eveniet, deserunt iusto excepturi vero, repellendus autem quisquam minima consequuntur ea modi iure, dicta magnam sapiente doloribus commodi quam nihil recusandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad tenetur itaque minus! Omnis esse nulla incidunt nostrum laboriosam exercitationem soluta illo, dolorem odio cum magnam obcaecati mollitia porro. Eveniet, deserunt iusto excepturi vero, repellendus autem quisquam minima consequuntur ea modi iure, dicta magnam sapiente doloribus commodi quam nihil recusandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad tenetur itaque minus! Omnis esse nulla incidunt nostrum laboriosam exercitationem soluta illo, dolorem odio cum magnam obcaecati mollitia porro. Eveniet, deserunt iusto excepturi vero, repellendus autem quisquam minima consequuntur ea modi iure, dicta magnam sapiente doloribus commodi quam nihil recusandae!</p>
            </div>

        </div>
    )
}

export default About
