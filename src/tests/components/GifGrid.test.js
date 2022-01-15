import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas componente <GifGrid/>', () => {

    const category = 'One Piece';
    test('debe cargar correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
          data: [],
          loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan las imagenes en useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Cualquier titulo',
            url: 'https://localhost/cualquier/cosa.jpg'
        }]

        useFetchGifs.mockReturnValue({
          data: gifs,
          loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    

})
