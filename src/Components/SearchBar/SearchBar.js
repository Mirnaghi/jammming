import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    // constructor
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = {
            term: "",
        }
    }
    // pass term t=state to search method of App
    search(){
        this.props.onSearch(this.state.term);
    };

    // handle term change
    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    placeholder="Enter A Song, Album, or Artist" 
                    onChange={this.handleTermChange}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;