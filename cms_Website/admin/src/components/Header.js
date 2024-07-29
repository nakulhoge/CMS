import React, { useState } from 'react';
import axios from 'axios';

function Header({ title }) {
  const [headerImage, setHeaderImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleHeaderImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeaderImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    try {
      const response = await axios.post('http://localhost:3001/header', {
        title: '', // No title sent for image upload
        image: headerImage,
      });

      if (response.status === 200) {
        setResponseMessage('Header image uploaded successfully!');
        setHeaderImage(null);
      } else {
        setResponseMessage('Error uploading header image.');
      }
    } catch (error) {
      console.error('Error uploading header image:', error);
      setResponseMessage('Error uploading header image.');
    }
  };

 
  return (
    <>
      <div style={{ background: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
        <div className="navbar">
          <div className='logo'>
            <input type="file" onChange={handleHeaderImageChange} accept="image/*" />
            <button onClick={handleImageUpload} className='button'>
              Upload Header Image
            </button>
          </div>
          {responseMessage && <p id='responsemessage'>{responseMessage}</p>}
          {/* { <button onClick={handleTitleSet} className='button'>
            Set Title
          </button> } */}
        </div>

        <div className="preview-section">
          <h2>Preview content</h2>
          <div className="preview-content">
            <h3>{title}</h3>
            {headerImage && <img src={headerImage} alt="Preview" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
