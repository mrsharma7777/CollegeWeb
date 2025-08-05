import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import users_1 from '../../assets/user-1.png'
import users_2 from '../../assets/user-2.png'
import users_3 from '../../assets/user-3.png'
import users_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider=useRef();
    let tx=0;

 const slideForward=()=>{
    if(tx >-50){
        tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

 }
 const slideBackward=()=>{
    if(tx <0){
        tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
    
 }


    return (
        <div className='testimonials'>
            <img src={next_icon} onClick={slideForward} alt='' className='next-btn'></img>
            <img src={back_icon} onClick={slideBackward} alt='' className='back-btn'></img>
            
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={users_1} alt=''></img>
                                <div>
                                    <h3>Genpact 1</h3>
                                    <span>Edusity,Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque error minima dolorum aperiam consectetur praesentium tempora consequuntur veritatis cupiditate impedit, ex eos sunt ipsa, aspernatur repellendus magnam rem ab?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={users_2} alt=''></img>
                                <div>
                                    <h3>Genpact 2</h3>
                                    <span>Edusity,Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque error minima dolorum aperiam consectetur praesentium tempora consequuntur veritatis cupiditate impedit, ex eos sunt ipsa, aspernatur repellendus magnam rem ab?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={users_3} alt=''></img>
                                <div>
                                    <h3>Genpact 3</h3>
                                    <span>Edusity,Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque error minima dolorum aperiam consectetur praesentium tempora consequuntur veritatis cupiditate impedit, ex eos sunt ipsa, aspernatur repellendus magnam rem ab?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={users_4} alt=''></img>
                                <div>
                                    <h3>Genpact 4</h3>
                                    <span>Edusity,Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque error minima dolorum aperiam consectetur praesentium tempora consequuntur veritatis cupiditate impedit, ex eos sunt ipsa, aspernatur repellendus magnam rem ab?
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
