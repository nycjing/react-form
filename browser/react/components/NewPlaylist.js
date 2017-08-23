import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
// import axios from 'axios';


class NewPlaylist extends React.Component {

    constructor () {
        super();
        this.state = {
            input: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        console.log('hd');
        this.setState ({
            input: event.target.value
        })
    }
    //
    // componentDidMount () {
    //     const artistId = this.props.match.params.artistId;
    //     const mainPath = `/api/artists/${artistId}`;
    //     const paths = [mainPath, `${mainPath}/albums`, `${mainPath}/songs`];
    //     Promise
    //         .all(paths.map(path => axios.get(path)))
    //         .then(responses => responses.map(res => res.data))
    //         .then(([artist, albums, songs]) => {
    //             artist.albums = albums;
    //             artist.songs = songs;
    //             this.setState({ artist });
    //         });
    // }
    //
    render () {
        console.log('helloe world');

        return (
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" onSubmit = {this.handleSubmit}>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}