// ovládání dveří
const doorButton = document.getElementById("doorButton");
const door = document.getElementById("door");

doorButton.onclick = () => {
    door.style.display="flex";
}