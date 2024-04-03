"use strict";

// Семинар 5.2 ДЗ

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
    <div class="cards-item" id="item${product.id}">
        <div class="cards-img-box">
            <img
            src=${product.image}
            alt=${product.alt}
            class="cards-img-box__img"
            />
            <button class="cards-img-box__button" id="add-button${product.id}">
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
            <p class="cards-link__price">$${parseFloat(product.price).toFixed(
              2
            )}</p>
        </a>
    </div>
    `
  );
});

// Семинар 6. ДЗ

const addButtons = cardsArea.querySelectorAll(".cards-img-box__button");
const cartArea = document.querySelector(".cart-details__drop");

addButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const productIndex = parseInt(btn.id.match(/\d+$/)[0]) - 1;
    const cartItems = cartArea.querySelectorAll(".cart-item");
    let cartItem = null;

    cartItems.forEach((item) => {
      if (parseInt(item.id.match(/\d+$/)[0]) === products[productIndex].id) {
        cartItem = item;
      }
    });

    if (cartItem) {
      const quantityInput = cartItem.querySelector(".quantity-input");
      const currentQuantity = parseInt(quantityInput.value);
      quantityInput.value = currentQuantity + 1;
      updateTotal();
    } else {
      cartArea.insertAdjacentHTML(
        "afterbegin",
        makeCartItemTemplate(products[productIndex])
      );
    }

    updateTotal();

    document.querySelectorAll(".quantity-input").forEach((input) => {
      input.addEventListener("input", (event) => {
        updateTotal();
      });
    });

    document.querySelectorAll(".cart-item__remove").forEach((button) => {
      button.addEventListener("click", (event) => {
        removeCartItem(event.target);
        updateTotal();
      });
    });
  });
});

function makeCartItemTemplate(product) {
  return `
  <article id="cart-item${product.id}" class="cart-item">
    <a href="#" class="cart-item__left">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="cart-item__left__img"
      />
    </a>
      <div class="cart-item__left__info">
        <h3 class="cart-item__left__info__title">${product.name}</h3>
        <div class="cart-item__left__info__stars">
          <i
            class="cart-item__left__info__stars__star fa fa-star"
          ></i>
          <i
            class="cart-item__left__info__stars__star fa fa-star"
          ></i>
          <i
            class="cart-item__left__info__stars__star fa fa-star"
          ></i>
          <i
            class="cart-item__left__info__stars__star fa fa-star"
          ></i>
          <i
            class="cart-item__left__info__stars__star fa fa-star-half-alt"
          ></i>
        </div>
        <p class="cart-item__left__info__price">
          $${parseFloat(product.price).toFixed(2)} <span>x</span> 
          <input class="quantity-input" type="number" value="1" min="1" max="99"> 
        </p>
      </div>
    <button
      type="submit"
      class="cart-item__remove fa fa-times-circle"
    ></button>
  </article>`;
}

function removeCartItem(removeButton) {
  const cartItem = removeButton.closest(".cart-item");
  cartItem.remove();
}

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((cartItem) => {
    const priceElement = cartItem.querySelector(
      ".cart-item__left__info__price"
    );
    const quantityInput = cartItem.querySelector(".quantity-input");
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const quantity = parseInt(quantityInput.value);
    total += price * quantity;
  });
  const totalElement = document.querySelector(".cart-total-price__price");
  totalElement.textContent = "$" + total.toFixed(2);
}
