app.controller('albumsCtrl', function ($scope, $moment) {

    if (window.location.hash) {
        var str = window.location.hash;
        $scope.token = (str.match(/access_token\=(\w+)/))[1];
    }

    $scope.dateFnc = function (date) {
        var time = moment.unix(date).format("YYYY-MM-DD");
        $scope.time = $moment(time, "YYYYMMDD").fromNow();
        return $scope.time;
    };

    albumsPr = new Promise(function(resolve, reject) {
        
        VK.Api.call('photos.getAlbums', { access_token: $scope.token  , need_system: 1, need_covers: 1 }, function(r) {
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