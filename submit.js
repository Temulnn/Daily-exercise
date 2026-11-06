const text = document.getElementById("text");
const list = document.getElementById("list");
const todo = [];
const createText = () => {
  todo.push(text.value);
  const h1 = document.createElement("h1");
  h1.textContent = text.value;
  list.appendChild(h1);
};
