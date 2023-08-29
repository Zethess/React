import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = (event) =>{
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <=1) return;
         //Como argumento a setCategories se le manda function(categories) { return [ inputValue, ...categories ]; }
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }
  return (
    <form onSubmit={ onSubmit}>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange}
    />
    </form>
  )
}
