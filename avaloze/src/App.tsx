import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { sampleProducts } from './data';

function App() {


  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>Avaloze</Navbar.Brand>
          </Container>
          <Nav>
            <a href='/cart' className='mav-link'>Cart</a>
            <a href='/Signin' className='mav-link'>Sign in</a>
          </Nav>
        </Navbar>

      </header>
      <main>
        <Container className='mt-3'>
        <Row>
          {sampleProducts.map((product) => (
            <Col key={product.slug}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </Col>
          ))}
        </Row>
        </Container>
      </main>

      <footer>
        <div className='text-center'>
          All right reserved
        </div>
      </footer>

    </div>
  );
}

export default App;
