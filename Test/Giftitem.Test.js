import { render } from "@testing-library/react";
import { GifItem } from "../src/components";


describe('Pruebas en GiftItem.jsx', () => {
    test('Debe hacer match con el snapshot', () => {
        render(<GifItem />);
    });
});