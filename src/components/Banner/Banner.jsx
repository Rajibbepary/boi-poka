import React from 'react';
import bannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:p-9 py-3  rounded-2xl mb-6 mt-6">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4 ">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg object-cover shadow-2xl" />
    <div >
      <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up  your bookshelf</h1>
      
      <button className="btn bg-[#23BE0A] text-white font-bold text-base mt-6">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;