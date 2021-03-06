app.controller('MainController', ['$scope', function($scope) { 
	//$scope.product = { 
	//	name: 'The Book of Trees', 
	//	price: 19,
	//	pubdate: new Date('2014', '03', '08')
	//};
	$scope.items = [];

	$scope.itemsToAdd = [{
		name: '',
		cards: []
	}];
	
	$scope.lists = [ 
		{ 
			name: 'Stuff to try (This is a list)', 
			cards: [
				{text:'textnumbah1'},
				{text:'textnumbah2'}
			]
		}
	];
	
	$scope.addList = function() {
    	$scope.lists.push({name:$scope.toAddList, cards:$scope.items});
    	$scope.toAddList = '';
 	};
 	
 	$scope.removeList = function(index) {
 	 	//lists.splice(index, 1);
		$scope.lists.splice(index, 1);
 	};
	
	$scope.addCard = function(index){
		var temp = $scope.lists.toAddCard;
	    $scope.lists[index].cards.push({text:temp});
    	$scope.lists.toAddCard = '';
	    //$scope.lists.splice(index, 1);
	    //$scope.lists[index].cards.push($('input[id="inputAdd"]').val());
	    //$('input[id="inputAdd"]').val('');
	};
	
	$scope.addLALAL = function(itemToAdd){
		var index = $scope.lists.indexOf(itemToAdd);
	    $scope.lists.splice(index, 1);
	    $scope.lists[index].cards.push(list.name)
	};
	$scope.plusOne = function(index) { 
		$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
		$scope.products[index].dislikes += 1; 
	};
}]);
