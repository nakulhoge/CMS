import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PageDetails = () => {
  const { title } = useParams();
  const [pageDetails, setPageDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/pages1/${title}`)
      .then(response => {
        setPageDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching page details:', error);
      });
  }, [title]);

  if (!pageDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='pageSection'>
      <h1>{pageDetails.title}</h1>
      <p>{pageDetails.summary}</p>
      {pageDetails.image && <img src={`data:image/jpeg;base64,${pageDetails.image}`} alt="Page Preview" />}
      <div dangerouslySetInnerHTML={{ __html: pageDetails.paragraph }} />
    </div>
  );
};

export default PageDetails;
