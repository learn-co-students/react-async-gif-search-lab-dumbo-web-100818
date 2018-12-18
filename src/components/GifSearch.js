import React, { Component } from 'react'

class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
      <input type="text"
        onChange={this.props.onSearch}
        value={this.props.search}/>
        <button>search</button>
        </form>
    )
  }
}

export default GifSearch
