import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export default class NewPlaylist extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            flag: true,
            warning: ''
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
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            {
                                (this.state.warning) &&
                                    <div className="alert alert-warning">{this.state.warning}</div>

                            }

                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled={this.state.flag}>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

