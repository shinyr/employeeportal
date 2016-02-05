
	 appModule.controller('UserController' ,['$scope','UserService',function($scope ,UserService){
		 $scope.fetchAllUsers = function(){
	         UserService.fetchAllUsers()
	             .then(
	 					       function(data) {
	 					    	 $scope.empDetails = data;
	 					       },
	       					function(errResponse){
	       						console.error('Error while fetching Currencies');
	       					}
	 			       );
	      
	     };
	     
		 $scope.fetchAllUsers();
	 }
	   
	 
	 ]);
	
	
		