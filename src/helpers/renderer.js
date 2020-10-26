const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('../client/reactSrc/App').default;

const renderer = () => {
    const content = renderToString(<App />);
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}

export default renderer;