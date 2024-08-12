// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart( productimage, productName, productPrice, ) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);
    console.log(existingProduct)
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ image: productimage,  name: productName, price: productPrice,   quantity: 1 });
    }
    
    updateCart();
}

// // Function to update the cart UI and calculate the total price
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);
        
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}
