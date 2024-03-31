// cart prototype ----------------------------------------------------------------------

$(document).ready(function () {
    // берем в переменную элемент разметки с id jq-notification для оповещений от ajax
    var successMessage = $("#jq-notification");
    $(document).on("click", ".add-to-cart", function (e) {
        e.preventDefault();
        // Берем элемент счетчика в значке корзины и берем оттуда значение
        // var goodsInCartCount = $("#goods-in-cart-count");
        // var cartCount = parseInt(goodsInCartCount.text() || 0);
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
                // Сообщение
                successMessage.html(data.message);
                successMessage.fadeIn(400);
                // Через 7сек убираем сообщение
                setTimeout(function () {
                    successMessage.fadeOut(400);
                }, 7000);
                console.log($(this).serialize())
                // Увеличиваем количество товаров в корзине (отрисовка в шаблоне)
                // cartCount++;
                // goodsInCartCount.text(cartCount);
                // Меняем содержимое корзины на ответ от django (новый отрисованный фрагмент разметки корзины)
                var cartItemsContainer = $("#cartContainer");
                cartItemsContainer.html(data.cart_items_html);
            },

            error: function (data) {
                console.log("Ошибка при добавлении товара в корзину");
            },
        });
    });

    // Ловим собыитие клика по кнопке удалить товар из корзины
    $(document).on("click", ".remove-btn", function (e) {
        // Блокируем его базовое действие
        e.preventDefault();

        // Берем элемент счетчика в значке корзины и берем оттуда значение
        var successMessage = $("#jq-notification");
        // var cartCount = parseInt(goodsInCartCount.text() || 0);

        // Получаем id корзины из атрибута data-cart-id
        var cart_id = $(this).data("cart-id");
        console.log(parseInt(cart_id));
        // Из атрибута href берем ссылку на контроллер django
        var remove_from_cart = $(this).attr("href");

        // делаем post запрос через ajax не перезагружая страницу
        $.ajax({

            type: "POST",
            url: remove_from_cart,
            data: {
                cart_id: cart_id,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },
            success: function (data) {
                // Сообщение
                successMessage.html(data.message);
                successMessage.fadeIn(400);
                // Через 7сек убираем сообщение
                setTimeout(function () {
                    successMessage.fadeOut(400);
                }, 7000);

                // Уменьшаем количество товаров в корзине (отрисовка)
                // cartCount -= data.quantity_deleted;
                // goodsInCartCount.text(cartCount);

                // Меняем содержимое корзины на ответ от django (новый отрисованный фрагмент разметки корзины)
                var cartItemsContainer = null;
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
            updateCart(cartID, currentValue - 1, -1, url);
        }
    });

    $(document).on("click", ".plus-btn", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");
        var cartID = $(this).data("cart-id");
        var quantity_displayer = $(this).closest('.cart-item').find('.quantity_displayer');
        var currentValue = parseInt(quantity_displayer.text());
        quantity_displayer.val(currentValue + 1);
        updateCart(cartID, currentValue + 1, 1, url);

    });

    function updateCart(cartID, quantity, change, url) {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                cart_id: cartID,
                quantity: quantity,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },

            success: function (data) {
                // Сообщение
                // successMessage.html(data.message);
                // successMessage.fadeIn(400);
                // // Через 7сек убираем сообщение
                // setTimeout(function () {
                //     successMessage.fadeOut(400);
                // }, 7000);

                // Изменяем количество товаров в корзине
                // var goodsInCartCount = $("#goods-in-cart-count");
                // var cartCount = parseInt(goodsInCartCount.text() || 0);
                // cartCount += change;
                // goodsInCartCount.text(cartCount);

                // Меняем содержимое корзины
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

    // // Берем из разметки элемент по id - оповещения от django
    var notification = $('#notification');
    // И через 7 сек. убираем
    if (notification.length > 0) {
        setTimeout(function () {
            notification.alert('close');
        }, 7000);
    }
});