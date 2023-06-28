// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <h1 className="heading">Action Movies</h1>
      <MoviesSlider
        actionMoviesList={actionMoviesList}
        comedyMoviesList={comedyMoviesList}
      />
    </div>
  )
}

export default PrimeVideo
