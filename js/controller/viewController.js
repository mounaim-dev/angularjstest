myApp.controller("viewController", function ($scope, UserDataop) {

    
    $scope.loading=true;  
    getUser();
    $scope.selectUser = function(user){
        $scope.clickedUser = user;
    };
      
    $scope.clearInfo = function(){
        $scope.info = "";
    };

    function getUser() {
        UserDataop.getUsers().then(function (response) {
                    $scope.loading = true; 
                    $scope.UserData = response.data;
                   
                   }, function error(response) {
                       alert("Une erreur s'est produite.\n Status Code : " + response.status);
                   }).finally(function() {
                    $scope.loading = false;
                  });
    }


       
             
       


         
       // //     //Delete User By Id

       $scope.deleteUser = function deleteUser(id) {
 
   
           UserDataop.deleteUsers(id).then(function (response) { 
                   $scope.loading = true;      
                   $scope.info = "User supprimé avec succés !" + response.status ; 
                   
       
               }, function error(response) {
   
                   alert("Une erreur s'est produite.\n Status Code : " + response.status);
               }).finally(function() {
                location.reload();
                $scope.loading = false;
              });
   
            } 
       
 
       //     update User 
       
       $scope.updateUser = function updateUser(data){
       
           confirm("Etes vous sur de bien vouloir modifier les informations du user Id :" + data.id);
            
           
           
           UserDataop.updateUsers(data).then(function () 
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


