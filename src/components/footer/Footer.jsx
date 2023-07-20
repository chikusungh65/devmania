import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                ©2023 Devmania. All rights reserved.
            </div>
            <div className={styles.social}>

                <Image src="/1.png" alt='devmania facebook'
                    width={15}
                    height={15}
                />
                <Image src="/2.png" alt='devmania facebook'
                    width={15}
                    height={15}
                />
                <Image src="/3.png" alt='devmania facebook'
                    width={15}
                    height={15}
                />
                <Image src="/4.png" alt='devmania facebook'
                    width={15}
                    height={15}
                />
            </div>
        </div>
    )
}

export default Footer