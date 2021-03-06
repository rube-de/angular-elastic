'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
	  $scope.title = 'Thanks for bla';
	  
	  var url = '/movies.json';
	  
	  $http.get(url)
	  .then(function(response){
		  console.debug('http get: ' + response.data);
		  $scope.movies = response.data;
	  })
	  .catch(function(response){
		  console.error('error on get movie' + response);
		  if(response.status === 404){
			  window.alert('not found');
		  }else{
			  window.alert('unknown error');
		  }
	  });
	
	
		$scope.closed = false;
		
		$scope.movie ={
			title: '',
			description: '',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
			category: ''
		};
		
		$scope.goToRandomMovie = function(){
			var rand = Math.floor(Math.random() * $scope.movies.length);
			var randomMovie = $scope.movies[rand];
			var path = 'movie/'+randomMovie.id+'/'+randomMovie.slug;
			$location.url(path);
		};
		
		$scope.isValid = function(){
			if($scope.movie.title === ''){
				return false;
			}
			if($scope.movie.description === ''){
				return false;
			}
			if($scope.movie.category === ''){
				return false;
			}
			return true;
		};
		
		$scope.validateTitle = function(){
			if($scope.movie.title.length > 0){
				console.debug($scope.movie.title);
			}else{
				window.alert('Title is required');
			}
		};
		
		$scope.addMovie = function(){
			$scope.movies.push(angular.copy($scope.movie));
		};
		
		$scope.checkCategorySelected = function(){
			if($scope.newMovieCategory === ''){
				window.alert('Category can not be empty');
			}
		};
		
		$scope.checkDescription = function(){
			console.debug($scope.newMovieDescription);
		};
		

  });
