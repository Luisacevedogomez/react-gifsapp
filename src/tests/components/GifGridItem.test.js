import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas al componente GifGridItem", () => {
    const title = "Un titulo";
    const url = "https://localhost/foto.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe tener un parrafo con el title", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("debe tener una imagen con el url y el title", () => {
      const img = wrapper.find("img");
      expect(img.prop('src')).toBe(url);
      expect(img.prop("alt")).toBe(title);
    });

    test('debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    }) 

});
