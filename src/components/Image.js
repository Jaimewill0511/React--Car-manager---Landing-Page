import React from 'react'

const Image = ({link}) => {
    return (
            <img 
            className="
            w-5/6 
            h-5/6 
            sm:h-3/4 
            sm:w-3/4 
            md:w-full 
            md:h-full 
            rounded-lg" 
            src= {link}
            alt="hero"/>
    
    )
}

export default Image
