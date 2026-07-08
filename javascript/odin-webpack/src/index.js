import flouffyImage from "./flouffy-image.webp";

import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

const image = document.createElement("img");
image.src = flouffyImage;
image.classList.add("flouffy-pic");

document.body.appendChild(image);
