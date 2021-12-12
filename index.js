import ReactDOM from "react-dom";
import React from 'react';
import './index.css';

function Project(){
    return(
        <div>
            <h1>Let's level up your<br />brand, together</h1>
            <p>You can reach us anywhere via hi@untitledui.com</p>
            <form>
                <label><br/>Name<br/>
                    <input type='string'/>
                </label>
                <label><br/>Email<br/>
                    <input type='string'/>
                </label>
                <label><br/>Phone<br/>
                    <input type='string' maxLength={10}/>
                </label>
                <label><br/>Description<br/>
                    <input type='string'/>
                </label>
            </form>
            <br/><br/>
            <button onClick={window.location.href = "https://iksinterns.herokuapp.com/"}>send message</button>
        </div>  
    )
}


ReactDOM.render(<Project/>, document.getElementById('root'));