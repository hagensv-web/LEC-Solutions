import ContactForm from "@/components/ContactForm/ContactForm";
import { Col, Container, Row } from "react-bootstrap"

export default function Contact() {
  return (
    <main>
        <h1>Contact Us</h1>
        <Container>
        <Row>
            <Col md={8}>
                <ContactForm />
            </Col>
            <Col md={4}>
                <h2>Contact Information</h2>

                <p className="emphasis">Chick Contact Info</p>
                <p>Cell: 412-841-7901</p>
                <p>Email: <a href="mailto:service@lecsolutionsonline.com">service@lecsolutionsonline.com</a></p>

                <p className="emphasis">Joanna Contact Info</p>
                <p>Cell: 412-841-7901</p>
                <p>Email: <a href="mailto:j.creely@lecsolutionsonline.com">j.creely@lecsolutionsonline.com</a></p>
            </Col>
        </Row>
        </Container>
    </main>
  );
}