import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navegacion}>
        <Link href='/' legacyBehavior>
            <a>
              Inicio
            </a>
        </Link>
        <Link href='/nosotros' legacyBehavior>
            <a>
              Nosotros
            </a>
        </Link>
        <Link href='/tienda' legacyBehavior>
            <a>
              Tienda
            </a>
        </Link>
        <Link href='/blog' legacyBehavior>
            <a>
              Blog
            </a>
        </Link>
      </nav>
      <p className={styles.copyright}>
        Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
