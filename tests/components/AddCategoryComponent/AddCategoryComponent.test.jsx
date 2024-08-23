import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategoryComponent } from '../../../src/components/AddCategoryComponent/AddCategoryComponent'

describe('AddCategoryComponent', () => {

    const inputValue = 'One'

    test('should change the search input value', () => {

        render(<AddCategoryComponent onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: inputValue } })

        expect(input.value).toBe('One')
    })

    test('should call onNewCategory if the input has any value', () => {
        const onNewCategory = jest.fn()

        render(<AddCategoryComponent onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('should not call onNewCategory if the input has no value', () => {
        const onNewCategory = jest.fn()

        render(<AddCategoryComponent onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: '' } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})