const textArea = document.getElementById("multi-line-input");
const biggerButton = document.getElementById("bigger-button");
const fancyShmancyButton = document.getElementById("fancy-shmancy-button");
const boringBettyButton = document.getElementById("boring-betty-button");
const mooButton = document.getElementById('moo-button')

// Changes the font size of the text inside the text area to 24pt.
function changeFontSize() {
    textArea.style.fontSize = "24pt";
}

// Adds specific styles to the text if the fancy shmancy button is checked and removes these
// styles if the boring betty button is checked.
function addAndRemoveStyles() {
    if (fancyShmancyButton.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (boringBettyButton.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
// Turns all letters in the text to upper case and adds the suffix "-Moo" to the end of every sentence.
function addSuffixAndCapitalize() {
    textArea.value = textArea.value.toUpperCase();
    var str = textArea.value;
    var sentences = str.split(".");
    str = sentences.join("-Moo.");
    textArea.value = str;
}

biggerButton.addEventListener("click", changeFontSize);
fancyShmancyButton.addEventListener("change", addAndRemoveStyles);
boringBettyButton.addEventListener("change", addAndRemoveStyles);
mooButton.addEventListener("click", addSuffixAndCapitalize);