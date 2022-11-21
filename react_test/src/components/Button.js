import PropTypes from 'prop-types'

const Button = (props) => {
    const MaFonctionOnClick = () => {
        console.log('clicked')
    }

  return (
    <button
    style={{backgroundColor: props.color}} 
    className='btn'
    onClick={MaFonctionOnClick}>
        {props.text}
    </button>
  )
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
