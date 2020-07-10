import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    this.state = {searchResult: []};
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult searchResult={this.state.searchResult}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
