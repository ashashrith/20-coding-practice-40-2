// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionMoviesList, comedyMoviesList} = props

  const settings = {
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {actionMoviesList.map(each => (
          <MovieItem movie={each} key={each.id} />
        ))}

        {comedyMoviesList.map(item => (
          <MovieItem eachMovie={item} key={item.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
