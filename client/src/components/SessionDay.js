import React from 'react';
import {Container, Table} from "react-bootstrap";
import "../components/modals/TableCss.css"

const SessionDay = () => {
    return (
        <Container>
            <Table bordered hover size="sm" style={{'width': '400px'}}>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody >
                <tr>
                    <td className="time" style={{'width': '60px'}}>Время</td>
                    <td style={{'width': '30px', 'height':'25px'}}>04</td>
                    <td style={{'width': '30px', 'height':'25px'}}>10</td>
                    <td style={{'width': '30px', 'height':'25px'}}>16</td>
                    <td style={{'width': '30px', 'height':'25px'}}>22</td>
                </tr>
                <tr>
                    <td style={{'width': '30px', 'height':'25px'}}>Облочность</td>
                    <td>В/С</td>
                    <td>В/С</td>
                    <td>В/С</td>
                    <td>В/С</td>
                </tr>
                <tr>
                    <td>Осадки</td>
                    <td>В/С</td>
                    <td colSpan="1">В/С</td>
                    <td>В/С </td>
                    <td>В/С </td>
                </tr>
                <tr>
                    <td>Температура</td>
                    <td>25</td>
                    <td>26</td>
                    <td>29</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>Давление</td>
                    <td>763</td>
                    <td>755</td>
                    <td>776</td>
                    <td>758</td>
                </tr>
                <tr>
                    <td>Скорость ветра</td>
                    <td>3</td>
                    <td>5</td>
                    <td>8</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Направление ветра</td>
                    <td>Ю-В</td>
                    <td>С</td>
                    <td>С-В</td>
                    <td>Ю</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default SessionDay;