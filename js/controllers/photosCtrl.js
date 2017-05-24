app.controller('photosCtrl', function ($scope) {

    $scope.backToAlbum = function () {
        $scope.rend_photos = false;
    };

    $scope.showPhotos = function (album_id, album_title) {

        $scope.rend_photos = true;
        $scope.album_title = album_title;

        photosPr = new Promise(function(resolve, reject) {

            VK.Api.call('photos.get', {
                access_token: 'df0c3aaf0c634ad70dfcbd73c1d010299aa7490d179c4b06384e4f9c2378751223e4bb44edd94095b287c',
                album_id: album_id
            }, function (r) {
                if (r.response) {
                    $scope.photos = r.response;
                    resolve(r.response);
                }
            });
        });

        photosPr.then(function (result) {
            console.log('фотки');
            console.log(result);
            $scope.$digest();
        })
    };
});