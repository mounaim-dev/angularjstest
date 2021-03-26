
myApp.factory('UserDataop', function ($http,$q) {



    var canceler  = $q.defer();
  
        
        
  

    var urlBase = 'https://60546e3dd4d9dc001726d23e.mockapi.io';
    var UserDataop = {};

    UserDataop.getUsers = function () {
        canceler.resolve();
        canceler = $q.defer();
        return $http.get(urlBase+'/users',{timeout: canceler.promise});
    };

    UserDataop.addUsers = function (user) {
        canceler.resolve();
        canceler = $q.defer();
        return $http.post(urlBase + '/users/', user,{timeout: canceler.promise});
    };

    UserDataop.deleteUsers = function (id) {
        canceler.resolve();
        canceler = $q.defer();
        return $http.delete(urlBase + '/users/'+ id,{timeout: canceler.promise});
    };

    UserDataop.updateUsers = function (user) {
        canceler.resolve();
        canceler = $q.defer();
        return $http.put(urlBase + '/users/', user,{timeout: canceler.promise});
    };



    return UserDataop;

});