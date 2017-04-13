angular.module('myApp',[])
.controller('game',function($scope){

	$scope.show = true;
  	$scope.user=1000;
  	function sortNumber(a,b) {
    	return a - b;
	}

  	$scope.startGame = function(){

     if($scope.user>100){
     	var numArray = [];
     	for(var i=0;i<3;i++)
     		numArray.push(parseInt(Math.floor(Math.random() * 9) + 1));
 
		numArray.sort(sortNumber);
		var total = $scope.user;
		
		if(numArray[0]==numArray[1] && numArray[1]==numArray[2]){
			total+=1000;
			$scope.status="you have won 1000 INR as all the numbers are same";
		}else if(numArray[0]+1==numArray[1] && numArray[1]+1==numArray[2]){
	 		total+=800;
	 		$scope.status="you have won 800 INR as all the numbers are in sequence";
     	}else if( (numArray[0]%2==0 && numArray[1]%2==0 && numArray[2]%2==0)) {
     		total+=300;
     		$scope.status="you have won 300 INR as all the numbers are even";
     	}else if(numArray[0]%2==1 && numArray[1]%2==1 && numArray[2]%2==1){
     		total+=300;
     		$scope.status="you have won 300 INR as all the numbers are odd";
     	}else{
     		$scope.status="you were not lucky this time";
     	}

     	total = total-100;
     	$scope.user=total;
     	$scope.digits=numArray[0]+" "+numArray[1]+" "+numArray[2];
     	
    }else{
    	$scope.show = false;
    	$scope.status="Game over your amount is less than 100";
    }
            
  };

})