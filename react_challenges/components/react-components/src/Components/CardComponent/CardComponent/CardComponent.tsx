import type { CatsCardProps } from "../../../data/cats";
import { cats } from "../../../data/cats";
import styles from "./CardComponent.module.css";

const CatCard: React.FC<CatsCardProps> = ({ name, age, img, likes }) => (
  <article className={styles.card}>
    <div className={styles.cardImageWrapper}>
      <img src={img} alt={name} className={styles.cardImage} />
    </div>
    <h1>{name}</h1>
    <h2>{age} yrs</h2>
    <p>Available to adopt.</p>
    <p> Hobbies include: {likes.join(", ")}</p>
  </article>
);

const CardComponent: React.FC<CatsCardProps> = () => {
  return (
    <section className={styles.cardSection}>
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          img={cat.img}
          name={cat.name}
          age={cat.age}
          likes={cat.likes}
        />
      ))}
    </section>
  );
};

export default CardComponent;
