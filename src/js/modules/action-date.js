const startDateSpan = document.getElementById("startDate");
const currentDateSpan = document.getElementById("currentDate");

if (startDateSpan && currentDateSpan) {
    
    // Получаем текущую дату
    const currentDate = new Date();

    // Дата 6 дней назад от текущей даты
    const sixDaysAgo = new Date(currentDate);
    sixDaysAgo.setDate(currentDate.getDate() - 6);

    // Функция для форматирования даты в "дд.мм.гггг"
    const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
    };

    // Форматируем даты в строку в формате "дд.мм.гггг"
    const formattedStartDate = formatDate(sixDaysAgo);
    const formattedCurrentDate = formatDate(currentDate);

    // Вставляем отформатированные даты в элементы span
    startDateSpan.textContent = `${formattedStartDate}`;
    currentDateSpan.textContent = `${formattedCurrentDate}`;
}