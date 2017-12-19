'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope) {
	  $scope.title = 'Thanks for bla';
	  var movieList = [{
		  title: 'Ace Drummer',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla',
		  category: 'Epic'
		},
		{  title: 'And Then There Were None',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla',
		  category: 'Average'
		},
		{ title: 'Captain Kidd',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla',
		  category: 'Epic'
		}
		];
		
		$scope.closed = false;
		
		$scope.movies = movieList;
		
		$scope.movie ={
			title: '',
			description: '',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
			category: ''
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
