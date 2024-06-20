import { Image, Row, Col } from "react-bootstrap";

const ListItem = () => {
  return (
    <Row className="mb-3">
      <Col sm={8}>
        <Image
          src="https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zfGVufDB8fDB8fHww"
          rounded
          style={{ width: 200, height: 150 }}
        />
      </Col>
      <Col sm={4}>
        <h5>Lorem ipsum dolor sit</h5>
      </Col>
    </Row>
  );
};
export default ListItem;
