import React from 'react'
import GiftListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'


function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GiftListContainer />
    </div>
  )
}

export default App
