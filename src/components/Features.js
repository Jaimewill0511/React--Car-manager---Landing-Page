import React from 'react'
import Button from './Button';
import Image from './Image';


 const Features = () => {
    return (
        <section id="Features" className="bg-bookmark-white py-20 mt-20 lg:mt-60">
        {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className='text-3xl text-center text-bookmark-blue'>Features</h1>
                <p className="text-center text-bookmark-grey mt-4">
                Our aim is to make it simple and quick for you to get vital information about your vehicle. 
                Your vehicles sync in real time with your devices, 
                allowing you to access them from anywhere and at any time.
                </p>
            </div>
            {/* Feature #1 */}
            <div className='relative mt-20 lg:mt-24'>
                <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
                    <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                    <Image link ={'/img/feature-1.png'}/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className='text-3xl text-bookmark-blue'>Get started in one click</h1>
                        <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                            Manage your cars anytime ,anywhere and however you like. Our simple drag and drop interface gives you complete control over how you manage your cars.
                        </p>
                        <Button 
                        color={'bg-bookmark-purple'}
                        hoverText={'text-black'} 
                        hover={'bg-bookmark-white'} 
                        text={`More info`} />
                    </div>
                </div>
                <div className="
                hidden 
                overflow-hidden
                lg:block 
                bg-bookmark-purple 
                rounded-r-full 
                absolute 
                h-80 
                w-2/4 
                -bottom-24
                -left-36"
                />
            </div>
            
            {/* Feature #2 */}
            <div className='relative mt-20 lg:mt-52'>
                <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
                    <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                    <Image link ={'/img/feature-2.png'}/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className='text-3xl text-bookmark-blue'>Intelligent control</h1>
                        <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                        Powerful features that allow you unmatched control over your vehicle. There's no need to even be close to the vehicle.
                        </p>
                        <Button 
                        color={'bg-bookmark-purple'}
                        hoverText={'text-black'} 
                        hover={'bg-bookmark-white'} 
                        text={`More info`} />
                    </div>
                </div>
                <div className="
                hidden 
                overflow-hidden
                lg:block 
                bg-bookmark-purple 
                rounded-l-full 
                absolute 
                h-80 
                w-2/4 
                -bottom-24
                -right-0"
                />
            </div>


            {/* Feature #3 */}
            <div className='relative mt-20 lg:mt-52'>
                <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
                    <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                    <Image link ={'/img/feature-3.png'}/>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className='text-3xl text-bookmark-blue'>Awe-Inspiring Temperature Controls</h1>
                        <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                        With a push of a button, you can simply activate auto-drive . Using the slider, you can easily adjust the temperature of your vehicle to fit your climate.😉
                        </p>
                        <Button 
                        color={'bg-bookmark-purple'}
                        hoverText={'text-black'}  
                        hover={'bg-bookmark-white'} 
                        text={`More info`} />
                    </div>
                </div>
                <div className="
                hidden 
                overflow-hidden
                lg:block 
                bg-bookmark-purple 
                rounded-r-full 
                absolute 
                h-80 
                w-2/4 
                -bottom-24
                -left-36"
                />
            </div>
            
        </section>
    )
}
export default Features