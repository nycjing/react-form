import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import AllAlbums from './AllAlbums.jsx';
import Songs from './Songs.jsx';

class SingleArtist extends React.Component {

  constructor () {
    super();
    this.state = {
      artist: {}
    };
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
    const mainPath = `/api/artists/${artistId}`;
    const paths = [mainPath, `${mainPath}/albums`, `${mainPath}/songs`];
    Promise
      .all(paths.map(path => axios.get(path)))
      .then(responses => responses.map(res => res.data))
      .then(([artist, albums, songs]) => {
        artist.albums = albums;
        artist.songs = songs;
        this.setState({ artist });
      });
  }

  render () {

    const artist = this.state.artist;
    const albums = artist.albums || [];
    const songs = artist.songs || [];

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        <Switch>
          <Route path={`/artists/${artist.id}/albums`} render={() => (
            <AllAlbums albums={albums} />
          )} />
          <Route path={`/artists/${artist.id}/songs`} render={() => (
            <Songs songs={songs} />
          )} />
          <Redirect exact from={`/artists/${artist.id}`} to={`/artists/${artist.id}/albums`} />
        </Switch>
      </div>
    );
  }
}

export default SingleArtist;

