// Função construtora
function NotificationBox() {
  this.notif = document.createElement('div');
  this.notif.className = 'notification-box';
  this.notificationCount = 0;
  this.notifications = [];

  var self = this;

  // Adiciona um evento de clique ao ícone de notificação.
  this.notif.addEventListener('click', function () {
      this.showNotificationList();
  
  });

  //  Adiciona uma nova notificação ao array, incrementa o contador e chama o método de animação.
  this.notif.add = function (notification) {
      this.notifications.push(notification);
      this.notificationCount++;
      this.updateNotificationCount();
      this.animateIcon();
  };

  // Remove uma notificação do array com base no ID fornecido, atualiza o contador e chama o método de Update.
  this.notif.del = function (notificationId) {
      this.notifications = this.notifications.filter(function (notification) {
          return notification.id !== notificationId;
      });
      this.notificationCount = this.notifications.length;
      this.updateNotificationCount();
  };

  // Atualiza o status de uma notificação existente com base no ID fornecido.
  this.notif.up = function (notification) {
      var foundNotification = this.notifications.find(function (n) {
          return n.id === notification.id;
      });

      if (foundNotification) {
          foundNotification.lido = notification.lido;
      }
  };

  // Cria dinamicamente um elemento div para exibir a lista de notificações.
  this.notif.showNotificationList = function () {
      var notificationList = document.createElement('div');
      notificationList.className = 'notification-list';

      for (var i = 0; i < this.notifications.length; i++) {
          var notification = this.notifications[i];
          var notificationItem = document.createElement('div');
          notificationItem.className = 'notification-item';
          notificationItem.textContent = notification.titulo;
          notificationItem.addEventListener('click', notification.click);
          notificationList.appendChild(notificationItem);
      }

      this.notif.appendChild(notificationList);
  };

  // Atualiza o alerta de notificação para exibir o numero de notificações atual.
  this.notif.updateNotificationCount = function () {
      this.icon.textContent = this.notificationCount > 0 ? this.notificationCount : '';
  };

  // Adicionar uma animação CSS que sinaliza a chegada de uma nova notificação.
  this.notif.animateIcon = function () {
      // Implementar...
  };

  // Adiciona o elemento notif ao documento HTML.
  var container = document.getElementById('notification-box');
  container.appendChild(this.notif);
}

var notificationBox = new NotificationBox();

// Teste adicionando notificações
notificationBox.notif.add({
  id: '1',
  titulo: 'Nova notificação',
  texto: 'Isso é uma notificação de teste.',
  data: '2023-06-22',
  lido: false,
  click: function () {
      console.log('Notificação clicada');
  }
});

notificationBox.notif.add({
  id: '2',
  titulo: 'Outra notificação',
  texto: 'Isso é outra notificação de teste.',
  data: '2023-06-23',
  lido: false,
  click: function () {
      console.log('Outra notificação clicada');
  }
});
