$(document).ready(function () {
    var successMessage = $("#jq-notification");
    var goodsInCartCount = $("#cartCount");
    var cartCount = parseInt(goodsInCartCount.text() || 0);

    check_carts_quantity();

    function sendMessageToScreen(message) {
        successMessage.html(message);
        successMessage.fadeIn(400);
        setTimeout(function () {
            successMessage.fadeOut(400);
        }, 7000);
    }

    function updateHTML(cart_items_html) {
        var cartItemsContainer = $("#cartContainer");
        cartItemsContainer.html(cart_items_html);
    }

    function ajaxPostRequest(url, data, success, error) {
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: success,
            error: error,
        });
    }

    function getCartItem(e, element) {
        e.preventDefault();
        var url = $(element).attr("href");
        var cartID = $(element).data("cart-id");
        var quantity_displayer = $(element).closest('.cart-item').find('.quantity_displayer');
        var currentValue = parseInt(quantity_displayer.text());
        return { cartID, quantity_displayer, currentValue, url }
    }

    function validateForm(response) {
        if (response.data.success == true) {
            $(response.form_id).trigger('reset');
            sendMessageToScreen(response.data.message);
            document.querySelectorAll(response.error_class).forEach(function (element) {
                element.style.display = "none";
            });
            return true
        }
        document.querySelectorAll(response.error_class).forEach(function (element) {
            element.style.display = "block";
        });
        $(response.number_or_email_error_field_id).text(response.data.form_errors.number_or_email);
        $(response.name_error_field_id).text(response.data.form_errors.name);
        return false
    }

    function updateCart(cartID, quantity, url) {
        data = {
            cart_id: cartID,
            quantity: quantity,
            csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
        }

        function success(data) {
            goodsInCartCount.text(data.total_quantity);
            updateHTML(data.cart_items_html);
        }

        function error(data) {
            console.log("Помилка при зміні кількості товару");
        }

        ajaxPostRequest(url, data, success, error)
    }

    function check_carts_quantity() {
        if (cartCount > 0) {
            goodsInCartCount.css("display", "flex");
        } else {
            goodsInCartCount.css("display", "none");
        }
    }

    $(document).on("click", ".add-to-cart", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");

        data = {
            product_id: $(this).data("product-id"),
            csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
        }

        function success(data) {
            sendMessageToScreen(data.message)
            cartCount++;
            goodsInCartCount.text(cartCount);
            check_carts_quantity();
            updateHTML(data.cart_items_html);
        }

        function error(data) {
            console.log("Помилка при додавані товару в корзину");
        }

        ajaxPostRequest(url, data, success, error);
    });

    $(document).on("click", ".remove-btn", function (e) {
        e.preventDefault();

        data = {
            cart_id: $(this).data("cart-id"),
            csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
        }

        function success(data) {
            sendMessageToScreen(data.message);
            goodsInCartCount.text(data.total_quantity);
            cartCount = data.total_quantity;
            check_carts_quantity();
            if (cartCount == 0) {
                location.reload();
            }
            else {
                updateHTML(data.cart_items_html);
            }
        }

        function error(data) {
            console.log("Помилка при видалені товару з корзини");
        }

        ajaxPostRequest($(this).attr("href"), data, success, error);
    });

    $(document).on("click", ".minus-btn", function (e) {
        item = getCartItem(e, this);
        if (item.currentValue > 1) {
            item.quantity_displayer.val(item.currentValue - 1);
            updateCart(item.cartID, item.currentValue - 1, item.url);
        }
    });

    $(document).on("click", ".plus-btn", function (e) {
        item = getCartItem(e, this);
        item.quantity_displayer.val(item.currentValue + 1);
        updateCart(item.cartID, item.currentValue + 1, item.url);
    });

    $(document).on("click", ".remove-all-carts", function (e) {
        e.preventDefault();

        data = {
            csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val()
        }

        function success(data) {
            location.reload();
        }

        function error(data) {
            console.log("Помилка при видалені товару з корзини");
        }

        ajaxPostRequest($(this).data("url"), data, success, error);
    })

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        function success(data) {
            response = {
                data: data,
                form_id: '#contact-form',
                error_class: ".validation-error",
                number_or_email_error_field_id: "#user_number_or_email",
                name_error_field_id: "#user_name"
            }
            if (validateForm(response)) {
                document.querySelector('.popup-contact-form').classList.remove('active');
                document.querySelector('.additional-elements').style.display = ''
            }
        }

        function error(data) {
            console.log("Помилка при надсилані повідомлення!");
        }

        ajaxPostRequest(window.location.href, $(this).serialize(), success, error)
    });

    $('#page-contact-form').on('submit', function (e) {
        e.preventDefault();

        function success(data) {
            response = {
                data: data,
                form_id: '#page-contact-form',
                error_class: ".page-validation-error",
                number_or_email_error_field_id: "#page_number_or_email",
                name_error_field_id: "#page_name"
            }
            validateForm(response);
        }

        function error(data) {
            console.log("Помилка при надсилані повідомлення!");
        }

        ajaxPostRequest(window.location.href, $(this).serialize(), success, error)
    });

    $("#id-confirm-order-button").on("click", function () {
        $("#id-order-form").submit();
    });

    $("#id-order-form").on("submit", function (e) {
        e.preventDefault();

        function success(data) {
            if (data.success) {
                window.location.href = data.url
            } else {
                data.form_errors.forEach(element => {
                    $(element[0]).text(element[1]);
                });
                var inputs = document.querySelectorAll('.order-box .point input');
                document.querySelectorAll(".error-massage").forEach(function (element, index) {
                    console.log(index)
                    console.log(inputs[index])
                    if (element.textContent.trim().length > 0) {
                        element.style.display = "block";
                        inputs[index].classList.add("active-input")
                    } else {
                        element.style.display = "none";
                        inputs[index].classList.remove("active-input")
                    }
                });
            }

        }

        function error(data) {
            console.log("Помилка при створенні замовлення!");
        }
        ajaxPostRequest(window.location.href, $(this).serialize(), success, error)
    })
});