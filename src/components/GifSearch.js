import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    searchTerm: ""
  }

handleChange = (e) => {
  this.setState({searchTerm: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.fetchGifs(this.state.searchTerm)
}


render() {
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        Enter a search term:<br/>
        <input onChange={this.handleChange} type="text" value={this.state.searchTerm}/>
        <input type="submit" />
      </form>
    </div>
    )
}




}
