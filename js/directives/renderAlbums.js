app.directive('renderAlbums', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div class="album-block" ng-repeat="album in albums" ng-click="showPhotos(album.aid, album.title )">' +
                      '<div class="album-preview"><img src="{{ album.thumb_src }}"></div>' +
                      '<p class="album-title">{{ album.title }}</p>' +
                      '<p class="album-count">{{ album.size }} files</p>' +
                      '<p class="album-created">' +
                          '<span class="exeption" ng-show="!album.created">system albums, date is absent!</span>' +
                          '<span ng-show="album.created">{{ dateFnc(album.created) }}</span>' +
                      '</p>' +
                  '</div>',
        link: function (scope, element, attrs) {
        }
    }
});

