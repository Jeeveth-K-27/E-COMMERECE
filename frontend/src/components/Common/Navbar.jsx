import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

  return (
    <>
        <nav className='flex justify-between items-center p-4'>

            {/* Logo */}
            <div>
                <Link to="/" className='text-2xl font-medium'>LOGO</Link>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex gap-4'>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
            </div>

            {/* ICONS */}
            <div className="flex justify-center items-center space-x-4">

                <Link to="/profile" className='hover:text-black'>
                    <HiOutlineUser className=' h-6 w-6 text-gray-700'/>
                </Link>

                <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className=' h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-custom-red text-white text-xs rounded-full px-1.5 py-0.3'>2</span>
                </button>

                {/* Search */}
                <div className='overflow-hidden'>
                    <SearchBar />
                </div>

                <button className='md:hidden'><HiBars3BottomRight className='h-6 w-6 text-gray-700'/></button>
            </div>

        </nav>

        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

    </>
  )
}

export default Navbar