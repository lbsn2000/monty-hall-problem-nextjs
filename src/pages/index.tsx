import Head from 'next/head'
import Cartao from '../components/Cartao'

export default function Home() {
      
    return (
        <div style={{display: 'flex'}}>
            <Head>
                <title>Problema de Monty Hall</title>
                <link rel="icon" href="/icon-porta.svg" />
            </Head> 

            <h1>Problema de Monty Hall</h1>

            <Cartao/>
             
        </div>
    )  
}
