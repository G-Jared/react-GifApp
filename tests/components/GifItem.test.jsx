import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prubebas en <GifItem />', () => {

    const title = 'DBZ';
    const url = 'https://dbz.com/dbz.jpg';

    test('Hacer match con snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {

        render( <GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Comprobar que el titulo se muestre en el componente', () => {

        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();
        
    });
});