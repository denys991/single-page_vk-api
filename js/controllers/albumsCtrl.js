app.controller('albumsCtrl', function ($scope, $moment) {

    $scope.dateFnc = function (date) {
        var time = moment.unix(1495500350).format("YYYY-MM-DD");
        $scope.time = $moment(time, "YYYYMMDD").fromNow();
        return $scope.time;
    };

    albumsPr = new Promise(function(resolve, reject) {
        
        VK.Api.call('photos.getAlbums', { access_token: 'df0c3aaf0c634ad70dfcbd73c1d010299aa7490d179c4b06384e4f9c2378751223e4bb44edd94095b287c', need_system: 1, need_covers: 1 }, function(r) {
            if(r.response) {
                $scope.albums = r.response;
                resolve(r.response);
            }
        })

    });

    albumsPr.then(function (result) {
        console.log(result);

        $scope.$digest();
    })

});