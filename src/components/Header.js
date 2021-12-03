import Hamb from "./Hamb"


const Header = () => {
    return (
        <nav className="container flex items-center py-4 mt-4 sm:mt-12"> 
           <div className='py-1 w-1/6 h-1/6'><img src='/img/car-care-logo-icon-design-vector-22560870.jpg' alt="logo" /></div>
           <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs'>
           <a href="#Features"><li className="cursor-pointer">Features</li></a>
           <a href="#Download"> <li className="cursor-pointer">Download</li></a>
           <a href="#Contact"> <li className="cursor-pointer">Contact</li></a>
               <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
           </ul>
           <div className="flex sm:hidden flex-1 justify-end text-2xl"><Hamb/></div>
        </nav>
    )
}

export default Header
