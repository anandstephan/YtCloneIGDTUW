import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import youtube from "../api/youtube";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("bollywood");
  const [submitOrNot, setSubmitOrNot] = useState(false);

  const submitHandler = () => {
    setSubmitOrNot(!submitOrNot);
  };

  return (
    <div>
      <InputGroup className="mt-3 mb-3">
        <Form.Control
          placeholder="Search.."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button variant="primary" type="button" onClick={submitHandler}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
