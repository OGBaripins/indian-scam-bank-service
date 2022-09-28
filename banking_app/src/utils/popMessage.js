import React,{useEffect, useState} from 'react'

const closeTab = () =>{
    window.open("about:blank", "_self");
    window.close();
}
const PopMessage = (props) => {
    const [seconds, setSeconds] = useState(10);
    const redirectLink = props.link

    const redirect = () => {
        window.location.replace(redirectLink);
    }

    useEffect(()=>{
        seconds > 0 && setTimeout(( )=> setSeconds(seconds - 1),1000);
    }, [seconds])

    if(props.trigger == true){
        console.log("hha")
        setTimeout(() => {
            window.location.replace(redirectLink);
        }, 10000)
    }

    return (props.trigger) ? (
        <div className='popup z4'>
            <div className='popup-inner z4'>
                <h5 className='titleText' style={{color:'black'}}>Redirected in: {seconds}</h5>
                {props.children}
                <a className='popupButton z4' onClick={redirect} >
                    <h4 className='submitText z4'>Back to vendor</h4>
                </a>
            </div>
        </div>
    ) : "";
}

export default PopMessage