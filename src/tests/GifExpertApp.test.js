import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas al componente <GifExpertApp/>", () => {
    test("debe mostrar el componente correctamente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['One Piece', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    

});
