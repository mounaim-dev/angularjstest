myApp.controller("AddController", function ($scope, $http) {

	 $scope.newUser = {};
	 $scope.info = "";




	$scope.saveUser = function(data){
        
        

        $http.post('https://60546e3dd4d9dc001726d23e.mockapi.io/users/', data).then(function () 
         { 
        
         location.reload(); 
         
         $scope.info = "Nouveau User ajouté avec succés";
         
        }, function (response) {
            alert("Une erreur s'est produite.\nStatus Code : " + response.status);
        }).finally(function() {
            location.reload();
            $scope.loading = false;
          });
		
	};

	
});