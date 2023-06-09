import React from 'react';
import {Tracklist} from '../tracklist/Tracklist';
import './Playlist.css';

export class Playlist extends React.Component {
    render () {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}/>
                <Tracklist tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}