// import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Categorias = () => {
    
// const [categorias, setCategorias] = useState([]);
//     useEffect(() => {
//     const pegaCategoria = async () => {
//         const res = await axios.get('https://localhost:3001/pratosCategoria')
//         setCategorias(res.data.categories)
//         console.log("res.data", res.data);
//     }
//     pegaCategoria()
// }, [])

//     return (
//     <>
//         <h1 style={{ textAlign: 'center' }}>All Categories</h1>
//         <div className="category__wrapper">
//             {categorias.map(categoria =>
//                 <div key={Math.random()} className="category__item">
//                     <h2><a href="#" >{categoria}</a></h2>
//                     <Link to={`/catalogo/${categoria}`}></Link>
//                 </div>
//             )}
//         </div>
//     </>
//     )
// };

// export default Categorias