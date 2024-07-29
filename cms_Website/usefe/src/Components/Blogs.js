import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from './Category';


function Blogs() {
  /*const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs data:', error);
      });
  }, []);*/

  return (
    <div className='cotainer'>
      

      {/*<div>
        
        {blogs.map((item,id)=>{
          return(
            <div className='row'>
              <div className='col-md-9'>
              <h2>{item.title}</h2>
              <h2>{item.summary}</h2>
             
                <Link to={`/blog/${item._id}`}>Read More</Link>
                </div>
              <div className='col-md-3'>
              <h5>Category: {item.category}</h5>
              </div>
            </div>
          )
        })}
      </div>*/}

      <Category/>
    </div>
  );
}

export default Blogs;
