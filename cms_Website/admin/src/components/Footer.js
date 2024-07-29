import { useState } from 'react';
import axios from 'axios';

function Footer() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const createFooter = async () => {
    try {
      const response = await axios.post('http://localhost:3001/footer', {
        title,
        content,
      });

      if (response.status === 200) {
        setResponseMessage('Footer created successfully!');
        setTitle('');
        setContent('');
      } else {
        setResponseMessage('Error creating footer.');
      }
    } catch (error) {
      console.error('Error creating footer:', error);
      setResponseMessage('Error creating footer.');
    }
  };

  return (
    <>
      <div className="App">
        <div style={{ background: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="Title"
          />
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            placeholder="Content"
          ></textarea>
        </div>
        <button onClick={createFooter} className="button">
          Create Footer
        </button>
        {responseMessage && <p id="responsemessage">{responseMessage}</p>}
        <div className="preview-section">
          <h2>Preview content</h2>
          <div className="preview-content">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
