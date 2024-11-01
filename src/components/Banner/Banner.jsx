import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div  className='px-[120px] py-24 bg-[#1313130D] rounded-3xl mb-24 flex justify-between flex-wrap items-center'>
            <div>
                <h1 className='text-6xl font-bold leading-normal mb-14'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success text-lg text-white'>View The List</button>
            </div>
            <div>
                <img className='w-full rounded-xl' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;