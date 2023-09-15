// Находим элементы на странице
const basket = document.querySelector('.basket');
const basketCount = document.querySelector('.basket__count');

// Функция для обновления классов корзины
function updateBasketClass() {
  if (basketCount.textContent.trim() !== '') {
    basket.classList.add('basket--active');
  } else {
    basket.classList.remove('basket--active');
  }
}

// Создаем экземпляр MutationObserver
const observer = new MutationObserver(updateBasketClass);

// Настраиваем наблюдение за изменениями в содержимом basket__count
observer.observe(basketCount, { childList: true, subtree: true });

// Вызываем функцию для начальной установки класса корзины
updateBasketClass();