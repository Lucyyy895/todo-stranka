let todos = [];
const textInput = document.getElementById("inputText");

function pridat() {
    const ul = document.getElementById("list");
    const zapis = document.getElementById("inputText").value;
    if (zapis === "") {
        return;
    } 
    ul.innerHTML += `<li><input type="checkbox"><span class="text">${zapis}</span><button onclick="zmazat(this)">X</button></li>`
    textInput.value = "";
    todos.push(zapis);
    ulozenie();
};
function zmazat(button) {
    const li = button.parentElement;
    const text = li.querySelector(".text").textContent;
    todos = todos.filter(el => el !== text); 
    li.remove();
    ulozenie();
};
function zmazatVsetko() {
    const zaznamy = Array.from(document.querySelectorAll('li'));
    zaznamy.forEach((li) => {
        li.remove();
    });
    todos = [];
    ulozenie();
};

// Ukladanie
function ulozenie() {
    Cookies.set('data', todos)
};
const saved = Cookies.get('data');
if (saved) {
    saved.split(",").forEach((s) => {
        textInput.value = s;
        pridat();
    });
    textInput.value = "";
};
