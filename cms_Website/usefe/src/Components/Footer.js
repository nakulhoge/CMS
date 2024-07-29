import React from 'react'
import { Container } from 'react-bootstrap'
import Placeholder from 'react-bootstrap/Placeholder'

import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Footer() {

    const [footerData, setFooterData] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
  
    useEffect(() => {
      axios.get('http://localhost:3001/footer-data')
        .then(response => {
          setFooterData(response.data);
        })
        .catch(error => {
          console.error('Error fetching footer data:', error);
        });
    }, []);
  return (
    <>
    <div className="App">
        <div>
          {/* Render your footer data */}
          {footerData.map(data => (
            <div key={data._id}>
              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        {responseMessage && <p id="responsemessage">{responseMessage}</p>}
      </div>
    </>
  );
}
    

