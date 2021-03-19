var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http) {

 
   
    
       
    //     //Get User Data
    
        // function UserList() {
             $http.get('https://60546e3dd4d9dc001726d23e.mockapi.io/users').then(function (response) {
                 
             $scope.UserData = response.data;
            
            });
    
        //  }
    
	
	
      
    // //     //Delete User By Id
    $scope.deleteUser = function(id){
		console.log($scope.UserData.indexOf($scope.clickedUser));
		

                $http.delete('https://60546e3dd4d9dc001726d23e.mockapi.io/users/' + id).then(function (response) {
                $scope.info = "User Deleted Successfully!";
    
            }, function () {

                $scope.info = "Failed To Delete Record ";
            });

        
	};
      
    //     Delete User By Id
    
          

    
    
	$scope.updateUser = function(data){
		
        confirm("Are You Sure You Want TO Update Employee Id :" + data.id);
         
        console.log(data);
        

        $http.put('https://60546e3dd4d9dc001726d23e.mockapi.io/users/',data).then(function () 
         { alert("success full Upated");  }, function () 
         { alert("Failed Update Record") });
	
	};
    
    
    
    // // //Insert  user Using empService
    //     $scope.EmpInsert = function () {
    
    //         alert(Employee.Id);
    //         empService.insert($scope.Employee).then(function () {
    
    //             EmpList()
               
    //             $scope.Employee = {Id:100,Name: "", Gender: "", Salary: "" };
    
    //             alert("Success");
               
    //         }, function () { alert("Failed"); })
    //     }
    
    
    
    
    
    
    // // //users Insert Service
    
    
    // // //Serves For Insert Data in Datbase  Using WebAPI   Code Strats Here----------------------------------
    // app.factory("UserService", function ($http) {
    //     empService = {};
    //     empService.insert = function (formdata) {
    //         return $http.post('//60546e3dd4d9dc001726d23e.mockapi.io/users', formdata)
    //     }
    //     return UserService;
    // }






	 $scope.newUser = {};
	 $scope.info = "";



	$scope.saveUser = function(data){

        $http.post('https://60546e3dd4d9dc001726d23e.mockapi.io/users/',data).then(function () 
         { alert("success full Upated");  
         $scope.info = "New User Added Successfully!";
        }, function () 
         { alert("Failed Update Record") });
		
		
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};



	$scope.clearInfo = function(){
		$scope.info = "";
	};
});