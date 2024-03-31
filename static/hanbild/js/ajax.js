$(document).ready(function () {
    var successMessage = $("#jq-notification");
    var goodsInCartCount = $("#cartCount");
    var cartCount = parseInt(goodsInCartCount.text() || 0);

    check_carts_quantity()

    $(document).on("click", ".add-to-cart", function (e) {
        e.preventDefault();

        var product_id = $(this).data("product-id");
        var add_to_cart_url = $(this).attr("href");

        $.ajax({
            type: "POST",
            url: add_to_cart_url,
            data: {
                product_id: product_id,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },
            success: function (data) {
                successMessage.html(data.message);
                successMessage.fadeIn(400);
                setTimeout(function () {
                    successMessage.fadeOut(400);
                }, 7000);
                cartCount++;
                goodsInCartCount.text(cartCount);
                check_carts_quantity()
                var cartItemsContainer = $("#cartContainer");
                cartItemsContainer.html(data.cart_items_html);
            },

            error: function (data) {
                console.log("Ошибка при добавлении товара в корзину");
            },
        });
    });

    $(document).on("click", ".remove-btn", function (e) {
        e.preventDefault();
        var successMessage = $("#jq-notification");
        var cart_id = $(this).data("cart-id");
        var remove_from_cart = $(this).attr("href");

        $.ajax({

            type: "POST",
            url: remove_from_cart,
            data: {
                cart_id: cart_id,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },
            success: function (data) {
                successMessage.html(data.message);
                successMessage.fadeIn(400);
                setTimeout(function () {
                    successMessage.fadeOut(400);
                }, 7000);
                goodsInCartCount.text(data.total_quantity);
                cartCount = data.total_quantity
                check_carts_quantity()
                cartItemsContainer = $("#cartContainer");
                cartItemsContainer.html(data.cart_items_html);
            },

            error: function (data) {
                console.log("Ошибка при видалені товара в корзину");
            },
        });
    });

    $(document).on("click", ".minus-btn", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");
        var cartID = $(this).data("cart-id");
        var quantity_displayer = $(this).closest('.cart-item').find('.quantity_displayer');
        var currentValue = parseInt(quantity_displayer.text());
        if (currentValue > 1) {
            quantity_displayer.val(currentValue - 1);
            updateCart(cartID, currentValue - 1, url);
        }
    });

    $(document).on("click", ".plus-btn", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");
        var cartID = $(this).data("cart-id");
        var quantity_displayer = $(this).closest('.cart-item').find('.quantity_displayer');
        var currentValue = parseInt(quantity_displayer.text());
        quantity_displayer.val(currentValue + 1);
        updateCart(cartID, currentValue + 1, url);
    });

    function updateCart(cartID, quantity, url) {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                cart_id: cartID,
                quantity: quantity,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },

            success: function (data) {
                goodsInCartCount.text(data.total_quantity);
                var cartItemsContainer = $("#cartContainer");
                cartItemsContainer.html(data.cart_items_html);

            },
            error: function (data) {
                console.log("Ошибка при добавлении товара в корзину");
            },
        });
    }

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var successMessage = $("#jq-notification");

        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (response) {
                if (response.success == true) {
                    $('#contact-form').trigger('reset');
                    document.querySelector('.popup-contact-form').classList.remove('active');
                    document.querySelector('.additional-elements').style.display = ''
                    successMessage.html(response.message);
                    successMessage.fadeIn(400);
                    setTimeout(function () {
                        successMessage.fadeOut(400)
                    }, 7000)
                } else {
                    console.log(response.form_errors)
                    // Придумати якийсь вивід
                }
            }
        })
    })

    function check_carts_quantity() {
        if (cartCount > 0) {
            goodsInCartCount.css("display", "flex");
        } else {
            goodsInCartCount.css("display", "none");
        }
    }

});