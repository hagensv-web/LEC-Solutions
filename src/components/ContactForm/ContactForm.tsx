import { Col, Container, Row } from "react-bootstrap";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    return (
        <form className={styles.contactForm}>
            <Container>
                <Row>
                    <Col md={6}>
                        <label htmlFor="fname">First Name (required)</label>
                        <br />
                        <input name="fname" type="text" required/>
                    </Col>
                    <Col md={6}>
                        <label htmlFor="lname">Last Name (required)</label>
                        <br />
                        <input name="lname" type="text" required/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label htmlFor="email">Email (required)</label>
                        <br />
                        <input name="email" type="email" required/>
                    </Col>
                    <Col md={6}>
                        <label htmlFor="phone">Phone</label>
                        <br />
                        <input name="phone" type="tel" />
                    </Col>
                </Row>
            <label htmlFor="company">Company (required)</label>
            <br />
            <input name="company" type="text" required/>
            <br />
            <label htmlFor="message">Comments / Questions</label>
            <br />
            <textarea name="message" rows={5} cols={40} />
            <br />
            <input type="submit" />
            </Container>
        </form>
    )
}