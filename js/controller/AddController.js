myApp.controller("AddController", function ($scope, UserDataop) {

	 $scope.newUser = {};
	 




	$scope.saveUser = function addUser(data){
        
        

        UserDataop.addUsers(data).then(function () 
         { 
         $scope.loading = true; 
         $scope.info = "Nouveau User ajouté avec succés";
         
        }, function (response) {
            alert("Une erreur s'est produite.\nStatus Code : " + response.status);
        }).finally(function() {
            location.reload();
            $scope.loading = false;
          });
		
	};

	
});