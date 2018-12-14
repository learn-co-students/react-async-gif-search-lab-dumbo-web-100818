import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state={
    gifs: [],
    term: ''
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(gif => {
      this.setState({
        gifs:[gif.data[0].images.original.url,gif.data[1].images.original.url,gif.data[2].images.original.url]
      })
    })
  }

  searchAll = (e, term)=>{
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gif => {
      this.setState({
        gifs:[gif.data[0].images.original.url,gif.data[1].images.original.url,gif.data[2].images.original.url]
      })
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <GifSearch searchAll={this.searchAll}/>
        <GifList allGifs={this.state.gifs}/>
      </div>
    );
  }

}

export default GifListContainer;
