import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    
    const {bookId: currentBookId,tags, bookName, author, rating, category,  image, review, totalPages,publisher,yearOfPublishing} = book;

    return (
        <div className='grid lg:grid-cols-2 my-8 '>
            <div className='bg-gray-50 p-[74px] rounded-xl'>
            <img className='w-[425px] h-[564] shadow-2xl' src={image} alt="" />
            </div>

            <div className='pl-11  space-y-4'>
                <h2 className='text-4xl'>{bookName}</h2>
                <p>By: {author}</p>
                <div className="border-t-2 border"></div>
                <p>{category}</p>
                <div className="border-t-2 border"></div>
                <p>{review}</p>
                <div className="flex justify-between gap-4">
                    <p className='text-2xl font-bold'>Tag:</p>
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs text-[#23BE0A] bg-green-50">
                {tag}
              </button>
            ))}
          </div>
          
          <div className="border-t-2 border"></div>
          <div>
            <p>Number of Pages: {totalPages}</p>
            <p>Publisher: {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>
          </div>
            <div className='flex gap-10'>
            <button className="btn btn-outline">Mark as Read</button>
            <button className="btn btn-accent text-white">Add to wish list</button>
            </div>
            </div>
        </div>
    );
};

export default BookDetail;