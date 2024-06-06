import React from "react";
import CadastroEndereco from "../Components/Endereco/CadastroEndereco";
import TabelaEndereco from "../Components/Endereco/TabelaEndereco";
import { Container, Row, Col } from 'react-bootstrap';
// import '../Css/Perfil.css';


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
                    <div className="local">Casa</div>
                </Container>
            </div >
        </>
    );
};

export default ListaUsuarios;
