
export default function create() {
    let Container = document.getElementById("main_content");
    let Hero = document.createElement("section");
    Hero.classList.add("Hero");
    let img = document.createElement("img");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
    img.classList.add("hero_image");
    imgContainer.appendChild(img);
    let TextSection = document.createElement("div");
    let Reserve = document.createElement("button");
    Reserve.textContent = "Reserve";
    TextSection.classList.add("text_section");
    let HeroText1 = document.createElement("h1");
    HeroText1.textContent = "The Ultimate Hot Pot Experience in Egypt";
    let HeroText2 = document.createElement("p");
    HeroText2.textContent = "Authentic broths, premium ingredients, and unforgettable flavors — whether you crave comfort or crave the fire.";
    TextSection.appendChild(HeroText1);
    TextSection.appendChild(HeroText2);
    TextSection.appendChild(Reserve);
    Hero.appendChild(TextSection);
    Hero.appendChild(imgContainer);
    Container.appendChild(Hero);
}

