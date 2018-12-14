import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state={
    gifs: []
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(gif => {
      this.setState({
        gifs:[gif.data[0].images.original.url,gif.data[1].images.original.url,gif.data[2].images.original.url]
      })
    })
  }

  searchAll = ()=>{
    console.log("searchAll in Gif List Container")
  }

  render() {

    return (
      <div>
        <GifList allGifs={this.state.gifs}/>
        <GifSearch searchGif={this.searchAll}/>
      </div>
    );
  }

}

export default GifListContainer;
