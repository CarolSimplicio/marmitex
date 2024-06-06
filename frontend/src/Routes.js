import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
// import Cadastro from "./Pages/Cadastro";
import TabelaUsuarios from "./Pages/ListaUsuarios";
import Perfil from "./Pages/Perfil";
import Pratos from "./Pages/Descricao";
import Catalogo from "./Pages/Catalogo";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        <Route path="/listaUsuarios" element={<TabelaUsuarios />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/pedidos" element={<Pratos />} />
      </Routes>
    </>
  );
};

export default Rotas;
