import "./zoom.css"
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import services from "../utils/services";

function MyZoom()
{
    const [topic, setTopic] = useState("");
    const [description, setdescription] = useState("");
    const [fechaHora, setFechaHora] = useState("");
    const [duracionHour, setDuracionHour] = useState("");
    const [duracionMin, setDuracionMin] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [recurring, setRecurring] = useState("");
    const [registration, setRegistration] = useState("");
    const [securityPasscode, setSecurityPasscode] = useState("");
    const [securityWaitroom, setSecurityWaitroom] = useState("");
    const [securityUserAuth, setSecurityUserAuth] = useState("");
    const [videoHost, setVideoHost] = useState("");
    const [videoPaticipant, setVideoPaticipant] = useState("");
    const [meetingHost, setMeetingHost] = useState("");
    const [meetingMute, setMeetingMute] = useState("");
    const [meetingAllow, setMeetingAllow] = useState("");
    const [meetingPersonalId, setMeetingPersonalId] = useState("");
    const [meetingRecord, setMeetingRecord] = useState("");
    const [audio, setAudio] = useState("");
    const [alternative, setAlternative] = useState("");


    const CreateMeet = async ()=>{
        const response = await services.cMeeting();
        console.log(response);
        //console.log(response.data);
    }
    return(
    
        <div style={{ width: "90%" }}>
            <div className="container-header">
                <h1 className="title-pacientes">Zoom</h1>

            </div>
            <div className="container-controls">
               
                <Container fluid="md">
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-end", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Topic</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-end", borderBottom: "1px solid #360404d5", padding:"15px"}} >
                            <Form.Control type="Topic" placeholder="Enter topic" value={topic} onChange={ev=> setTopic(ev.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Description(optional)</Form.Label>
                        </Col>

                        <Col style={{borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Enter meeting description" rows={3} value={description} onChange={ev=> setdescription(ev.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>When</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"row", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form.Control
                             type="datetime-local" 
                             placeholder="" 
                             
                             onChange={ev=> setFechaHora(ev.target.value)}
                             style={{ width: "34%", marginRight: "10px" }}/>

                          
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Duration</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"row", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form.Control
                            required
                            type="number"
                            placeholder="cantidad"
                            defaultValue="0"
                            min={0}
                            max={5}
                            onChange={ev=> setDuracionHour(ev.target.value)}
                            style={{ width: "8%", marginRight: "10px" }}
                            />
                            <p style={{paddingTop:"6px"}}>hr</p>

                            <Form.Control
                            required
                            type="number"
                            placeholder="cantidad"
                            defaultValue="0"
                            min={0}
                            onChange={ev=> setDuracionMin( ev.target.value)}
                            max={59}
                            style={{ width:"8%", marginRight: "10px", marginLeft:"10px" }}
                            />
                             <p style={{paddingTop:"6px"}}>min</p>
                        </Col>

                       
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Time Zone</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"column", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form.Select aria-label="Default select example" onChange={ev=> setTimeZone( ev.target.value)} >
                                <option value="na">Open this select menu</option>
                                <option value="Z">(GMT-7:00)Pacific Time (US and Canada)</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check onChange={ev=> setRecurring( ev.target.checked)}// prettier-ignore
                                        type={type}
                                        id={`default-${type}`}

                                        label={"Recurring meeting"}
                                    />
                                    </div>
                                ))}
                            </Form>

                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Registration</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check onChange={ev=> setRegistration( ev.target.checked)}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Required"}
                                    />

                                   
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Security</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"column", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                                <div style={{ display:"flex",alignItems:"flex-start"}}>
                                    <Form >
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                        <Form.Check 
                                            
                                            disabled
                                            checked
                                            type={type}
                                            label={"Passcode"}
                                            id={`disabled-default-${type}`}
                                            style={{marginTop:"5px"}}
                                        />
                                        
                                        
                                        </div>
                                        
                                    ))}
                                    </Form>
                                    <Form.Control  style={{marginLeft:"10px", width: "100px", marginBottom:"0px"}} onChange={ev=> setSecurityPasscode( ev.target.value)} type="email" defaultValue="289399" />
                            </div>
                            <Form.Text className="text-muted" >
                                Only users who have the invite link or passcode can join the meeting
                            </Form.Text>
                            
                            <Form style={{marginTop:"35px", marginBottom:"0px"}}>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check onChange={ev=> setSecurityWaitroom( ev.target.checked)}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Waiting room"}
                                    />

                                   
                                    </div>
                                ))}

                                <Form.Text className="text-muted" >
                                    Only users admitted by the host can join the meeting
                                </Form.Text>
                            </Form>

                            

                            <Form style={{marginTop:"35px"}}>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        onChange={ev=> setSecurityUserAuth( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"Only authenticated users can join meetings "}
                                    />

                                   
                                    </div>
                                ))}
                            </Form>
                                
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Video</Form.Label>
                        </Col>
                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"column", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="1">
                            <div >
                            <Form.Label style={{ marginBottom:"26px"}}>Host</Form.Label>
                            <Form.Label >Participant</Form.Label>
                            </div>
                        </Col>
                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"column", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                           
                                <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex", whiteSpace:"nowrap"}}>
                                    <Form.Check 
                                        
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        onChange={ev=> setVideoHost( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"on"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        onChange={ev=> setVideoHost( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"off"}
                                    />
                                    </div>
                                ))}
                                </Form>
                            
                            
                                
                                <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex"}}>
                                    <Form.Check 
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        onChange={ev=> setVideoPaticipant( ev.target.checked)}
                                        label={"on"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        onChange={ev=> setVideoPaticipant( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"off"}
                                    />
                                    </div>
                                ))}
                            </Form>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Audio</Form.Label>
                        </Col>
                        
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                        <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex"}}>
                                    <Form.Check 
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        value="Telephone"
                                        onChange={ev=> setAudio( ev.target.value)}
                                        label={"Telephone"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        value="Computer Audio"
                                        onChange={ev=> setAudio( ev.target.value)}
                                        id={`default-${type}`}
                                        label={"Computer Audio"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        value="Telephone and Computer Audio"
                                        onChange={ev=> setAudio( ev.target.value)}
                                        id={`default-${type}`}
                                        label={"Telephone and Computer Audio"}
                                    />
                                    </div>
                                ))}
                                </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Meeting Options</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-start",flexDirection:"column", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                        <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" >
                                    <Form.Check 
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        onChange={ev=> setMeetingHost( ev.target.checked)}
                                        label={"Enable join before host"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        onChange={ev=> setMeetingMute( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"Mute participants upon entry"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        style={{marginBottom:"20px"}}
                                        defaultChecked
                                        onChange={ev=> setMeetingAllow( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"Allow screen sharing"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        onChange={ev=> setMeetingPersonalId( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"Use Personal Meeting ID -------"}
                                    />
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                    <Form.Label style={{marginLeft:"20px"}}>One participant can share at a time</Form.Label>
                                    
                                    <Form.Label style={{marginLeft:"20px"}}>Who can share?:All Participants</Form.Label>

                                    <Form.Label style={{marginLeft:"20px"}}>Who can start sharing when someone else is sharing?:Host Only</Form.Label>

                                    </div>
                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        onChange={ev=> setMeetingRecord( ev.target.checked)}
                                        id={`default-${type}`}
                                        label={"Record the meeting automatically On the local computer"}
                                    />
                                    </div>
                                ))}
                                </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", alignItems:"flex-start", borderBottom: "1px solid #360404d5" , padding:"15px"}} xs="4">
                            <Form.Label>Alternative Host</Form.Label>
                        </Col>

                        <Col style={{ borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={ev=> setAlternative( ev.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{display:"flex", justifyContent:"space-evenly", borderBottom: "1px solid #360404d5" , padding:"15px"}} >
                            <Button onClick={()=>{CreateMeet()}} style={{width:"10%"}}>Save</Button>
                            <Button onClick={()=>{console.log(audio)}} style={{width:"10%"}}>Cancel</Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default MyZoom;