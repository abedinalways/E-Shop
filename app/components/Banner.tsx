import React from 'react';


const Banner = () => {
    return (
        <div className=' bg-[url(/image/banner.png)] min-h-screen py-10 px-10'>
            <div className="flex flex-col  md:py-30 md:px-20 gap-3">
                <p className='text-white font-bold z-10 mt-10 '>BEST SELLER SINCE 2010</p>
                <h1 className='md:text-8xl font-extrabold text-white font-[sora]'>Dress <br/>Smart,<br/>Look<br/>Trandy <br/></h1>
                <p className='text-white font-bold py-2'>Take 20% Off for the new look</p>
                <button className='text-white font-bold rounded-lg border py-3 border-white w-50'>Explore More</button>
            </div>

        </div>

    );
};

export default Banner;