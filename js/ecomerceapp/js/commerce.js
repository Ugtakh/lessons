console.log("ECOMMERCE");
// All variables and DOM
const productList = document.querySelector(".productList");
const categoryList = document.querySelector(".categoryList");
const cartList = document.querySelector(".cartList");
const productsEvent = document.querySelector(".productsEvent");
const cartCount = document.querySelector(".cartCount");
const cartPrice = document.querySelector(".cartPrice");

let allProducts = [];
let allCategories = [];
let cartProducts = [];

const displayProduct = () => {
  productList.innerHTML = "";
  allProducts.forEach((product, idx) => {
    const productItem = `
        <div class="col-12 col-md-6 col-xl-3 mb-4 hoverable hover-shadow-1-soft">
              <div class="card mr-3">
                <img
                  src="${product.thumbnail}"
                  class="card-img-top"
                  style="width: 100%; height: 200px;"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.title}
                  </h5>
                  <h5 class="text-primary">$${product.price}</h5>
                  <p class="card-text text-truncate">
                    ${product.description}
                  </p>
                  <button onclick="addCart(${product.id})"  class="btn btn-primary addCart" >Add card</button>
                </div>
              </div>
            </div>
        `;
    productList.innerHTML += productItem;
  });
};

const displayCategory = () => {
  categoryList.innerHTML = "";
  allCategories.forEach((category) => {
    const categoryItem = `
      <button onclick="getCategoryProduct('${category}')" class="btn btn-primary">${category}</button>
    `;
    categoryList.innerHTML += categoryItem;
  });
};

const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  allCategories = data;
  displayCategory();
};

const getCategoryProduct = async (category) => {
  console.log(category);
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  displayCart();
};
getCategories();
getProducts();

const addCart = (productId) => {
  const findIdx = cartProducts.findIndex((item) => item.id === productId);
  if (findIdx > -1) {
    //ene baraa cartProducts array dotor bval nemehgui harin baraanii too hemjee nemne
    cartProducts[findIdx].count += 1;
  } else {
    //bhgui bol baraag nemne
    const findIndex = allProducts.findIndex((item) => item.id === productId);

    const newBaraa = { count: 1, ...allProducts[findIndex] };
    cartProducts.push(newBaraa);
  }
  cartCount.innerText = cartProducts.length;
  displayCart();
};

const calculateCartPrice = () => {
  let sumPrice = 0;
  for (product of cartProducts) {
    sumPrice = sumPrice + product.price * product.count;
  }
  return sumPrice;
};

const displayCart = () => {
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `
        <div class="d-flex align-items-center mb-5 border border-warning border-2">
            <div class="flex-shrink-0">
              <img
                src="${product.thumbnail}"
                class="img-fluid"
                style="width: 150px"
                alt="Generic placeholder image"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <button class="btn float-end text-black">
                <i class="fas fa-times"></i>
              </button>
              <h5 class="text-primary">${product.title}</h5>
              <h6 style="color: #9e9e9e">Color: white</h6>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 me-5 pe-3">$${product.price}</p>
                <div class="">
                  <input
                    class="form-control"
                    min="0"
                    id="quantity"
                    value="${product.count}"
                    type="number"
                  />
                </div>
              </div>
            </div>
        </div>`;
    cartList.innerHTML += cartItem;
  }
  const totalCartPrice = calculateCartPrice();
  cartPrice.innerText = `$${totalCartPrice}`;
};
