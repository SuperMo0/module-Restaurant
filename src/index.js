import MainPage from "./TodayDish.js";
import "./style.css";
import Menu from "./Menu.js";
import info from "./info.js";



let home = document.querySelector("nav");

let Container = document.getElementById("main_content");

MainPage();

home.childNodes[3].onclick = () => { Container.replaceChildren(); MainPage() };
home.childNodes[5].onclick = () => { Container.replaceChildren(); Menu() };
home.childNodes[7].onclick = () => { Container.replaceChildren(); info() };

