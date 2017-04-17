import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        const imageUrl = video.snippet.thumbnails.default.url;
        const title = video.snippet.title;
        return (
            <li className="media" onClick={() => onVideoSelect(video)}>
                <div className="media-left">
                    <a href="#">
                        <img src={imageUrl} alt={title} className="media-object"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{title}</h4>
                </div>
            </li>
        );
    }
}

export default VideoListItem;
