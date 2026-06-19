import type { CatsCardProps } from "../../data/cats";
import { cats } from "../../data/cats";
import styles from "./CardComponentPracticeCopy.module.css";

const CardTemplate: React.FC<CatsCardProps> = ({ img, name, age, likes }) => {
  const kittens = cats.filter((cat) => cat.age < 2);

  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={img} className={styles.cardImage} />
      </div>
      <h1>{name}</h1>
      <h2>
        {age} {kittens ? "yr" : "yrs"}
      </h2>
      <p>Hobbies include:</p>
      <p>{likes.join(", ")}</p>
    </article>
  );
};

const CardComponentPracticeCopy: React.FC<CatsCardProps> = () => {
  return (
    <section className={styles.cardsSection}>
      {cats.map((cat) => (
        <CardTemplate
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

export default CardComponentPracticeCopy;
