
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
	     
	     $scope.searchUser = function(enteredName) {
	    	if(enteredName){
	    		$scope.fetchAllUsers();
	    		$scope.list = $scope.empDetails;
	    		 UserService.searchUser(enteredName,$scope.list)
		    	 .then(
		    			 function(data) {
		    				 $scope.empDetails = data;
						},
						function(errResponse){
	   						console.error('Error while fetching Currencies');
	   					}
	    			 );
	    	} else 
	    		alert('Enter something to search');
	    		
	    	
	     };
	     
		 $scope.fetchAllUsers();
	 }
	   
	 
	 ]);
	
	
		