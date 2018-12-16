import React, {Component} from 'react';

export default class GifSearch extends Component{

  state={
    search: ""
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      search: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.search)} >
        <input type="text" value={this.state.search} onChange={(e) => this.handleChange(e)} placeholder="Search Gifs"/>
        </form>
      </div>
    )
  }
}
