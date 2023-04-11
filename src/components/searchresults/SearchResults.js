import React from 'react';
import {Tracklist} from '../tracklist/Tracklist';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist />
            </div>
        );
    }
}