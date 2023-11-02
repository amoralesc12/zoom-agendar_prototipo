import "./zoomPat.css"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
function MyZoomPat()
{

    
    return(
    <div style={{ margin:"30px",width: "70%" }}>
        <div>
            <h1 className="title-pacientes">Zoom</h1>
        </div>
        <Tab.Container defaultActiveKey="sesionesProgramadas">
            <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link eventKey="sesionesProgramadas">Sesiones Programadas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="sesionesPasadas">Sesiones Pasadas</Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
            <Tab.Pane eventKey="sesionesProgramadas">
                <Container fluid="md">
                <Row>
                <Col style={{ display:"flex", alignItems:"flex-end", padding:"12px", fontWeight:"bold"}}>
                                <Form.Label>Hora de Inicio</Form.Label>
                            </Col>

                            <Col style={{display:"flex", alignItems:"flex-end",padding:"12px",fontWeight:"bold"}} >
                                <Form.Label>Tema</Form.Label>
                            </Col>

                            <Col style={{display:"flex", alignItems:"flex-end",padding:"12px",fontWeight:"bold"}} >
                                <Form.Label>ID de la reunion</Form.Label>
                            </Col>
                </Row>

                
                <Row>
                            <Col >
                                <Form.Label>dd num 00:00am/pm</Form.Label>
                            </Col>

                            <Col  >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tema (practica clinica)</Form.Label>
                                {/*<Form.Control as="textarea" placeholder="Enter meeting description" rows={3} >*/}
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Label>000 0000 0000</Form.Label>
                            </Col>
                            <Button style={{width:"63px"}} variant="outline-primary">Entrar</Button>
                        </Row>
                        
                </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="sesionesPasadas">
                <Container fluid="md">
                
                </Container>
            </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        </div>

    );
}

export default MyZoomPat;