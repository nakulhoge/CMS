import React, { useState, useEffect } from 'react';
import axios from 'axios';

const logosec = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:5000/upload', formData)
      .then(res => {
        console.log(res);
        // After successful upload, update the image state to force a re-render
        setImage(`${res.data.image}?timestamp=${Date.now()}`);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/getImage')
      .then(res => setImage(`${res.data[0].image}?timestamp=${Date.now()}`))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <img src={`http://localhost:5000/images/${image}`} alt="Uploaded" />
    </div>
  );
};

export default logosec;