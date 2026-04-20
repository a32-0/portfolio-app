import Navigation from './Navigation'
import Container from './Container'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" id="home">
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}
