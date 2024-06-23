import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const location = useLocation();
  // eslint-disable-next-line
  const[searchPage,setSearchPage]=useSearchParams();

  useEffect(()=>{
    const page = searchPage.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),null,category)

    }
    else{
      fetchBlogPosts(Number(page));
    }
// eslint-disable-next-line
  },[location.pathname,location.search]);


  return (

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/blog/:blogId" element={<BlogPage/>} />
    <Route path="/tags/:tag" element={<TagPage/>} />
    <Route path="/categories/:category" element={<CategoryPage/>} />



    </Routes>

    
  );
}
