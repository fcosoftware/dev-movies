import { ButtonRed, ButtonWhiter } from './styles'

function Button({ children, red, ...props }) {
  return (
    <>
      {red ? (
        <ButtonRed {...props}>{children}</ButtonRed>
      ) : (
        <ButtonWhiter {...props}>{children}</ButtonWhiter>
      )}
    </>
  )
}

export default Button
