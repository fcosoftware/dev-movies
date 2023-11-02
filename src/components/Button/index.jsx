import { ButtonRed, ButtonWhiter } from './styles'

function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhiter>{children}</ButtonWhiter>
      )}
    </>
  )
}

export default Button
