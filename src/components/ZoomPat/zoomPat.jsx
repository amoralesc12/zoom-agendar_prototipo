// // MyZoomPat.jsx
import React, { useState, useEffect } from 'react';
import "./zoomPat.css";
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import services from '../utils/services';

function MyZoomPat() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Llamada a la función gMeeting al cargar el componente
    services.gMeeting()
      .then(meetingsData => {
        console.log("Datos de las reuniones:", meetingsData);
        setMeetings(meetingsData.meetings || []);
      })
      .catch(error => {
        console.error("Error al obtener reuniones:", error);
      });
  }, []);

  return (
    <div style={{ margin: "30px", width: "70%" }}>
      <div>
        <h1 className="title-pacientes">Zoom</h1>
      </div>
      <Tabs
        defaultActiveKey="sesiones"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="sesiones" title="Sesiones Programadas">
          <Container fluid="md">
            <Row>
              <Col>
                <Form.Label>Hora de Inicio</Form.Label>
              </Col>
              <Col>
                <Form.Label>Tema</Form.Label>
              </Col>
              <Col>
                <Form.Label>ID de la reunión</Form.Label>
              </Col>
              <Button style={{ width: "63px" }} variant="outline-primary">
                Entrar
              </Button>
            </Row>
            {/* Mostrar detalles de todas las reuniones */}
            {meetings.map(meeting => (
              <Row key={meeting.id}>
                <Col>
                  <Form.Label>{new Date(meeting.start_time).toLocaleTimeString()}</Form.Label>
                </Col>
                <Col>
                  <Form.Label>{meeting.topic}</Form.Label>
                </Col>
                <Col>
                  <Form.Label>{meeting.id}</Form.Label>
                </Col>
              </Row>
            ))}
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Sesiones Pasadas">
          <Container fluid="md">
            ... Cargando Sesiones Pasadas
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyZoomPat;
