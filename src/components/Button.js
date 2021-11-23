import React, { useState } from 'react';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Button = ({color,text,textColor,hover, hoverText, icon}) => {
    const [isShown, setIsShown] = useState(true);
    return (
        <div>
            <button
             onMouseEnter={() => setIsShown(false)} 
             onMouseLeave={() => setIsShown(true)} type="button" 
             className={`${ isShown ? color: hover} ${isShown ? textColor: hoverText} shadow-md py-3 px-6 rounded-md transition duration-300`}
             >
            {text} {

            icon === 'apple' ? <AppleIcon/> : 

            icon === 'andriod' ? <AndroidIcon/> 
            : null
            }
            
             </button>
        </div>
    )
}

export default Button
