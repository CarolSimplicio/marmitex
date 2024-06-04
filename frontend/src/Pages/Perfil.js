//Lista de Usuarios
import React from "react";
import CadastroEndereco from "../Components/Endereco/CadastroEndereco";
import TabelaEndereco from "../Components/Endereco/TabelaEndereco";
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ListaUsuarios = () => {
    return (
        <>
            <div>
                <h2>Perfil</h2>
                <Container>
                    <Row>
                        <Col md='1'>
                            <h6>img</h6></Col>
                        <Col><h4>Olá, fulano...</h4></Col></Row>
                </Container>
                <Container>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div >
        </>
    );
};

export default ListaUsuarios;
