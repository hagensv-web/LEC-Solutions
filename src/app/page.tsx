import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>LEC Solutions</h1>
            <p>Our mission is to serve you while preserving life and property. LEC Solutions is committed to you. We provide life-saving gas detection instruments, docking stations, calibration gas and all the accessories that will enhance your gas detection safety program.
            
            LEC Solutions specializes in the Oil and Gas Industry as well as the Industrial Services Arena throughout the United States.</p>
          </Col>
          <Col md={6}>
            <h2>Calibration Gas</h2>
            <p>LEC Solutions provides calibration gas to ensure your life-saving systems are functioning properly. We have partnered with one of the finest manufacturers in the industry to provide you with high-quality calibration gas that will meet your demands and not break your wallet. Our staff is well trained and understands the complexity of calibration gas. We offer next day service throughout the United States and have thousands of mixes to choose along with the best regulators in the industry.</p>
          </Col>
          <Col md={6}>
            <Image src="/Group_Photo.png" alt="LEC Solutions Calibration Gas" width={500} height={300} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
