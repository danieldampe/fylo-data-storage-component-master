export default function FyloDataStorage({max, used}) {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("fylo-data-storage-component").content,
        $clone = document.importNode($template, true),
        $min = $clone.querySelector("[data-min]"),
        $max = $clone.querySelector("[data-max]"),
        $used = $clone.querySelector("[data-used]"),
        $left = $clone.querySelector("[data-left]"),
        $indicator = $clone.querySelector("[data-indicator]");

    // *** *** *** Execution *** *** ***
    $min.textContent = 0 + " " + "GB";
    $max.textContent = max + " " + "GB";
    $used.textContent = used + " " + "GB";
    $indicator.style.width = ((used / max) * 100) + "%";
    $left.textContent = max - used; 
    return $clone;
};
