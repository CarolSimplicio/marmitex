// CadastroEndereco.jsx
import React, { useState } from 'react';
import axios from 'axios';

const EnderecoForm = () => {
  const [formData, setFormData] = useState({
    endereco: '',
    numero: '',
    componente: '',
    cep: ''
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
      await axios.post('http://localhost:3001/endereco', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        endereco: '',
        numero: '',
        componente: '',
        cep: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="endereco" placeholder="Endereco" value={formData.endereco} onChange={handleChange} />
      <input type="number" name="numero" placeholder="Numero" value={formData.numero} onChange={handleChange} />
      <input type="text" name="componente" placeholder="Componente" value={formData.componente} onChange={handleChange} />
      <input type="number" name="cep" placeholder="Cep" value={formData.cep} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EnderecoForm;
