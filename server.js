const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure public/images directory exists and copy user's profile image
const avatarSource = "C:\\Users\\fatoumata siby\\.gemini\\antigravity\\brain\\15c2c4a4-b2af-4790-9580-75be1ccb84b2\\.user_uploaded\\media_1793974572710.jpg";
const avatarDestDir = path.join(__dirname, 'public', 'images');
const avatarDest = path.join(avatarDestDir, 'profile.jpg');

try {
  if (!fs.existsSync(avatarDestDir)) {
    fs.mkdirSync(avatarDestDir, { recursive: true });
  }
  if (fs.existsSync(avatarSource) && !fs.existsSync(avatarDest)) {
    fs.copyFileSync(avatarSource, avatarDest);
    console.log('📸 Profile photo successfully copied to ./public/images/profile.jpg');
  }
} catch (err) {
  console.warn('Could not copy profile image automatically:', err.message);
}

// Serve profile image with fallback
app.get('/images/profile.jpg', (req, res) => {
  if (fs.existsSync(avatarDest)) {
    return res.sendFile(avatarDest);
  }
  if (fs.existsSync(avatarSource)) {
    return res.sendFile(avatarSource);
  }
  res.status(404).send('Image not found');
});

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Profile API endpoint (for data or dynamic fetching)
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Fatoumata Siby',
    title: 'Computer Science Student & Full Stack Developer',
    tagline: 'I build accessible, modern, and engaging digital experiences for the web.',
    about: 'I am a passionate software developer interested in web platforms, cloud architecture, and intuitive user interfaces.',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'React', 'Git', 'SQL'],
    socials: {
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/',
      email: 'mailto:fatoumatasiby@example.com'
    }
  });
});

// Fallback route to serve the landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Express server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
  console.log(`📁 Serving landing page from: ./public/index.html`);
  console.log(`📡 API endpoint available at: http://localhost:${PORT}/api/profile`);
  console.log(`====================================================`);
});
