import { useEffect, useState } from 'react'

import { getMovieVideos } from '../../Services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId))
      // setMovie(data.data.results[1])
      // setMovie(results[0])
    }
    getMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
