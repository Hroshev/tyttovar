document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".form__content");
    let popup = document.getElementById("thank-popup");
    let popupMessage = document.getElementById("thank-popup__message");
    let body = document.body;


    if (form) {
        // Помещаем текущую ссылку в скрытое поле формы с именем "currentURL"
    const currentURL = window.location.href;
    document.getElementById("currentURL").value = currentURL;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Создание объекта FormData для отправки данных формы
        let formData = new FormData(form);

        // Создание и настройка объекта XMLHttpRequest
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "send.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Успешный ответ от сервера
                    if (xhr.responseText === "success") {
                        // Добавляем класс для блокировки прокрутки
                        body.classList.add("_lock");

                        // Отображаем всплывающее окно
                        popupMessage.textContent = "Вашу покупку успішно оформлено. Ми зв'яжемося з вами найближчим часом.";
                        popup.style.display = "block";

                        // Закрываем всплывающее окно через 7 секунд
                        setTimeout(function () {
                            popup.style.display = "none";

                            // Удаляем класс для восстановления прокрутки
                            body.classList.remove("_lock");
                        }, 8000);

                        // Задержка перед очисткой полей
                        setTimeout(function () {
                            // Очистка полей ввода
                            let inputFields = form.querySelectorAll(".form__input");
                            inputFields.forEach(input => {
                                input.value = "";
                            });
                        }, 1000);
                    } else {
                        console.log("Произошла ошибка при отправке формы.");
                    }
                } else {
                    // Ошибка при отправке запроса на сервер
                    console.log("Произошла ошибка при отправке запроса на сервер.");
                }
            }
        };

        // Отправка данных формы на сервер
        xhr.send(formData);
    });
    }
});