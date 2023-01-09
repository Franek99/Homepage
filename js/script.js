{
    const welcome = () => {
        console.log("Cześć!")
    }


    const toggleBackground = () => {
        const body = document.querySelector(".js-container");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("grey");

        if (body.classList.contains("grey")) {
            themeName.innerText = "jasne";
        } else {
            themeName.innerText = "szare";
        }

    }

    const hiddenImg = () => {
        const img = document.querySelector(".js-img");
        const themeName1 = document.querySelector(".js-themeName1");

        themeName1.innerText = img.hidden ? "ukryj" : "pokaż"
        img.hidden = !img.hidden;

    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
        const przycisk = document.querySelector(".js-przycisk");
        przycisk.addEventListener("click", hiddenImg);

        welcome();
    }

    init();
}





