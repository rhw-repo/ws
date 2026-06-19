// import the array we want to map through
import { cats } from "../../data/cats";
// import the type so that TS understands what properties must be present and their data type
import type { CatsCardProps } from "../../data/cats";
//import css module for styling
import styles from "./ThirdCopyCardComponent.module.css";

//Create a template which will be used in the render
// Tell TS which properties from CatsCardProps
// A) must be present
//B) are to be used
const CatCardTemplate: React.FC<CatsCardProps> = ({
  name,
  age,
  img,
  likes,
}) => {
  // filter for cats objects where age is less than 2
  // to allow conditional return of string according to
  // whether singular or plural yr or yrs is required
  const kittens = cats.filter((cat) => cat.age < 2);
  // create a template that allows each prop value pair to render
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={img} className={styles.cardImage} />
      </div>
      <h1>{name}</h1>
      <h2>
        {age} {kittens ? "yr" : "yr"}
      </h2>
      <h3>{likes.join(", ")}</h3>
    </article>
  );
};

// declare the component to be exported as the only one (default)
// declare what type of component it is React.FC
// declare what props it will consume
const ThirdCopyCardComponent: React.FC<CatsCardProps> = () => {
  return (
    <section className={styles.cardSection}>
      {/* map through the cats array of objects */}
      {cats.map((cat) => (
        <CatCardTemplate
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

export default ThirdCopyCardComponent;
