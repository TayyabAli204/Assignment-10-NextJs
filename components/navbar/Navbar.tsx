
import React from 'react'
import styles from '/styles/component/navbar/Navbar.module.css'
import Image from 'next/image'
import Footer from '../footer/Footer'
import Link from 'next/link'




const Navbar = () => {
  return (
    <div>
      <nav className={styles.navstyle}>
        <div className={styles.container}>


        </div>
        
          <ul className={styles.navul}>
            <li>
              <Link href="/">
                 <Image src="/picture/Frame 357.png" alt="Picture used for Nav Bar" width={80} height={80} className={styles.imgM} />
              </Link>
            </li>

            <li>
              <Link href="/Hypeindustry">
                Hypeindustry
              </Link>
            </li>
            <li>
              <Link href="/Buying">
                 Buyings
              </Link>
            </li>

            <li>
              <Link href="/HypeOffers">
                 HypeOffers
              </Link>
            </li>
            
            <li>
              <Link href="/Shipping">
                 Shipping
              </Link>
            </li><li>
              <Link href="/Seller">
                Seller
              </Link>
            </li>
            
            <li className={styles.search}>
              <Image  src="/picture/login.png"  alt="Picture used for Nav Bar"  width={20}  height={20}/>
             <p style={{display:'flex'}}> Login</p>
            </li>
            <li className={styles.search}>
              <Image src="/picture/search-icon.png"  alt="Picture used for Nav Bar"  width={20}  height={20}/>
              <input type="text"  placeholder=' Brand, models… ' style={{ borderStyle: 'none',display:'flex' }} />
            </li>

          </ul>

       
      </nav>

    </div >
  )

}

<Footer />

export default Navbar