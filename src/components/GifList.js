import React from 'react'

export default class GifList extends React.Component {

  render() {
    return (<div>
      <img src={this.props.gif} alt=""/>
      </div>)
  }
}
