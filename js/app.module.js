var app = angular.module('vk-api', ['angular-momentjs']);

app.config(function($momentProvider){
    $momentProvider
        .asyncLoading(false)
        .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
});