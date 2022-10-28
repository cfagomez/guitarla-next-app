import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, description = '', title = ''}) => {
  return (
    <>
        <Head>
            <meta name="description" content={description}/>
            <title>{`GuitarLA - ${title}`}</title>
        </Head>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout
