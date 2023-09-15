const botToken = '6362566068:AAEYcY-fEL9tPKxrpV9PoIEbx1fJz_i3odg';
const chatId = '296826150';

async function sendTelegramMessage(message) {
    try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (response.ok) {
            console.log('Сообщение успешно отправлено в Telegram.');
        } else {
            console.error('Произошла ошибка при отправке сообщения в Telegram.');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}