import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums.jsx';
import SingleAlbum from './SingleAlbum.jsx';
import AllArtists from './AllArtists.jsx';
import SingleArtist from './SingleArtist.jsx';
import Sidebar from './Sidebar.jsx';
import Player from './Player.jsx';
import NewPlaylist from './NewPlaylist';

export default class Main extends Component {
  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/new-playlist" component={NewPlaylist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
