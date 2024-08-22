import { useState } from "react"
import { AddCategoryComponent } from "../AddCategoryComponent/AddCategoryComponent"
import { GifGridComponent } from "../GifGridComponent/GifGridComponent"

export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategoryComponent onNewCategory={ onAddCategory } placeholder={'Add Category'} />
            
            {
                categories.map(category => (
                    <GifGridComponent key={category} category={category} />
                ))
            }
        </>
    )
}