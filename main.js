
/***Soal 1** */
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "red";
}

const listItem = document.getElementsByClassName("item");
listItem[1].remove();


const desc = document.getElementsByClassName("item");
desc[0].innerHTML = "Ini adalah deskripsi yang telah diubah.";


/***Soal 2** */

const fragment = document.createDocumentFragment();
const h1 = document.createElement("h1");
h1.textContent = "Figo";
fragment.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Nama saya Figo";
fragment.appendChild(p);

const container = document.getElementById("container");
container.appendChild(fragment);

/**Soal 3 */
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Figo");
});
