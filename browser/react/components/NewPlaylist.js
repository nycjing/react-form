import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
// import axios from 'axios';


export default class NewPlaylist extends React.Component {

    constructor () {
        super();
        this.state = {
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(event);
        this.setState({
            inputValue: event.target.value
        })
        //console.log(this.state.inputValue)

    }

    render () {

        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

