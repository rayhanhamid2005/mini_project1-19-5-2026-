const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
// Memberitahu Express untuk menggunakan file statis di folder 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Route utama untuk menyajikan halaman index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});