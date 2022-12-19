import './App.css'
import ReactPlayer from 'react-player'
import React from 'react'

function videoPlayer() {
  return (
    <div className="App">
      <ReactPlayer url="https://www.youtube.com/watch?v=yVQB1TVcD2k" />
    </div>
  )
}

export default videoPlayer
