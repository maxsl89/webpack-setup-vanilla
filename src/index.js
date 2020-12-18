import Person from "./person";
import "./styles/style.css";
import "./styles/style.less";
import "./styles/style.scss";
import image from "./images/logo.png";

const elena = new Person("Елена", 24, "Украина");

console.log(elena);

document.querySelector(".img img").src = image;
