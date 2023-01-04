console.log("Cześć!");

let przycisk = document.querySelector(".js-przycisk");
let img = document.querySelector(".js-img");
let themeName1 = document.querySelector(".js-themeName1");

przycisk.addEventListener("click", () => {
    img.hidden = !img.hidden;

    themeName1.innerText = img.hidden ? "pokaż" : "ukryj"
});

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-container");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("grey");

    if (body.classList.contains("grey")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "szare";
    }
});