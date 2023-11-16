const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Playwright Test Page</title>
        </head>
        <body>
            <div id="my-div"></div>
            <script>
                setTimeout(() => {
                    document.getElementById('my-div').textContent = 'Content loaded';
                }, 5000);
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
