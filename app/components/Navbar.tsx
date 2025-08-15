import React from 'react';
import Link from "next/link";
import {CircleUser, Search, ShoppingCart} from "lucide-react";

const Navbar = () => {
    return (
        <div className='fixed top-0 w-full font-bold'>
            <div className='flex items-center justify-between px-16 py-4 bg-[#F4F7E0]  shadow-2xl z-100'>
                <div className='font-[suse] font-extrabold text-xl '>Renevo</div>
                <div className='font-[sora] text-md'>
                    <ul className="flex gap-5 items-center">
                        <li>Home</li>
                        <li>Product</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-4 items-center">
                        <li> <Link href='#'> <ShoppingCart/> </Link></li>
                        <li> <Link href='#'><CircleUser/></Link></li>
                        <li> <Link href='#'> <Search /> </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;