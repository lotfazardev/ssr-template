// backEnd dependencies
const express = require("express");
const app = express();
// frontEnd dependencies
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./client/reactSrc/App').default;

app.use(express.static('public'));

app.get("/", (req, res) => {
    const content = renderToString(<App />);
    const html = `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
    res.send(html);
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})