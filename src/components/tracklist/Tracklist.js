import React from 'react';
import {Track} from '../track/Track';
import './Tracklist.css';

export class Tracklist extends React.Component {

    render() {
        return (
            <div className="TrackList">
                {this.props.tracks?.map(x =>  <Track track={x} key={x.id}/>)}
            </div>
        );
    }
}