document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const wishlistAddButtons = document.querySelectorAll('.wishlist-add');
    const cartCountElement = document.querySelector('.header-icons a[href="/cart"] .cart-count');
    const wishlistCountElement = document.querySelector('.header-icons a[href="/wishlist"] .wishlist-count');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent any default link behavior

            const productId = this.dataset.productId;
            alert(`Error: Adding "${productId}" to cart is not currently implemented. Please contact us to make a purchase.`);
            console.error('Attempted to add to cart (no backend):', productId);
            // You could optionally add some visual feedback here, like changing the button text temporarily
            // this.textContent = 'Error!';
            // setTimeout(() => { this.textContent = 'Add to Cart'; }, 2000);
        });
    });

    wishlistAddButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const heartIcon = this.querySelector('i');

            if (wishlistCountElement) {
                let currentCount = parseInt(wishlistCountElement.textContent) || 0;
                const isCurrentlyInWishlist = heartIcon.classList.contains('fas');
                if (isCurrentlyInWishlist) {
                    wishlistCountElement.textContent = currentCount - 1;
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                } else {
                    wishlistCountElement.textContent = currentCount + 1;
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                }
            }
            console.log('Wishlist updated (locally):', productId);
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.test-item .button.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const errorMessageDiv = this.nextElementSibling; // Get the next sibling element (the error div)
            if (errorMessageDiv && errorMessageDiv.classList.contains('cart-error-message')) {
                errorMessageDiv.textContent = 'Error: Please contact customer support to add to cart.';
                // Optionally, you can clear the message after a few seconds:
                // setTimeout(() => {
                //     errorMessageDiv.textContent = '';
                // }, 3000);
            } else {
                alert('Error: Could not find error message container.'); // Fallback
            }
        });
    });
});