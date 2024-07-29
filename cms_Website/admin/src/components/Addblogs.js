import React, { useState, useEffect } from 'react';
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

function AddNewBlog() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

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

  const createBlog = async () => {
    try {
      const response = await axios.post('http://localhost:3001/blogs', {
        title,
        summary,
        content,
        image,
        category: newCategory || category, // Use newCategory if set, otherwise use category
      });

      if (response.status === 201) {
        setResponseMessage('Blog created successfully!');
        setTitle('');
        setSummary('');
        setContent('');
        setImage('');
        setCategory('');
        setNewCategory('');
      } else {
        setResponseMessage('Error creating Blog.');
      }
    } catch (error) {
      console.error('Error creating Blog:', error);
      setResponseMessage('Error creating Blog.');
    }
  };

  return (
    <>
      <div className="App">
        <h1>Add Your Blog</h1>
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        </div>
        <div>
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder='Summary' />
        </div>
        <div className='choosefile'>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div>
<div className='category'>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category...</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option> // Assuming each category is a string
            ))}
          </select>
          </div>
          
          <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Or create new category" />
        </div>
        <div>
          <ReactQuill
            value={content}
            onChange={(value) => setContent(value)}
            modules={modules}
            formats={formats}
          />
        </div>
        <button onClick={createBlog} className='button'>Create Blog</button>
        {responseMessage && <p id='responsemessage'>{responseMessage}</p>}

        <div className="preview-section">
          <h2>Preview content</h2>
          <div className="preview-content">
            <h3>{title}</h3>
            <p>{summary}</p>
            {image && <img src={`data:image/jpeg;base64,${image}`} alt="Preview" />}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewBlog;
