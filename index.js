// 1 Створити кнопку, що виводить на клік alert з будь-яким текстом
const buttonElement = document.querySelector("#btn");

buttonElement.onclick = () => {
  alert("text");
};

// 2 Написати функцію, що приймає текст та додає
// HTML елемент span з вказаним текстом на сторінку
const container = document.querySelector("#container");

function addSpanElement(spanText) {
  const span = document.createElement("span");

  span.appendChild(document.createTextNode(spanText)); 
  // I am using createTextNode() over textContent because it's more useful 
  // for a new element (for me it's span which i've created in js) which 
  // i need to place somewhere (for me it's #container). textContent is better
  // when i only want to change the content of an already existing element

  container.appendChild(span);
}
addSpanElement("hello world");
