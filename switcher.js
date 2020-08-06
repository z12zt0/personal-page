
let switcher = document.getElementById("switch");
let body = document.body;
let label = document.getElementById("switch-label");

switcher.onclick = () => {

    if (body.classList.contains("light")) {

        body.classList.replace("light", "dark");
        label.innerText = "Dark theme";
        
    } else {

        body.classList.replace("dark", "light");
        label.innerText = "Light theme";
    }
}