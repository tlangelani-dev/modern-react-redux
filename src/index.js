import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This should produce HTML.
const App = () => {
    return <div>Hello!</div>;
};

// Take he generatd HTML and dispplay on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
