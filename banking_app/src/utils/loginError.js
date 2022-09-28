import React from 'react'


const loginError = (props) => {

    return (props.trigger) ? (
        <div className='errorPopUp z4'>
            <div className='errorPopUp-inner z4'>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default loginError