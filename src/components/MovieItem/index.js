// Write your code here

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movie} = props

  const {thumbnailUrl, videoUrl} = movie

  return (
    <div className="movie-item-cont">
      <Popup
        modal
        trigger={
          <button type="button" className="btn">
            <img src={thumbnailUrl} alt="thumbnail" className="img" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="div">
            <button
              className="button"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="icon" />
            </button>

            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
