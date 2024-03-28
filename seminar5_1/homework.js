"use strict";

const users = JSON.parse(data);

const cardsArea = document.querySelector(".cards-area");

users.forEach(function (user) {
  cardsArea.insertAdjacentHTML(
    "beforeend",
    `
    <article class="card">
        <h3 class="card-title">${user.username}</h3>
        <h4 class="card-pretitle">${user.name}</h4>
        <p class="card-address">${user.address.city}, ${user.address.street}, ${user.address.suite}</p>
        <a href="mailto:${user.email}" class="card-link">${user.email}</a>
        <a href="tel:+${user.phone}" class="card-link">${user.phone}</a>
    </article>
    `
  );
});
