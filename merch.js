const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
];

// Function to add item to cart
function addToCart(productId) {
    // Find the product by ID
    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        // Create a new list item for the cart
        const cartItem = document.createElement('li');
        cartItem.textContent = product.name;

        // Add the item to the cart
        const cart = document.getElementById('cart');
        cart.appendChild(cartItem);
    }
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        addToCart(productId);
    });
});