app.directive('renderPhotos', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div ng-repeat="photo in photos" class="foto-block">' +
                      '<img src="{{ photo.src_big }}">' +
                      '<div class="select-btn">Select</div>' +
                  '</div>',
        link: function (scope, element, attrs) {
        }
    }
});

