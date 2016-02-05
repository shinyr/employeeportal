appModule.factory('UserService' ,['$http' ,'$q', function($http ,$q){
	return{
		fetchAllUsers: function() {
			return $http.get('app/EmployeeDetails.json')
					.then(
							function(response){
								return response.data;
							}, 
							function(errResponse){
								console.error('Error while fetching users');
								return $q.reject(errResponse);
							}
					);
	},
		searchUser: function(enteredName,list){
			console.log(JSON.stringify(list));
			var results = [];
			 angular.forEach(list, function(value, key) {
				 alert(key+' -- '+value.name);
			      if ((value.name === enteredName) || (value.name.indexOf(enteredName) != -1)) {
			       results.push(list[key]);
			      }
			    });
			 console.log(results);
			 return results;
		}
	};
		
}]);	
		
