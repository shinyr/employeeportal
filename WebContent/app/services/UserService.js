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
		}
	};
		
}]);	
		
