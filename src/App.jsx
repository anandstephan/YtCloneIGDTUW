import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import List from "./components/List";
import axios from "axios";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((data) => console.log("==>", data.data));

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => res.json())
    //   .then((data) => console.log("===>", data));

    async function callAfter2Sec() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Akansha");
        }, 2000);
      });
    }

    // callAfter2Sec().then((res) => console.log("--->", res));

    async function calling() {
      const res = await callAfter2Sec();
      console.log("==>", res);
    }

    console.log("Shreeya");
    calling();
    console.log("Nabila");
    // showHeader()
    // addToCart().then((res) => {
    //   goToPay();
    // })
    // .then(res => {
    //   DeliverMsg()
    // })
    // showFooter()
  }, []);

  return (
    <Container>
      <SearchInput />
      <Row>
        <Col sm={8}>
          <Main />
        </Col>
        <Col sm={4}>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
