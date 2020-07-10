import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track track={this.props.tracks}/>
            </div>
        );
    }
}

export default TrackList;