'use strict';

angular.module('movieManiaApp').controller('MovieCtrl', function($scope, $routeParams){
		console.debug($routeParams.id);
		console.debug($routeParams.slug);
		
		var id = parseInt($routeParams.id, 10);
		
		var movieList = [{
		  id: 23,
		  title: 'Ace Drummer',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_.jpg',
		  description: 'This blabla',
		  category: 'Epic'
		},
		{ 
		  id: 5,
		  title: 'And Then There Were None',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTdkMDg5N2QtOGUzOS00OGY2LTkxMDMtYmU0ZDI5MDMwY2RmXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_UY268_CR6,0,182,268_AL_.jpg',
		  description: 'Seven guests, a newly hired personal secretary and two staff are gathered on an isolated island by an absent host and someone begins killing them off one by one. They work together to determine who is the killer?',
		  category: 'Average'
		},
		{ 
		  id: 42,
		  title: 'Captain Kidd',
		  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMGM5YzUwZmItMDYwOC00ZTY0LTk5ZTMtNzRiNzVlNGFkYTg4L2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
		  description: 'The unhistorical adventures of pirate Captain Kidd revolve around treasure and treachery.',
		  category: 'Epic'
		}
		];
		
		for(var index in movieList){
			var movie = movieList[index];
			if(movie.id === id){
				$scope.movie = movie;
				break;
			}
		}
});