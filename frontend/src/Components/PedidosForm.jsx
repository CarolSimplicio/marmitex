// PedidosForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Button, Form, Tab, Tabs, Accordion, Badge  } from 'react-bootstrap';

import BatataFrita from '../Img/batataFrita.jpg';
import Macarrão from '../Img/macarrao.webp';
import Arroz from '../Img/arroz.webp';
import CarneouFrango from '../Img/carneeFrango.jpg';
import OvoFrito from '../Img/ovoFrito.jpeg';
import Farofa from '../Img/farofa.webp';
import Cocacola from '../Img/carneeFrango.jpg';
import Guarana from '../Img/ovoFrito.jpeg';
import SucoUva from '../Img/farofa.webp';


const CadastroForm = () => {
  const [formData, setFormData] = useState({
    qtd: '',
    precototal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/Pratos', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        qtd: '',
        precototal: ''
      });
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      alert('Erro ao criar pedido. Verifique o console para mais detalhes.');
    }
  };



  const [adicionais, setadicionais] = useState([
    {
        foto: BatataFrita,
        nome: "Batata frita",
        preco: "+ R$10,00"
    }, {
        foto: Macarrão,
        nome: "Macarrão",
        preco: "+ R$15,00"
    }, {
        foto: Arroz,
        nome: "Arroz",
        preco: "+ R$6,50"
    }, {
        foto: CarneouFrango,
        nome: "Carne ou frango",
        preco: "+ R$20,00"
    }, {
        foto: OvoFrito,
        nome: "Ovo frito",
        preco: "+ R$7,00"
    }, {
        foto: Farofa,
        nome: "Farofa",
        preco: "+ R$3,00"
    }
]);

const [bebidas, setbebidas] = useState([
  {
      foto: BatataFrita,
      nome: "Batata frita",
      preco: "+ R$10,00"
  }, {
      foto: Macarrão,
      nome: "Macarrão",
      preco: "+ R$15,00"
  }, {
      foto: Arroz,
      nome: "Arroz",
      preco: "+ R$6,50"
  }, {
      foto: CarneouFrango,
      nome: "Carne ou frango",
      preco: "+ R$20,00"
  }, {
      foto: OvoFrito,
      nome: "Ovo frito",
      preco: "+ R$7,00"
  }
]);




  // const TabelaCadastro = () => {
//   const [pratos, setPratos] = useState([]);

//   useEffect(() => {
//     const fetchData = async (idPrato) => {
//       try {
//         const { data } = await axios.get("http://localhost:3001/pratos/${idPrato}`");
//         setPratos(data);
//       } catch (error) {
//         console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          {/* IMAGEM, NOME E CATEGORIA */}

          <img />
          <h1 value={formData.nome} /><Badge bg="danger" value={formData.categoria}>Categoria</Badge>
        </Col>
        <Col>

          {/* DESCRIÇÃO */}
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="descricao" title="Descricao">
              <h1 value={formData.descricao} />
            </Tab>
            <Tab eventKey="adicionais" title="Adicionais">

          {/* ADICIONAIS */}
              
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Porções</Accordion.Header>
                  <Accordion.Body>

                  <Form>
                    {adicionais.map((conteudo) => (
                            <div className="centralizar">
                                    <img className="img-fora" src={conteudo.foto} />
                                    <h3 className="nomeprod"> {conteudo.nome} {conteudo.preco}</h3>
                              </div>
                    ))}
                </Form>


                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bebidas</Accordion.Header>
                  <Accordion.Body>
                    
                    
                  <Form>

                  {bebidas.map((conteudo,) => (
                      <div className="centralizar">
                              <img className="img-fora" src={conteudo.foto} />
                              <h3 className="nomeprod"> {conteudo.nome} {conteudo.preco}</h3>
                        </div>
                    ))}


{/* 

                    {['checkbox'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-3">
                      <Form.Check
                        label="Coca-cola"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-7`}
                      />
                      <Form.Check
                        label="Guaraná"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-8`}
                      />
                      <Form.Check
                        label="Suco natural"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-9`}
                      />
                    </div>
                  ))} */}
                </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </Tab>
          </Tabs>

            {/* QUANTIDADE E PREÇO DO PEDIDO */}

            <h5>Quantidade de pratos:</h5>
          <Form.Control type="number" name="qtd" value={formData.qtd} onChange={handleChange} />
            <h5>Preço:</h5>
          <h2 value={formData.precototal} />
          <Button type="submit">Fazer pedido</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroForm;
