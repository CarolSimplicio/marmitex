import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Categorias.css"

const Categorias = () => {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/");
    }

const [categorias, setCategorias] = useState([]);

useEffect(() => {
    const pegaCategorias = async () => {
        try {
            const res = await axios.get('http://localhost:3001/pratos');
            const categoriasUnicas = [...new Set(res.data.map(prato => prato.categoria))];
            setCategorias(categoriasUnicas);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    };
    pegaCategorias();
}, []);

    return (
    <>
        <div className="categoriaEspaco">
                {categorias.map((categoria, index) => (
                    <div key={index} className="category__item">
                        <h2 className="categoriaTexto"><Link to={`/catalogo/${categoria}`} className="categoriaLink">{categoria}</Link></h2>
                    </div>
                ))}
            </div>
        {/* rota de teste que funciona <h2 href="#" onClick={routeChange}><a>Frango</a></h2> */}
    </>
    )
};

export default Categorias