import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/blogs/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='backbtn'> <Link to="/blogs"> {`<`} Back </Link> </div>
    <div className='blogdetails'>
      <h3>{blog.title}</h3>
      <p>{blog.summary}</p>
      {/* <p>Category: {blog.category}</p> */}
      {blog.image && <img src={`data:image/jpeg;base64,${blog.image}`} alt="Blog image" />}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>


    </div>
  );
}

export default BlogDetails;
