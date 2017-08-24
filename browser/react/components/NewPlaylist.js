import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
// import axios from 'axios';


export default class NewPlaylist extends React.Component {

    constructor () {
        super();
        this.state = {
            inputValue: '',
            flag: true,
            warning: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault()
        //console.log(event.target.value, this.state.inputValue, this.state.flag);
        this.setState({inputValue: event.target.value});
        if (this.state.inputValue && this.state.inputValue.length < 16)  {
            this.setState({flag: false})
        } else if (this.state.inputValue && this.state.inputValue.length >= 16) {
            this.setState({flag: true, warning: "Too many characters"})
        } else {
            this.setState({flag: true, warning: "Please enter a name"})
        }
        console.log(this.state.inputValue.length)

    }

    handleSubmit (event) {
        event.preventDefault()
        //console.log('submitbutton',this.state.inputValue);
        this.setState({inputValue: '', flag: true});
        //console.log(this.state.inputValue)

    }

    render () {

        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            {
                                if (this.state.warning) {
                                    <div className="alert alert-warning">{this.state.warning}</div>
                                }
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

