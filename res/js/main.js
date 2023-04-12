// ovládání dveří
const doorBtn = document.getElementById("doorBtn");
const door = document.getElementById("door");


doorBtn.onclick = () => {
    door.style.display="flex";
}
doorBtn.onmouseover = () => {
    door--;
}