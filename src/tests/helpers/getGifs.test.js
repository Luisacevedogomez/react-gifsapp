import { getGifs } from "../../helpers/getGifs";

describe("Pruebas al archivo getGifs", () => {
    test("debe traer 10 registros",async () => {
        const gifs = await getGifs("One Piece");
        expect(gifs.length).toBe(10);
    });

    test("debe traer 0 registros", async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
});
