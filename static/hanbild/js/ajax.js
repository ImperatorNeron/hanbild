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

                var cartItemsContainer = $("#cartContainer");
                cartItemsContainer.html(data.cart_items_html);
            },

            error: function (data) {
                console.log("Ошибка при видалені товара в корзину");
            },
        });
    });




    $(document).on("click", ".minus-btn", function () {
        var url = $(this).data("cart-change-url");
        var cartID = $(this).data("cart-id");
        var $input = $(this).closest('.item-details').find('.number')
        var currentValue = parseInt($input.val());
        console.log(url, cartID, $input, currentValue)
        if (currentValue > 1) {
            $input.val(currentValue - 1);
            // Запускаем функцию определенную ниже
            // с аргументами (id карты, новое количество, количество уменьшилось или прибавилось, url)
            updateCart(cartID, currentValue - 1, -1, url);
        }
    });

    $(document).on("click", ".plus-btn", function () {
        console.log(1)
        var url = $(this).data("cart-change-url");
        var cartID = $(this).data("cart-id");
        var $input = $(this).closest('.cart-item').find('.number');
        var currentValue = parseInt($input.val());
        $input.val(currentValue + 1);

        // Запускаем функцию определенную ниже
        // с аргументами (id карты, новое количество, количество уменьшилось или прибавилось, url)
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

    // // Берем из разметки элемент по id - оповещения от django
    var notification = $('#notification');
    // И через 7 сек. убираем
    if (notification.length > 0) {
        setTimeout(function () {
            notification.alert('close');
        }, 7000);
    }
    var cart = $('#cart');
    var cartContainer = $('#cartContainer');

    cart.on('click', function (event) {
        event.stopPropagation();
        cartContainer.css('display', 'block');
    });

    $(document).on('click', function (event) {
        if (!cartContainer.is(event.target) && cartContainer.has(event.target).length === 0) {
            cartContainer.css('display', 'none');
        }
    });
});