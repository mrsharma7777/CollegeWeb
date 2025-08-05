import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident, nam obcaecati, maxime itaque neque ab voluptate vel explicabo eius similique recusandae soluta aperiam repudiandae pariatur eos odio rerum. Sint?
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla itaque sed cupiditate, illum exercitationem excepturi similique debitis accusamus officia, sunt quibusdam consequatur, maxime vel quos deserunt ex placeat praesentium? Deleniti.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt=''></img></button>
            </div>

        </div>
    )
}

export default Hero
