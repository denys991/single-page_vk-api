app.directive('renderPhotos', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div ng-repeat="(index, photo) in photos" class="foto-block" data-toggle="tooltip" data-placement="bottom" title="Кількість лайків на фото: {{ photo.likes.count }};\n Кількість коментарів до фото: {{ photo.comments.count }} Опис фотографії: {{ photo.text }}">' +
                      '<img class="lazyImg" data-original="{{ photo.src_big }}">' +
                      '<div class="select-btn" ng-click="showPhoto(photo.src_small, photo.src_big, photo.src_xbig, photo.src_xxbig, photo.src_xxxbig, index)">Select</div>' +
                  '</div>',
        link: function (scope, element, attrs) {
        }
    }
});

