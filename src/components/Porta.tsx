import styles from "../styles/Porta.module.css"
import PortaModel from "../model/PortaModel"


interface PortaProps {
    porta: PortaModel

}

export default function Porta(props: PortaProps){

    const { porta } = props
    const selecionada = porta.selecionada ? styles.selecionada : ''

    return(
        <div className={styles.area}>
            <div className={`${styles.frame} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numeroDaPorta}>{porta.numero}</div>
                    <div className={styles.massaneta} />
                </div>
            </div>
            <div className={styles.groundFrame} />
        </div>
    )
}