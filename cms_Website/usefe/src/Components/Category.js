import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [originalProductData, setOriginalProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/blogs`)
      .then((res) => res.json())
      .then((jsonRes) => {
        setBlogs(jsonRes);
        setOriginalProductData(jsonRes);
        setFilteredProductData(jsonRes);

        const uniqueCategories = [...new Set(jsonRes.map((item) => item.category))];
        setUniqueCategories(uniqueCategories);
      });
  }, []);

  const filterCategory = (catItem) => {
    if (catItem === 'All') {
      setFilteredProductData(originalProductData);
    } else {
      const result = originalProductData.filter((curData) => curData.category === catItem);
      setFilteredProductData(result);
    }
    setSearchTerm(''); // Clear search term when filtering by category
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterByName = () => {
    const result = originalProductData.filter(
      (curData) =>
        curData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curData.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProductData(result);
  };

  return (
    <div className='container blogs'>
      <h1 className='mt-5'>Blog</h1>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-9'>
            <div className='row'>
              {filteredProductData.map((blog, id) => (
                <div className='col-md-12 mb-3' key={id}>
                  <div class="blagsec">
                    <div class="blagsec_title">{blog.title}</div>
                    <div class="blagsecinner">
                      <p class="blagsecinnertext">{blog.summary}</p>
                      <Link to={`/blog/${blog._id}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='allserchbox'>
            <input
              className=''
              type='text'
              placeholder='Search by name'
              value={searchTerm}
              onChange={handleSearchChange}
            />
      
            <button className='btn btn-primary ml-2 mt-1 mb-2' onClick={filterByName}>
              Search
            </button>
            </div>
            <button className='w-100 mb-2 detailsbtn' onClick={() => filterCategory('All')}>
              All
            </button>
            {uniqueCategories.map((category, index) => {
              const categoryLength = originalProductData.filter((curData) => curData.category === category).length;
              return (
                <button
                  className='w-100 mb-2 detailsbtn'
                  key={index}
                  onClick={() => filterCategory(category)}
                >
                  {category} ({categoryLength})
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
