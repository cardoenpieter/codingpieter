// const myRequest = new Request("uVvQI6LxydHLMzusvtDlzg==FkcnPxuRBtO7TrBZ");
// const myHeaders = myRequest.headers;
// console.log(myHeaders);
//https://api.api-ninjas.com/v1/counter?id=pieter&hit=true

function getHits() {
  fetch("https://api.api-ninjas.com/v1/counter?id=pieter&hit=true", {
    method: "GET",
    headers: {
      "X-Api-Key": "uVvQI6LxydHLMzusvtDlzg==FkcnPxuRBtO7TrBZ",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(showCounts);
}
getHits();

function showCounts(count) {
  console.log(count);
  const countHTML = document.getElementById("count-hits");
  countHTML.innerText = count.value;
}
