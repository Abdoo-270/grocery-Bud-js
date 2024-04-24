const menuItems = document.getElementById("menu-items");
const clrBtn = document.getElementById("clr-button");
const alertMesge = document.getElementById("alertMes-1");


function deleteItemFun(e) {
  const element = e.currentTarget.parentElement.parentElement;
  element.style.display= "none";
  alertMesge.innerText= "Item removed";
  alertMesge.style.backgroundColor =  "rgba(230,107,107,0.2)";
  alertMesge.style.visibility = "visible";
  setTimeout(emptyHintHide, 1000);
  function emptyHintHide() {
    alertMesge.style.visibility = "hidden";
  }
  if (menuItems.innerText === "") {
    clrBtn.style.visibility = "hidden";
  }
}

function subFunction() {
  const alertMesge = document.getElementById("alertMes-1");
  const userInput = document.getElementById("user-input").value;
  event.preventDefault();
  document.getElementById("myForm").reset();
  if (userInput !== "") {
    const userInputEdited = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    const itemBox = document.createElement("article");
    itemBox.classList.add("item");
    const text = document.createElement("p");
    text.innerText = userInputEdited;
    const icons = document.createElement("div");
    icons.classList.add("icons");

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");

    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");
    icon1.classList.add("fa-solid");
    icon1.classList.add("fa-pen-to-square");

    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-trash");

    editBtn.appendChild(icon1);
    deleteBtn.appendChild(icon2);

    icons.appendChild(editBtn);
    icons.appendChild(deleteBtn);

    itemBox.appendChild(text);
    itemBox.appendChild(icons);
    menuItems.appendChild(itemBox);
    alertMesge.innerText= "Item Added To The List";
    alertMesge.style.backgroundColor = " rgba(134,230,117,0.3)";
    alertMesge.style.visibility = "visible";
    setTimeout(emptyHintHide, 1000);
    clrBtn.style.visibility = "visible";

    const deleteitem = itemBox.querySelector(".deleteBtn");
    deleteitem.addEventListener("click", deleteItemFun);

    const editItem = itemBox.querySelector(".editBtn");
    deleteitem.addEventListener("click", editItemFun);

  }
  if (userInput === "") {
    alertMesge.style.backgroundColor = " rgba(230,107,107,0.2)";
    alertMesge.innerText= "Please Enter Value";
    alertMesge.style.visibility = "visible";
    setTimeout(emptyHintHide, 1000);
  }
  function emptyHintHide() {
    alertMesge.style.visibility = "hidden";
  }
}
function clearList() {
  const menuItems = document.getElementById("menu-items");
  menuItems.innerText = "";
  clrBtn.style.visibility = "hidden";

  const alertMesge = document.getElementById("alertMes-1");
  alertMesge.innerText= "Empty List";
  alertMesge.style.backgroundColor =  "rgba(230,107,107,0.2)";
  alertMesge.style.visibility = "visible";
  setTimeout(emptyHintHide, 1000);

  function emptyHintHide() {
    alertMesge.style.visibility = "hidden";
  }
}
