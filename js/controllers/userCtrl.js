app.controller('userCtrl', function ($scope) {

    userPr = new Promise(function(resolve, reject) {

        VK.Api.call('users.get', {}, function(r) {
            if(r.response) {
                $scope.name =  r.response[0].first_name;
                resolve(r.response)
            }
        });

    });

    userPr.then(function (result) {
        $scope.$digest();
    })

});