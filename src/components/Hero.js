import * as React from 'react';
import Button from './Button';
import Image from './Image';
import Roundedrec from './Roundedrec';



const Hero = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Smart Car Manager 
                    </h2>
                    <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                    A clean and simple interface to manage your cars. Open the app and see your cars' current status instantly. It's completely free to try.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                    <Button
                     color={'bg-bookmark-purple'}
                      hoverText={'text-black'} 
                      hover={'bg-bookmark-white'} 
                      text={`Get it on Andriod`}  
                      textColor={'text-white'}
                      icon={'andriod'}
                      />
                    
                    <Button 
                     color={'bg-bookmark-white'}
                     hoverText={'text-white'} 
                     hover={'bg-bookmark-purple'} 
                     text={`Get it on iOS `} 
                     icon={'apple'}

                     />
                    </div>
                </div>
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 rounded-lg">
                    <Image link ={'/img/hero-bg (2).png'}/>
                </div>
            </div>
            <Roundedrec/>
        </section>
    )
}

export default Hero
