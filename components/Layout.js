import Head from "next/head"

const Layout = ({children, description = '', title = ''}) => {
  return (
    <>
        <Head>
            <meta name="description" content={description}/>
            <title>{`GuitarLA - ${title}`}</title>
        </Head>
        <div>
        <h1>Layout</h1>
        {children}
        </div>
    </>
  )
}

export default Layout
