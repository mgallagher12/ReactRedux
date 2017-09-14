import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBv4rQuMfJL2pVgZNFTzRCbGoGDXaUd5WA';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data)
});

class App extend Component  {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));


