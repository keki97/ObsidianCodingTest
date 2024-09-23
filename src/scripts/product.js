const addToCartBtn = document.querySelector(
  ".product_main-right-description-cta"
);
const cart = document.querySelector(".product_cart");
const cartQuantity = document.querySelector(".product_cart-quantity");

addToCartBtn.addEventListener("click", function () {
  cart.classList.add("product_cart-animation");
  cartQuantity.style.display = "flex";
});
