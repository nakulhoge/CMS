import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2,  3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function Addnewpage() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [paragraph, setparagraph] = useState('');
  const [image, setImage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.split(',')[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/pages', {
        title,
        summary,
        paragraph,
        image,
      });

      if (response.status === 201) {
        setResponseMessage('Page created successfully!');
        setTitle('');
        setSummary('');
        setparagraph('');
        setImage('');
      } else {
        setResponseMessage('Error creating Page.');
      }
    } catch (error) {
      console.error('Error creating Page:', error);
      setResponseMessage('Error creating Page.');
    }
  };

  return (
    <>
      
      <div className="App">
        <h1> Add Your Pages</h1>
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        </div>
        <div>
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder='Summary' />
        </div>
        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div>
          <ReactQuill
            value={paragraph}
            onChange={(value) => setparagraph(value)}
            modules={modules}
            formats={formats}
          />
        </div>
        <button onClick={createUser} className='button'>Create Page</button>
        {responseMessage && <p id='responsemessage'>{responseMessage}</p>}

        <div className="preview-section">
          <h2>Preview content</h2>
          <div className="preview-content">
            <h3>{title}</h3>
            <p>{summary}</p>
            {image && <img src={`data:image/jpeg;base64,${image}`} alt="Preview" />}
            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Addnewpage;
