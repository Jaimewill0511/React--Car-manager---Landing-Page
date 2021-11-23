import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div>
            <section className="bg-bookmark-purple text-white py-20">
                <div className="container">
                    <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                        <p className="font-light uppercase text-center mb-8">15,000+ ALREADY JOINED</p>
                        <h1 className="text-3xl text-center">Stay up-to-date with what we’re doing</h1>
                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"/>
                            <button type="button" className="shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-red hover:bg-bookmark-white hover:text-black">
                                Contact Us
                            </button>
                        </div>    
                    </div>
                </div>
            </section>
            <footer className="bg-bookmark-blue py-8">
                <div className="container flex flex-col md:flex-row items-center">
                    <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <img className='py-1 w-1/12 h-1/12' src='/img/car-care-logo-icon-design-vector-22560870.jpg' alt="logo" />
                        <ul className="flex text-white uppercase gap-12 text-xs">
                            <li className="cursor-pointer">Features</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </div>
                    <div className='text-center px-4'>
                        <p>Created with love by BW </p>
                    </div>
                    <div className="flex gap-10 mt-12 md:mt-0">
                    <li><TwitterIcon className="text-white text-2xl"/></li>
                    <li><FacebookIcon className="text-white text-2xl"/></li>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
