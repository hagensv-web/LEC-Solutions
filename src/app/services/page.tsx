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
        <p>LEC Solutions, Inc is an authorized services center. We are able to take care of any service related issues that may arise and we are able to do this for half the price of what the other leading manufaturers charge. We are not here to nickle and dime you to death. We are committed to your safety</p>
      </Container>
    </main>
  );
}
