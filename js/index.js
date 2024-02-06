import FyloDataStorage from "./components/FyloDataStorage.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const dataStorage = {
    max: 1000,
    used: 815
}

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(FyloDataStorage(dataStorage));
});
