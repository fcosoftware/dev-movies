import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovieById,
  getMovieCredtis,
  getMovieSimilar,
  getMovieVideos
} from '../../Services/getData'
import { getImages } from '../../Ultils/getImages'
import { Container, Background, Cover } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      // console.time('time')

      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredtis(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar })
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))

      // console.timeEnd('time')
    }

    getAllData()
  }, [])
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail
