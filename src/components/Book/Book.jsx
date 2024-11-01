import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {

    const { bookId, bookName, author, image, rating, category, tags, } = book

    return (
        <div className="rounded-2xl p-6 border">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl flex justify-center mb-8'>
                <img
                    src={image}
                    className='w-[166px] h-[212px] rounded'
                    alt="Shoes" />
            </figure>
            <div className="space-y-4">
                <div className='flex gap-4 '>
                    {
                        tags.map((t, idx) => <p key={idx} className='text-[#23BE0A] bg-[#23BE0A0D] font-semibold py-2 px-4 rounded-full'>#{t}</p>)
                    }
                </div>
                <h3 className='text-2xl font-bold'>{bookName}</h3>
                <h5 className='border-b-2 border-dashed pb-5 font-bold text-gray-500' >By: {author}</h5>
                <div className='flex justify-between font-semibold text-gray-600'>
                    <p>{category}</p>
                    <p className='flex gap-2 items-center'>{rating} <FaRegStar /></p>
                </div>
                <div className='flex justify-end'>
                    <Link to={`/books/${bookId}`}>
                        <button className='btn btn-outline btn-success text-lg'>Show Details</button>

                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Book;