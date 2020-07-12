import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    // constructor method
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        
    }
    // handle name change functionality
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} />
                <TrackList 
                    name={this.props.playlistName} 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                    onChange={this.handleNameChange}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;