import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
const Navbarpage = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Jobify</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features"></Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>
      <Form onSubmit={props.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={props.handleChange}
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};
export default Navbarpage;
