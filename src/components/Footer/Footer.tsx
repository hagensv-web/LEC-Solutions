import publicAsset from "@/types/public_asset";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={6}>
                    <img src={publicAsset("/images/buyveteran-logo.png")} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} lg={4}>
                    <img src={publicAsset("/images/organization/aiha.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/navoba_logo.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/wen.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/paacc.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/PIOGA_LOGO.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/SOUTHPOINT_CHAMBER_LOGO.png")} className="img-responsive center-block" />
                </Col>
                <Col xs={3} lg={2}>
                    <img src={publicAsset("/images/organization/SOOGA-logo-240.png")} className="img-responsive center-block" />
                </Col>
            </Row>

        </Container>
        <p>© 2025 LEC Solutions Inc. All rights reserved.</p>
        <p>Designed and maintained by <a href={"https://hagensv.github.io"}>Samuel Hagen</a></p>
    </footer>
    );
}