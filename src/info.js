export default function () {

    let Container = document.getElementById("main_content");

    let cont = document.createElement("div");
    cont.classList.add("cont");
    let text = document.createElement("h3");
    text.textContent = "At Hotpot, we believe that great food is best enjoyed together. Our restaurant is dedicated to bringing people closer through the tradition of hotpot — a dining experience that’s as much about sharing stories as it is about savoring flavors.”";
    cont.appendChild(text);

    Container.style.display = "flex";
    Container.style.justifyContent = "center";
    Container.appendChild(cont);
}