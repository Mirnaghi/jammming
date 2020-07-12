import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      playlistName: "Pessimist's playlist",
      playlistTracks: [
        {
          id: 0,
          name: "Love you",
          artist: "Eyla",
          album: "For my heart"
         },
         {
          id: 1,
          name: "My love",
          artist: "Mirnaghi",
          album: "For my minnosh"
         }
      ],
      searchResults: [
      {
        id: 1,
        name: "Neyim var ki",
        album: "Sago & Ceza"
      },
      {
        id: 1,
        name: "Neyim var ki",
        album: "Sago & Ceza"
      },
      {
        id: 1,
        name: "Neyim var ki",
        album: "Sago & Ceza"
      },
    ]};
  }

  // addTrack functionality
  addTrack(track){
    if(this.state.playlistTracks.find(playlistTrack => playlistTrack.id !== track.id))
    {
      this.state.playlistTracks.push(track);
    }
  }

  // save user's playlist
  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => {return track.uri});
    return trackURIs;
  }

  // remove track
  removeTrack(track){
    if(this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)){
      let newPlayList = this.state.playlistTracks.filter(playListTrack => playListTrack.id !== track.id);    
      this.setState({playListTracks: newPlayList});
    }
      
  }

  // update playlist name
  updatePlaylistName(newName){
    this.setState({playlistName: newName});
  }

  // search
  search(searchTerm){
    console.log(searchTerm)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResult searchResult={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist 
                  playlistName={this.state.playlistName} 
                  playlistTracks={this.state.playlistTracks} 
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
