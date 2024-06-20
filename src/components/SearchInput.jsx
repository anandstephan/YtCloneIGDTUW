import { InputGroup, Form, Button } from "react-bootstrap";

const SearchInput = () => {
  return (
    <div>
      <InputGroup className="mt-3 mb-3">
        <Form.Control placeholder="Search.." />
        <Button variant="primary">Search</Button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
