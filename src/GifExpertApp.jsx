import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () =>{
        const newCategory = 'Valorant';
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <button onClick={ onAddCategory } >Agregar</button>

            <ol>
                {/* permite recorrer el array y devolver algo nuevo */}
                {categories.map( category =>{
                    return <li key={ category } > {category} </li>
                })
                }
            </ol>

        </>
    )
}