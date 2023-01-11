// -------------------- have evaluated the code quality by Eslink --------------------
/**
 * add each product to the cart
 * @function cart
 * @param {Object} $ - JQuery selector which is connected to each product
 */
jQuery(document).ready(function cart ($) {
    // The shopping cart button in the lower right corner of the page
    const cartWrapper = $('.cd-cart-container');

    // use a counter as product id
    let productId = 0;

    // When consumers add goods to the shopping cart
    if (cartWrapper.length > 0) {
        // store jQuery objects

        // the body of the product list
        var cartBody = cartWrapper.find('.body');

        // the list of products
        var cartList = cartBody.find('ul').eq(0);

        // checkout element
        var cartTotal = cartWrapper.find('.checkout').find('span');

        // the button to open or close the cart
        const cartTrigger = cartWrapper.children('.cd-cart-trigger');

        // cart items count
        var cartCount = cartTrigger.children('.count');

        // cancel the last removing product action
        var undo = cartWrapper.find('.undo');
        var undoTimeoutId;

        // find the specific product by the id
        const addToCartBtn1 = $('#p1');
        const addToCartBtn2 = $('#p2');
        const addToCartBtn3 = $('#p3');
        const addToCartBtn4 = $('#p4');
        const addToCartBtn5 = $('#p5');
        const addToCartBtn6 = $('#p6');
        const addToCartBtn7 = $('#p7');
        const addToCartBtn8 = $('#p8');
        const addToCartBtn9 = $('#p9');
        const addToCartBtn10 = $('#p10');
        const addToCartBtn11 = $('#p11');
        const addToCartBtn12 = $('#p12');

        // add product to cart
        // call the function "addToCart" and give specific product information
        addToCartBtn1.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/1.jpeg', 'INCUBATE / JACKET / COTTON. WEATHER', '£320', $(this));
        });
        addToCartBtn2.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/2.jpeg', 'WSFM / JACKET / NYCO. WEATHER', '£480', $(this));
        });
        addToCartBtn3.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/3.jpeg', 'INCOM / JACKET / NYCO. WEATHER', '£315', $(this));
        });
        addToCartBtn4.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/4.jpeg', 'EVASION / JACKET / NYLON. 3LAYER', '£655', $(this));
        });
        addToCartBtn5.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/5.jpeg', 'BLANK 01 / HOODED / COTTON', '£200', $(this));
        });
        addToCartBtn6.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jacket/6.jpeg', 'TRADER / VEST / COTTON. RIPSTOP', '£327', $(this));
        });
        addToCartBtn7.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jeans/1.jpeg', 'Army Cargo Pant in Dark Green', '£260', $(this));
        });
        addToCartBtn8.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jeans/2.jpeg', 'Factory Dungarees in Indigo Denim', '£399', $(this));
        });
        addToCartBtn9.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/jeans/3.jpeg', 'Naval Dungaree in Indigo Denim', '£499', $(this));
        });
        addToCartBtn10.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/shoes/1.jpeg', 'CHUKKA BOOTS 3141', '£259', $(this));
        });
        addToCartBtn11.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/shoes/2.jpeg', 'CLASSIC MOC TOE BOOTS 1907', '£309', $(this));
        });
        addToCartBtn12.on('click', function (event) {
            event.preventDefault();
            addToCart('imgs/shoes/3.jpeg', 'IRON RANGER BOOTS 8111', '£299', $(this));
        });

        // open/close cart
        cartTrigger.on('click', function (event) {
            event.preventDefault();
            toggleCart();
        });

        // close cart when clicking on the .cd-cart-container::before (bg layer)
        cartWrapper.on('click', function (event) {
        if ($(event.target).is($(this))) toggleCart(true);
        });

        // delete an item from the cart
        cartList.on('click', '.delete-item', function (event) {
            event.preventDefault();
            removeProduct($(event.target).parents('.product'));
        });

        // update item quantity
        cartList.on('change', 'select', function (event) {
            quickUpdateCart();
        });

        // reinsert item deleted from the cart
        undo.on('click', 'a', function (event) {
            clearInterval(undoTimeoutId);
            event.preventDefault();
            cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
            quickUpdateCart();
            });
            undo.removeClass('visible');
        });
    }

    /** open or close the cart button
     * @function toggleCart
     * @param {boolean} bool - whether the button is clicked
     */
    function toggleCart (bool) {
        const cartIsOpen = (typeof bool === 'undefined') ? cartWrapper.hasClass('cart-open') : bool;

        // when customer opens the cart
        if (cartIsOpen) {
        // replace cart button in the lower right corner with product list
        cartWrapper.removeClass('cart-open');

        // reset undo
        clearInterval(undoTimeoutId);
        undo.removeClass('visible');
        cartList.find('.deleted').remove();

        setTimeout(function () {
        cartBody.scrollTop(0);
        // check if cart empty to hide it
        if (Number(cartCount.find('li').eq(0).text()) === 0) cartWrapper.addClass('empty');
        }, 500);
        // if cart is not empty keep showing the button
        } else {
        cartWrapper.addClass('cart-open');
        }
    }

    /** Add the certain product to the cart.
     * @function addToCart
     * @param {string} img - The path of the product img.
     * @param {string} name - The name of the product.
     * @param {string} price - The price of the product.
     * @param {Object} trigger - The selector of the product.
     */
    function addToCart (img, name, price, trigger) {
        const cartIsEmpty = cartWrapper.hasClass('empty');
        // update cart product list
        addProduct(img, name, price);
        // update number of items
        updateCartCount(cartIsEmpty);
        // update total price
        updateCartTotal(trigger.data('price'), true);
        // show cart
        cartWrapper.removeClass('empty');
    }

    /**
     * give the information of selected product to the list.
     * @param {string} img - The path of the product img.
     * @param {string} name - The name of the product.
     * @param {string} price - The price of the product.
     * @param {Object} trigger - The selector of the product.
     */
    function addProduct (img, name, price) {
        productId = productId + 1;
        const productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src=' + img + ' alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + name + '</a></h3><span class="price">' + price + '</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qty</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
        cartList.prepend(productAdded);
        }

    /**
     * remove the product in the cart.
     * @param {Object} product - The selector of the product.
     */
    function removeProduct (product) {
        clearInterval(undoTimeoutId);
        cartList.find('.deleted').remove();

        const topPosition = product.offset().top - cartBody.children('ul').offset().top;

        // the quantity of the product
        const productQuantity = Number(product.find('.quantity').find('select').val());

        // the price of the certain product
        const productTotPrice = Number(product.find('.price').text().replace('£', '')) * productQuantity;

        product.css('top', topPosition + 'px').addClass('deleted');

        // update items count + total price
        updateCartTotal(productTotPrice, false);
        updateCartCount(true, -productQuantity);
        undo.addClass('visible');

        // wait 8sec before completely remove the item
        undoTimeoutId = setTimeout(function () {
        undo.removeClass('visible');
        cartList.find('.deleted').remove();
        }, 8000);
    }

    /** if consumer change the quantity of the product, update the price of checkout
     * @function quickUpdateCart
     */
    function quickUpdateCart () {
        // the number of the product which is editing
        let quantity = 0;

        // the total price of the certain product
        let price = 0;

        cartList.children('li:not(.deleted)').each(function () {
        // the quantity customer selected
        const singleQuantity = Number($(this).find('select').val());
        quantity = quantity + singleQuantity;
        // update the price of checkout
        price = price + singleQuantity * Number($(this).find('.price').text().replace('£', ''));
        });

        // change the price and keep two decimal places
        cartTotal.text(price.toFixed(2));
        cartCount.find('li').eq(0).text(quantity);
        cartCount.find('li').eq(1).text(quantity + 1);
    }

    /** If the consumer deletes all items in the shopping cart, the shopping cart is stowed.
     * If the consumer adds the new product, update the count.
     * @function updateCartCount
     * @param {boolean} emptyCart - whether the cart is empty
     * @param {number} quantity - the quantity of products in the cart
    */
    function updateCartCount (emptyCart, quantity) {
        if (typeof quantity === 'undefined') {
        var actual = Number(cartCount.find('li').eq(0).text()) + 1;
        var next = actual + 1;

        if (emptyCart) {
        cartCount.find('li').eq(0).text(actual);
        cartCount.find('li').eq(1).text(next);
        } else {
        cartCount.addClass('update-count');

        setTimeout(function () {
            cartCount.find('li').eq(0).text(actual);
        }, 150);

        setTimeout(function () {
            cartCount.removeClass('update-count');
        }, 200);

        setTimeout(function () {
        cartCount.find('li').eq(1).text(next);
        }, 230);
        }
        } else {
        var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
        var next = actual + 1;

        cartCount.find('li').eq(0).text(actual);
        cartCount.find('li').eq(1).text(next);
        }
    }

    /** update total price
     * @function updateCartTotal
     * @param {number} price - the total price
     * @param {boolean} bool
    */
    function updateCartTotal (price, bool) {
        bool ? cartTotal.text((Number(cartTotal.text()) + price).toFixed(2)) : cartTotal.text((Number(cartTotal.text()) - price).toFixed(2));
    }
});
