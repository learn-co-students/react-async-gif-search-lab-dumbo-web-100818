import React, { Component } from 'react';

class GifSearch extends Component {

  state={
    term: ' '
  }

  handleClick=(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <div>
       <form onSubmit={(e)=>this.props.searchAll(e,this.state.term)}>
        <input type="text" value={this.state.term} name="term" onChange={this.handleClick}></input>
        <button type="submit">Search</button>
       </form>
      </div>
    );
  }

}

export default GifSearch;
