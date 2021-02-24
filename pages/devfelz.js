import Head from 'next/head'
import Link from 'next/head'
// import Image from 'next/image'
import Layout from '../components/layout'

export default function Devfelz(){
    return(
        <Layout>
            <div >
                <Head>
                    <title>my portfolio</title>
                </Head>
                <h3>hi, i am felz</h3>
                <Link href="/">
            <a>
                Home
            </a>
            </Link>
            {/* <Image
                src="/images/felz.jpg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="devfelz"
            /> */}

        
        </div>
        </Layout>
    )
}
