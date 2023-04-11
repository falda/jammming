import React from 'react';
import {Track} from '../track/Track';
import './Tracklist.css';

export class Tracklist extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
                <Track />
                <Track />
            </div>
        );
    }
}