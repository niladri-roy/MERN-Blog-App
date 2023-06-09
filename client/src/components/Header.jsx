import React, { useState } from 'react';
import {images} from '../constants'

const navItemsInfo = 
[
    {name: "Home"},
    {name: "Articles"},
    {name: "Pages"},
    {name: "Pricing"},
    {name: "FAQ"}
]

const NavItem = ({name}) => 
{
    return (
        <li className='relative group'> 
            <a href='/' className='px-4 py-2 group-hover:text-green-500'>{name} </a>
            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
        </li>
    )
}

const Header = () => 
{
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navIsVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        })
    }


    return (
        <section>
            <header className= "container mx-auto px-5 flex justify-between py-4 items-center">
                <div>
                    <img src={images.Logo} alt="" />
                </div>
                <div className='fixed top-0 bottom-0 -right-full lg:static gap-x-9 items-center'>
                    <ul className='flex gap-x-2 font-semibold'>
                        {navItemsInfo.map((item, index) => <NavItem key={index} name={item.name} />)}
                    </ul>
                    <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign In</button>
                </div>
            </header>
        </section>
    )
}

export default Header;