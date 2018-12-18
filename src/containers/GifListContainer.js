import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  state = {
    gifs: [],
    searchTemp: '',
    search: 'skateboarding'
  }

  fetchy = (query = "skateboarding") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(r => r.json()).then(json => {

      this.setState({
      gifs: json.data.slice(0, 3)
    })})
  }

  componentDidMount() {
    this.fetchy()
  }

  onSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTemp: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.fetchy(this.state.searchTemp)
  }

  render() {


    return (
    <div>
    <GifSearch onSubmit={this.onSubmit} search={this.state.searchTemp} onSearch={this.onSearch} />
    <GifList gifs={this.state.gifs}/>
    </div>
  )
  }
}

export default GifListContainer
