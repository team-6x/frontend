import styles from './styles.module.scss';

interface CardProps {
  img: string;
  title: string;
  text: string;
}

function Card({ img, title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Card;
