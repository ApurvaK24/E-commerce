import { useEffect, useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);      // loading state
  const [error, setError] = useState(null);          // error state (optional)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 style={{ color: '#4b0082' }}>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
