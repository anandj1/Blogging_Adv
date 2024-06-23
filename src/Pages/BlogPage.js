import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {
    const newUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog]=useState(null);
    const[relatedBlogs,setRelatedBlogs]=useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const{loading,setLoading}= useContext(AppContext)
    const blogId= location.pathname.split("/").at(-1)


    async function fetchBlog(){
        setLoading(true);
        const url = `${newUrl}get-blog?blogId=${blogId}`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);


        }
        catch(error){
            console.log("Error!")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(blogId){
            fetchBlog()
        }
    // eslint-disable-next-line
    },[location.pathname])
  return (
    <div>
    <Header/>
    <div>
    
    <button onClick={()=>navigation(-1)}>Back</button>

    </div>
    {
        loading?(
            <div>
                <p>Loading</p>
            </div>
        ):(blog?
        (<div className='mt-16 flex flex-col mb-4 gap-4 '>
        <div><BlogDetails post ={blog}/></div>
        <div>
        <h2 className=' text-center font-bold text-2xl py-4 underline uppercase text-slate-700'>Related Blogs</h2>
        </div>
            
          
            {
                relatedBlogs.map((post)=>(
                    <div key={post.id}>
                        <BlogDetails post={post}/>
                    </div>
                ))
            }
        </div>):
        (<div>
            <p>No Blog Found</p>
        </div>))
        
        
    }
         
    </div>
  )
}

export default BlogPage