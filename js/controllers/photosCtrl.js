app.controller('photosCtrl', function ($scope) {
    $scope.rend_albums = true;
    
    $scope.backToAlbum = function () {
        $scope.rend_albums = true;
        $scope.rend_photos = false;
        $scope.photo = false;
    };

    $scope.showPhoto = function (size0, size1, size2, size3, size4, index) {

        $scope.screen = window.screen.availWidth;

        if ($scope.screen >= 1200) {
            $scope.photo_link = size4;
        } else if ($scope.screen >= 992 ) {
            $scope.photo_link = size3;
        } else if ($scope.screen >= 768) {
            $scope.photo_link = size2;
        } else {
            $scope.photo_link = size1;
        }

        $scope.rend_albums = false;
        $scope.rend_photos = false;
        $scope.photo = true;
        $scope.comments = $scope.photos[index].comments.count;
        $scope.likes = $scope.photos[index].likes.count;
        $scope.text = $scope.photos[index].text;
    };

    $scope.backToPhotos = function (title) {
        $scope.rend_photos = true;
        $scope.photo = false;
    };
    
    $scope.showPhotos = function (album_id, album_title) {

        $scope.rend_albums = false;
        $scope.rend_photos = true;
        $scope.photo = false;
        $scope.album_title = album_title;

        photosPr = new Promise(function(resolve, reject) {

            VK.Api.call('photos.get', {
                access_token: $scope.token,
                album_id: album_id,
                extended: 1
            }, function (r) {
                if (r.response) {
                    $scope.photos = r.response;
                    resolve(r.response);
                }
            });
        });

        photosPr.then(function (result) {
            console.log(result);
            $(function(){

                $("img.lazyImg").lazyload({
                    effect: "fadeIn"
                });
            });

            $(function() {
                $('[data-toggle="tooltip"]').tooltip();
            });

            $scope.$digest();
        })
    };
});