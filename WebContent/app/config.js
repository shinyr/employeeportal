 appModule.config(['$routeProvider',
	                   function($routeProvider){
	 	  $routeProvider.when('/Dashboard',{
	 		      templateUrl: './app/views/Dashboard.html',
	 			  controller:'DashboardController'
	 	  }) .when('/UserManagement',{
	 		    templateUrl: './app/views/UserManagement.html',
	 		    controller:'UserController'
	 	  })  .otherwise({
	           redirectTo: '/'
	       });
	                       }
	                  ]);