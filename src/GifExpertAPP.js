
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const initCategories = [ 'One Puch Man'];

    // para lista dinamicas y modifables desde UI se puede usar useState
    const [categories, setCategories] = useState(initCategories);

    // definir una funcion para el boton
    // const handleAdd = () =>{
    //     const siguiente = (categories.length + 1).toString();
    //     // setCategories( [...categories,'NuevoValor' + siguiente ]);
    //     // otra opcion es usar el callback
    //     setCategories( cats => [...categories, 'NuevoValor'+ siguiente]);
    // }
    return <>
        <h2> GifExpertApp </h2>
        {/* <AddCategory /> */}
        <AddCategory setCategories = { setCategories } />
        <hr />
        {/* <button onClick= {handleAdd}>Agregar</button> */}
        {/* crear una lista para mostrar las categorias */}
        <ol>
            {
                categories.map( category =>(
                    
                    // return <li key= {category}> {category} </li>
                    // agregamos el componente GifGrid
                    <GifGrid key = {category} category = { category } />
                ))
            }
        </ol>
    </>

};

export default GifExpertApp;
