app.controller('uploadCtrl', function ($scope) {
    albumsPr = new Promise(function(resolve, reject) {

        VK.Api.call('photos.getAlbums', { access_token: $scope.token  , need_system: 1, need_covers: 1 }, function(r) {
            if(r.response) {
                $scope.albums = r.response;
                resolve(r.response);
            }
        })
    });

    albumsPr.then(function (result) {
        console.log($scope.albums);
        $scope.$digest();
    });

    $scope.setAlbum= function(id) {
        VK.Api.call('photos.getUploadServer', { album_id: id}, function(r) {
            if(r.response) {
                $scope.url = r.response.upload_url;
            }
        })
    };

    $('#upload').click(function () {
        var file = $('#test').prop('files')[0];
        
        var data = new FormData();
        
        data.append('image', file);
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", $scope.url, true);
        xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:3000");
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        xhr.send(data);
    });

});