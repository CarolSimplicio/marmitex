import React, { useState, useEffect } from "react";
import axios from "axios";
import EnderecoForm from "./CadastroEndereco"; // Ajuste o caminho conforme necessário

const TabelaEndereco = () => {
  const [endereco, setEndereco] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/endereco");
      console.log("Dados recebidos:", data); 
      setEndereco(data);
    } catch (error) {
      console.error("Erro ao buscar endereços:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExcluirUsuario = async (idEndereco) => {
    try {
      await axios.delete(`http://localhost:3001/endereco/${idEndereco}`);
      // Atualiza a lista de cadastros após a exclusão
      fetchData();
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <EnderecoForm onCadastroSucesso={fetchData} />
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Componente</th>
            <th>CEP</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {endereco.map((endereco) => (
            <tr key={endereco.idEndereco}>
              <td>{endereco.idEndereco}</td>
              <td>{endereco.endereco}</td>
              <td>{endereco.numero}</td>
              <td>{endereco.componente}</td>
              <td>{endereco.cep}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(endereco.idEndereco)}
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEndereco;
