import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export default class AddSongForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            song:{}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addPlaylist = props.addPlaylist
    }


    handleChange(event) {
        event.preventDefault()
        this.setState({inputValue: event.target.value});
        if (this.state.inputValue && this.state.inputValue.length < 16)  {
            this.setState({flag: false, warning: null })
        } else if (this.state.inputValue && this.state.inputValue.length >= 16) {
            this.setState({flag: true, warning: "Too many characters"})
        } else {
            this.setState({flag: true, warning: "Need a name"})
        }
        console.log(this.state.inputValue.length)

    }

    handleSubmit (event) {
        event.preventDefault()
        this.addPlaylist(this.state.inputValue)
        this.setState({inputValue: '', flag: true});
    }

    render () {

        return (



            <div className="well">
                <form className="form-horizontal" noValidate name="songSelect">
                    <fieldset>
                        <legend>Add to Playlist</legend>
                        <div className="form-group">
                            <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                            <div className="col-xs-10">
                                <select className="form-control" name="song">
                                    <option value="SONGID_GOES_HERE">song name</option>
                                    <option value="SONGID_GOES_HERE">another song name</option>
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