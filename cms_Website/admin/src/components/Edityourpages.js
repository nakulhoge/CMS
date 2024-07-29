import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";


const Edityourpages = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/allpages');
      const pagesTitles = response.data.map((page) => ({
        id: page._id, // Use the actual ID field from your MongoDB document
        title: page.title,
        type: 'page',
      }));
      setCombinedData((prevData) => {
        const newTitles = pagesTitles.filter(
          (newTitle) => !prevData.some((existingData) => existingData.title === newTitle.title)
        );
        return [...prevData, ...newTitles];
      });
    } catch (error) {
      console.error('Error fetching pages data:', error);
      setError('Error fetching pages data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Make API call to delete data on the backend
      await axios.delete(`http://localhost:3001/page/${id}`);
      // Remove the deleted item from the frontend state
      setCombinedData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting page:', error.response); // Log the error details
      setError('Error deleting page. Please try again later.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='editSection'>
      <h1>Page List</h1>
      <ul>
        {combinedData.map((item) => (
          <li key={item.id}>
           <span className='pagename'> {item.title}</span>
            {item.type === 'page' && (
              <>
              <div className='secbtns'>
                <Link to={`/editpage/${item.id}`}>Edit</Link>
                <Button variant="primary" className='btnnew' onClick={() => handleDelete(item.id)}>Delete</Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Edityourpages;
