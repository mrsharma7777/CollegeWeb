import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';


const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "56fc2450-061c-40d0-ada1-ea79e36488fe");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message<img src={msg_icon}></img></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores alias quos eos iste ratione omnis sit voluptatem ut iusto enim temporibus totam, nemo distinctio, dignissimos sed. Libero, voluptatibus dolor.</p>
                <ul>
                    <li><img src={mail_icon}></img>Contact@ParadiseComputer</li>
                    <li><img src={phone_icon}></img>+7464612184</li>
                    <li><img src={location_icon}></img>77 street Locus valley,Ave mansion<br />EA 08090,Uk</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" required placeholder='Enter your name'></input>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your Phone number"></input>
                    <label>Write Your Msg Here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="FFFF"></img></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact