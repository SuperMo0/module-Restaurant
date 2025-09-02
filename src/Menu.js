import image1 from "./../images/s.jpg";
import image2 from "./../images/s2.jpg";
import image3 from "./../images/s3.jpg";
export default function () {


    let Container = document.getElementById("main_content");
    Container.style.display = "flex";
    Container.style.gap = "40px";
    Container.style.flexWrap = "wrap";
    Container.style.justifyContent = "center";
    Container.style.marginTop = "50px"

    let card1 = document.createElement("div");
    card1.classList.add("card");

    let img1 = document.createElement("img");
    img1.src = image1;
    let text = document.createElement("h1")

    text.textContent = "Mushroom & Herb Broth";

    card1.appendChild(img1);
    card1.appendChild(text);
    let arr = [card1, card1.cloneNode(true), card1.cloneNode(true)];
    arr[1].firstChild.src = image2;
    arr[2].firstChild.src = image3;
    arr[2].childNodes[1].textContent = "Spicy Sichuan Broth";
    arr[1].childNodes[1].textContent = "Premium Beef Platter";
    arr.forEach((c) => { Container.appendChild(c) });
}