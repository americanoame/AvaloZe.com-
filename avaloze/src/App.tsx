import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Container className="d-flex justify-content-center align-items-center first-nav">
        <nav>Free delivery over $100 anywhere in the US/30 days return free</nav>
      </Container>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Avaloze</Navbar.Brand>

            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/Signin" className="nav-link">
                Sign in
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main style={{flexGrow: 1}}>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
