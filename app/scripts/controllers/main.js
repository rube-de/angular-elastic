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
		  description: 'This blabla'
		},
		{  title: 'And Then There Were None',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla'
		},
		{ title: 'Captain Kidd',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla'
		}
		];
		$scope.movies = movieList;
  });
