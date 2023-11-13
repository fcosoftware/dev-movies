import { useEffect, useState } from 'react'

import api from '../../Services/api'
import { Container, Background } from './styles'

function Modal({ movieId }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`)

      // setMovie(data.data.results[1])
      console.log(results[0])
      setMovie(results[0])
    }
    getMovies()
  }, [])

  return (
    <Background>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
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
