import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        title="Nosotros"
        description="Sobre Nosotros, GuitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">
          Nosotros
        </h1>
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen Nosotros'/>
          <div>
            <p className={styles.parrafo}>
            Vivamus ac erat tellus. Phasellus maximus enim et augue semper, in gravida dui ullamcorper. Duis pharetra metus sit amet nulla posuere viverra. Integer at maximus ligula, id imperdiet lacus. Sed semper mi metus, nec condimentum leo congue eu. Duis malesuada ligula sollicitudin justo pellentesque molestie. Sed quis imperdiet nunc. Maecenas eget congue quam. Donec non erat laoreet, lobortis sem quis, ornare augue. Suspendisse potenti. In nisl nisi, porttitor sit amet nunc volutpat, ultricies facilisis urna. Vivamus vehicula velit sed eros ultricies, vel luctus odio aliquet.
            </p>
            <p className={styles.parrafo}>
            Proin condimentum pretium lectus, eget faucibus tellus pulvinar et. Suspendisse potenti. Donec sed sem enim. Nulla vitae nibh velit. Curabitur scelerisque fermentum tellus. Sed ut leo elementum augue pellentesque tincidunt. Praesent vestibulum magna imperdiet, sagittis ante tincidunt, rhoncus libero. Curabitur id ante at mauris eleifend hendrerit. Sed hendrerit urna eget risus malesuada, a convallis justo dapibus. Proin id dolor nec purus dictum vehicula. Etiam vulputate placerat quam placerat imperdiet.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
