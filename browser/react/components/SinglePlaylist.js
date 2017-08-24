import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Songs from './Songs'


const Playlist = (props) => {

  const playlist = props.playlist;

        return (
            <div>
              <h3>{ playlist.name }</h3>
              <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
              { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
              <hr />
            </div>
        )

}
