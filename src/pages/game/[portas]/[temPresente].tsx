import Porta from '../../../components/Porta'
import { useEffect, useState } from 'react'
import { atualizarPortas, criarPortas } from '../../../functions/portas'
import styles from '../../../styles/game.module.css'
import Link from "next/link"
import { useRouter } from 'next/dist/client/router'

export default function Game() {

    const router = useRouter()
    const [arrayPortas, setArrayPortas] =  useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setArrayPortas(criarPortas(portas,temPresente))
    }, [router?.query])

    function renderizarPortas(){
        return arrayPortas.map(porta => {
            return <Porta key={porta.numero} 
                value={porta} 
                onChange={novaPorta => setArrayPortas(atualizarPortas(arrayPortas, novaPorta))}/>
        })
    }
      
    return (
        <div className={styles.game}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href='/'>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )  
}
