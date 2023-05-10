import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {

    return (
        <Card style={{height: '100%'}}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="cad-img-top" alt={product.name} />
            </Link>
            <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
                <Link style={{flexGrow: 1}} to={`/product/${product.slug}`}>
                    <Card.Title className='product-p'>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>${product.price}</Card.Text>
                {product.countInStock === 0 ? (
                    <Button variant='light' disabled>
                        Out of stock
                    </Button>
                ) : (
                    <Button>Add to cart</Button>
                )}
            </Card.Body>

        </Card>
    )
}

export default ProductItem