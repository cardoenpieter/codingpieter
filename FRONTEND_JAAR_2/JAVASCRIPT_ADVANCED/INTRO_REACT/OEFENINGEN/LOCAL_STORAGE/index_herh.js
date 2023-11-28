const items = document.querySelector(".plates");
const addItems = document.querySelector(".add-items");
const itemInput = JSON.parse(localStorage.getItem("item")) || [];

function addItem(event) {
  event.preventDefault(); //zorgen dat er niet kan geclickd worden op een checkbox als er niets in staat
  const text = this.querySelector("[name=item]").value;
  console.log(text);
  //object aanmaken waar we een tekst en een boolean aanmaken
  const item = {
    text,
    done: false,
  };
  console.log(item);
  //dit object toevoegen aan de localstorage
  itemInput.push(item);
  //object terug omzetten naar een string
  localStorage.setItem("item", JSON.stringify(itemInput));
  //items toevoegen aan de plates wanneer er op submit geklikt wordt
  populateList(itemInput, items);
  //inputfield leegmaken
  this.reset();
}

function populateList(plates = [], platesList) {
  //mappen over de array plates en dan joinen
  platesList.innerHTML = plates
    .map(function (plate, i) {
      //condition ? true_expression : false_expression
      const isChecked = plate.done ? "checked" : "";
      //   let isChecked;
      //   if (plate.done === false) {
      //     isChecked = "checked";
      //   }
      return `
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${isChecked} />
        <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

addItems.addEventListener("submit", addItem);

populateList(itemInput, items);
