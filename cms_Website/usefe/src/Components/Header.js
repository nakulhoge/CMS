import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function HeaderDisplay() {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    // Fetch data from the 'header-data' endpoint
    axios.get('http://localhost:3001/header-data')
      .then(response => {
        const headerDataWithType = response.data.map(d => ({ ...d, type: 'header' }));
        
        setCombinedData(prevData => {
          const newHeaderData = headerDataWithType.filter(newHeader => !prevData.some(existingData => existingData.title === newHeader.title));
          return [...prevData, ...newHeaderData];
        });
      })
      .catch(error => {
        console.error('Error fetching header data:', error);
      });
  
    // Fetch data from the 'allpages' endpoint
    axios.get('http://localhost:3001/allpages')
      .then(response => {
        const pagesTitles = response.data.map(page => ({ title: page.title, type: 'page' }));
        setCombinedData(prevData => {
          const newTitles = pagesTitles.filter(newTitle => !prevData.some(existingData => existingData.title === newTitle.title));
          return [...prevData, ...newTitles];
        });
      })
      .catch(error => {
        console.error('Error fetching pages data:', error);
      });
  }, []);

  return (
    <div className='navbar'>
      <Container fluid>
        <ul className="links">
          {combinedData.map(data => (
            <li key={data.title}>
              {data.type === 'header' && (
  <>
    {data.image && <Link to="/"><img src={data.image} style={{ height: '70px', width: '', marginLeft: '10px' }} alt="Header Icon" /> </Link>}
    {/* {data.links && data.links.map(link => (
      <Link key={link.title} to={link.url}>{link.title}</Link>
    ))} */}
                </>
              )}
              {data.type === 'page' && (
                <Link to={`/page/${data.title}`}>{data.title}</Link>
              )}
            </li>
            
          ))}
          <li> <Link to="/blogs">Blogs</Link></li>
        </ul>
      </Container>
    </div>
  );
}

export default HeaderDisplay;
