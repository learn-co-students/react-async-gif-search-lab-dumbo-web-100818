import React, { Component } from 'react'

class GifList extends Component {
  render () {
  const list = this.props.gifs.map(x => <li><img src={x.images.original.url} /></li>)
    return (
      <ul>
      {list}
      </ul>
    )
  }
}

export default GifList
