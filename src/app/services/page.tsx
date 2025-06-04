import { Container } from "react-bootstrap"

export const metadata = {
  title: "Services • LEC Solutions",
  description: "LEC Solutions offers calibration services for all major gas detection manufacturers, ensuring your devices are cleaned and calibrated to manufacturer specifications.",
  openGraph: {
    title: "LEC Solutions Services",
    description: "LEC Solutions offers calibration services for all major gas detection manufacturers, ensuring your devices are cleaned and calibrated to manufacturer specifications.",
  },
}

export default function Services() {
  return (
    <main>
      <Container>
        <h1>Services</h1>
        <p>LEC Solitons, Inc offers calibration services for all major gas detection manufacturers. Your device will be cleaned and calibrated to the manufacturer specifications.</p>
        <p>Each device will be thoroughly cleaned, troubleshot, calibrated, and will recieve a calibration certificate.</p>
        <p>Lead time 1 day for</p>
        <ul>
          <li>ISC</li>
          <li>GasClip</li>
          <li>RKI Instruments</li>
          <li>MSA</li>
        </ul>
        <p>Other manufacturers 2-3 days max.</p>
        <p>LEC Solutions, Inc is an authorized services center. We are able to take care of any service related issues that may arise and we are able to do this for half the price of what the other leading manufaturers charge. We are not here to nickle and dime you to death. We are committed to your safety</p>
        <ul>
          <li>Sensor Replacement</li>
          <li>Filter Replacement</li>
          <li>Calibration Testing</li>
          <li>Bump Testing</li>
          <li>Sensor Replacement</li>
          <li>LCD Screen Replacement</li>
          <li>Faceplate Replacement</li>
          <li>Firmware Upgrade</li>
          <li>Battery Replacement</li>
          <li>Alligator Clip Replacement</li>
          <li>Tech Support</li>          
        </ul>
        <p>We offer a one on one approach that focuses on Integrity First, Service Before Self, and Excellence in all we do.</p>
      </Container>
    </main>
  );
}
