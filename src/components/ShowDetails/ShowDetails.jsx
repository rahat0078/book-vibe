import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utilities/addToread';

const ShowDetails = () => {

    const { bookID } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookID)

    const book = data.find(book => book.bookId === id)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleRead = (id) => {
        addToStoredReadList(id)
    }
    const handleWishList = (id) => {
        addToStoredWishList(id)
    }


    return (
        <div className='container mx-auto mb-24 flex gap-12'>
            <div className='p-12 rounded-2xl shadow flex-1 bg-[#1313130D] flex justify-center'>
                <img className=' rounded-lg shadow-xl h-[700px]' src={image} alt="" />
            </div>

            <div className='space-y-6 flex-1'>
                <h3 className='text-5xl font-bold'>{bookName}</h3>
                <h5 className='text-2xl font-semibold text-gray-500' >By: {author}</h5>
                <div className="divider"></div>
                <p className='text-xl font-semibold'>{category}</p>
                <div className="divider"></div>
                <p><span className='font-bold'>Review: </span><span className='text-gray-600'>{review}</span></p>
                <div className='flex gap-4 items-center'><span className='font-bold'>Tag: </span>
                    {
                        tags.map((t, idx) => <p key={idx} className='text-[#23BE0A] bg-[#23BE0A0D] font-semibold py-2 px-4 rounded-full'>#{t}</p>)
                    }
                </div>
                <div className='flex gap-12'>
                    <div className='text-lg font-semibold space-y-2 text-gray-500'>
                        <p>Number of Pages: </p>
                        <p>Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p>Rating: </p>
                    </div>

                    <div className='text-lg font-semibold space-y-2'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='flex gap-4 flex-grow'>
                    <button onClick={() => handleRead(bookID)} className='btn btn-outline'>Read</button>
                    <button onClick={() => handleWishList(bookID)} className='btn btn-info text-white font-semibold'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;