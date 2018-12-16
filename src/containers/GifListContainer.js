import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends Component {
  state = {
    giphs: [],
    searched: []
  };

  handleSubmit = (e, value) => {
    e.preventDefault()
    let newSearch
    value === "" ? (newSearch = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g") : (newSearch = "http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=dc6zaTOxFJmzC&rating=g")

    fetch(newSearch)
    .then(response => response.json())
    .then(search => {
      let searchGif = search.data.map(giph => {
        return giph.images.original.url
      })
      this.setState({
        searched: searchGif
      })
    })
  }
  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
    .then(response => response.json())
    .then(data => {
      let newArray = data.data.map(giph => {
        return giph.images.original.url;
      });
      this.setState({
        giphs: newArray,
        searched: newArray
      });
    });
  }

  render() {

    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <ul>
        {this.state.searched.map(giph => <li><GifList key={giph} giph={giph} /></li>)}
        </ul>
      </div>
    );
  }
}
