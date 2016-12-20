// Gives us the React library plus the Component class
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// Imports library to allow you to fetch http requests
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Functional components don't have state
// Classes must have a render() method. Classes don't require semicolons
// Classes have lifecycle methods. They're automatically called at some point
// They 'understand' about themselves, and what will happen
class AlbumList extends Component {

// Sets up initial, default state for component
// Class level property
// # Albums is an empty array. It's an empty array to start off
  state = { albums: [] };

  componentWillMount() {
// Fetches data from HTTP request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')

// Promise that will call this function when HTTP request complete
// Works via 'Component State'
// Component level state needs to fix the rendering 'bug' that occurs when no state
// setState comes with all classes
// ! Need to figure out a way to reRender when HTTP request completes
// ! This is passing an object to 'setState'. 'albums' will now have an array of objects
// ! Will not automaticaly rerender just the AlbumList
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail
        key={album.title}
        album={album}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Styles now can be incoporated

// Makes AlbumList available to the rest of the App
export default AlbumList;

          // DIFFERENCE BETWEEN 'PROPS' & 'STATE'
// Parent to Child communication is for Props
// State is for components internal record keeping
