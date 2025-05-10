function pridat() {
    const ul = document.getElementById("list");
    const zapis = document.getElementById("inputText").value;
    const textInput = document.getElementById("inputText");
    if (zapis === "") {
        return;
    } 
    ul.innerHTML += `<li><input type="checkbox"><span class="text">${zapis}</span><button onclick="zmazat(this)">X</button></li>`
    textInput.value = "";
    
};
function zmazat(button) {
    const li = button.parentElement;
    li.remove();
};
function zmazatVsetko() {
    const zaznamy = Array.from(document.querySelectorAll('li'));
    zaznamy.forEach((li) => {
        li.remove();
    });
};