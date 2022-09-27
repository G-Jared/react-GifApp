import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        
        const categories_lower = categories.map( categories => categories.toLowerCase());
        if( categories_lower.includes(newCategory.toLowerCase()) ) return;
        setCategories( [newCategory,...categories] );
    }

  return (
    <>
 
        <h1>GiftExpertApp</h1>

        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={ onAddCategory }
        />
     
        { 
            categories.map( category =>( 

                <GifGrid 
                key={ category }
                category={ category } />

            ))
         }
      
        
    </>
  )
}
