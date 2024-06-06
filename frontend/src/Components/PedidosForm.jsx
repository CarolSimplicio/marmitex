// Descrição do.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Button, Form, Tab, Tabs, Accordion, Badge, ListGroup } from 'react-bootstrap';

import BatataFrita from '../Img/batataFrita.jpg';
import Macarrão from '../Img/macarrao.webp';
import Arroz from '../Img/arroz.webp';
import CarneouFrango from '../Img/carneeFrango.jpg';
import OvoFrito from '../Img/ovoFrito.jpeg';
import Farofa from '../Img/farofa.webp';
import Cocacola from '../Img/cocacola.webp';
import Guarana from '../Img/guaranalata.webp';
import SucoUva from '../Img/sucodeuva.webp';


const CadastroForm = () => {

  const { idPrato } = useParams();
  const [prato, setPrato] = useState(null);

  useEffect(() => {
    const getPrato = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/pratos/${idPrato}`);
        setPrato(result.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do prato:", error);
      }
    };
    getPrato();
  }, [idPrato]);


  const [formData, setFormData] = useState({
    qtd: '',
    precototal: 0
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [selectedAdicionais, setSelectedAdicionais] = useState([]);
  const [selectedBebidas, setSelectedBebidas] = useState([]);

  const [adicionais, setadicionais] = useState([
    {
        foto: BatataFrita,
        nome: "Batata frita",
        preco: 10.00,
        descricao: "Adiciona batata frita adicional à marmita."
    }, {
        foto: Macarrão,
        nome: "Macarrão",
        preco: 15.00,
        descricao: "Uma porção de macarrão adicional vem separado."
    }, {
        foto: Arroz,
        nome: "Arroz",
        preco: 6.50,
        descricao: "Uma porção de arroz adicional vem separado."
    }, {
        foto: CarneouFrango,
        nome: "Carne ou frango",
        preco: 20.00,
        descricao: "Adiciona carne ou frango adicional à marmita."
    }, {
        foto: OvoFrito,
        nome: "Ovo frito",
        preco: 7.00,
        descricao: "Adiciona um ovo frito adicional à marmita."
    }, {
        foto: Farofa,
        nome: "Farofa",
        preco: 3.00,
        descricao: "Uma porção de farofa adicional vem separado."
    }
]);

const [bebidas, setbebidas] = useState([
  {
      foto: Cocacola,
      nome: "Lata Coca-cola",
      preco: 7.00,
      descricao: "Lata de Coca-cola."
  }, {
      foto: Guarana,
      nome: "Lata Guaraná antartica",
      preco: 7.00,
      descricao: "Lata de Guaraná antartica."
  }, {
      foto: SucoUva,
      nome: "Suco de uva",
      preco: 6.50,
      descricao: "Suco de uva natural Del Valle."
  }
]);


const handleAdicionalChange = (adicional) => {
  setSelectedAdicionais(prevState =>
    prevState.includes(adicional)
      ? prevState.filter(item => item !== adicional)
      : [...prevState, adicional]
  );
};

const handleBebidaChange = (bebida) => {
  setSelectedBebidas(prevState =>
    prevState.includes(bebida)
      ? prevState.filter(item => item !== bebida)
      : [...prevState, bebida]
  );
};

const calculateTotal = () => {
  const adicionaisTotal = selectedAdicionais.reduce((sum, item) => sum + item.preco, 0);
  const bebidasTotal = selectedBebidas.reduce((sum, item) => sum + item.preco, 0);
  return adicionaisTotal + bebidasTotal;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:3001/pratos', formData);
    alert('Cadastro criado com sucesso!');
    setFormData({
      qtd: '',
      precototal: 0
    });
    setSelectedAdicionais([]);
    setSelectedBebidas([]);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    alert('Erro ao criar pedido. Verifique o console para mais detalhes.');
  }
};

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} sm={12}> 
          {/* IMAGEM, NOME E CATEGORIA DO PRATO ESCOLHIDO NO CATALOGO*/}

          <img src={prato.imagem} alt={prato.nome} />
          <h1 value={prato.nome} /><Badge bg="danger" value={prato.categoria}></Badge>
        </Col>
        <Col>

          {/* DESCRIÇÃO DO PRATO + TUTORIAL DE COMO ESQUENTAR */}
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="descricao" title="Descricao">
              <h1 value={prato.descricao} />


              <h1 className='titulo1Add my-3'>Quibes e Lasanhas</h1>


              <ListGroup>
                  <ListGroup.Item>Resfriados</ListGroup.Item>
                  <ListGroup.Item>Micro-ondas*: 5 min;</ListGroup.Item>
                  <ListGroup.Item>Banho-Maria: 10 min;</ListGroup.Item>
                  <ListGroup.Item>Forno Convencional - 15 min.</ListGroup.Item>
                  <ListGroup.Item>Congelados</ListGroup.Item>
                  <ListGroup.Item>Micro-ondas*: 12 min;</ListGroup.Item>
                  <ListGroup.Item>Banho-Maria: 15 min;</ListGroup.Item>
                  <ListGroup.Item>Forno Convencional: decongelar antes de aquecer.</ListGroup.Item>
              </ListGroup>



              <h1 className='titulo1Add my-3'>Marmitas</h1>

              <ListGroup>
                  <ListGroup.Item>Resfriado Micro-ondas - 3 min.</ListGroup.Item>
                  <ListGroup.Item>Congelado Micro-ondas - 7 min</ListGroup.Item>
                  <ListGroup.Item>Levante a tampa até o local indicado antes de aquecer.</ListGroup.Item>
              </ListGroup>


              <h1 className='titulo1Add my-3'>MODO DE AQUECER</h1>

              <ListGroup>
                  <ListGroup.Item>Micro-ondas</ListGroup.Item>
                  <ListGroup.Item>Faça 3 furinhos na parte superior da embalagem plástica de maneira a perimitir a saída de ar. Aqueça. Manuseie com uma pinça ou protetor e sirva.</ListGroup.Item>
                  <ListGroup.Item>Banho-Maria</ListGroup.Item>
                  <ListGroup.Item>Mantenha a embalagem plástica intacta. Mergulhe em uma panela com água fervente, baixe para fogo médio. Retire com ajuda de uma pinça. Corte o saquinho e sirva.</ListGroup.Item>
                  <ListGroup.Item>Forno Convencional</ListGroup.Item>
                  <ListGroup.Item>Mantenha o produto em geladeira por 10h antes de levar ao forno. Retire a embalagem plástica e aqueça em forno médio (180ºC) pré aquecido.</ListGroup.Item>
                  <ListGroup.Item  className="descAdd">***O tempo de preparo pode variar conforme a potência do seu equipamento. Após aberto, consumir no mesmo dia.</ListGroup.Item>
              </ListGroup>

        </Tab>
            <Tab eventKey="adicionais" title="Adicionais">

          {/* ADICIONAIS */}
                           
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Porções</Accordion.Header>
                  <Accordion.Body>

                  <Form>
                    {adicionais.map((conteudo, index) => (
                      <div key={index} className='containerAdd my-2'>
                        <Row>
                        <Col md={1} className='my-auto'>
                            {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                type="checkbox"
                                id={`adicional-${index}`}
                                checked={selectedAdicionais.includes(conteudo)}
                                onChange={() => handleAdicionalChange(conteudo)}
                              />
                              </div>
                            ))}
                          </Col>
                          <Col md={3} sm={12} className=" my-auto">
                            <img className="imgAdd" src={conteudo.foto} alt={conteudo.nome} />
                          </Col>
                          <Col md={8} sm={12} className='my-auto'>
                            <h3 className="textoAdd">{conteudo.nome} + R${conteudo.preco.toFixed(2)}</h3>
                            <h3 className="descAdd">{conteudo.descricao}</h3>
                          </Col>
                      </Row>
                    </div>
                    ))}
                </Form>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bebidas</Accordion.Header>
                  <Accordion.Body>
                    
                    
                  <Form>

                  {bebidas.map((conteudo, index) => (
                    <div key={index} className='containerAdd'>
                        <Row>
                        <Col md={1} className='my-auto'>
                            {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                type="checkbox"
                                id={`adicional-${index}`}
                                checked={selectedAdicionais.includes(conteudo)}
                                onChange={() => handleAdicionalChange(conteudo)}
                              />
                              </div>
                            ))}
                          </Col>
                          <Col md={3} sm={12} className=" my-auto">
                            <img className="imgAdd" src={conteudo.foto} />
                          </Col>
                          <Col md={8} sm={12} className='my-auto'>
                            <h3 className="textoAdd">{conteudo.nome} + R${conteudo.preco.toFixed(2)}</h3>
                            <h3 className="descAdd">{conteudo.descricao}</h3>
                          </Col>
                        </Row>
                      </div>
                    ))}


                </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </Tab>
          </Tabs>

            {/* QUANTIDADE E PREÇO DO PEDIDO */}

            <h5 className='my-3'>Quantidade de pratos:</h5>
          <Form.Control type="number" name="qtd" value={formData.qtd} onChange={handleChange} />
          <h5>Preço:</h5>
          <h2>{calculateTotal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
          <Button type="submit">Fazer pedido</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroForm;
