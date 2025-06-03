import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
        <Container>
            <Row className="justify-content-center">
                <Col xs={2}>
                    <img src="/images/buyveteran-logo.png" />
                </Col>
            </Row>
            <Row class="row justify-content-center">
                <Col xs={2}>
                    <img src="/images/aiha.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/navoba_logo.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/wen.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/paacc.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/PIOGA_LOGO.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/SOUTHPOINT_CHAMBER_LOGO.png" className="img-responsive center-block" />
                </Col>
                <Col xs={1}>
                    <img src="/images/SOOGA-logo-240.png" className="img-responsive center-block" />
                </Col>
            </Row>

        </Container>
        <p>© 2025 LEC Solutions Inc.</p>
        <p>All rights reserved.</p>
        <p>Designed and maintained by <a href={"https://hagensv.github.io"}>Samuel Hagen</a></p>
    </footer>
    );
}