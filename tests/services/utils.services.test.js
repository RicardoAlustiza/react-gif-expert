import { getGifs } from '../../src/services/utils.services';

describe('Utils services', () => {

    test('should return a gif array', async () => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual(expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        }));
    })
})