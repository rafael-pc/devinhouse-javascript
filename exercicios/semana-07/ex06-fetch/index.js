const listElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

const api = "https://jsonplaceholder.typicode.com/todos";

function mostraApi() {
  listElement.innerHTML = "";

  fetch(api)
    .then((data) => data.json())
    .catch((error) => console.log("I'm error!. Tente novamente.", error))
    .then((json) => {
      console.log(json);

      for (item of json) {
        const itemList = document.createElement("li");
        itemList.setAttribute("class", "item");

        const checkList = document.createElement("input");
        checkList.setAttribute("type", "checkbox");
        checkList.setAttribute("class", "regular-checkbox");
        checkList.setAttribute("store", item.id);
        itemList.appendChild(checkList);

        const descricao = document.createElement("p");
        descricao.setAttribute("class", "conteudo");
        descricao.textContent = item.title;
        itemList.appendChild(descricao);

        const linkElement = document.createElement("i");
        linkElement.setAttribute("class", "far fa-trash-alt");

        itemList.appendChild(linkElement);

        listElement.appendChild(itemList);

        const boxes = document.querySelectorAll("input[type='checkbox']");
        for (var i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          if (box.hasAttribute("store")) {
            setupBox(box);
          }
        }

        function setupBox(box) {
          const storageId = box.getAttribute("store");
          const oldVal = localStorage.getItem(storageId);
          box.checked = oldVal === "true" ? true : false;
          box.addEventListener("change", function () {
            localStorage.setItem(storageId, this.checked);
          });
        }
      }
    });
}

mostraApi();
