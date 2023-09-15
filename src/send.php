<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Название товара будет получено из текущей ссылки
$currentURL = isset($_POST['currentURL']) ? $_POST['currentURL'] : '';

// Функция для отправки уведомления в Telegram
function sendTelegramMessage($message) {
    $botToken = '6362566068:AAEYcY-fEL9tPKxrpV9PoIEbx1fJz_i3odg';
    $chatId = '296826150';

    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data),
        ],
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        return "Ошибка отправки в Telegram";
    } else {
        return "Уведомление отправлено в Telegram";
    }
}

// Проверка, что запрос пришел методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';

    // Настройки SMTP-сервера Hostinger
    $smtpHost = 'smtp.hostinger.com';
    $smtpUsername = 'shop@tyttovar.com';
    $smtpPassword = 'sH12a3s4a#';
    $smtpPort = 465;

    try {
        // Создание объекта PHPMailer
        $mail = new PHPMailer(true);

        // Настройки для SMTP
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = $smtpPort;

        // Установка кодировки UTF-8
        $mail->CharSet = 'UTF-8';

        // Отправитель и получатель
        $mail->setFrom('shop@tyttovar.com', 'Заявка на товар');
        $mail->addAddress('grosheff.ivan@gmail.com', 'Ivan');

        // Тема и тело письма
        $mail->Subject = 'Нова заявка з форми';

        // Используйте $currentURL вместо жестко заданной ссылки
        $mail->Body = "Нове замовлення на сайті💵 \nТовар: $currentURL \nПрізвище та ім'я: $name \nТелефон: $phone";

        // Отправка письма
        $mail->send();

        // Отправка уведомления в Telegram
        $message = "Нове замовлення на сайті💵 \nТовар: $currentURL \nПрізвище та ім'я: $name \nТелефон: $phone";
        sendTelegramMessage($message);

        // Возвращаем успешный результат
        echo 'success';
    } catch (Exception $e) {
        // Возвращаем ошибку, если что-то пошло не так
        echo 'error';
    }
}
?>