/*
You have been given a list of products with their details, 
such as name, price, and category. 
You’re tasked with creating a webpage that allows users to filter 
products based on a price threshold, 
transform the product names to uppercase, and finally 
display the total price of the filtered products.
*/

const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 20, category: "Apparel" },
  { name: "Coffee Maker", price: 50, category: "Kitchen" },
  // ... add more products as needed
];

const productList = document.getElementById("productList");
const input = document.getElementById("priceThreshold");
const totalPrice = document.getElementById("totalPrice");

function displayProducts() {
  const productsAboveTreshold = products.filter((product) => {
    //console.log(input.value);
    return product.price <= input.value;
  });
  //console.log(productsAboveTreshold);

  const nameUppercase = productsAboveTreshold.map((product) => {
    return `<li>${product.name.toUpperCase()}</li>`;
  });
  productList.innerHTML = nameUppercase.join("");
  //console.log(nameUppercase);

  const sum = productsAboveTreshold.reduce((acc, cv) => {
    let priceProduct = cv.price;
    return acc + priceProduct;
  }, 0);
  totalPrice.innerHTML = sum;
  //console.log(sum);
}
