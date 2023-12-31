import { getImages } from '../../Ultils/getImages'
import { Container } from './styles'

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />
      <h3>{item.original_title || item.name}</h3>
    </Container>
  )
}

export default Card
