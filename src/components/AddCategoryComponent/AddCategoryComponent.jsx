import { useState } from "react"

export const AddCategoryComponent = ({onNewCategory, placeholder}) => {
  
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        const newInputValue = inputValue.trim()
        if(inputValue.trim().length <= 1) return

        onNewCategory(newInputValue)
        setInputValue('')
    }

    return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    </form>
  )
}
