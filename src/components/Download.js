import React from 'react'

import Button from './Button';

const Download = () => {
    return (
        <section id="Download" className='py-20 mt-20'>
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-blue">Download the app</h1>
                <p className="text-center text-bookmark-grey mt-4">
                We’ve got more apps in the pipeline. Please do let us know if you’ve got a feature you’d like us to
                implement.
                </p>
            </div>
            {/* Cards */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16'>
                    {/* Card-1 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img className="h-16 w-16" src='/img/Windows.svg' alt=''/>
                            <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>Download for Windows</h3>
                            <p className='mb-2 text-bookmark-grey font-light'>WIndows 10</p>
                            
                        </div>
                        <hr className='border-b border-bookmark-white' />
                            <div className='flex justify-center p-6'>
                            <Button 
                            color={'bg-bookmark-purple'}
                            hoverText={'text-black'} 
                            hover={'bg-bookmark-white'} 
                            text={`Install`} />
                            </div>
                    </div>
                    {/* Card-2 */}
                    <div className="flex flex-col rounded-md shadow-md lg:my-8">
                        <div className="p-6 flex flex-col items-center">
                            <img className="h-16 w-16" src='/img/Apple.svg' alt=''/>
                            <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>Download for MacOS</h3>
                            <p className='mb-2 text-bookmark-grey font-light'>macOS 10.15 Catalina</p>
                            
                        </div>
                        <hr className='border-b border-bookmark-white' />
                            <div className='flex justify-center p-6'>
                            <Button 
                            color={'bg-bookmark-purple'}
                            hoverText={'text-black'} 
                            hover={'bg-bookmark-white'} 
                            text={`Install`} />
                            </div>
                    </div>
                    {/* Card-3 */}
                    <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                        <div className="p-6 flex flex-col items-center">
                            <img className="h-16 w-16" src='/img/Linux.svg' alt='linux logo'/>
                            <h3 className='mt-5 mb-2 text-bookmark-blue text-lg'>Download for Linux</h3>
                            <p className='mb-2 text-bookmark-grey font-light'>Ubuntu</p>
                            
                        </div>
                        <hr className='border-b border-bookmark-white' />
                            <div className='flex justify-center p-6'>
                            <Button 
                            color={'bg-bookmark-purple'}
                            hoverText={'text-black'} 
                            hover={'bg-bookmark-white'} 
                            text={`Install`} />
                            </div>
                    </div>
                    
            </div>
            
        </section>
    )
}

export default Download
