import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('Blog.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])


    console.log(blogs)
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length} </h2>
        </div>
    );
};

export default Blogs;