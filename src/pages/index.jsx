import Head from 'next/head'
import Presente from '../components/Presente'
import Porta from '../components/Porta'
import PortaModel from '../model/PortaModel'
import { useState } from 'react'

export default function Home() {

  const [novaPorta, setNovaPorta] = useState(new PortaModel(1, false, true, false))
  
  return (
        <div style={{display: 'flex'}}>

            <Head>
                <title>Problema de Monty Hall</title>
                <link rel="icon" href="/icon-porta.svg" />
            </Head>

            <Porta porta={novaPorta}/>
        </div>
    )
}
