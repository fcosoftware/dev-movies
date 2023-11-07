import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../Services/api'
import { getImages } from '../../Ultils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [personPopular, setPersonPopular] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      // setMovie(data.data.results[1])
      setMovie(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      // setMovie(data.data.results[1])
      console.log(results)
      setTopMovies(results)
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      // setMovie(data.data.results[1])
      setTopSeries(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      // setMovie(data.data.results[1])
      setPopularSeries(results)
    }

    async function getPersonPopular() {
      const {
        data: { results }
      } = await api.get('/person/popular')

      // setMovie(data.data.results[1])
      setPersonPopular(results)
    }

    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularSeries()
    getPersonPopular()
  }, [])

  return (
    <>
      {movie && (
        <Background imagem={getImages(movie.backdrop_path)}>
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
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {personPopular && <Slider info={personPopular} title={'Top Artistas'} />}
    </>
  )
}

export default Home
