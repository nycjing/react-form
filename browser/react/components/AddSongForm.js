import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export default class AddSongForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            songs:[],
            value:''
        };
        this.addSongtoPlaylist = props.addSongtoPlaylist;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        axios.get('/api/songs/')
            .then(res => res.data)
            .then(songs => {
                this.setState({ songs })
            });
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({value: event.target.value});

    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.state.value)

        this.addSongtoPlaylist(this.state.value);


    }

    render () {

        return (
            <div className="well">
                <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Add to Playlist</legend>
                        <div className="form-group">
                            <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                            <div className="col-xs-10">
                                <select className="form-control" name="song" value={this.state.value} onChange={this.handleChange}>
                                    {
                                        this.state.songs.map(song => (
                                            <option value={song.id} key={song.id}>{song.name}</option>
                                        ))

                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Add Song</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}