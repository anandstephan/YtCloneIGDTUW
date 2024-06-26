import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import List from "./components/List";
import axios from "axios";
import { useEffect, useState } from "react";
import youtube from "./api/youtube";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);
  async function getData(searchItem) {
    // console.log("==>", searchItem);
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDnlZ8qX5rUgMd-eWPYUh6tmmh4eHVExVM",
        q: searchItem,
      },
    });
    console.log("===>", response.data);
    setVideos(response.data.items);
    setMainVideo(response.data.items[1]);
  }
  useEffect(() => {
    // getData("srk songs");
  }, []);

  return (
    <Container>
      <SearchInput onSearch={getData} />
      <Row>
        <Col sm={8}>
          <Main video={mainVideo} />
        </Col>
        <Col sm={4}>
          <List list={videos} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
