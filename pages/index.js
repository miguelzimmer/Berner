import MenuHeader from '../components/Menu';
import { Layout } from 'antd';
import SectionHome from '../components/SectionHome.js';


function Home() {
    const { Content } = Layout;
    
    return (
      <Content> 
				<MenuHeader />
				<SectionHome id={"empresa"} titulo={'Empresa'} descricao={ <p>A empresa Berner Indústria Química Ltda foi fundada em 1985, está localizada em Santa Catarina na cidade de Blumenau.Blumenau é uma cidade localizada no médio vale do rio Itajaí-Açu, principal rio da região, faz divisas com as cidades de Jaraguá do Sul, Massaranduba, Pomerode, Indaial, Gaspar, Botuverá, Luís Alves e Guaramirim.</p>} corFundo={'#f5f5f5'} />
				<SectionHome id={"representante"} titulo={'Representantes'} descricao={'sss'} corFundo={'white'}/>
				<SectionHome id={"ondeEstamos"} titulo={'Onde Estamos'} descricao={<a href="https://www.google.com/maps/search/?api=1&query=Rua+S%C3%A3o+Paulo%2C+825%2C+Victor+Konder%2CBlumenau">CLIQUE AQUI</a>} corFundo={'#f5f5f5'}/>
				<SectionHome id={"faleConosco"} titulo={'Fale Conosco'} descricao={'VEM AI'} corFundo={'white'}/>
      </Content>         
    )
}

export default Home;