import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {images: []}

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (search = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(images => {
      this.setState({images: images.data})
    })
  }

  render() {
    let list = this.state.images.map(image => {
      return <li key={image.images.original.url}><GifList gif={image.images.original.url} /></li>
    })
    return(
      <div>
      <GifSearch fetchGifs={this.fetchGifs} />
      <ul>
      {list}
      </ul>
      </div>
      )
  }

}
