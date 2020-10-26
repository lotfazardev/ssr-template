import React from 'react';
import ReactDOM from 'react-dom';
import Main from './reactSrc/App';

ReactDOM.hydrate(<Main />, document.querySelector("#root"));