import React from 'react';
import Songs from './Songs.jsx'
import axios from 'axios';
import { Route, Switch, Link, Redirect } from 'react-router-dom';


export default class SinglePlaylist extends React.Component {

    constructor () {
        super();
        this.state = {
            playlist: {}
        };
    }

    componentDidMount () {
        const playlistId = this.props.match.params.playlistId;

        const mainPath = `/api/playlists/${playlistId}`;
        const paths = [mainPath, `${mainPath}/songs`];
        Promise
            .all(paths.map(path => axios.get(path)))
            .then(responses => responses.map(res => res.data))
            .then(([playlist, songs]) => {
                playlist.songs = songs;
                this.setState({ playlist});
            });
    }

    componentWillReceiveProps(nextstat){

        if ( nextstat.match.params.playlistId !== this.props.match.params.playlistId) {
            const playlistId = nextstat.match.params.playlistId;
            const mainPath = `/api/playlists/${playlistId}`;
            const paths = [mainPath, `${mainPath}/songs`];
            Promise
                .all(paths.map(path => axios.get(path)))
                .then(responses => responses.map(res => res.data))
                .then(([playlist, songs]) => {
                    playlist.songs = songs;
                    this.setState({ playlist});
                });
        }

}


render(){
        const playlist = this.state.playlist;
            return (
        <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
        </div>
        )
    }
}

;
