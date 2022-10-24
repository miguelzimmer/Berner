import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Berner - Contato</title>
            </Head>
           
            Conteúdo da página contato!
        </div>
    )
}

export default Home;