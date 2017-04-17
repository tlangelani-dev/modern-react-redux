import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

// google api key
const API_KEY = 'AIzaSyDxJ0R_tp-bdJND_2HBT8FOkli43r980Z0';

// Create new component. This should produce HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take he generatd HTML and dispplay on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
