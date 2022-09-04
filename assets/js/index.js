// Modal

// Agrega al carro
let cartProducts = [];
let pushedTotalPrice = [];

const addCart = (name, price) => {
  cartProducts.push({ name, price });
};

const cart = document.querySelector("#cartIcon");
cart.addEventListener("click", () => {
  const modal = document.querySelector(".modal-body");
  modal.innerHTML = "";

  const prices = [];
  cartProducts.forEach((product) => {
    prices.push(product.price);

    modal.innerHTML += `
    <ul class="nav justify-content-center">
      <li>
        ${product.name} - $ ${product.price}
      </li>
    </ul>
    `;
  });

  const initialValue = 0;
  const totalPrice = prices.reduce(
    (previousValue, currentValue) =>
      parseInt(previousValue) + parseInt(currentValue),
    initialValue
  );
  pushedTotalPrice.push(totalPrice);

  modal.innerHTML += `
  <div class="text-center">
    <strong>TOTAL $${totalPrice}</strong>
  </div>
  `;
});

// Borra Orden
const deleteButtom = document.querySelector("#deleteCart");
deleteButtom.addEventListener("click", () => {
  cartProducts.length = 0;
});

const printButtom = document.querySelector("#submitCart");
printButtom.addEventListener("click", () => {
  cartProducts.length = 0;
});
