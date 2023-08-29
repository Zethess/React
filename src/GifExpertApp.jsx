import { useState } from 'react';
import { AddCategory, GifGrid } from './components';//apuntara al index directamente

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories= {setCategories} 
                onNewCategory = { (event) => onAddCategory(event) }
            />

            {/* permite recorrer el array y devolver algo nuevo */}
            {
            categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

        </>
    )
}