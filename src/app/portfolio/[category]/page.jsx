import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
const Category = ({ params }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>
                {params.category}
            </h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        fill={true}
                        alt=""
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category