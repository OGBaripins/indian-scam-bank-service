import React from 'react'
import { Link } from 'react-router-dom'
const closeTab = () =>{
    window.open("about:blank", "_self");
    window.close();
}
const PopMessage = (props) => {
    if (props == true) {
        return(
        <div className='popup z4'>
            <div className='popup-inner z4'>
                {props.children}
                <a className='popupButton z4'  target="_blank" href="https://www.youtube.com/watch?v=4Jui6Prje6o&ab_channel=MemesOutOfMyWorld">
                    <h4 className='submitText z4'>Back to wender</h4>
                </a>
            </div>
        </div>
        )
    } else {
        return("")
    }
}

export default PopMessage