import Link from "next/link";
import styles from "./notfound.module.scss";

export default function NotFound() {

    return (
        <div className={styles.container}>
            <p className={styles.text}>Ops, esta página não foi encontrada!</p>
            <Link href="/" className={styles.button}>
                Voltar para a página inicial
            </Link>
        </div>
    );
}