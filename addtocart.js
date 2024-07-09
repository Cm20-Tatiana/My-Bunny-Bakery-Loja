const products = [
    { id: 1, image: 'imgs/product1.jpg', name: 'Hayberry Delights', type: 'feno', price: 6 },
    { id: 2, image: 'imgs/product2.jpg', name: 'Blossom Spinach', type: 'aveia', price: 5 },
    { id: 3, image: 'imgs/product3.jpg', name: 'Raspberry Munchies', type: 'aveia', price: 4.60 },
    { id: 4, image: 'imgs/product4.jpg', name: 'BananaBee Cookies', type: 'aveia', price: 4.60 },
    { id: 5, image: 'imgs/product5.jpg', name: 'Mini Heart Bites', type: 'aveia', price: 5 },
    { id: 6, image: 'imgs/product6.jpg', name: 'Rose Raspberry Ice Cream', type: 'feno', price: 5 },
    { id: 7, image: 'imgs/product7.jpg', name: 'Corneto de Calêndula', type: 'feno', price: 5 },
    { id: 8, image: 'imgs/product8.jpg', name: 'Bolachas de Morango com Aveia', type: 'aveia', price: 5.50 },
    { id: 9, image: 'imgs/product9.jpg', name: 'Bolo de Aniversário para Coelhos', type: 'aveia', price: 18 },
    { id: 10, image: 'imgs/product10.jpg', name: 'Crispy Carrots biscuits with camomile', type: 'aveia', price: 5 }
];

const itemsPerPage = 6;
let currentPage = 1;
let filteredProducts = [...products];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredProducts.slice(start, end);

    document.getElementById('root').innerHTML = paginatedItems.map((item) => {
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${item.image} alt="${item.name}">
                </div>
                <div class='bottom'>
                    <p>${item.name}</p>
                    <h2>$ ${item.price.toFixed(2)}</h2>
                    <button onclick='addToCart(${item.id})'>Adiciona ao Carrinho</button>
                </div>
            </div>
        `;
    }).join('');

    // Update the pagination buttons visibility
    document.querySelector('.pagination').style.display = filteredProducts.length > itemsPerPage ? 'flex' : 'none';
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
}

function nextPage() {
    if (currentPage * itemsPerPage < filteredProducts.length) {
        currentPage++;
        displayProducts();
    }
}

function addToCart(id) {
    const item = products.find(product => product.id === id);
    cart.push({ ...item });
    displayCart();
}

function delElement(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    document.getElementById('count').innerText = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = 'O seu carrinho está vazio';
        document.getElementById('total').innerText = '$ 0.00';
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${item.image} alt="${item.name}">
                    </div>
                    <p>${item.name}</p>
                    <h2>$ ${item.price.toFixed(2)}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        document.getElementById('total').innerText = `$ ${total.toFixed(2)}`;
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    displayProducts();
}

function sortProducts() {
    const sortOption = document.getElementById('sort').value;
    if (sortOption === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'feno') {
        filteredProducts = products.filter(product => product.type === 'feno');
    } else if (sortOption === 'aveia') {
        filteredProducts = products.filter(product => product.type === 'aveia');
    } else {
        filteredProducts = [...products];
    }
    currentPage = 1;
    displayProducts();
}

var cart = [];