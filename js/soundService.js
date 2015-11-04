var app = angular.module('sounder');

app.service('soundService', function($http, $q) {
    
    var clientId = '?client_id=bda4ada8694db06efcac9cf97b872b3e';
    
    var dafur = $q.defer();
    
    this.getUser = function(userName) {
        $http({
            method: 'GET',
            url: 'http://api.soundcloud.com/users/' + userName + '/tracks.json' + clientId
        }).then(function(response) {
            //console.log(response.data);
            dafur.resolve(response.data);
        })
        
        return dafur.promise;
    }
})