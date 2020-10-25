// backEnd dependencies
const express = require("express");
const app = express();
// frontEnd dependencies
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./client/App').default;

app.get("/", (req, res) => {
    const content = renderToString(<App />);
    res.send(content)
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})