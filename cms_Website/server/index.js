
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Schema, model } = mongoose;

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranavbhujbal2001:user@cluster0.eh7gy8i.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("connected to db")
});

app.use(cors());
app.use(express.json({ limit: "20mb" }));

// Define schema models for user
const PostSchema = new Schema({
  title: String,
  summary: String,
  paragraph: String,
  image: String,
});

const PageSchema = new Schema({
  title: String,
  summary: String,
  paragraph: String,
  image: String,
});

const headerSchema = new Schema({
  image: String,
});
  

const PageContentSchema = new Schema({
  objectId: String, // objectId to identify the page content
  content: String,
});

const BlogSchema = new Schema({
  title: String,
  summary: String,
  content: String,
  image: String,
  category: String,
});

const PageContentModel = model('PageContent', PageContentSchema);
const PostModel = model('User', PostSchema);
const PostModel2 = model('Header', headerSchema);
const PostModel3 = model('Addnewpage',PageSchema);
const BlogModel = model('Blog', BlogSchema);

app.use(bodyParser.json());

// Endpoint to fetch page content based on objectId
app.get('/page-content/:objectId', async (req, res) => {
  try {
    const { objectId } = req.params;
    const pageContent = await PageContentModel.findOne({ objectId });
    res.json(pageContent);
  } catch (error) {
    console.error('Error fetching page content:', error);
    res.status(500).json({ error: 'Error fetching page content' });
  }
});

// Endpoint to create a new post
app.post('/post', async (req, res) => {
  try {
    const { title, summary, paragraph, image } = req.body;
    const newPost = new PostModel({ title, summary, paragraph, image });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.post('/pages', async (req, res) => {
  try {
    const { title, summary, paragraph, image } = req.body;
    const newPost = new PostModel3({ title, summary, paragraph, image });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating page:', error);
    res.status(500).json('Internal Server Error');
  }
});

// Endpoint to create a new header

app.post('/header', async (req, res) => {
  try {
    const { image } = req.body;
    const newHeader = new PostModel2({image});
    const savedHeader = await newHeader.save();
    res.status(200).json(savedHeader);
  } catch (error) {
    console.error('Error creating header:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/header-data', async (req, res) => {
  try {
    const headerData = await PostModel2.find();
    console.log('Header Data:', headerData); 
    res.json(headerData);
  } catch (error) {
    console.error('Error fetching header:', error);
    res.status(500).json({ error: 'Error fetching header' });
  }
});

// app.put('/header-data/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { image } = req.body;

//     const updatedimage = await PostModel2.findByIdAndUpdate(
//       id,
//       { image },
//       { new: true }
//     );

//     if (updatedimage) {
//       res.status(200).json(updatedimage);
//     } else {
//       res.status(404).json({ error: 'Page not found' });
//     }
//   } catch (error) {
//     console.error('Error updating page:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



app.get('/allposts', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.get('/allpages', async (req, res) => {
  try {
    const posts = await PostModel3.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json('Internal Server Error');
  }
});
app.get('/pages1/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const page = await PostModel3.findOne({ title });
       
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json('Internal Server Error');
  }
});

// Endpoint to fetch a specific page based on id
app.get('/pages/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const page = await PostModel3.findById(id);

    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json('Internal Server Error');
  }
});


app.delete('/page/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPage = await PostModel3.findByIdAndDelete(id);

    if (deletedPage) {
      res.status(200).json(deletedPage);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error deleting page:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to update a specific page based on _id
app.put('/pages/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, summary, paragraph, image } = req.body;

    const updatedPage = await PostModel3.findByIdAndUpdate(
      id,
      { title, summary, paragraph, image },
      { new: true }
    );

    if (updatedPage) {
      res.status(200).json(updatedPage);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/blogs', async (req, res) => {
  try {
    const { title, summary, content, image, category } = req.body;
    const newBlog = new BlogModel({ title, summary, content, image, category });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.get('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findById(id);

    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/categories', async (req, res) => {
  try {
    const categories = await BlogModel.distinct('category');

    if (categories.length > 0) {
      res.json(categories);
    } else {
      res.status(404).json({ error: 'No categories found' });
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
