import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, commodi.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi nihil quasi nam sunt corrupti ad numquam magni cupiditate doloribus!
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>Ankit Kumar</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur facilis totam, aliquid, perspiciatis incidunt perferendis ipsa molestias, nisi consequuntur maxime! Voluptas facilis beatae ullam molestias. Id non qui numquam inventore quidem sequi tenetur optio neque, ratione cupiditate eveniet magni?
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nihil vero distinctio sapiente hic sequi asperiores et, qui tenetur ab omnis animi! Impedit ducimus quia esse excepturi vel. Odio, consequatur?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed voluptate repellendus cumque repudiandae provident vitae aspernatur rem ducimus, aperiam explicabo a laborum. Quae ducimus similique culpa commodi? Obcaecati architecto alias eveniet ipsum commodi eaque voluptates qui tempora ducimus. Officiis, voluptate. Laborum fugit placeat velit eligendi, atque similique voluptates error? Reiciendis pariatur aliquam quisquam ut delectus ex praesentium optio sequi?
                </p>
            </div>
        </div>
    );
};
export default BlogPost