import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDxJ0R_tp-bdJND_2HBT8FOkli43r980Z0';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        this.videoSearch('skhumba');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} // TODO: HUH
                    videos={this.state.videos}
                />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
