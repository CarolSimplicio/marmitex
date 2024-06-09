import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

import { Card } from "react-bootstrap";

const ListaCatalogo = () => {

    const {categoria} = useParams(); 
    
    useEffect(() => {
        const getItems = async () => {
            try {
                const result = await axios.get('http://localhost:3001/pratos');
                const allItems = result.data;
                const categoryItems = allItems.filter(prato => prato.categoria === categoria);
                setPratos(categoryItems);
            } catch (error) {
                console.error("Erro ao buscar pratos:", error);
            }
        };
        getItems();
    }, [categoria]);




    const [pratos, setPratos] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const { data } = await axios.get("http://localhost:3001/pratos");
    //         setPratos(result.data.entries);
    //         // setItems(result.data.entries)
    //         console.log("result.entries", result.data.entries);
    //       } catch (error) {
    //         console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    return (
        <>
        {pratos.map((prato, index) => (
            <>
                <Card key={prato.idPrato} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={prato.imagem} alt={prato.nome}/>
                  <Card.Body>
                    <Card.Title>{prato.nome}</Card.Title>
                    <Card.Text>{prato.descricao}
                    </Card.Text>
                    <b>{prato.preco}</b>
                    <Link to={`/detalhes/${prato.idPrato}`}>Ver detalhes</Link>
                  </Card.Body>
                </Card>
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