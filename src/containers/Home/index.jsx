import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import api from '../../Services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'

function Home() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      // setMovie(data.data.results[1])
      setMovie(results[2])
    }

    getMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background
          imagem={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                alt="capa-do-filme"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home
