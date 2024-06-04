// PedidosForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Button, Form, Tab, Tabs, Accordion, Badge  } from 'react-bootstrap';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
    senha: ''
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
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };


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
                    {['checkbox'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-3">
                      <Form.Check
                        label="Batata frita"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-1`}
                      />
                      <Form.Check
                        label="Macarrão"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-2`}
                      />
                      <Form.Check
                        label="Arroz"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-3`}
                      />
                      <Form.Check
                        label="Carne ou frango"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-4`}
                      />
                      <Form.Check
                        label="Ovo frito"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-5`}
                      />
                      <Form.Check
                        label="Farofa"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-6`}
                      />
                    </div>
                  ))}
                </Form>



                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bebidas</Accordion.Header>
                  <Accordion.Body>
                    
                    
                  <Form>
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
                  ))}
                </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </Tab>
          </Tabs>

            {/* QUANTIDADE E PREÇO DO PEDIDO */}


          <Form.Control type="number" name="qtd" placeholder="Quantidade" value={formData.qtd} onChange={handleChange} />
          <Form.Control type="number" name="precototal" placeholder="PreçoTotal" value={formData.preco} />
          <Button type="submit">Fazer pedido</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroForm;
