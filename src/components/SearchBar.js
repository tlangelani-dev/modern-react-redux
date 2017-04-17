import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        this.props.onSearchTermChange(event.target.value);
    }

    render() {
        return (
            <section className="search-bar">
                <input type="text"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.term}
                    placeholder="Enter youtube video to search..."
                />
            </section>
        );
    }
};

export default SearchBar;
