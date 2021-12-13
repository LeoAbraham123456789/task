import ReactDOM from "react-dom";
import React from 'react';
import './index.css';
import image from './image.jpg';

function Project(){
    return(
        <div>
            <div><img src={image}/></div>
            <div className="text">
            <h1>Let's level up your<br />brand, together</h1>
            <p>You can reach us anywhere via hi@untitledui.com</p>
            <form>
                <label><br/>Name<br/>
                    <input className="name" type='string' placeholder="Your name"/>
                </label>
                <br/>
                <label><br/>Email<br/>
                    <input className="email" type='string' placeholder="you@company.com"/>
                </label>
                <br/>
                <label><br/>Phone<br/>
                    <input className="phone" type='string' maxLength={10} placeholder="+1 (555) 000-0000"/>
                </label>
                <br/>
                <label><br/>How can we help?<br/>
                    <input className="desc" type='string' placeholder="Tell us a little about the project..."/>
                </label>
                <br/><br/>
                <label className="send_btn" >Send message</label>    
            </form>
            </div>
        </div>  
    )
}


ReactDOM.render(<Project/>, document.getElementById('root'));