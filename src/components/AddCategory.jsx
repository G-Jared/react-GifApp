import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {//Agregas el parametro de las props setCategories en este caso

    const [inputValue, setinputValue] = useState('');//Al mandar valor inicial debe usarse onChange
    const onInputChange = ({target})=>{
        setinputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <=1) return; 

        //setCategories( categories=>[inputValue, ...categories] );
        //desestructuras categories y agregas el inputValue al arreglo inicial

        onNewCategory( inputValue.trim() );
        setinputValue('');
    }


  return (
    <form onSubmit={onSubmit} >
        <input 
            type="text"
            placeholder="Buscar Gifs" 
            value={inputValue}
            onChange={onInputChange}

        />
    </form>
  )
}
