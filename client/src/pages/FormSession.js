import React from 'react';
import {Container, Form, FormControl} from "react-bootstrap";

const FormSession = () => {
    return (
        <Container>
            <Form>
                <FormControl
                    placeholder="Дата"
                />
                <FormControl
                    placeholder="Водоем"
                />
                <FormControl
                    placeholder="Сектор"
                />
            </Form>

        </Container>
    );
};

export default FormSession;