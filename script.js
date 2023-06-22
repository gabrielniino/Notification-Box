// Função construtora
function NotificationBox() {
    this.notif = document.createElement('div');
    this.notif.className = 'notification-box';
    this.notificationCount = 0;
    this.notifications = [{
        id: '2',
        titulo: 'Primeira notificação',
        texto: 'Isso é uma notificação de teste.',
        data: '2023-06-23',
        lido: false,
        click: function () {
            console.log('Notificaçao clicada');
        }
    }];
    this.notificationListVisible = false; // Estado inicial da lista de notificações

    var self = this;

    // Adiciona um evento de clique ao ícone de notificação.
    this.notif.addEventListener('click', function () {
        if (self.notificationListVisible) {
            self.hideNotificationList();
        } else {
            self.showNotificationList();
        }
    });
}

NotificationBox.prototype.add = function (notification) {
    this.notifications.push(notification);
    this.notificationCount++;
    this.updateNotificationCount();
    this.animateIcon();
};

NotificationBox.prototype.del = function (notificationId) {
    this.notifications = this.notifications.filter(function (notification) {
        return notification.id !== notificationId;
    });
    this.notificationCount = this.notifications.length;
    this.updateNotificationCount();
};

NotificationBox.prototype.up = function (notification) {
    var foundNotification = this.notifications.find(function (n) {
        return n.id === notification.id;
    });

    if (foundNotification) {
        foundNotification.lido = notification.lido;
    }
};

NotificationBox.prototype.showNotificationList = function () {
    var notificationList = document.createElement('div');
    notificationList.className = 'notification-list';

    for (var i = 0; i < this.notifications.length; i++) {
        var notification = this.notifications[i];
        var notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item';

        // Cria elementos para exibir o título, texto e data da notificação
        var titleElement = document.createElement('h3');
        titleElement.textContent = notification.titulo;

        var textElement = document.createElement('p');
        textElement.textContent = notification.texto;

        var dateElement = document.createElement('span');
        dateElement.textContent = notification.data;

        // Adiciona os elementos à notificação
        notificationItem.appendChild(titleElement);
        notificationItem.appendChild(textElement);
        notificationItem.appendChild(dateElement);

        notificationItem.addEventListener('click', notification.click);
        notificationList.appendChild(notificationItem);
    }


    this.notif.appendChild(notificationList);
    this.notificationListVisible = true;
};

NotificationBox.prototype.hideNotificationList = function () {
    if (this.notificationListVisible) {
        var notificationList = this.notif.querySelector('.notification-list');
        this.notif.removeChild(notificationList);
        this.notificationListVisible = false;
    }
};

NotificationBox.prototype.updateNotificationCount = function () {
    this.icon.textContent = this.notificationCount > 0 ? this.notificationCount : '';
};

NotificationBox.prototype.animateIcon = function () {
    // Implementar a animação do ícone
};

// Aguarde até que o DOM seja totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('notification-box');
    var notificationBox = new NotificationBox();
    container.appendChild(notificationBox.notif);

    // // Teste adicionando notificações
    // notificationBox.add({
    //     id: '1',
    //     titulo: 'Nova notificação',
    //     texto: 'Isso é uma notificação de teste.',
    //     data: '2023-06-22',
    //     lido: false,
    //     click: function () {
    //         console.log('Notificação clicada');
    //     }
    // });
});
