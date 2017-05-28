app.directive('uploadPhoto', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div>Виберіть назву альбому в який хочете завантажити фото:{{selectedAlbum.aid}}' +
                        '<div>' +
                            '<select ng-model="selectedAlbum" ng-options="x.title for x in albums" ng-change="setAlbum(selectedAlbum.aid)">' +
                        '</div>'+
                  '</div>',
        link: function (scope, element, attrs) {

        }
    }
});
