import {render, screen} from '@testing-library/react';
import {GifGridComponent} from '../../../src/components/GifGridComponent/GifGridComponent';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

jest.mock('../../../src/hooks/useFetchGifs');

describe('GifGridComponent', () => {
    
    const category = 'One';

    test('should show the initial loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGridComponent category={category} />);
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
    })

    test('should show items when images are loaded', () => {

        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: 'ABC',
                    title: 'Title',
                    url: 'https://localhost/image.jpg'
                },
                {
                    id: 'DEF',
                    title: 'Title',
                    url: 'https://localhost/image.jpg'
                }
            ],
            isLoading: false
        })

        render(<GifGridComponent category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2)
        
    })
})