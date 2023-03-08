import Link from 'next/link';
import Image from "next/image"
import styles from '../src/styles/CategoryCard.module.css';

const CategoryCard = ({ image, name }) => {
  return ( <>
    <div className={styles.card}>
      <Image className={styles.image} src={image} alt="img" />
      <Link href={`/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
    </>
    );
};
export default CategoryCard;