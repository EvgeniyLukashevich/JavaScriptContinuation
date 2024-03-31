"use strict";

const url = "./data.json";

async function fetchData(urlData) {
  try {
    const response = await fetch(urlData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `При попытке получить данные от "${urlData}" возникла ошибка: ${error}`
    );
  }
}

const products = await fetchData(url);

const cardsArea = document.querySelector(".cards-box");

products.forEach(function (product) {
  cardsArea.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cards-item">
        <div class="cards-img-box">
            <img
            src=${product.image}
            alt=${product.alt}
            class="cards-img-box__img"
            />
            <button class="cards-img-box__button">
            <img
                class="cards-img-box__button__cart"
                src="img/cart.png"
                alt="cart"
            />
            Add to Cart
            </button>
        </div>
        <a href="#" class="cards-link">
            <h3 class="cards-link__title">
                ${product.brand} ${product.section} ${product.name}
            </h3>
            <p class="cards-link__price">$${product.price}</p>
        </a>
    </div>
    `
  );
});
