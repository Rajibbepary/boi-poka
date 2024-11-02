
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();

    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const {bookId: currentBookId, image, bookName, author, review, category, tags, totalPages, publisher, yearOfPublishing, rating} = book;


    const handleMarkAsRead = () =>{
        
    }



    return (
        <div className='mb-6 flex flex-row gap-8 px-20 py-4'>
           <div className='p-12 bg-slate-50 basis-5/12'>
           <img className='rounded-md w-full h-full object-cover ' src={image} alt="" srcset="" />
           </div>
            
            <div className='basis-7/12'>
                <h1 className='text-3xl font-bold mb-4'>{bookName}</h1>
                <p className='text-base text-gray-500 mb-3'>By: {author}</p>
                <div className='border-b-2'></div>
                <p className='text-gray-500 py-3'>{category}</p>
                <div className='border-b-2 '></div>
                <p className='text-gray-500 mt-3'><span className=' text-xl text-black font-semibold'>Review</span> {review}</p>
                <div className='flex gap-8 mt-4'>
                    <p >Tags</p>
                        {
                            tags.map((tag, index) => <button 
                                key={index}
                                className="btn btn-sm bg-green-50 text-green-400">{tag}</button>)
                        }
                    </div>
               <p className='text-gray-500'>Number of page: <span className='font-bold text-black ml-8 mt-4'>{totalPages}</span></p> 
               <p className='text-gray-500'>Publish: <span className='font-bold text-black ml-8 mt-4'> {publisher}</span></p> 
               <p className='text-gray-500'>Year of Publishing: <span className='font-bold text-black ml-8 mt-4'> {yearOfPublishing}</span></p> 
               <p className='text-gray-500'>Rating: <span className='font-bold text-black ml-8 mt-4'>{rating}</span></p>  
            <div>
            <button onClick={handleMarkAsRead} class="btn btn-outline mr-4 btn-accent">Mark as Red</button>
            <button class="btn btn-outline btn-accent">Add to Whish List</button>
            </div>
            </div>
        </div>
    );
};

export default BookDetail;