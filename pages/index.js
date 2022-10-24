import Head from 'next/head';
import MenuHeader from '../components/Menu';
import { Layout } from 'antd';
import SectionHome from '../components/SectionHome';

function SectionXPTO({titulo,descricao}) {
	return (
		<section style={{flexDirection:'row', display:'flex', height:'100vh'}}>
			<div style={{flex:1, backgroundColor:'red'}}>
				<p style={{fontSize:'25px'}}>
					{titulo}
				</p>
			</div>
			<div style={{flex:2, backgroundColor:'blue'}}>
				{descricao}
			</div>
		</section>
	)
}
function Home() {
    const { Header, Footer, Content } = Layout;
    
    return (
    <>
    <Layout>
      <Header>
        <MenuHeader />
      </Header>
      <Content> 
				<SectionHome titulo={'Empresa'} descricao={'A empresa Berner Indústria Química Ltda foi fundada em 1985, está localizada em Santa Catarina na cidade de Blumenau.Blumenau é uma cidade localizada no médio vale do rio Itajaí-Açu, principal rio da região, faz divisas com as cidades de Jaraguá do Sul, Massaranduba, Pomerode, Indaial, Gaspar, Botuverá, Luís Alves e Guaramirim.'} />
				<SectionXPTO titulo={'Onde Estamos'} descricao={'Blumenau'}/>
        </Content>
      <Footer>Footer</Footer>
    </Layout>         
    </>
    )
}

export default Home;