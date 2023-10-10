function removeToDo(event) {
  const article = event.target.parentElement;
  article.remove();
}

function onSubmit(event) {
  event.preventDefault(); //dit stopt een refresh van de pagina wanneer je op enter klikt in de placeholder
  const input = document.querySelector("[name=todo]");
  const value = input.value;

  if (!value) return window.alert("Please enter a record."); //bij een oneliner moeten er geen accolades gebruikt worden

  const todo = `
    <article class="todo">
        <input type="checkbox" name="" id="">
        <label for="">${value}</label>
        <button onclick="removeToDo(event)">❌</button>
    </article>`;

  const articles = document.querySelector(".articles");
  articles.innerHTML += todo;

  console.log(value);
}

window.addEventListener("load", function () {
  console.log("app.js loaded");

  //get form
  const form = document.querySelector("form");

  form.addEventListener("submit", onSubmit);
});
