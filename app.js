// app.js
const http = require('http');

const PORT = 80;

function generatePassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const passwordLength = 12; // Specify desired length
        const newPassword = generatePassword(passwordLength);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Generated Password: ${newPassword}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
