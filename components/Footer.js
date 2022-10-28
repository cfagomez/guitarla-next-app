import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <nav>
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
      <p>
        Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
