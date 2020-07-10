import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
        }
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