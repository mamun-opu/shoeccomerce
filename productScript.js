const menProductsData = [
  // Men's product data here
  {
    image: "./img/men/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/men/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/men/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/men/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const womenProductsData = [
  // Women's product data here
  {
    image: "./img/women/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/women/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/women/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/women/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const featuredItemsData = [
  // Featured items data here
  {
    image: "./img/featured/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/featured/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/featured/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/featured/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const latestProductsData = [
  // Latest products data here
  {
    image: "./img/latest/card-image1.jpg",
    name: "Latest Product 1",
    price: "$49",
  },
  {
    image: "./img/latest/card-image2.jpg",
    name: "Latest Product 2",
    price: "$79",
  },
  {
    image: "./img/latest/card-image3.jpg",
    name: "Latest Product 1",
    price: "$49",
  },
  {
    image: "./img/latest/card-image4.jpg",
    name: "Latest Product 2",
    price: "$79",
  },
];

// function createProductCard(product) {
//     const { name, image, price } = product;
  
//     const productContainer = document.createElement('div');
//     productContainer.classList.add('product');
//     productContainer.classList.add("col");
  
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("card", "h-100");
  
//     const productImage = document.createElement('img');
//     productImage.src = image;
//     productImage.classList.add("card-img-top");
//     productImage.alt = name;
  
//     const productBody = document.createElement("div");
//     productBody.classList.add("card-body");
  
//     const productName = document.createElement('p');
//     productName.textContent = name;
//     productName.classList.add("card-title");
  
//     const productPrice = document.createElement('p');
//     productPrice.textContent = price;
//     productPrice.classList.add("card-text");
  
//     productDiv.appendChild(productImage);
//     productBody.appendChild(productName);
//     productBody.appendChild(productPrice);
//     productDiv.appendChild(productBody);
//     productContainer.appendChild(productDiv);
  
//     return productContainer;
//   }
  
//   function populateProducts(data, containerId) {
//     const container = document.getElementById(containerId);
//     data.forEach(product => {
//       const productCard = createProductCard(product);
//       container.appendChild(productCard);
//     });
//   }
  
  // Populate each section with corresponding product data
//   populateProducts(menProductsData, 'menProductsList');
//   populateProducts(womenProductsData, 'womenProductsList');
//   populateProducts(featuredItemsData, 'featuredItemsList');
//   populateProducts(latestProductsData, 'latestProductsList');

  function createCard(imagePath, title, price) {
    console.log(imagePath)
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col");
  
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100");
  
    const img = document.createElement("img");
    img.src = imagePath;
    img.classList.add("card-img-top");
    img.alt = "Card image";
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = title;
  
    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.textContent = price;
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    cardContainer.appendChild(cardDiv);
  
    return cardContainer;
  }


  function populateCards(data, containerId) {
    const cardContainer = document.getElementById(containerId);
  
    data.forEach((item) => {
      const { image, name, price } = item;
      const card = createCard(image, name, price);
      cardContainer.appendChild(card);
    });
  }

  
  populateCards(menProductsData, "menProducts");
  populateCards(womenProductsData, "womenProductsList");
  populateCards(featuredItemsData, "featureProductsList");
  populateCards(latestProductsData, "latestProductsList");