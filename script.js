
var itemsDetails = [
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 1',
		itemView : 10,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 2',
		itemView : 14,
		itemLove : 2
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 3',
		itemView : 13,
		itemLove : 7
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 4',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 5',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 6',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 7',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 8',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 9',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 10',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 11',
		itemView : 8,
		itemLove : 3
	},
	{ 
		title : 'Card Title Bootstrap Uses Angular JS Implementation 12',
		itemView : 8,
		itemLove : 3
	}
];
var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap', 'oc.lazyLoad']);
app.config(function($routeProvider, $ocLazyLoadProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "home.html",
		controller : 'mainController'
	})
	.when("/eventcom", {
		templateUrl : "eventcom.html",
		controller : 'eventController'
	})
	.when("/foodies-heaven", {
		templateUrl : "foodies.html",
		controller : 'foodiesController'
	});
});
app.controller('mainController', function($scope, $timeout, $window) {
	$scope.items = itemsDetails;
	
	$window.scrollTo(0, 0);
	$scope.afterLoad = false;
	
	$scope.totalItems = $scope.items.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 2;

	$scope.$watch("currentPage", function() {
		$window.scrollTo(0, 0);
		$scope.afterLoad = false;
		setPagingData($scope.currentPage);
		$timeout(function() {
			$scope.afterLoad = true;
		}, 3000);
	});

	function setPagingData(page) {
		var pagedData = $scope.items.slice(
			(page - 1) * $scope.itemsPerPage,
			page * $scope.itemsPerPage
		);
		$scope.aItems = pagedData;
	}
	
	$timeout(function() {
		$scope.afterLoad = true;
	}, 2000);
});
app.controller('eventController', function($scope, $timeout, $window) {
	$scope.items = itemsDetails;
	
	$window.scrollTo(0, 0);
	$scope.afterLoad = false;
	
	$scope.totalItems = $scope.items.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 2;

	$scope.$watch("currentPage", function() {
		$window.scrollTo(0, 0);
		$scope.afterLoad = false;
		setPagingData($scope.currentPage);
		$timeout(function() {
			$scope.afterLoad = true;
		}, 3000);
	});

	function setPagingData(page) {
		var pagedData = $scope.items.slice(
			(page - 1) * $scope.itemsPerPage,
			page * $scope.itemsPerPage
		);
		$scope.aItems = pagedData;
	}
	
	$timeout(function() {
		$scope.afterLoad = true;
	}, 2000);
});
app.controller('foodiesController', function($scope, $timeout, $window) {
	$scope.items = itemsDetails;
	
	$window.scrollTo(0, 0);
	$scope.afterLoad = false;
	
	$scope.totalItems = $scope.items.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 2;

	$scope.$watch("currentPage", function() {
		$window.scrollTo(0, 0);
		$scope.afterLoad = false;
		setPagingData($scope.currentPage);
		$timeout(function() {
			$scope.afterLoad = true;
		}, 3000);
	});

	function setPagingData(page) {
		var pagedData = $scope.items.slice(
			(page - 1) * $scope.itemsPerPage,
			page * $scope.itemsPerPage
		);
		$scope.aItems = pagedData;
	}
	
	$timeout(function() {
		$scope.afterLoad = true;
	}, 2000);
});
function openCat(){
	document.getElementById("mysidebar").classList.toggle('open');
}
function openUser(){
	document.getElementById("userMenu").classList.toggle('open');
}