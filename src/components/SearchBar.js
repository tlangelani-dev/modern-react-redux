import React, { Component } from 'react';

class SearchBar extends Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return <input type="text" onChange={this.onInputChange} placeholder="Enter youtube video to search..." />;
    }
};

export default SearchBar;
