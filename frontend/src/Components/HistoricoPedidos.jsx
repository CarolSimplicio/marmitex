import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table  } from 'react-bootstrap';

const TabelaCadastroProd = () => {
  const [pedidos, setpedidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/pedidos");
        setpedidos(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirProd = async (idPedido) => {
    try {
      await axios.delete(`http://localhost:3001/pedidos/${idPedido}`);
      // Atualiza a lista de pedidos após a exclusão
      const { data } = await axios.get("http://localhost:3001/pedidos");
      setpedidos(data);
      console.log("Pedido excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };

  return (
    <div className="container tableEstoque">
      <Table responsive className="tabelaEstoque" border={2} cellPadding={8} cellSpacing={5}>
        <thead>
          <tr className="categoriaEstoque">
            <th>ID</th>
            <th>Cliente</th>
            <th>Prato</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((historico) => (
            <tr className="pedidos" key={historico.idPedido}>
              <td>{historico.idPedido}</td>
              <td>{historico.nomeCliente}</td>
              <td>{historico.nomePrato}</td>
              <td>{historico.quantidade}</td>
              <td>{historico.preco}</td>

              <td>
                <Button variant="success" onClick={() => handleExcluirProd(historico.idProduto)}>Concluido</Button>
                <Button variant="danger" onClick={() => handleExcluirProd(historico.idProduto)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TabelaCadastroProd;