'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location) {
	  $scope.title = 'Thanks for bla';
	  var movieList = [{
		  id: 23,
		  title: 'Ace Drummer',
		  slug: 'ace-drummer',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla',
		  category: 'Epic'
		},
		{ 
		  id: 5,
		  title: 'And Then There Were None',
		  slug: 'and-then-there-were-none',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTdkMDg5N2QtOGUzOS00OGY2LTkxMDMtYmU0ZDI5MDMwY2RmXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_UY268_CR6,0,182,268_AL_.jpg',
		  description: 'Seven guests, a newly hired personal secretary and two staff are gathered on an isolated island by an absent host and someone begins killing them off one by one. They work together to determine who is the killer?',
		  category: 'Average'
		},
		{ 
		  id: 42,
		  title: 'Captain Kidd',
		  slug: 'captain-kidd',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMGM5YzUwZmItMDYwOC00ZTY0LTk5ZTMtNzRiNzVlNGFkYTg4L2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
		  description: 'The unhistorical adventures of pirate Captain Kidd revolve around treasure and treachery.',
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
		
		$scope.goToRandomMovie = function(){
			var index = Math.floor(Math.random() * $scope.movies.length);
			var movie = $scope.movies[index];
			var url = 'movie/'+movie.id+'/'+movie.slug;
			$location.url(url);
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
