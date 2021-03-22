myApp.controller("viewController", function ($scope, $http) {
    $scope.loading=true;
       
            $http.get('https://60546e3dd4d9dc001726d23e.mockapi.io/users').then(function (response) {
                $scope.loading = true; 
                $scope.UserData = response.data;
               
               }, function error(response) {
                   alert("Une erreur s'est produite.\n Status Code : " + response.status);
               }).finally(function() {
                $scope.loading = false;
              });
       
             
       
        $scope.selectUser = function(user){
            $scope.clickedUser = user;
        };
        
          
        $scope.clearInfo = function(){
            $scope.info = "";
        };

         
       // //     //Delete User By Id
       $scope.deleteUser = function(id){
           console.log($scope.UserData.indexOf($scope.clickedUser));
           
   
                   $http.delete('https://60546e3dd4d9dc001726d23e.mockapi.io/users/'+ id).then(function (response) { 
                    $scope.loading = true;     
                     

                   $scope.info = "User supprimé avec succés !"; 
                   
       
               }, function error(response) {
   
                   alert("Une erreur s'est produite.\n Status Code : " + response.status);
               }).finally(function() {
                location.reload();
                $scope.loading = false;
              });
   
            };  
       
         
       //     update User 
       
       $scope.updateUser = function(data){
       
           confirm("Etes vous sur de bien vouloir modifier les informations du user Id :" + data.id);
            
           
           
           $http.put('https://60546e3dd4d9dc001726d23e.mockapi.io/users/', data).then(function () 
            { 
             $scope.loading = true;   
            
            $scope.info = "User modifié  avec succés!";
             
        }, function (response) 
           
            {  
                 alert("Une erreur s'est produite.\n Status Code : " + response.status)}).finally(function() {
                    location.reload();
                $scope.loading = false;
      });
       
    };    
});


