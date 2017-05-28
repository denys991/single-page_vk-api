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
            $scope.photo_link = size4 ||size3 || size2 || size1 ;
        } else if ($scope.screen >= 992 ) {
            $scope.photo_link = size3 ||size2 || size1 || size0;
        } else if ($scope.screen >= 768) {
            $scope.photo_link = size2 ||size1 || size0;
        } else {
            $scope.photo_link = size1 || size0;
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
            $(function(){

                $("img.lazyImg").lazyload({
                    effect: "fadeIn"
                });
                $('[data-toggle="tooltip"]').tooltip();
            });
            $scope.$digest();
        })
    };
});