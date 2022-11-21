import Button from "./Button"

const Header = (props) => {
  return (
    <header className='header'>
        <h1 style={{color : 'green', backgroundColor: 'white'}}> Un Header d'un composant séparé</h1>
        <p style={headingStyle}>{props.donné_transférée}</p>
        <Button color='green' text ='Click me! '/>
    </header>
  )
}
// on peut donner une valeure par défault a un props :
Header.defaultProps = {
    donné_transférée: 'Truc par défaut'
}

const headingStyle = {
    color : 'blue',
    backgroundColor : 'white'
}

export default Header
