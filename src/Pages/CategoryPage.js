import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className='max-w-[800px] mx-auto'>
    <Header />
    <div className='mt-24'>
    <button className=' ml-10 border-gray-300 px-2 cursor-pointer hover:bg-blue-600 rounded-md p-2 border-2 w-20' onClick={()=>navigate(-1)}>Back</button>
    <h2 className=' text-center -mt-[40px]  text-2xl text-slate-600 font-bold underline '>
      Blogs Tagged with <span>#{category}</span>
    </h2>
    </div>
   
    <div className='-mt-[50px]'>
      <Blogs />
      <Pagination />
    </div>
  </div>
);}

export default CategoryPage