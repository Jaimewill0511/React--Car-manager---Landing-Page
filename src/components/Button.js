import React, { useState } from 'react';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Button = ({color,text,textColor,hover, hoverText, icon}) => {
    const [isShown, setIsShown] = useState(true);
    return (
        <div className='relative'>
            <button
             onMouseEnter={() => setIsShown(false)} 
             onMouseLeave={() => setIsShown(true)} type="button" 
             className={`${ isShown ? color: hover} ${isShown ? textColor: hoverText} shadow-md py-3 px-6 rounded-md transition duration-300`}
             >
            {text} <span className='absolute top-2 left-34 '>
            {

icon === 'apple' ? <AppleIcon/> : 

icon === 'andriod' ? <AndroidIcon/> 
: null
}
            </span>
            
             </button>
        </div>
    )
}

export default Button
