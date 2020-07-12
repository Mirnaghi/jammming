import React from 'react';
import './Track.css';

class Track extends React.Component {

    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>;
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>;
        }
    }

    // add tracks to playlist
    addTrack(){
        this.props.onAdd(this.props.track);
    }

    // remove track 
    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    render() {
        return (
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.track.id}</h3>
                    <p>{this.props.track.name} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;