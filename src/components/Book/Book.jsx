
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
const {image, bookName, author, tags, category, rating, bookId} = book

    return (

<Link to={`/books/${bookId}`}>
<div className="card bg-base-100 border p-4">
  <figure className='bg-[hsla(0,0%,95%,1)] p-6 rounded-md'>
    <img
      src={image} className='h-[200px] w-[300px] object-cover rounded-md'
      alt="Books image" />
  </figure>
  <div className='flex justify-around mt-4'>
                        {
                            tags.map((tag, index) => <button 
                                key={index}
                                className="btn btn-sm bg-green-50 text-green-400">{tag}</button>)
                        }
                    </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
    </h2>
    <p>By: {author}</p>
    <div className='border-b-2 m-1 border-dotted'></div>
    <div className="flex justify-between">
      <p>{category}</p>
      <p>{rating} <i class="fa-regular fa-star"></i></p>
    </div>
  </div>
</div>

</Link>

    );
};

export default Book;