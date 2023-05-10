import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import { useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const { data: product, isLoading, error } = useGetProductDetailsBySlugQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Avaloze/{product.slug}</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <img className="large" src={product.image} alt={product.name}></img>
        </Col>
      </Row>
    </div>
  );
}
