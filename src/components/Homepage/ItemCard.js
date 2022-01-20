import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dummy from '../../assets/images/dummy_item.jpg';
import '../../styles/ItemCard.css';

const ItemCard = function ({ size = 2, noMargin = false }) {
  return (
    <Col xs={12} lg={size} className={`${!noMargin && 'me-1'} item-card`}>
      <Link style={{ color: 'unset' }} to="/motors/details?productID=jf3nb47f83409">
        <Card>
          <Card.Img variant="top" src={dummy} />
          <Card.Body>
            <h6 className="text-danger">AED 4000</h6>
            <p className="fw-bold" style={{ marginBottom: '-6px', marginTop: '-5px' }}>Dell-Inspiron</p>
            <small>Al Juhor</small>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ItemCard;
