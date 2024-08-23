import { render, screen } from '@testing-library/react';
import { GifCardComponent } from '../../../../src/components/GifGridComponent/GifCardComponent/GifCardComponent';

describe('GifCardComponent', () => {

    const title = 'Title';
    const url = 'https://localhost/image.jpg';

    test('should match with the snapshot', () => {

        const { container } = render(<GifCardComponent title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    })

    test('should shown the image with the correct url and alt', () => {

        render(<GifCardComponent title={ title } url={ url } />);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    })

    test('should shown the title in a paragraph', () => {
            
            render(<GifCardComponent title={ title } url={ url } />);
            expect( screen.getByText(title) ).toBeTruthy();
        }
    )
})