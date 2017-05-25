app.directive('showPhoto', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div>' +
                      '<img src="{{photo_link}}">' +
                      '<p><b>Количество отметок Мне нравится: </b> {{ likes }}</p>' +
                      '<p><b>Количество комментариев к фотографии: </b> {{ comments }}</p>' +
                      '<p><b>Текст описания фотографии: </b> {{ text }}</p>' +
                  '</div>',
        link: function (scope, element, attrs) {
        }
    }
});