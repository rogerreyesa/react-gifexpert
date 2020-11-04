import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    // Para saber lo que esta escrito usaremos el useState

    const [inputValue, setInputValue] = useState('');

    // Definir una funcion para manejar el cambio de texto en el imput
    // colocarlo en el state inputValue
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // definir una funcion para cuando se presiona enter en el input
    const handleSubmit = (e) => {
        // prevenir el comportamiento por default del formulario usar:
        // e.preventDefault()
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // Como no llegan las categorias, usamos el callback)
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }
        // console.log('Submit Hecho');
        
        

    }
    return (
        // cambiar a formulario en lugar de fragment. Agregamos al form
        // el evento onSubmit para prevenir el refresh completo al momento 
        // del post
        // <>
        <form onSubmit = {handleSubmit}>
            {/* <h2>Add Category</h2> */}
            <input 
                type="text"
                value= { inputValue }
                onChange = { handleInputChange}
            />  
        </form>          
        // </>
    )
}
// usar PropTypes para requerir la funcion setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}