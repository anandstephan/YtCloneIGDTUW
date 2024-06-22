import { Image, Row, Col } from "react-bootstrap";

const ListItem = (props) => {
  // console.log(props);
  return (
    <Row className="mb-3">
      <Col sm={8}>
        <Image
          src={props.myItem.snippet.thumbnails.high.url}
          rounded
          style={{ width: 200, height: 150 }}
        />
      </Col>
      <Col sm={4}>
        <h5>{props.myItem.snippet.channelTitle}</h5>
      </Col>
    </Row>
  );
};
export default ListItem;
