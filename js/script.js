const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-details');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartMenuIcon.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

const productList = [];

productList.push({
    name: 'Hand made bag',
    price: 220,
    image: './images/accesories/bag.jpg',
});

productList.push({
    name: 'Neck clock',
    price: 70,
    image: './images/accesories/clock1.jpg',
});

productList.push({
    name: 'Wake up clock',
    price: 90,
    image: './images/accesories/clock2.jpg',
});

productList.push({
    name: 'Wall clock',
    price: 100,
    image: './images/accesories/clock3.jpg',
});

productList.push({
    name: 'Vintage dress',
    price: 75,
    image: './images/clothing/dress1.jpg',
});

productList.push({
    name: 'Hat',
    price: 60,
    image: './images/clothing/hat.jpg',
});

productList.push({
    name: 'Leather jacket',
    price: 170,
    image: './images/clothing/leather_jacket.jpg',
});

productList.push({
    name: 'Long skirt',
    price: 55,
    image: './images/clothing/long_skirt.jpg',
});

productList.push({
    name: 'Skates mint',
    price: 110,
    image: './images/clothing/roller_mint.jpeg',
});

productList.push({
    name: 'Skates orange',
    price: 120,
    image: './images/clothing/roller_orange.jpeg',
});

productList.push({
    name: 'Skates pink',
    price: 145,
    image: './images/clothing/roller_pink.jpeg',
});

productList.push({
    name: 'Scarf WOW',
    price: 85,
    image: './images/clothing/scarf.jpg',
});

productList.push({
    name: '50s shirt',
    price: 45,
    image: './images/clothing/shirt.jpg',
});

productList.push({
    name: 'Brightful stripe blouse',
    price: 90,
    image: './images/clothing/stripe_blouse.jpg',
});

productList.push({
    name: 'Stripe jacket',
    price: 130,
    image: './images/clothing/stripe_jacket.jpg',
});

productList.push({
    name: 'Wedding dress',
    price: 170,
    image: './images/clothing/wedding_dress.jpg',
});

productList.push({
    name: 'Victorian chair',
    price: 560,
    image: './images/furniture/color_chair.jpg',
});

productList.push({
    name: 'Leather chair',
    price: 3600,
    image: './images/furniture/leather_chair.jpeg',
});

productList.push({
    name: 'Leather and wood',
    price: 2250,
    image: './images/furniture/leather_wood_chair.jpg',
});

productList.push({
    name: 'Light pink victorian chair',
    price: 2050,
    image: './images/furniture/light_pink_chair.jpeg',
});

productList.push({
    name: 'Pink velvet chair',
    price: 3100,
    image: './images/furniture/pink_chair.jpeg',
});

productList.push({
    name: 'White velvet coach',
    price: 6200,
    image: './images/furniture/white_couch.jpeg',
});

productList.push({
    name: 'Wood chair',
    price: 1450,
    image: './images/furniture/wood_chair.jpeg',
});

productList.push({
    name: 'Classic phone',
    price: 210,
    image: './images/phones/phones_colors.jpg',
});

productList.push({
    name: 'Wood phone',
    price: 410,
    image: './images/phones/wood_phone.jpg',
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        // modify the attribute src by inserting the value of image from the array
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/add_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    };
}

renderProducts(productList);