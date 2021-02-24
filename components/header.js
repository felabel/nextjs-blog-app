import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.css'


export default function Header() {
    return (
        <div className={styles.nav}>
            <Image
                src="/images/felz.jpg" // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={50} // Desired size with correct aspect ratio
                alt="devfelz"
            />
            
                <input type='search' placeholder='search products' />
                <Image 
                src="/images/felz.jpg" // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={50} // Desired size with correct aspect ratio
                alt="devfelz"
                />
            
                <Link href='Projects'>
                    <a>Projects</a>
                </Link>
                <Link href='blog'>
                    <a>blog</a>
                </Link>
        </div>
    )
}