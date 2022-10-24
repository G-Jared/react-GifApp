import { getGif } from '../../src/helpers/getGifs';

describe("Pruebas en getGifs()", () => {

    test('Debe retornar arreglo de gifs', async() => {

        const gifs = await getGif('DBZ');
        expect(gifs.length).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({ //Evaluar que contenga la estructura esperada
            id: expect.any( String ),//Evalar que el id contenga un string
            title: expect.any( String ),
            //url: expect.any( String ),
            url: expect.stringContaining('https'),
            
        });
    });
});