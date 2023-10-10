import '/js/components/header.js';
import '/js/components/footer.js';
import '/js/components/socials.js';

const $document = window.matchMedia("(max-width: 768px)");

function getProductElements (product) {
  const $shopDesktop = document.getElementById('desktop_shop');
  const $shopMobile = document.getElementById('mobile_shop');
  //console.log($shop);

  for (let i = 0; i < product.length; i++) {
    let Elements = product[i];
    //console.log(Elements);
    let AllImages = Elements.imageURL;
    let AllDescriptions = Elements.description;
    let AllPrices = Elements.price.text;
    let productShopPage = Elements.price.href;
    //console.log(productShopPage);

    if ($document.matches) {
      
      let newImage = `<div class="element_shop"><a href="./product-shop.html" target="_blank">
                      <img src="${AllImages}" alt="" class="image_product">
                      <p id="description" class="description_product">${AllDescriptions}</p>
                      <a href="${productShopPage}" target="_blank" class="button_price"><button id="price" class="price_product">${AllPrices}</button></a>
                      <a/></div>`;
      $shopMobile.insertAdjacentHTML('beforeend', newImage);

    } else {
      let newImage = `<div class="element_shop"><a href="./product-shop.html" target="_blank">
                      <img src="${AllImages}" alt="" class="image_product">
                      <p id="description" class="description_product">${AllDescriptions}</p>
                      <a href="${productShopPage}" target="_blank" class="button_price"><button id="price" class="price_product">${AllPrices}</button></a>
                      <a/></div>`;
      $shopDesktop.insertAdjacentHTML('beforeend', newImage);
    }
  }
}



function fetchProducts() {
  fetch('/data/shop.json')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Could not fetch texts');
      }

      return response.json();
    }).then(function(product) {
    getProductElements(product);
  }).catch(function(error) {
    console.error(error);
  })
}

fetchProducts();
getProductElements($document);
$document.addEventListener('resize', getProductElements);


