const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock database
const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', author: 'Shubhangi', date: '2024-07-26' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', author: 'Princy', date: '2024-07-27' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.', author: 'Ankita', date: '2024-07-28' },
];

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically save this to a database or send an email
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.render('contact', { title: 'Contact Us', messageSent: true });
});

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog', posts: blogPosts });
});

app.get('/blog/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.render('blogPost', { title: post.title, post });
  } else {
    res.status(404).render('404', { title: 'Post Not Found' });
  }
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});