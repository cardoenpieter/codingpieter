const cardNumber = document.getElementById("card-number");

function debounce(fn, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function getValidation(event) {
  if (event.target.value === "") return;
  console.log(event.target.value);
  fetch(`https://api.api-ninjas.com/v1/iban?iban=${event.target.value}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "uVvQI6LxydHLMzusvtDlzg==FkcnPxuRBtO7TrBZ",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json(console.log(res)))
    .then(success)
    .catch(failed);
}

function success(result) {
  if (result.valid === true) {
    cardNumber.style.border = "3px solid green";
  } else if (result.valid === false) {
    failed();
  }
}

function failed() {
  cardNumber.style.border = "3px solid red";
}

cardNumber.addEventListener("input", debounce(getValidation));
