import React from 'react';

const HistoricoItem = ({ historico, onDelete }) => {
  return (
    <tr>
      <td>{historico.id}</td>
      <td>{historico.cliente}</td>
      <td>{historico.prato}</td>
      <td>{historico.quantidade}</td>
      <td>{historico.preco}</td>
      <td>
        <button onClick={() => onDelete(historico.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default HistoricoItem;
