import Navigation from './Navigation'
import Container from './Container'

export default function Header() {
  return (
    <header className="sticky top-0 z-50" id="home">
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}
