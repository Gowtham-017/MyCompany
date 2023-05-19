// HelpReviewPage.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Help = () => {
  return (
    <Container>
      <h1>Help &amp; Review</h1>

      <Row>
        <Col>
          <div className="help-section">
            <h2>Help Center</h2>
            <p>Welcome to our Help Center! We're here to assist you with any questions or issues you may have.</p>

            <h3>Frequently Asked Questions</h3>
            <div className="faq-section">
              <h4>Question 1</h4>
              <p>Answer to question 1 goes here...</p>

              <h4>Question 2</h4>
              <p>Answer to question 2 goes here...</p>

              <h4>Question 3</h4>
              <p>Answer to question 3 goes here...</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="review-section">
            <h2>Customer Reviews</h2>
            <p>We value your feedback! Please take a moment to leave a review and let us know about your experience.</p>

            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="review">
                <Form.Label>Review:</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>

              <Button variant="primary" type="submit">Submit Review</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Help;
