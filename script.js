// Função construtora
function NotificationBox(Local) {

    // variaveis do objeto
    this.classname = 'notification-box';
    this.classList = 'notification-list';
    this.notificationCount = 0;

    this.construct = function (Local) {
        this.area(Local);
        this.criarIcone();
        this.showNotificationList();
        this.hideNotificationList();
    }

    // constroi o objeto
    this.area = function (local) {
        this.notif = document.createElement('div'); // area do objeto
        this.notif.className = this.classname;
        local.appendChild(this.notif);
        return true;
    }

    this.criarIcone = function () {

        // Cria o elemento de ícone de notificação
        var iconElement = document.createElement('div');
        iconElement.className = 'notification-icon';

        // Cria o elemento img para o ícone
        var imgElement = document.createElement('img');
        imgElement.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlUlEQVR4nGNgGElAhYGB4Q4Ug9hUB5UMDAz/oRjEphpgZ2BgyIO6HGbBbQYGhlyoHEVAhoGB4SKSwej4AgMDgzQlLr+Ix3BkS8jySQERhsMwKAhJBqdJsOAEORZ8I8GCr+RY8J9EPGoBw2gQoYAGMlJRBwMNDf9PiiXkGv6f3PxAN/AYyZWPaGGBJ9QSkOEetLBgcAIABRa2/fuEyLwAAAAASUVORK5CYII='; // Defina o caminho da imagem desejada

        // Adiciona o elemento img ao ícone de notificação
        iconElement.appendChild(imgElement);

        this.notif.appendChild(iconElement);

        iconElement.cls = this; // referencia da classe obj alocado na memoria;

        // Adiciona o evento de clique ao ícone de notificação
        iconElement.addEventListener('click', function () {
            var cls = this.cls;

            if (cls.notificationListVisible) {
                cls.hideNotificationList();
            } else {
                cls.showNotificationList();
            }
        });


    }

    this.showNotificationList = function () {

        // aqui se ja exite apenas mostramos ela
        if (this.notificationList) {
            this.notificationList.style.display = '';
            this.notificationListVisible = true;
            return true; // paro a execução para ecitar criar os objetos duplicados
        }

        var notificationList = document.createElement('div');
        notificationList.className = this.classList;

        // Cria o elemento de título da lista de notificações
        var titleContainer = document.createElement('h2');
        titleContainer.textContent = 'Lista de Notificações';

        // Adiciona o título à lista de notificações
        notificationList.appendChild(titleContainer);

        this.notificationList = notificationList; // adicionei só para ter o controle logo acima se ja existe  
        this.notif.appendChild(notificationList);
        this.notificationListVisible = true;
    };

    // aqui no hide vc pode apenas dar um display none do css para que ele perca a visibilidade apenas e deixe tudo construido
    this.hideNotificationList = function () {

        if (this.notificationListVisible) {

            var notificationList = this.notificationList;

            // this.notif.removeChild(notificationList);
            notificationList.style.display = 'none';
            this.notificationListVisible = false;
        }
    };

    this.updateNotificationCount = function () {
        this.icon.textContent = this.notificationCount > 0 ? this.notificationCount : '';
    };

    this.animateIcon = function () {
        // Implementar a animação do ícone
    };

    this.add = function (notification) {
        var notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';

        var notificationContent = document.createElement('div');
        notificationContent.className = 'notification-content';

        var imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        var contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';

        var dataContainer = document.createElement('div');
        dataContainer.className = 'data-container';

        var imgUsuario = document.createElement('img');
        imgUsuario.src = 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=2000';

        var titleElement = document.createElement('h3');
        titleElement.textContent = notification.titulo;

        var subTitleElement = document.createElement('h4');
        subTitleElement.textContent = notification.subtitulo;

        var textElement = document.createElement('p');
        textElement.textContent = notification.texto;

        var dateElement = document.createElement('span');
        dateElement.textContent = notification.data;

        imgContainer.appendChild(imgUsuario);
        contentContainer.appendChild(titleElement);
        contentContainer.appendChild(subTitleElement);
        contentContainer.appendChild(textElement);
        dataContainer.appendChild(dateElement);

        notificationContent.appendChild(imgContainer);
        notificationContent.appendChild(contentContainer);
        notificationContent.appendChild(dataContainer);

        notificationContent.addEventListener('click', notification.click);
        notificationContainer.appendChild(notificationContent);
        this.notificationList.appendChild(notificationContainer);
        this.notificationCount++;

        return notificationContainer;
    }


    // ao criar o objeto ele inica o funcionamento 
    this.construct(Local);
}

// Aguardar até que o DOM seja totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('notification-box');
    notificationBox = new NotificationBox(container);
});