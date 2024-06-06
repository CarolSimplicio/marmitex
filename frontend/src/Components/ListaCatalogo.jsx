import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "react-bootstrap";

const ListaCatalogo = () => {
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get("http://localhost:3001/pratos");
            setPratos(data);
          } catch (error) {
            console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
        {pratos.map((prato) => (
            <>
                <h6>{prato.idPrato}</h6>
                <h6>{prato.nome}</h6>
                <h6>{prato.categoria}</h6>
                <h6>{prato.descricao}</h6>
                <h6>{prato.preco}</h6>
            </>
        ))}



        {/* <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Nome</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
            </Card.Text>
            <t><b>preço/Ver Detalhes</b></t>
          </Card.Body>
        </Card> */}

        </>
    );
};

export default ListaCatalogo;