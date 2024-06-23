import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-11/12 max-w-[600px] flex flex-col gap-2 mx-auto'>
    <NavLink to={`/blog/${post.id}`}>
        <span className=' font-bold text-xl'>{post.title}</span>
    </NavLink>

    <p>
        By {" "}
        <span className=''>{post.author  } </span> on {" "}
         
        <NavLink to ={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-semibold'>{ post.category}</span>
        </NavLink>

    </p>

    <p>Posted on <span className='underline'>{post.date}</span></p>
    <p className=''>{post.content}</p>
    <div>
        {post.tags.map((tag,index)=>(
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className=' text-blue-700 hover:text-blue-900'>{" "}#{"  "}{tag}</span>
            </NavLink>
        ))}
    </div>



    </div>
  )
}

export default BlogDetails