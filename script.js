let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutMessage = document.getElementById("checkout-message");
const cartSection = document.getElementById("cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const name = product.getAttribute("data-name");

    cart.push(name);
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${index + 1}. ${item}`;
    cartItems.appendChild(div);
  });
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Simulate free checkout
  cart = [];
  updateCart();
  cartSection.style.display = "none";
  checkoutMessage.style.display = "block";
});
