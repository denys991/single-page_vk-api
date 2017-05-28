app.directive('showPhoto', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div>' +
                      '<img src="{{photo_link}}">' +
                      '<p>Кількість відміток "Мені подобається": <span>{{ likes }}</span></p>' +
                      '<p>Кількість коментарів до фотографії: <span>{{ comments }}</span></p>' +
                      '<p>Текст опису фотографії: <span>{{ text }}</span></p>' +
                  '</div>',
        link: function (scope, element, attrs) {
        }
    }
});