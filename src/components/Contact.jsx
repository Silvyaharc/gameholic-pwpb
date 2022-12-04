import Form from "react-bootstrap/Form";
import { Container, Col, Button } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [judul, setJudul] = useState("Contact");

  function handleName(e) {
    setJudul(e.target.value);
  }

  return (
    <Container>
      <Col>
        <br />
        <h1 className="text-white text-center" id="contact">
          {judul}
        </h1>
        <br />

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3 className="text-white text-center">Name</h3>
            </Form.Label>
            <Form.Control placeholder="name" onChange={handleName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h3 className="text-white text-center">Comments</h3>
            </Form.Label>
            <Form.Control as="textarea" placeholder="add comments" rows={3} />
          </Form.Group>
          <Button className="mb-10 btn-dark"> SUBMIT</Button>
        </Form>
        <br />
      </Col>
    </Container>
  );
}

export default Contact;
