import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
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

function EditPage() {
  const { id } = useParams();
  const [pageTitle, setPageTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    fetchPageData();
  }, [id]);

  const fetchPageData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pages/${id}`);

      const pageData = response.data;
      setPageTitle(pageData.title);
      setSummary(pageData.summary);
      setParagraph(pageData.paragraph);
      setImage(pageData.image);
    } catch (error) {
      console.error('Error fetching page data:', error);
      setResponseMessage('Error fetching page data.');
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

  const updatePage = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/pages/${id}`, {
        title: pageTitle,
        summary,
        paragraph,
        image,
      });

      if (response.status === 200) {
        setResponseMessage('Page updated successfully!');
      } else {
        setResponseMessage('Error updating Page.');
      }
    } catch (error) {
      console.error('Error updating Page:', error);
      setResponseMessage('Error updating Page.');
    }
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} placeholder='Title' />
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
          onChange={(value) => setParagraph(value)}
          modules={modules}
          formats={formats}
        />
      </div>
      <button onClick={updatePage} className='button'>Update Page</button>
      {responseMessage && <p id='responsemessage'>{responseMessage}</p>}

      <div className="preview-section">
        <h2>Preview content</h2>
        <div className="preview-content">
          <h3>{pageTitle}</h3>
          <p>{summary}</p>
          {image && <img src={`data:image/jpeg;base64,${image}`} alt="Preview" />}
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
      </div>
    </div>
  );
}

export default EditPage;
