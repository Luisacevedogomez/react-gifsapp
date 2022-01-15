import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('probando el componente <AddCategory/>', () => {
    const setCategories = jest.fn();
    // let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe mostrarse correctamente', () => {        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

    })

    test('NO debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe llamar el setCategoies y debe limpiar la caja de texto', () => {
        
        const value = "Hola mundo";
        wrapper.find("input").simulate("change", { target: { value } });

        wrapper.find("form").simulate("submit", { preventDefault() { } });
        
        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
    

})
