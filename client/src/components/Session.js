import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";



const Session = () => {
    const [sector, setSector] = useState('')
    const [pond, setPond] = useState('')
    const [date, setDate] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const createSession = () => setShow(false); //реализовать создание сессии
    return (
        <>
        <Container>
            <Button onClick={handleShow} variant="outline-success">New Session</Button>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Session</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                placeholder="Write Data"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pond</Form.Label>
                            <Form.Control
                                placeholder="Write Pond"
                                value={pond}
                                onChange={e => setPond(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sector</Form.Label>
                            <Form.Control
                                placeholder="Write Sector"
                                value={sector}
                                onChange={e => setSector(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Button onClick={createSession}>Create</Button>
            </Modal.Header>
        </Modal>
        </>
    );
};

export default Session;