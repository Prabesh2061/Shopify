const products = [{
  image: "image/laptop_cooler.webp",
  name: "Gigaware Laptop Cooling Fan with 5 Fans and LED Laptop Cooler",
  rating: 43,
  price: 1421
}, {
  image: "image/shoes.jpeg",
  name: "Nike Airforce 1",
  rating: 87,
  price: 1090
}, {
  image: "image/mouse.webp",
  name: "Razer DeathAdder Essential Gaming Mouse 6400 DPI-White Edition",
  rating: 67,
  price: 3253
}, {
  image: "image/sweat-shirt.webp",
  name: "New Cool Chain Sweatshirt For Men ( Winter Wear)",
  rating: 76,
  price: 1310
}, {
  image: "image/suitcase.webp",
  name: "Black Hard Cover 4 Wheeler Travel Luggage (Small)",
  rating: 50,
  price: 5079
}, {
  image: "image/electric-kettle.jpg",
  name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
  rating: 90,
  price: 1389
}, {
  image: "image/headphone.webp",
  name: "R8 V2000 Gaming Headphone",
  rating: 45,
  price: 1783
}, {
  image: "image/peanut-butter.webp",
  name: "MuscleBlaze High Protein Peanut Butter with Whey Protein",
  rating: 29,
  price: 1017
}, {
  image: "image/mask.webp",
  name: "KF94 Korean Mask - Pack of 10",
  rating: 23,
  price: 152
}, {
  image: "image/trimmer.webp",
  name: "VGR 071 Rechargable Hair Trimmer For Men",
  rating: 54,
  price: 1110
}, {
  image: "image/t-shirt.webp",
  name: "Pack Of 3 Full Sleeve T-Shirt For Men With Button",
  rating: 231,
  price: 1221
}, {
  image: "image/bag.webp",
  name: "Mheecha Boulder Sack Black/Ice Grey Backpack with Laptop Compartment",
  rating: 349,
  price: 2800
}, {
  image: "image/perfume.webp",
  name: "Denver Hamilton Calibar Perfume for Men - 100 ml",
  rating: 50,
  price: 901
}];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="items"><img class="item-image" src="${product.image}">
              <span class="product-name">${product.name}</span>
              <div class="rate">
                  <img class="ratings" src="image/rating.png">
                  <p>${product.rating}</p>
              </div>
              <p class="price">${product.price/100}</p>
              <select class="quantity">
                  <option selected="" value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <div class="category-1"></div>
                <div calss="category-2"></div>
                <button class="add-to-cart">Add to Cart</button>
          </div>
  `;
});

document.querySelector('.products').innerHTML = productsHTML;