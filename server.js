const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));
  
// Serve static files (like index.html and styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    if (name && email) {
        console.log(`Received submission: Name = ${name}, Email = ${email}`);
        res.json({ message: 'Thank you for submitting your information!' });
    } else {
        res.status(400).json({ message: 'Name and Email are required.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
